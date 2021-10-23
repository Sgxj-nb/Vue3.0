<template>
  <div>
    <button @click="add">测试重复请求</button>
    {{ count }}
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import request from "../utils/request";
defineProps<{ msg: string }>();
const count = ref(0);
function add() {
  request
    .post("user.list", { user_name: "admin", user_password: "123456" })
    .then((res) => {
      console.log(res);
    });
}

let info = reactive({
  zhi: {
    page: 1,
    limit: 10,
  },
});
// 查询get请求演示
function getinfoa() {
  request.get("user.usetinfo", info.zhi).then((res) => {
    console.log(res);
  });
}
getinfoa();
</script>
