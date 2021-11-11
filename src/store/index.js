import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSignin: false,
    userInfo: {},
    carts: []
  },
  mutations: {
    setCarts(state, data) {
      state.carts = data
    },
    setUserInfo(state, data) {
      state.isSignin = true
      state.userInfo = data
    }
  },
  actions: {}
})
