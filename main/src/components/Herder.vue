<template>
  <div class="H-der">
    <div class="S-inner">
      <span>
        <img :src="img" alt="" />
      </span>
      <span>
        {{ titleName }}
      </span>
    </div>
    <div style="flex: 1">s</div>
    <div>s</div>
  </div>
</template>

<script setup lang="ts">
import RedoOutlined from "@ant-design/icons-vue/RedoOutlined";
import DoubleLeftOutlined from "@ant-design/icons-vue/DoubleLeftOutlined";
import SearchOutlined from "@ant-design/icons-vue/SearchOutlined";
import FullscreenOutlined from "@ant-design/icons-vue/FullscreenOutlined";
import AppleOutlined from "@ant-design/icons-vue/AppleOutlined";
import { title } from "@/tools/tools";
let img: string = "https://qmplusimg.henrongyi.top/gva_header.jpg";
let titleName = title;
</script>

<style scoped>
.S-inner {
  text-align: center;
  height: 100%;
  width: 220px;
  /* border: 1px solid red; */
}
.S-inner > span {
  display: inline-block;
}
.S-inner > span:nth-child(1) img {
  width: 40px;
  vertical-align: middle;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
}
.S-inner > span:nth-child(2) {
  font-size: 20px;
  vertical-align: middle;
  margin-left: 20px;
}
.H-der {
  align-items: center;
  display: flex;
}
</style>
