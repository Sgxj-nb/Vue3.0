/**
 * createRouter 这个为创建路由的方法
 * createWebHashHistory 这个就是vue2中路由的模式，
 *                      这里的是hash模式，这个还可以是createWebHistory等
 * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录'
  },
  component: () => import('@/page/login.vue')
},
{
  path: '/',
  name: 'Home',
  meta: {
    title: '首页'
  },
  component: () => import('@/page/index.vue')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 判断是否登录(路由前置拦截)
router.beforeEach(function (to, from): string | object | undefined {
  if (!localStorage.getItem('token') && to.name !== 'Login') {
    return {
      name: 'Login'
    }
  }
})

// 路由后置拦截
router.afterEach(function (to, from): void {
  document.title = to.meta?.title as string;
})
export default router