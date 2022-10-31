import axios, { AxiosRequestConfig } from 'axios'
import { removeToken } from '@/tools/index'
import { useRouter } from 'vue-router'
const router = useRouter()
const axiosRequest = {
  install(url: string, method: string, data: any, cb: Function) {
    axios({
      url: window.origin + url,
      method: method ? method : 'POST',
      data: data,
      herder: {
      }
    } as object).then((resolve: AxiosRequestConfig) => {
      const res = resolve.data
      console.log(res, 'aaaa');
      if (res.code === 7) {
        console.log(router, 'pppp');
        removeToken()
        // 登录失效后重定向到当前界面
        cb(res)
      } else {
        cb(res.data)
      }
    }).catch((error: AxiosRequestConfig) => {
      cb({ error: error, message: '服务器异常', code: 500 })
    })
  }
}

export default axiosRequest