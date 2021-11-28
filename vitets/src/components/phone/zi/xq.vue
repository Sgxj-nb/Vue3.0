<template>
  <!-- 商品详情界面 -->
  <div>
    <div>
      {{ zhinfo.duiixang }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue-demi";
import request from "@/utils/request";
import { useCounterStore } from "@/pain/index"; // pain
const zhinfo: any = useCounterStore();

// 请求详情界面
function asdasdas() {
  request.get(`goods.detail`, {}).then((res) => {
    console.log(res);
  });
}
asdasdas();
</script>
