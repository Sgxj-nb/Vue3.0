<script setup lang="ts">
import { onMounted, ref, shallowRef, reactive } from "vue";
import Herder from "@/components/Herder.vue";
import LeftTree from "@/components/LeftTree.vue";
import Bookmark from "@/components/Bookmark.vue";
import Router from "@/router/index";
import useCurrentInstance from "@/axios/requst";

import { rou } from "./index";
// 获取菜单改变视图
function onRouter(d: rou<object>): void {}
</script>

<template>
  <div class="page">
    <div class="page-herder">
      <Herder></Herder>
    </div>
    <div class="page-main">
      <div class="page-left">
        <div class="page-content">
          <LeftTree @onRouter="onRouter"></LeftTree>
        </div>
      </div>
      <div class="page-body">
        <router-view v-slot="{ Component }">
          <Bookmark></Bookmark>
          <component :is="Component"></component>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-body {
  overflow: auto;
  padding: 0;
  background-color: #f0f2f5;
  margin-left: 220px;
  height: 100%;
}
.page-left {
  color: #fff;
  background: rgb(25, 26, 35);
  position: absolute;
  box-sizing: border-box;
  height: 100%;
  width: 220px;
}
.page-herder {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2000;
  height: 54px;
  border-bottom: 1px solid #fbfbfb;
}
.page-main {
  min-width: 1200px;
  position: absolute;
  left: 0;
  top: 54px;
  bottom: 0;
  width: 100%;
}
.page {
  width: 100%;
  height: 100%;
}
</style>
