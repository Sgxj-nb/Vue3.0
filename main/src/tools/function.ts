import { reactive, ref } from 'vue'
import { rou, router } from '@/page/index'
import Router from '@/router/index'
import useCurrentInstance from "@/axios/requst";
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

// 处理动态菜单
export function RouterFor(array: Array<Object>) {
  return new Promise((resolve, rejest) => {
    if (array.length > 0 && Object.prototype.toString.call(array) == '[object Array]')
      array.forEach((res: router) => {
        if (res.children) {
          RouterFor(res.children)
        }
        res.path = "/" + res.path;
        res.component = () => import("@/" + res.component.replace('view', 'page'));
        Router.addRoute(res)
      })
    resolve(array)
  })
}