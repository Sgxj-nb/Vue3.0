/***
 * Token处理逻辑
 * */

// 本地存储token名称
export const TokenName: string = 'token'

/**
 * 存储token方式
 * @p local 本地永久存储
 * @P session 服务端存储
 * @P cookie 客户端存储
 * @return String
 * **/

export function storageMethod(tokenSting: string): Promise<{}> {
  return Promise.resolve(tokenSting)
}

// 存储token方法
export function storageToken() {
  removeToken()

}

// 移除本地token方法
export function removeToken() { }