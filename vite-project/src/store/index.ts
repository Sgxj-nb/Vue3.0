import { createStore } from 'vuex'

export default createStore({
  state: {
    text: 'asdasdasdassssasdasd阿萨大萨',
    title: ''
  },
  mutations: {
    showinfo(state, title) {
      state.title = title
    }
  },
  actions: {
    title(context, title) {
      context.commit('showinfo', title)
    }
  },
  getters: {},
  modules: {}
})