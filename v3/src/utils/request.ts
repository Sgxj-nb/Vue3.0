import { AxiosRequestConfig } from 'axios';
import service from './axios';

interface BaseResponse<T> {
  code: number,
  status: boolean,
  data: T,
  message?: string
};


const requst = <T>(config: AxiosRequestConfig): Promise<BaseResponse<T>> => {
  return new Promise((resolve, reject) => {
    service.request<BaseResponse<T>>(config).then(res => {
      resolve(res.data)
    }, error => {
      switch (error?.code) {
        case 401:
          // 此处可以调取登陆的请求接口或者是直接弹出提示说登陆过期在跳到登陆界面

          break
        default:
        // 提示（什么提示都是可以的）
        // this.$message.errror('xxxxx');
        // break;
      }
      reject(error);
    })
  })
};


export default requst;