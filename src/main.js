import Vue from 'vue'
import App from './App'
import Vuex from './store/index'
import './static/icon/iconfont.css'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://120.77.245.208:8070/'
// Axios.defaults.baseURL = 'http://localhost:8070'
Axios.interceptors.request.use(config => {
    return config
})
Axios.interceptors.response.use(config => {
    return config
})

// 导入组件
import OwlTag from '@/components/owl-tag.vue'
import OWlImgs from '@/components/owl-imgs.vue'
import OwlPosts from '@/components/owl-posts.vue'
import OwlFiche from '@/components/owl-fiche.vue'
import OwlIndent from '@/components/owl-indent.vue'
import OwlAvatar from '@/components/owl-avatar.vue'
import OwlComment from '@/components/owl-comment.vue'
import OwlActionBar from '@/components/owl-action-bar.vue'
import OwlMakeComment from '@/components/owl-make-comment.vue'

// 全局注册组件
Vue.component('owl-tag', OwlTag)
Vue.component('owl-imgs', OWlImgs)
Vue.component('owl-posts', OwlPosts)
Vue.component('owl-fiche', OwlFiche)
Vue.component('owl-indent', OwlIndent)
Vue.component('owl-avatar', OwlAvatar)
Vue.component('owl-comment', OwlComment)
Vue.component('owl-action-bar', OwlActionBar)
Vue.component('owl-make-comment', OwlMakeComment)

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$store = Vuex

App.mpType = 'app'

new Vue({
    ...App,
    Vuex
}).$mount()
