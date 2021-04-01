import Vue from 'vue'
import App from './App'
import Vuex from './store/index'
import './static/icon/iconfont.css'

// 注册全局组件
import Navbar from '@/components/navbar.vue'
import Avatar from '@/components/avatar.vue'
Vue.component('navbar', Navbar)
Vue.component('avatar', Avatar)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
    Vuex
})
app.$mount()
