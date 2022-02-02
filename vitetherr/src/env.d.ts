/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 配置ts智能提示 需要那个就拿着后面的值去配置哪个 (获取方法是 import.meta.env)
interface ImportMetaEnv {
  VITE_OUTPUT_DIR: string,
  VITE_URL: string
}