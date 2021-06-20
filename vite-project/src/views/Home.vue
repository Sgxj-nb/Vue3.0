<template>
  <div>
    <div v-for="(d, index) in info.info" :key="index" @click="add(d)">
      {{ d.name }}
    </div>
  </div>

  <div>我是父组件传过来的值-{{ numaaa }}</div>
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
    return {
      info,
      add
    };
  }
});
</script>
