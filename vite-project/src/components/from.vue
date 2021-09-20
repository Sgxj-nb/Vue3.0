<template>
  <!-- 修改添加框架 -->
  <div>
    <div>
      <el-dialog
        :title="isUpdate ? '修改' : '添加'"
        :model-value="visible"
        :before-close="handleClose"
      >
        <el-form :model="forminfo">
          {{ forminfo }}
          <el-form-item label="值">
            <el-input v-model="forminfo.info.a" placeholder="用户"></el-input>
          </el-form-item>
          <el-form-item label="值2">
            <el-input v-model="forminfo.info.b" placeholder="密码"></el-input>
          </el-form-item>
          <el-button type="primary" @click="add(forminfo.info)">保存</el-button>
          <el-button type="info" @click="quxioa">取消</el-button>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, watchEffect, watch } from 'vue';
export default defineComponent({
  name: 'App',
  emits: ['update:visible'],
  props: {
    visible: Boolean,
    forminfo: Object
  },
  setup(prop, context) {
    let isUpdate: any = ref(false);
    // 保存事件
    function add(forminfo: any) {
      console.log(forminfo.a, forminfo.b); // 拿到的数据值
    }

    const forminfo = reactive({ info: Object.assign({}, prop.forminfo) }); // 通过prop.forminfo拿到的表单数据
    // 取消事件
    function quxioa() {
      //添加清空表单数据， 调取内置方法关闭弹框
      forminfo.info = {};
      context.emit('update:visible', false);
    }
    // 监听值的变化来判断是修改还是添加
    watchEffect(() => {
      if (Object.keys(forminfo.info).length > 0) {
        isUpdate.value = true;
      } else {
        isUpdate.value = false;
      }
    });
    // 关闭弹窗
    function handleClose() {
      context.emit('update:visible', false);
      forminfo.info = {};
    }
    return {
      handleClose,
      add,
      quxioa,
      forminfo,
      isUpdate
    };
  }
});
</script>
