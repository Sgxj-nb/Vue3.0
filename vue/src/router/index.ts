import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    meta: {
      title: "首页", // 动态title
    }
  },
  {
    path: "/home",
    name: 'Hometwo',
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/page/Home.vue"),
    meta: {
      title: "第二个界面"
    }
  }
];

const router = createRouter({
  history: createWebHistory(), // 此时为hash模式 history模式:createWebHistory
  routes,
});

export default router;
