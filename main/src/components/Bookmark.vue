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
          <span v-if="num == index" class="icon"><close-outlined /></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { rou } from "@/page/index";
import { bookList, bookSelection, watchBookEx } from "@/tools/function";
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

// 根据传递的对象解析出对应的下标来选中默认的标签
let watchBook = watchBookEx;

// 监听左边重复的选项选中标签状态
watch(watchBook, (newValue: rou, oldValue) => {
  if (Object.keys(newValue).length > 0) {
    for (let i = 0, k = book.length; i < k; i++) {
      if (book[i].path == newValue.path) {
        numCopy.value = i;
      }
    }
  }
});

watch(book, (newValue: rou, oldValue) => {
  numCopy.value = book.length - 1;
});
</script>

<style scoped>
.hover {
  background-color: #dde0ec;
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
