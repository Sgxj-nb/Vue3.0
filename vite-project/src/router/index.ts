// 配置全局router路由设置
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../Home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/views/message',
    name: 'message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/views/zujian',
    name: 'zujian',
    component: () => import('../views/zujian.vue')
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router