<template>
  <div>
    <a-modal
      v-model:visible="visible"
      title="修改密码"
      @ok="onSuer"
      okText="确认"
      cancelText="取消"
    >
      <div>我是修改面</div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Modal } from "ant-design-vue";

const props = defineProps({
  // 弹出层控制参数
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["onClose"]);

// 调用父组件方法改变visible的值
function onChange() {
  emit("onClose");
}

function onSuer() {
  emit("onClose");
}
</script>

<style scoped></style>
