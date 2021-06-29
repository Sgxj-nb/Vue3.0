<template>
  <div>
    <div v-for="(d, index) in info.info" :key="index" @click="add(d)">
      {{ d.name }}
    </div>
  </div>

  <div>我是父组件传过来的值-{{ numaaa }}</div>
  <!-- 子组件调取父组件的方法 -->
  <div>
    <el-button type="primary" @click="names">我是子组件</el-button>
  </div>
</template>
<script lang="ts">
import { reactive, defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'App',
  props: {
    numaaa: {
      type: String
    }
  },
  setup(props, context) {
    console.log(props.numaaa);// 父组件传值过来的值我来呈现
    let info = reactive({
      info: [{ name: '2' }, { name: '3' }]
    });
    // ========================================================================4

    let num = ref(0);
    let showifo = reactive({
      num
    });
    // 通过点击事件来传值去父组件
    function add(e: any) {
      context.emit('shiwinfo', { name: e.name });
    }
    // 调取父组件的方法
    function names() {
      context.emit('namess');
    }

    // 父组件调取的事件
    function adinfo() {
      console.log('我是子组件', '我被父组件调用');
    }
    return {
      info,
      add,
      names,
      adinfo
    };
  }
});
</script>
