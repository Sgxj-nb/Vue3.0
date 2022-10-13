<template>
  <div class="page">
    <div class="H-der">
      <div class="S-inner">
        <span>
          <img :src="img" alt="" />
        </span>
        <span>
          {{ titleName }}
        </span>
      </div>
      <div style="flex: 1; visibility: hidden">s</div>
      <div class="S-right">
        <span><img :src="img" alt="" /></span>
        <a-dropdown>
          <a @click.prevent
            >管理员
            <DownOutlined />
          </a>
          <template #overlay>
            <a-menu @click="onMeun">
              <a-menu-item :key="1"> 修改密码 </a-menu-item>
              <a-menu-item :key="2"> 推出登录 </a-menu-item>
              <a-menu-item :key="3"> 消息 </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </div>
  <!-- 修改密码组件 -->
  <Modal :visible="visible" @onClose="onClose"></Modal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RedoOutlined from "@ant-design/icons-vue/RedoOutlined";
import DoubleLeftOutlined from "@ant-design/icons-vue/DoubleLeftOutlined";
import SearchOutlined from "@ant-design/icons-vue/SearchOutlined";
import FullscreenOutlined from "@ant-design/icons-vue/FullscreenOutlined";
import AppleOutlined from "@ant-design/icons-vue/AppleOutlined";
import DownOutlined from "@ant-design/icons-vue/DownOutlined";
import Modal from "./herdercom/index.vue";
import { Dropdown, Menu, MenuItem } from "ant-design-vue";
import { title } from "@/tools/tools";
let img: string = "https://qmplusimg.henrongyi.top/gva_header.jpg";
let titleName = title;
let visible = ref<boolean>(false);

interface meun {
  domEvent: Object;
  eventKey: String;
  eventKeyPath: Array<String>;
  item: Object;
  key: Number;
  keyPath: Array<String>;
}

// 下拉框点击事件
function onMeun(e: meun) {
  console.log(e.key);
  const key = e.key;
  if (key == 1) {
    visible.value = true;
  } else if (key == 2) {
  } else {
  }
}

// 关闭弹出层(密码)
function onClose() {
  visible.value = false;
}
</script>

<style scoped>
.page {
  display: flex;
  width: 100%;
  align-items: center;
}
.S-right {
  padding-right: 20px;
  cursor: pointer;
}
.S-right > span {
  /* display: inline-block; */
}
/* .S-right > span:nth-child(4) {
  width: 50px;
} */
.S-right > span:nth-child(5) {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif;
  width: 50px;
  font-size: 14px;
}
.S-right > span img {
  width: 40px;
  vertical-align: middle;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
}
.S-inner {
  margin-left: 35px;
  height: 100%;
  width: 290px;
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
  flex: 1;
  display: flex;
}
</style>
