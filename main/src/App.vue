<script setup lang="ts">
import useCurrentInstance from "@/axios/requst";
import { onMounted } from "@vue/runtime-core";
const { proxy } = useCurrentInstance();
// 全局菜单接口
// function Menu() {
//   proxy.$ajax("/api/menu/getMenu", "", {}, function (res) {
//     console.log(res, "操蛋信息");
//   });
// }

// onMounted(() => {
//   Menu();
// });
</script>

<template>
  <router-view></router-view>
</template>

<style></style>
