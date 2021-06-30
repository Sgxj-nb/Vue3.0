/**
 * @判断用户是否登陆
 * */

import { AxiosRequestConfig } from 'axios';
import sevice from './axios';

interface BaseRese<T> {
  code: number,
  status: boolean,
  data: T,
  message?: string
}

const request = <T>(config: AxiosRequestConfig): Promise<BaseRese<T>> => {
  return new Promise((resp, reject) => {
    sevice.request<BaseRese<T>>(config).then(res => {
      resp(res.data);
    }, err => {
      reject(err);
    })
  })
}

export default request;