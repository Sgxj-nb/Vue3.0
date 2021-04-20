import { createStore } from "vuex";


/**
 * 主要用于存用户的token信息
 * 简单的查询信息也可以用vuex来完成查询
 * */
export default createStore({
  state: {
    token: ''
  },
  mutations: {
    // 记住
    infotoken(state, token) {
      state.token = token
    }
  },
  actions: {},
  modules: {},
});
