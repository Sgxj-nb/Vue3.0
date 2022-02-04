// token文件部分
import { Set_token } from './seting';

/***
 * 获取token
 * */

export function get_token() {
  const token = localStorage.getItem(Set_token);
  return token ? token : '';
}

/**
 * 缓存本地token
 * **/

export function set_tokennfo(token: string) {
  remove();
  localStorage.setItem(Set_token, token);
}


/***
 * 移除token
 * */

export function remove() {
  localStorage.removeItem(Set_token);
}