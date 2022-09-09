// 获取每月的一号
export function Time(): string {
  return new Date().getFullYear() + '-' + Number(new Date().getMonth() + 1).toString().padStart(2, '0') + '-' + '01'
}

// 获取当月的前一天的日期
export function TimeInfo(): string {
  var day1 = new Date();
  day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
  return day1.getFullYear() + "-" + (Number(new Date().getMonth() + 1).toString().padStart(2, '0')) + "-" + (Number(day1.getDate()).toString().padStart(2, '0'));
}

// type list = {}
// // 树状转换
// export function Tree(data) {
//   const res = []
//   const iMap = data.reduce((obj, item) => Object.assign(obj, { [item.id]: { ...item, children: [] } }), {})
//   // console.log(iMap);
// }