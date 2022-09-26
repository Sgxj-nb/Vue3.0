import { reactive } from 'vue'
// 转树状
export interface list {
  name: string,
  pid: number,
  path: string,
  id: number,
  length?: number
}

export function TreeFn(tree: Array<list>): Array<list> {
  return tree
}

// 标签处理函数
export let bookList = reactive({
  list: [] as any
})

// push页签操作
export function onChange(e: list) {
  bookList.list.push(e)
  return bookList.list
}

// 删除页签操作
export function onRemote(e: list) {
  bookList.list = e
}