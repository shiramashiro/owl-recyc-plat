import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isSignin: true,
        userInfo: {},
        tentativeTrade: [],
        decideTrade: []
    },
    mutations: {
        setUserInfo(state, data) {
            state.isSignin = true
            state.userInfo = data
        },
        setTentativeTrade(state, data) {
            state.tentativeTrade.push(data)
        },
        setNowTrade(state, data) {
            state.decideTrade.push(data)
        }
    },
    actions: {}
})
