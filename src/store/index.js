import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
     user:''
    },
    mutations: {
        change(state,storeList){
            state.user=storeList
        }
    },
    actions: {}
})
