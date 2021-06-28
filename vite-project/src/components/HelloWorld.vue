<template>
  <div>Vite模板</div>
  <!-- 新版本饿了吗组件 -->
  <div>
    <el-button type="primary">打开{{ msg }}</el-button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      msg: '0000000000000'
    };
  },
  setup: () => {
    const count = ref(0);

    return { count };
  }
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
