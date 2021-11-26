import { defineStore } from 'pinia'
export const useCounterStore = defineStore('index', {
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
  },
  actions: {
    setifnoi(value) {
      this.count = value
    }
  }
})