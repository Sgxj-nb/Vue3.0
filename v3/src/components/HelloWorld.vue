<template>
  <div>
    <el-button type="primary" @click="ifaddawd">asdsad</el-button>
  </div>
  <div>{{ info }}</div>
  <div v-for="(d, idnex) in ino" :key="idnex">
    {{ d.name }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    let info = ref(0)
    let ino = reactive([
      { name: '8888888' },
      { name: '8888888' },
      { name: '8888888' },
      { name: '8888888' }
    ])
    function ifaddawd() {
      info.value++
      if (info.value >= 5) {
        alert('不要在点了')
      }
    }
    return {
      info,
      ifaddawd,
      ino
    }
  }
})
</script>
