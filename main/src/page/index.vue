<script setup lang="ts">
import { ref } from "vue";
import DoubleLeftOutlined from "@ant-design/icons-vue/DoubleLeftOutlined";
import { storeToRefs } from "pinia";
import { userConten } from "@/pinia/index";
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
                  <div>仪表盘</div>
                </div>
              </div>
              <div>a</div>
            </div>
          </div>
        </header>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-copy > div:nth-child(1) {
  border: 1px solid red;
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
  width: 200px;
  border: 1px solid red;
  text-align: center;
}
.page-name {
  display: flex;
  align-items: center;
}
.page-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-heder {
  height: 54px;
  top: 0;
  left: 0;
  width: 100%;
  position: absolute;
  border: 1px solid red;
}
.page {
  border: 1px solid red;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: auto;
}
.page-main {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  min-width: 1080px;
}
</style>
