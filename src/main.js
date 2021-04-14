import Vue from 'vue'
import App from './App'
import Vuex from './store/index'
import './static/icon/iconfont.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://120.77.245.208:8070/'
// axios.defaults.baseURL = 'http://localhost:8070'
axios.interceptors.request.use(config => {
    return config
})
axios.interceptors.response.use(config => {
    return config
})

// 全局组件
import Navbar from '@/components/navbar.vue'
import Avatar from '@/components/avatar.vue'
Vue.component('navbar', Navbar)
Vue.component('avatar', Avatar)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

App.mpType = 'app'

const app = new Vue({
    ...App,
    Vuex
})
app.$mount()
