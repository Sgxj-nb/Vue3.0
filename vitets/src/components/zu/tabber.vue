<template>
  <div>
    <div>
      <van-tabbar safe-area-inset-bottom route v-model="active" placeholder>
        <van-tabbar-item to="/index" icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item to="/indexs" icon="search">分类</van-tabbar-item>
        <van-tabbar-item to="/indexss" icon="friends-o" :badge="badge"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item to="/indexsss" icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue-demi";
import { useCounterStore } from "@/pain/index"; // pain
import request from "@/utils/request";
const painfo = useCounterStore();
let active = ref("0");
let badge = computed(() => painfo.zongshu); // 接取产品详情界面添加的值

interface qunahi {
  resultCode?: Number;
  data?: quanzhan[];
}

interface quanzhan {
  cartItemId: Number;
  goodsCount: Number;
  goodsCoverImg: String;
  goodsName: string;
  goodsId: Number;
  sellingPrice: Number;
}

request.get("goods.shop", {}).then((res: qunahi) => {
  console.log(res);
  if (res.resultCode == 200) {
    painfo.setnuminfo(res.data.length);
    painfo.setduixisang(res.data);
  }
});
</script>
