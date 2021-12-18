import { defineStore } from 'pinia'
export const useCounterStore = defineStore('index', {
  state: () => {
    return {
      duiixang: {},
      count: 0,
      zongshu: null, // 统计下单点击的参数
      duixiang: []
    }
  },
  getters: {
  },
  actions: {
    // 获取添加商品的数组
    setduixisang(value) {
      this.duixiang = value
    },
    // 获取每次点击后商品购物车总数+1的参数
    setnuminfo(value) {
      this.zongshu += value

    },
    setifnoi(value) {
      this.count = value
    },
    // 获取传递的对象
    setduixiang(value) {
      this.duiixang = value
    }
  }
})