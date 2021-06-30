// 导入请求
import request from '../utils/request';

// 定义请求值的类型
export type Siginfgo = {
  username: string,
  password: string
}


// 用户登陆
export function sin(data: Siginfgo) {
  return request({
    url: '/user/signup',
    method: 'post',
    data
  })
}