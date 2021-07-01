import request from "./axios";
// 需要什么请求就用什么请求 在界面局部导入即可

export function mallGoodsDetailAPI(params: object) {
  return request({
    url: '/?s=App.Group.Activity',
    method: 'post',
    params
  })
}