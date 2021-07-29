import request from "./axios";

// 需要什么请求就用什么请求 在界面局部导入即可
export function mallGoodsDetailAPI(params: object) {
  return request({
    url: '/?s=App.Group.Activity',
    method: 'post',
    params
  })
}

// 后端登陆接口
export function Loagin(params: object) {
  return request({
    url: '/?s=Manage.Brac_User.Login',
    method: 'post',
    params
  })
}

// 访问首页数据
export function Qufi(params: any) {
  return request({
    url: '/?s=Manage.Index.Get',
    method: 'GET',
    params
  })
}

// 获取系统信息
export function Message(params: any) {
  return request({
    url: '/?s=Manage.Setting.Get',
    method: 'GET',
    params
  })
}
// ======================================================

// 表单测试类型
export function login(params: any) {
  return request({
    url: '/api/user/login',
    method: 'post',
    params
  })
}

// 图片上传
export function un(params?: any) {
  return request({
    url: '/api/v1/upload/qiniuToken',
    method: 'post',
    params
  })
}