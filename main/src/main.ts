import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index'
const app = createApp(App)
app.use(Router).mount('#app')
import 'ant-design-vue/dist/antd.css'

