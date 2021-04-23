import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {
            avatar: '',
            bgImage: '',
            fans: 0,
            follows: 0,
            id: 0,
            level: 0,
            password: '',
            phone: '',
            praise: 0,
            profile: '',
            username: ''
        }
    },
    mutations: {
        setUserInfo(state, data) {
            state.userInfo = data
        }
    },
    actions: {}
})
