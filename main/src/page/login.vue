<script setup lang="ts">
import { ref } from "vue";
import Login from "./components/login/index.vue";
import { getImageUrl } from "../tools/image";
let bodyImage: string = getImageUrl("download.jpg");
let contentImage: string = getImageUrl("peple.svg");
</script>

<template>
  <div class="page-body">
    <div class="page-concent">
      <div class="page-img">
        <!-- 背景图 -->
        <div>
          <img class="page-bodyImage" :src="bodyImage" alt="" />
        </div>
        <!-- 上层内容 -->
        <div class="page-section">
          <div class="zhi">
            <div class="page-item">
              <div>
                <Login></Login>
              </div>
              <div>
                <div>
                  <img class="page-section-image" :src="contentImage" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-section-image {
  width: 100%;
  height: 45vh;
}
.page-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.zhi {
  border-radius: 9px;
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
  background-color: rgba(255, 255, 255, 0.8);
}
.page-section {
  padding: 26px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
.page-img {
  position: relative;
}
.page-bodyImage {
  width: 100%;
  height: 100vh;
}
.page-body {
  width: 100%;
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
}
.page-concent {
  min-width: 1100px;
  box-sizing: border-box;
}
</style>
