<template>
  <div class="heziaaa">
    <!-- 左边部分 -->
    <div class="side-tab">
      <div
        :class="{ dontai: zhi.num == d.categoryId }"
        v-for="(d, index) in painfo.info"
        :key="index"
        @click="add(d, index)"
      >
        <div>
          <div>
            {{ d.categoryName }}
          </div>
        </div>
      </div>
    </div>

    <!-- 右边部分 -->
    <div class="zhiinfoaaa">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, watchEffect } from "vue-demi";
const props = defineProps({
  list: {
    type: Array,
    default: [],
  },
  id: {
    type: String,
    default: "",
  },
});
let painfo = reactive({
  info: [],
});
watchEffect(() => {
  painfo.info = props.list as Array<String>;
});

// 默认获取的值
let zhi = reactive({
  num: props.id,
});

const eitm = defineEmits(["addeminfo"]);

// 第一个选中结构
function add(e, index) {
  zhi.num = e.categoryId;
  eitm("addeminfo", zhi.num);
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
