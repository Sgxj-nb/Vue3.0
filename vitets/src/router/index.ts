import { createWebHistory, createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {
      name: "首页"
    },
    component: () => import('../visualeditor/Index.vue')
  },
  {
    path: '/page',
    component: () => import('../components/page/one/Index.vue'),
    redirect: '/page/home', // 重定向
    children: [
      {
        path: '/page/home',
        component: () => import('../components/page/one/show.vue'),
        name: 'Home',
      }
    ]
  }
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(), // hash路由
  routes
})

export default router