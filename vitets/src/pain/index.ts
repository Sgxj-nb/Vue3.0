import { defineStore } from 'pinia'
export const useCounterStore = defineStore('index', {
  state: () => {
    return {
      duiixang: {},
      count: 0,
    }
  },
  getters: {
  },
  actions: {
    setifnoi(value) {
      this.count = value
    },

    // 获取传递的对象
    setduixiang(value) {
      this.duiixang = value
    }
  }
})