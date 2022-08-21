<script setup lang="ts" name="indexLogin">
import { ref } from "vue";
import { Form, FormItem, Input, Row, Button } from "ant-design-vue";
let z = ref("1");
</script>

<template>
  <div class="page-all">
    <div class="page-content">
      <div class="page-border">
        <div>全站.</div>
        <div>Gin-Vue-流氓</div>
      </div>
      <div>
        <a-form>
          <a-form-item>
            <a-input v-model:value="z" size="large"></a-input>
          </a-form-item>
          <a-form-item>
            <a-input v-model:value="z" size="large"></a-input>
          </a-form-item>
          <a-form-item>
            <div class="page-input">
              <a-input style="width: 63%" v-model:value="z" size="large" />
              <div class="page-image">
                <img style="width: 100px" src="@/tools/img/y.png" alt="" />
                <div class="page-image-text"></div>
              </div>
            </div>
          </a-form-item>
          <a-form-item>
            <div class="page-input">
              <a-button
                style="margin-right: 30px; height: 40px"
                type="primary"
                block
                >初始化</a-button
              >
              <a-button style="height: 40px" type="primary" block
                >登录</a-button
              >
            </div>
          </a-form-item>
        </a-form>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.page-image {
  margin-left: 30px;
  position: relative;
}
.page-image-text {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: red;
  position: absolute;
  background-color: rgb(0 0 0 / 20%);
}
.page-border {
  letter-spacing: 1px;
  font-size: 25px;
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.page-input {
  display: flex;
  align-items: center;
}
.page-content {
  padding: 40px;
}
.page-all {
  width: 430px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 3px 7px rgb(0 0 0 / 20%);
}
</style>
