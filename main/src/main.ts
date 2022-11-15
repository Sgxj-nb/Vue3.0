import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index'
import 'ant-design-vue/dist/antd.css'
import axios from './axios/index'
import { createPinia } from 'pinia'
import useCurrentInstance from "@/axios/requst";
const app = createApp(App)
// const { proxy } = useCurrentInstance();
// 全局菜单接口
// app.config.globalProperties.$Menu = function Menu() {
//   proxy.$ajax("/api/menu/getMenu", "", {}, function (res: any) {
//     console.log(res, "操蛋信息");
//   });
// };
app.config.globalProperties.$ajax = axios.install
app.use(Router).use(createPinia()).mount('#app')