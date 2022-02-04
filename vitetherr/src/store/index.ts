import { defineStore } from 'pinia';

import { getname } from '@/api/index';

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      usermessage: null
    }
  },
  getters: {},
  actions: {
    // 用户信息
    messageinfo() {
      getname().then(res => {
        console.log(res);
        this.usermessage = res.data
      })
    },

    // 清空用户信息
    removeoutuser() {
      this.usermessage = null
    }
  }
})