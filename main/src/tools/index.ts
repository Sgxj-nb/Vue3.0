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
 * 方法暂时废弃
 * **/

export function storageMethod(tokenSting: string): Promise<{}> {
  return Promise.resolve(tokenSting)
}

// 存储token方法
export function storageToken(res: any, string: string): void {
  removeToken()
  switch (string) {
    case 'local':
      localStorage.setItem(TokenName, res.token)
      break
    case 'session':
      sessionStorage.setItem(TokenName, res.token)
      break
    case 'cookie':
      document.cookie = res.token
      break
    default:
      localStorage.setItem(TokenName, res.token)
  }
}

// 移除本地token方法
export function removeToken() {
  localStorage.clear();
}