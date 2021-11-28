<template>
  <!-- 商品详情界面 -->
  <div>
    <div>
      <img style="width: 100%" :src="rel.paifnoa.goodsCoverImg" alt="" />
    </div>
  </div>
  <div>
    {{ rel.paifnoa.goodsName }}
  </div>
  <div>
    {{ rel.paifnoa.sellingPrice }}
  </div>
  <div v-html="rel.paifnoa.goodsDetailContent"></div>
  <div class="zhiinfo">购物车</div>
  <div class="zhinfawwwd">
    <div @click="ifnoawwddd">点击添加购物车{{ num }}</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue-demi";
import request from "@/utils/request";
import { useCounterStore } from "@/pain/index"; // pain
const zhinfo: any = useCounterStore();

// 请求详情界面
function asdasdas() {
  interface zhi {
    message?: String;
    data?: Object;
  }
  request.get(`goods.detail`, {}).then((res: zhi) => {
    console.log(res);
    if (res.message) {
      rel.paifnoa = res.data;
    }
  });
}
let rel = reactive({
  paifnoa: {},
});
asdasdas();

//添加的数字
let num = ref(0);

// 点击添加
function ifnoawwddd() {}

function goouwche() {
  interface jiesss {
    message?: String;
    data?: Array;
  }
  request.get("goods.shop", {}).then((res: jiesss) => {});
}
</script>

<style scoped>
.zhiinfo {
  position: fixed;
  top: 0;
  color: red;
}
.zhinfawwwd {
  color: red;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
