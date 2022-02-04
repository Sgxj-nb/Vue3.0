import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router';
import { get_token, remove } from '@/config/token'
import { useCounterStore } from "@/store/index";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/xxxx',
    name: '测试',
    component: () => import('@/components/form.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (get_token()) {
    useCounterStore().messageinfo();
  } else {
    remove();
    useCounterStore().removeoutuser();
  }
  next();
})

export default router