import axios, { AxiosRequestConfig, AxiosResponse, Canceler } from 'axios'

import router from '@/router';

import { ElMessage } from "element-plus";

// 环境设置
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  axios.defaults.baseURL = 'xxx'
} else {
  // 生产环境
  axios.defaults.baseURL = 'xxx'
}

// let sourceAjaxList: Canceler[] = []

export const axionInit = () => {
  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    config.cancelToken = new axios.CancelToken(function executor(cancel: Canceler): void {
      // sourceAjaxList.push(cancel)
    })

    return config;

  }, function (error) {
    return Promise.reject(error)
  })
  axios.interceptors.response.use((response: AxiosResponse) => {
    const { status, data } = response;

    return response;
  }, error => {
    const { response } = error
    router.push('/')
    ElMessage.error('出错了')
    return Promise.reject(error.message);
  }

  )
}