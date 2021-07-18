// 全局过滤器
export function time(value: any) {
  console.log(value);
  console.log(value);
  console.log(value);
  console.log(value);
  console.log(value);

  let data = new Date(value * 1000)
  // 补0判断 如果是单个数字就会在前面自动补0
  function timeAdd0(str: any) {
    if (str < 10) {
      str = '0' + str;
    }
    return str
  }
  let y = data.getFullYear();
  let m = data.getMonth() + 1;
  let d = data.getDate();
  let s = data.getHours();
  let f = data.getMinutes();
  let ms = data.getSeconds()
  // 判断是否有这个值就做正确的返回值
  if (value) {
    return y + '-' + timeAdd0(m) + '-' + timeAdd0(d) + ' ' + timeAdd0(s) + ':' + timeAdd0(f) + ":" + timeAdd0(ms)
  }
}