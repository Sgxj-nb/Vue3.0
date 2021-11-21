<template>
  <div>
    <div>
      <van-tabbar safe-area-inset-bottom route v-model="active" placeholder>
        <van-tabbar-item to="/index" icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item to="/indexs" icon="search">分类</van-tabbar-item>
        <van-tabbar-item to="/indexss" icon="friends-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/indexsss" icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue-demi";
let active = ref("0");


</script>
