import { createStore } from 'vuex'

export default createStore({
  state: {
    zhis: 'vuesadasdasd',
    showinfo: ''
  },
  mutations: {
    zhiinfoa(state, showinfo) {
      state.showinfo = showinfo
    }
  },
  // 计算
  getters: {
    GETaddnum(state: any) {
      return state.showinfo += 1
    }
  },
  actions: {
    zhi(context, showinfo) {
      context.commit('zhiinfoa', showinfo)
    }
  },
  modules: {}
})