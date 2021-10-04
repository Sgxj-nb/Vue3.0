/**
 * @接口请求
 * */
import axios, { AxiosResponse, AxiosRequestConfig, CancelTokenStatic, AxiosInstance } from "axios";
import {
  baseURL,
  successCode,
  contentType,
  requestTimeout,
  statusName,
  messageName
} from '../config/net.config'

import qs from 'qs';
import getUrl from "../api";

const CODE_MESSAGE: any = {
  200: '服务器成功返回请求数据',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台排队(异步任务)',
  204: '删除数据成功',
  400: '发出信息有误',
  401: '用户没有权限(令牌失效、用户名、密码错误、登录过期)',
  402: '前端无痛刷新token',
  403: '用户得到授权，但是访问是被禁止的',
  404: '访问资源不存在',
  406: '请求格式不可得',
  410: '请求资源被永久删除，且不会被看到',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时'
}

class MyRequest {
  // 会自动拼接baseurl 除非是一整段url
  protected service: AxiosInstance = axios;
  protected pending: Array<{ url: string, cancel: Function }> = [];
  protected CancelToken: CancelTokenStatic = axios.CancelToken;
  protected axiosRequestConfig: AxiosRequestConfig = {};
  private static _instance: MyRequest;

  constructor() {
    this.requestConfig();
    this.service = axios.create(this.axiosRequestConfig)
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  // 初始化配置
  protected requestConfig(): void {
    this.axiosRequestConfig = {
      baseURL: baseURL,
      headers: {
        timestamp: new Date().getTime(),
        'Content-Type': contentType
      },
      transformResponse: [function (data: AxiosResponse) {
        return data
      }],
      paramsSerializer: function (params: any) {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      },
      timeout: requestTimeout,
      withCredentials: false,
      responseType: 'json',
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxRedirects: 5,
      maxContentLength: 2000,
      validateStatus: function (status: number) {
        return status >= 200 && status <= 500
      }
    }
  }

  // 拦截器
  protected interceptorsRequest(): void {
    this.service.interceptors.request.use((config: AxiosRequestConfig) => {
      const keyOfRequest = this.getKeyOfRequest(config)
      this.removePending(keyOfRequest, true)
      config.cancelToken = new this.CancelToken((c: any) => {
        this.pending.push({
          url: keyOfRequest,
          cancel: c
        })
      })
      this.requestLog(config)
      return config
    }, (error) => {
      return Promise.reject(error)
    })
  }

  // 响应
  protected interceptorsResponse(): void {
    this.service.interceptors.response.use((response: AxiosResponse) => {
      return this.handleResponse(response)
    }, error => {
      const { response } = error
      if (response === undefined) {
        return Promise.reject(new Error(error))
      } else {
        return this.handleResponse(response)
      }
    })
  }

  protected handleResponse(response: AxiosResponse): Promise<AxiosResponse<any>> {
    this.responseLog(response)
    this.removePending(this.getKeyOfRequest(response.config))
    const { data, status, config, statusText } = response
    let code = data && data[statusName] ? data[statusName] : status
    if (successCode.indexOf(data[statusName]) + 1) code = 200
    switch (code) {
      case 200:
        return Promise.resolve(response)
      case 401:
        console.log('身份bug');
        break
      case 403:
        console.log('权限');
        break
    }

    // 异常处理
    const errMse = data && data[messageName] ? data[messageName] : CODE_MESSAGE[code] ? CODE_MESSAGE[code] : statusText
    return Promise.reject(errMse)
  }

  // 取消重复请求
  protected removePending(key: string, request: boolean = false): void {
    this.pending.some((item, index) => {
      if (item.url === key) {
        if (request) console.log('======= 取消重复请求', item);
        item.cancel()
        this.pending.splice(index, 1)
        return true
      }
      return false
    })
  }

  // 获取请求配置拼key
  protected getKeyOfRequest(config: AxiosRequestConfig): string {
    let key = config.url
    if (config.params) key += JSON.stringify(config.params)
    if (config.data) key += JSON.stringify(config.data)
    key += `&request_type=${config.method}`
    return key as string
  }

  // 请求日志
  protected requestLog(config: any): void {
  }

  // 响应日志
  protected responseLog(response: AxiosResponse) {
    if (import.meta.env.MODE === 'development') {
      const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(
        Math.random() * 255
      )},${Math.round(Math.random() * 255)})`
      console.log(
        '%c┍------------------------------------------------------------------┑',
        `color:${randomColor};`
      )
      console.log('| 请求地址：', response.config.url)
      console.log('| 请求参数：', qs.parse(response.config.data))
      console.log('| 返回数据：', response.data)
      console.log(
        '%c┕------------------------------------------------------------------┙',
        `color:${randomColor};`
      )
    }
  }

  // post方法
  public post(url: string, data: any = {}, config: object = {}): Promise<MyRequest.response> {
    return new Promise((resolve, reject) => {
      this.service.post(getUrl(url), data, config).then(result => {
        // console.log(JSON.parse(result.data));
        resolve(JSON.parse(result.data))
        // resolve({
        //   msg: result.data.msg,
        //   data: result.data.data,
        //   code: result.data.code
        // })
      }, reject)
    })
  }

  // get方法
  public get(url: string, params: any = {}, config: object = {}): Promise<MyRequest.response> {
    return new Promise((resolve, reject) => {
      this.service.get(`${getUrl(url)}?${qs.stringify(params)}`, config).then(result => {
        resolve({
          msg: result.data.msg,
          data: result.data.data,
          code: result.data.code
        })
      }, reject)
    })
  }


  public static getInstance(): MyRequest {
    // 如果是实列直接返回 不是实列 实例化后返回
    this._instance || (this._instance = new MyRequest())
    return this._instance
  }
}

export default MyRequest.getInstance()
