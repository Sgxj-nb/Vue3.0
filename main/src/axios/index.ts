import axios, { AxiosRequestConfig } from 'axios'

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

      if (res.code === 7) {
        cb(res)
      } else {
        cb(res.data)
      }
    }).catch((error: AxiosRequestConfig) => {
      cb({ error: error, message: '服务器异常', code: 500 })
    })
  }
}


function han() {
  return '`11'
}

export default axiosRequest