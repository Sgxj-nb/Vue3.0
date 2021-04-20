import { AxiosRequestConfig } from 'axios';

// 组件导入(UI)

// 导入axios
import service from './axios';

interface BaseResponse<T> {
  code: number,
  status: boolean,
  data: T,
  message?: string
}

const request = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    service.request<BaseResponse<T>>(config).then(res => {
      resolve(res.data)
    },
      err => {
        console.log('错误请求', err);
        reject(err);
      }
    )
  })
}

export default request;