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
import OwlTag from '@/components/owl-tag.vue'
import OwlFiche from '@/components/owl-fiche.vue'
import OwlNavbar from '@/components/owl-navbar.vue'
import OwlAvatar from '@/components/owl-avatar.vue'
import OwlComment from '@/components/owl-comment.vue'
import OwlMakeComment from '@/components/owl-make-comment.vue'

Vue.component('owl-tag', OwlTag)
Vue.component('owl-fiche', OwlFiche)
Vue.component('owl-navbar', OwlNavbar)
Vue.component('owl-avatar', OwlAvatar)
Vue.component('owl-comment', OwlComment)
Vue.component('owl-make-comment', OwlMakeComment)

Vue.config.productionTip = false

Vue.prototype.$axios = axios

App.mpType = 'app'

const app = new Vue({
    ...App,
    Vuex
})
app.$mount()
