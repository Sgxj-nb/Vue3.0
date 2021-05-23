import axios, { AxiosInstance } from 'axios';

// const config = require('../config');
// 创建axios实例
const service: AxiosInstance = axios.create({
  timeout: 5000
});


// 请求拦截器
service.interceptors.request.use(config => {
  return config
},
  error => {
    return Promise.reject(error)
  }
);

// 响应拦截
service.interceptors.response.use(resp => {
  return resp
}, error => {
  return Promise.reject(error)
});

export default service

