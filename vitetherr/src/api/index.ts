import axios from '@/ut/index';
import { AxiosInstance, AxiosRequestConfig, AxiosPromise } from "axios";

interface NewAxiosInstance extends AxiosInstance {
  // 设置泛型T，默认为any，将请求后的结果返回变成AxiosPromise<T>
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>
}

export async function loag(data: NewAxiosInstance) {
  const res = await axios.post('/v1/manage/user/login', data)
  if (res.data.code == 0) {
    return res;
  }
  return Promise.reject(res)
}