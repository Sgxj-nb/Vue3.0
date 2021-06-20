// 配置全局router路由设置
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router