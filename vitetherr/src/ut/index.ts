import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Toke_Name } from '@/config/seting';
import { get_token } from '@/config/token';
/****
 * 
 * 
 * 
// 设置请求头和请求路径
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
 * 
 * 
 * **/

const ajax = axios.create({
  baseURL: import.meta.env.VITE_URL as string,
  timeout: 99999
});


// 拦截器

interface Cinfo {

}

ajax.interceptors.request.use((config): AxiosRequestConfig<any> => {
  const token = get_token()
  if (token) {
    config.headers[Toke_Name] = token
  }
  return config;
}, (error: any) => {
  Promise.reject(error)
});

// 响应器
ajax.interceptors.response.use((res: AxiosResponse) => {
  return res
}, (error: any) => {
  Promise.reject(error)
});

export default ajax;