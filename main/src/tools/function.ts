import { reactive } from 'vue'
// 转树状
interface list {
  name: string,
  pid: number,
  path: string,
  id: number
}

export function TreeFn(tree: Array<list>): Array<list> {
  return tree
}