import axios, { AxiosInstance } from 'axios';
// const config = require('../../config');
// const { baseURL } = config[process.env.NODE_ENV]
let token = localStorage.getItem('token');
let baseURL = 'https://api.xwhx.top'
// 创建实例
// const service: AxiosInstance = axios.create({
//   baseURL, // 接口地址
//   timeout: 40 * 1000//超时时间40s
// });
const service = axios.create({
  baseURL,
  timeout: 40 * 1000,
  // headers: { // 配置OAuth 2.0的认证头
  //   'Content-Type': 'application/json;charset=utf-8'
  // },
});

// 请求拦截器
service.interceptors.request.use(config => {
  // 如果本地有token的话就直接
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应
service.interceptors.response.use(resp => {
  return Promise.resolve(resp)
}, error => {
  return Promise.reject(error)
});

// 发起请求
export function request(config: any) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios({
        ...config
      })
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}

// service =function  (params: object) {
//   axios({
//     url: service.baseURL,
//     method: 'post',
//     params
//   })
// }

export default service;