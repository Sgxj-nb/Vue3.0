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
import { ElMessage } from "element-plus";
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
  request.get(`goods.detail`).then((res: zhi) => {
    console.log(res);
    if (res.message) {
      (rel.paifnoa as zhinifo) = res.data;
    }
  });
}

interface zhinifo {
  goodsCoverImg?: String;
  goodsName?: String;
  sellingPrice?: String;
  goodsDetailContent?: String;
}
let rel = reactive({
  paifnoa: {
    goodsCoverImg: "",
    goodsName: "",
    sellingPrice: "",
    goodsDetailContent: "",
  },
});
asdasdas();

//添加的数字
let num = ref(0);

// 点击添加
function ifnoawwddd() {
  num.value = 1;
  goouwche();
}

// 查看是否点击过
function goouwche() {
  interface jiesss {
    message?: "";
    data?: [];
    resultCode?: Number;
  }
  request
    .post("goods.shop", { goodsCount: num.value, goodsId: 10902 })
    .then((res: jiesss) => {
      console.log(res);
      if (res.resultCode != 500) {
        alert("添加成功");
      } else {
        num.value = 1;
        ElMessage(res.message);
        return;
      }
    });
}
goouwche();
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
