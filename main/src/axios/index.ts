import axios from 'axios'

const axiosRequest = {
  install(url: string, method: string, data: any, cb: Function) {
    const herder: object = {}
    axios({
      url: window.origin + url,
      method: method,
      ...data,
      herder: herder
    }).then((resolve) => {
      console.log(resolve);
      const res = resolve.data
      cb(res.data)
    }).catch((error) => {
      cb({ error: error, message: '服务器异常', code: 500 })
    })
  }
}

export default axiosRequest