import axios, { AxiosInstance } from 'axios';
const config = require('../../config');
const { baseURL } = config['process.env.NODE_ENV']
let token = localStorage.getItem('token');
// 创建实例
const service: AxiosInstance = axios.create({
  baseURL, // 接口地址
  timeout: 200000//超时时间
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
  return resp;
}, error => {
  return Promise.reject(error)
})

export default service;