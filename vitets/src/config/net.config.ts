/**
 * @请求配置
 * */

type NetConfigSuccessCode = 200 | '200' | '000000';
export const baseURL: string = 'http://backend-api-01.newbee.ltd/';// 接口地址
// 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
export const contentType: string = "application/json;charset=UTF-8";
// 最长请求时间
export const requestTimeout: number = 1000;
// 超时尝试次数
export const timeoutNum: number = 3;
// 超时重新请求间隔
export const intervalTime: number = 1000;
// 请求正常时候的code(多种类型)
export const successCode: NetConfigSuccessCode[] = [200, '200', '000000'];
// 数据状态的字段
export const statusName: string = 'code';
// 状态信息的字段名称
export const messageName: string = 'msg';