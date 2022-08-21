import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index'
import 'ant-design-vue/dist/antd.css'
import axios from './axios/index'
const app = createApp(App)
app.config.globalProperties.$ajax = axios.install
app.use(Router).mount('#app')