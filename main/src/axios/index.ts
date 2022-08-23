import axios, { AxiosRequestConfig } from 'axios'

const axiosRequest = {
  install(url: string, method: string, data: any, cb: Function) {
    axios({
      url: window.origin + url,
      method: method ? method : 'POST',
      data: data,
      herder: {
        'content-type': 'application/json; charset=utf-8',
        'x-token': '',
        "x-user-id": ''
      }
    } as object).then((resolve: AxiosRequestConfig) => {
      const res = resolve.data
      cb(res.data)
    }).catch((error: AxiosRequestConfig) => {
      cb({ error: error, message: '服务器异常', code: 500 })
    })
  }
}

export default axiosRequest