<script setup lang="ts">
import { inputEmits } from "element-plus";
import { reactive, ref, watch } from "vue-demi";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
const route = useRoute(); // 使用useRoute()来完成路由的监听
let includeList: any = reactive({
  list: ["分类", "商城首页"],
});
</script>

<template>
  <!-- 默认的缓存方式 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>

  <!-- 动态解析的返回方式 -->
  <!-- <router-view v-slot="{ Component }">
    <keep-alive :include="includeList">
      <component :is="Component"></component>
    </keep-alive>
  </router-view> -->
</template>

<style>
@import url("css/iconfont.css");
#app {
  margin: 0px;
  padding: 0px;
  line-height: 1.6;
  font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue",
    "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei",
    Arial, sans-serif;
  font-size: 16px;
}
</style>
