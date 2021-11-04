import Vue from 'vue'
import App from './App'
import Vuex from './store/index'
import './static/icon/iconfont.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.interceptors.request.use(config => {
    return config
})
axios.interceptors.response.use(config => {
    return config
})

import UParse from '@/components/u-parse/u-parse.vue'
import OwlFiche from '@/components/owl-fiche.vue'
import OwlAvatar from '@/components/owl-avatar.vue'

Vue.component('u-parse', UParse)
Vue.component('owl-fiche', OwlFiche)
Vue.component('owl-avatar', OwlAvatar)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$store = Vuex

App.mpType = 'app'

new Vue({
    ...App,
    Vuex
}).$mount()
