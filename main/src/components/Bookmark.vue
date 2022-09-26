<template>
  <div>
    <div class="bookPage">
      <ul v-if="book.length > 0">
        <li
          :class="num == index ? 'hover' : ''"
          v-for="(d, index) in book"
          :key="d.name"
          @mousemove="onMousemove(d, index)"
          @mouseout="mouseout"
          @click="onBook(d, index)"
          :style="[
            { color: numCopy == index ? '#fff' : '' },
            { backgroundColor: numCopy == index ? '#5578ff' : '' },
          ]"
        >
          <span></span> <span>{{ d.name }}</span>
          <span v-show="num == index" class="icon"><close-outlined /></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { bookList } from "@/tools/function";
import CloseOutlined from "@ant-design/icons-vue/CloseOutlined";

let book = bookList.list;
let num = ref(-1);
let numCopy = ref(-1);
//  鼠标事件
function onMousemove(d, index: any) {
  num.value = index;
}
function mouseout() {
  num.value = -1;
}
// 标签点击事件
function onBook(d, index: number) {
  numCopy.value = index;
}
</script>

<style scoped>
.hover {
  /* color: #fff !important; */
  /* background-color: #5578ff; */
}
.bookPage {
  background-color: #fff;
  height: 40px;
  display: flex;
}
ul {
  padding: 0;
  display: flex;
  width: 100%;
}
ul li {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0px 10px 0px 10px;
  list-style: none;
  /* border: 1px solid red; */
  cursor: pointer;
}
ul li > span:nth-child(1) {
  margin: 0px 12px 0px 0px;
  overflow: hidden;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  display: inline-block;
  background-color: #5578ff;
}
.icon {
  padding-left: 10px;
  display: inline-block;
  font-size: 11px;
}
</style>
