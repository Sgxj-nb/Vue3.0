<script setup lang="ts">
import { ref } from "vue";
import RedoOutlined from "@ant-design/icons-vue/RedoOutlined";
import DoubleLeftOutlined from "@ant-design/icons-vue/DoubleLeftOutlined";
import SearchOutlined from "@ant-design/icons-vue/SearchOutlined";
import FullscreenOutlined from "@ant-design/icons-vue/FullscreenOutlined";
import AppleOutlined from "@ant-design/icons-vue/AppleOutlined";

import { storeToRefs } from "pinia";
import { userConten } from "@/pinia/index";
import { Tree } from "@/tools/tools";
let img: string = "https://qmplusimg.henrongyi.top/gva_header.jpg";

// function hanshu() {
//   let data = [
//     { id: 4, title: "节点4", parent_id: 3 },
//     { id: 5, title: "节点5", parent_id: 4 },
//     { id: 6, title: "节点6", parent_id: 2 },
//     { id: 1, title: "节点1", parent_id: 0 },
//     { id: 2, title: "节点2", parent_id: 0 },
//     { id: 3, title: "节点3", parent_id: 2 },
//   ];
//   Tree(data);
// }
// hanshu();
const { userObject } = storeToRefs(userConten());
</script>

<template>
  <div class="page">
    <div class="page-main">
      <div>
        <header>
          <div class="page-heder">
            <div class="page-info">
              <div class="page-name">
                <div>全站. Gin-Vue-流氓</div>
                <div class="page-copy">
                  <div>
                    <double-left-outlined
                      style="
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 800;
                        margin-top: 4px;
                      "
                    />
                  </div>
                  <div>{{ "xxxxx" }}</div>
                </div>
              </div>
              <div>
                <div class="page-right">
                  <div>
                    <redo-outlined
                      style="
                        font-family: gvaIcon !important;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 800;
                        -webkit-font-smoothing: antialiased;
                      "
                    />
                  </div>
                  <div>
                    <search-outlined
                      style="
                        font-family: gvaIcon !important;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 800;
                        -webkit-font-smoothing: antialiased;
                      "
                    />
                  </div>
                  <div>
                    <fullscreen-outlined
                      style="
                        font-family: gvaIcon !important;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 800;
                        -webkit-font-smoothing: antialiased;
                      "
                    />
                  </div>
                  <div>
                    <apple-outlined
                      style="
                        font-family: gvaIcon !important;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 800;
                        -webkit-font-smoothing: antialiased;
                      "
                    />
                  </div>
                  <div><img :src="img" alt="" /></div>
                  <div>管理员</div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
    <section>
      <div class="page-section">
        <div class="page-info-right">
          <div class="page-content-left">
            <div class="page-concat">
              <div class="page-scrollbar">
                <div class="page-root">
                  <div>asdsadsadsadsad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-root {
  margin: 0;
  padding-right: 0;
  position: relative;
  list-style: none;
  border-right-width: 0 !important;
  border-right: 1px solid red;
}
.page-scrollbar {
  overflow: scroll;
  height: 100%;
  margin-bottom: -17px;
  overflow: hidden !important;
}
.page-concat {
  height: calc(100% - 40px);
}
.page-section {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
.page-info-right {
  height: 100%;
  position: relative;
  padding-left: 224px;
}
.page-content-left {
  position: absolute;
  z-index: 2;
  width: 224px;
  height: 100%;
  top: 0;
  left: 0;
  background-color: red;
  border: 1px solid red;
}
.page-itemIcon {
  overflow: hidden;
  height: 35px;
  width: 220px;
  outline: 1px solid #333;
  text-align: right;
}
.page-right > div:nth-child(5) {
  margin: 0px 0px 0px 12px !important;
}
.page-right > div {
  margin: 0 12px;
  cursor: pointer;
}
.page-right > div:nth-child(5) img {
  width: 30px;
  height: 30px;
}
.page-right > div:nth-child(5) {
  overflow: hidden;
  border-radius: 50%;
}
.page-right {
  align-items: center;
  display: flex;
}
.page-copy > div:nth-child(1) {
  padding-top: 5px;
}
.page-copy > div:nth-child(2) {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  margin-left: 20px;
}
.page-copy {
  display: flex;
  align-items: center;
}
.page-name > div:nth-child(1) {
  color: rgb(25, 26, 35);
  font-weight: 600;
  font-size: 20px;
  width: 300px;
  text-align: center;
}
.page-name {
  display: flex;
  align-items: center;
}
.page-info {
  padding-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-heder {
  height: 60px;
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  border: 1px solid red;
  background-color: #fff;
}
.page {
  /* border: 1px solid red; */
  min-height: 100vh;
  box-sizing: border-box;
  overflow: auto;
}
.page-main {
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  min-width: 1080px;
}
</style>
