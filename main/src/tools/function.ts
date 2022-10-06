import { reactive, ref } from 'vue'
import { rou } from '@/page/index'
import { on } from 'events'
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

// 点击标签当前唯一值数组
export let bookObject = ref({})

// push页签操作
export function onChange(e: rou, some: Boolean) {
  if (!some) {
    bookList.list.push(e)
  }
  bookObject.value = e
}
// 删除页签操作
export function onRemote(e: rou, index: number) {
  bookList.list.splice(index, 1)
}