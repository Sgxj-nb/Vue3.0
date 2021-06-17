import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// 导入路由响应拦截
import './utils/permission'

const app = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app')
