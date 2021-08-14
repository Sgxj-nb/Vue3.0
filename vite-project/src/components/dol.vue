<template>
  <!-- 弹框组件 -->
  <div>
    <el-dialog :before-close="handleClose" :model-value="visible" title="修改">
      <div>
        <el-form :model="formdata">
          <el-form-item label="第一个">
            <el-input v-model="formdata.name" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="第二个">
            <el-input v-model="formdata.code" placeholder=""></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-button type="primary">修改</el-button>
        <el-button type="primary" @click="add">关闭</el-button>
      </div>
    </el-dialog>
  </div>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'App',
  props: {
    visible: Boolean,
    formdata: Object
  },
  emits: ['update:visible', 'quxiao'], // 定于抛出事件名称
  setup(prop, coninfio) {
    let a: any = prop.formdata;
    let dialogVisible = ref(false);
    // 关闭弹框
    function handleClose() {
      coninfio.emit('update:visible', false);
    }
    function add() {
      coninfio.emit('update:visible', false);
    }
    return {
      add,
      handleClose,
      dialogVisible
    };
  }
});
</script>
