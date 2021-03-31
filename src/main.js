import Vue from 'vue'
import App from './App'
import Vuex from './store/index'
import cuCustom from './colorui/components/cu-custom.vue'
import './static/icon/iconfont.css'

Vue.component('cu-custom', cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    Vuex
})
app.$mount()
