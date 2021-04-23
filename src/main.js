import Vue from 'vue'
import App from './App'
import Vuex from './store/index'
import './static/icon/iconfont.css'
import Axios from 'axios'

// axios 异步请求远程地址
Axios.defaults.baseURL = 'http://120.77.245.208:8070/'
// axios 异步请求本地地址
// axios.defaults.baseURL = 'http://localhost:8070'
Axios.interceptors.request.use(config => {
    return config
})
Axios.interceptors.response.use(config => {
    return config
})

// 导入组件
import OwlTag from '@/components/owl-tag.vue'
import OWlImgs from '@/components/owl-imgs.vue'
import OwlFiche from '@/components/owl-fiche.vue'
import OwlNavbar from '@/components/owl-navbar.vue'
import OwlAvatar from '@/components/owl-avatar.vue'
import OwlComment from '@/components/owl-comment.vue'
import OwlMakeComment from '@/components/owl-make-comment.vue'

// 全局注册组件
Vue.component('owl-tag', OwlTag)
Vue.component('owl-imgs', OWlImgs)
Vue.component('owl-fiche', OwlFiche)
Vue.component('owl-avatar', OwlAvatar)
Vue.component('owl-navbar', OwlNavbar)
Vue.component('owl-comment', OwlComment)
Vue.component('owl-make-comment', OwlMakeComment)

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$store = Vuex

App.mpType = 'app'

new Vue({
    ...App,
    Vuex
}).$mount()
