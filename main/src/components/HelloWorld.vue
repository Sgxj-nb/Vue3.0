<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, toRefs } from "vue";
import { Alert } from "ant-design-vue";

/***
 * 接受传递的消息参数
 * @p {show} 是否显示
 * */
let props = defineProps({
  showObject: Object,
});
interface User {
  show?: Boolean;
  message?: String;
  type?: String;
}
// const { ...showObject } = toRefs(props.showObject?.info) as User;
// watch(props.showObject?.info.show, (newVlaue, oldValue) => {
//   console.log(newVlaue, oldValue);
// });
</script>

<template>
  <div>
    <a-alert
      v-if="showObject.info.show"
      :message="showObject.info.message"
      :type="showObject.info.type"
    />
  </div>
  <div>{{ showObject }}</div>
</template>

<style scoped></style>
