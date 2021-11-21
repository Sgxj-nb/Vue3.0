<template>
  <el-button type="inof" @click="() => $router.push('/')">asdasd</el-button>
  <!-- 头部 -->
  <header>
    <div buinof>
      <div>
        <i class="info iconfont">&#xeaf1;</i>
      </div>
      <div>
        <input type="text" v-model="zhi" />
      </div>
      <div>
        <i class="iconfont info">&#xe788;</i>
      </div>
    </div>
    <div buinofaaa>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="(d, index) in carousels.infoa"
          :key="index"
          @click="add(d)"
        >
          <img style="width: 100%" :src="d.carouselUrl" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </header>

  <!-- 中间部分 -->
  <section>
    <div inofaaww>
      <div
        v-for="(d, index) in carousels.iinfoaaa"
        :key="index"
        class="asdasdad"
      >
        <div>
          <img style="width: 120px" :src="d.goodsCoverImg" alt="" />
        </div>
        <div class="aaaaa">
          {{ d.goodsName }}
        </div>
        <div>￥{{ d.sellingPrice }}</div>
      </div>
    </div>
  </section>
  <div>
    <Tabb></Tabb>
  </div>
</template>
<script lang="ts" setup>
import Tabb from "../zu/tabber.vue";
import request from "../../utils/request";
import { reactive, ref } from "vue-demi";
// 头部输入框的值
let zhi = ref("");
let carousels = reactive({
  infoa: [],
  iinfoaaa: [],
});
// 获取图类型
function pawinof() {
  interface ValueObject {
    data?: any;
    resultCode?: number;
  }
  request.get("home.showinfo", {}).then((res: ValueObject) => {
    console.log(res);
    if (res.resultCode == 200) {
      carousels.infoa = res.data.carousels;
      carousels.iinfoaaa = res.data.newGoodses;
    }
  });
}
pawinof();

// 图片点事件
function add(d: string): void {
  window.location.href = (d as any).redirectUrl;
}
</script>

<style scoped>
.asdasdad:nth-child(2n + 1) {
  border-right: 1px solid #e9e9e9;
}
.asdasdad {
  padding: 0px 12px 0px 12px;
  border-bottom: 1px solid #e9e9e9;
}
.aaaaa {
  font-size: 12px;
  width: 160px;
}
[buinofaaa] {
  padding-top: 20px;
}
.info {
  color: rgb(89, 229, 229);
}
[buinof] {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
}
[inofaaww] {
  display: flex;
  /* justify-content: center; */

  text-align: center;
  flex-wrap: wrap;
}
</style>
