<template>
  <div>
    <Tainfo :list="zhi.list" ref="eminfo" @addeminfo="addeminfo" id="15">
      <div v-for="(d, index) in zhi.list" :key="index">
        <div>
          <div v-for="(q, indexw) in d.secondLevelCategoryVOS">
            <div v-if="zhi.nums == q.parentId">
              <div class="zhinfoaaawww">
                {{ q.categoryName }}
              </div>
              <div class="zhinfoaaaawww">
                <div
                  v-for="(w, indexww) in q.thirdLevelCategoryVOS"
                  :key="indexww"
                >
                  <img
                    style="width: 34px"
                    src="https://s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png"
                    class="product-img"
                  />
                  <div class="asdsadasdaw" v-text="w.categoryName"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tainfo>
  </div>
  <div>
    <Tabb></Tabb>
  </div>
</template>
<script lang="ts" setup>
import Tainfo from "../zu/fenlei.vue";
import { reactive } from "vue-demi";
import request from "../../utils/request";
import Tabb from "../zu/tabber.vue";

// 获取信息接口 三维数组
const zhinfoa: any[] = reactive([]);
let zhi = reactive({
  list: [],
  lsitingo: zhinfoa,
  nums: "15",
});
function showoinfo() {
  interface showinof {
    data?: any;
    message?: String;
  }
  request.get("user.showp", {}).then((res: showinof) => {
    console.log(res);
    if (res.message == "SUCCESS") {
      zhi.list = res.data;
    }
  });
}
showoinfo();

// 获取子组件传递的值
function addeminfo(value: string) {
  zhi.nums = value;
}
</script>
<style scoped>
.dontai {
  color: #1baeae;
  background: #fff;
  border: 1px solid transparent;
}
.asdsadasdaw {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
}
.zhinfoaaaawww > div {
  padding-top: 10px;
  width: 80px;
}
.zhinfoaaaawww {
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 15px;
  line-height: 30px;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
}
.zhiinfoaaa {
  margin-left: 120px;
}
.side-tab > div {
  border: 1px solid transparent;
  padding: 15px 10px 15px 10px;
}
.side-tab {
  overflow-y: scroll;
  overflow: auto;
  color: #2c3e50;
  background-color: #f8f8f8;
  width: 28%;
  font-size: 12px;
  text-align: center;
  position: fixed;
  height: 100%;
}
.zhinfoaaawww {
  font-size: 19px;
  color: #2c3e50;
  font-weight: 500;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
