<template>
  <!-- 修改添加框架 -->
  <div>
    <div>
      <el-dialog
        :title="'修改添加'"
        :model-value="visible"
        :before-close="handleClose"
      >
        <el-form :model="forminfo">
          <el-form-item label="值">
            <el-input v-model="forminfo.a" placeholder="用户"></el-input>
          </el-form-item>
          <el-form-item label="值2">
            <el-input v-model="forminfo.b" placeholder="密码"></el-input>
          </el-form-item>
          <el-button type="primary" @click="add">保存</el-button>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  emits: ['update:visible'],
  props: {
    visible: Boolean,
    forminfo: Object
  },
  setup(prop, context) {
    function add() {}

    // 关闭弹窗
    function handleClose() {
      context.emit('update:visible', false);
    }
    return {
      add,
      handleClose
    };
  }
});
</script>
