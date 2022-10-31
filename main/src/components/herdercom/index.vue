<template>
  <div>
    <a-modal
      v-model:visible="visible"
      title="修改密码"
      @ok="onSuer"
      okText="确认"
      cancelText="取消"
    >
      <div>
        <a-form :model="form">
          <a-form-item label="旧密码" name="aaaaa">
            <a-input></a-input>
          </a-form-item>
          <a-form-item label="新密码">
            <a-input></a-input>
          </a-form-item>
          <a-form-item label="确认密码">
            <a-input></a-input>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Modal, Form, FormItem, Input } from "ant-design-vue";

const props = defineProps({
  // 弹出层控制参数
  visible: {
    type: Boolean,
    default: false,
  },
});

// 表单参数
let form = reactive({
  
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
