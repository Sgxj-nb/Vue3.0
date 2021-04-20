import axios, { AxiosInstance } from 'axios'; // 导入ajax氢请求
// 创建axios实例
const ajax: AxiosInstance = axios.create({
  url: 'http://api.liwocode.nqphp.com/',
  timeout: 5000
});

// 请求拦截
ajax.interceptors.request.use(function (config): any {
  // 判断时候存在token
  return config
}, error => {
  console.log('错误请求', error);
  return Promise.reject(error)
}
)

// 响应拦截
ajax.interceptors.response.use(function (response): any {
  return Promise.reject(response);
}, function (error): any {
  return Promise.reject(error)
}
)
export default ajax