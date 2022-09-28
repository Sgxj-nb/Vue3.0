import { reactive, ref } from 'vue'
import { rou } from '@/page/index'
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
  list: [] as any,
})

// push页签操作
export function onChange(e: rou) {
  bookList.list.push(e)
}

// 删除页签操作
export function onRemote(e: rou) {
  bookList.list = e
}

// 重复选择的标签状态选中
export let watchBookEx = ref({})
export function bookSelection(value: rou): void {
  watchBookEx.value = value
}