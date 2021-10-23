<template>
  <div>我是二级路由</div>
</template>
<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
let router = useRoute();

// 获取路由上的参数
onMounted(function () {
  console.log(router.query.id);
});
</script>
