// 处理代理对象方法补全
import { getCurrentInstance, ComponentInternalInstance } from 'vue'
export default function useCurrentInstance() {
  const { appContext } = getCurrentInstance() as ComponentInternalInstance
  const proxy = appContext.config.globalProperties
  return {
    proxy
  }
}