<script setup lang="ts" name="indexLogin">
import { onMounted, reactive, ref, onUnmounted } from "vue";
import useCurrentInstance from "@/axios/requst";
import { Form, FormItem, Input, Row, Button } from "ant-design-vue";
import { storageToken } from "@/tools/index";
// import Alert from "@/components/HelloWorld.vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { userConten } from "@/pinia/index";
const router = useRouter();
let form = reactive({
  info: {
    captcha: "",
    captchaId: "",
    password: "123456",
    username: "admin",
  },
});
const { proxy } = useCurrentInstance();
// let showObject = reactive({
//   info: {
//     show: false,
//     message: "",
//     type: "",
//   },
// }) as any;

// 验证码部分
let imagePic = ref("");
let nullTime = ref(null) as any;
interface statusObj {
  captchaId?: string;
  captchaLength?: number;
  picPath?: string;
}
// 点击更换验证码
function onImage() {
  clearTimeout(nullTime.value);
  nullTime.value = setTimeout(() => {
    ImageCreate();
  }, 200);
}
// 请求图片验证码
function ImageCreate() {
  proxy.$ajax("/api/base/captcha", "", {}, function (res: statusObj) {
    if (res.picPath) {
      imagePic.value = res.picPath;
      form.info.captchaId = res.captchaId as string;
    }
  });
}
const mainStore = userConten(); // 存储
const { userObject } = storeToRefs(mainStore); // 获取
// 登录
function onLogin() {
  // showObject.info = reactive({
  //   show: true,
  //   message: "登录成功",
  //   type: "success",
  // });
  proxy.$ajax("/api/base/login", "", form.info, function (res) {
    if (res.code === 7) {
      message.error(res.msg);
      ImageCreate();
    } else {
      storageToken(res, "local");
      router.replace({ path: "/" });
      mainStore.userObject = res;
    }
  });
}

// 回车事件
const keydown = (e: any) => {
  if (e.keyCode == 13) {
    onLogin();
  }
};
onMounted(() => {
  ImageCreate();
  window.addEventListener("keydown", keydown);
});
onUnmounted(() => {
  window.removeEventListener("keydown", keydown, false);
});
</script>

<template>
  <!-- <Alert :showObject="showObject"></Alert> -->
  <div class="page-all">
    <div class="page-content">
      <div class="page-border">
        <div>全站.</div>
        <div>Gin-Vue-流氓</div>
      </div>
      <div>
        <a-form>
          <a-form-item>
            <a-input v-model:value="form.info.username" size="large"></a-input>
          </a-form-item>
          <a-form-item>
            <a-input v-model:value="form.info.password" size="large"></a-input>
          </a-form-item>
          <a-form-item>
            <div class="page-input">
              <a-input
                style="width: 63%"
                v-model:value="form.info.captcha"
                size="large"
              />
              <div class="page-image" @click="onImage">
                <img style="width: 100px" :src="imagePic" alt="" />
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
              <a-button
                @click="onLogin"
                style="height: 40px"
                type="primary"
                block
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
  cursor: pointer;
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
