import Vue from 'vue'
import App from './App'
import Vuex from './store/index'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000'
// axios.defaults.baseURL = 'http://1.116.123.44:8000'
axios.interceptors.request.use(config => {
    return config
})
axios.interceptors.response.use(config => {
    return config
})

import UParse from '@/components/u-parse/u-parse.vue'
import OwlFiche from '@/components/owl-fiche.vue'
import OwlAvatar from '@/components/owl-avatar.vue'
import OwlIcon from '@/components/owl-icon.vue'

Vue.component('u-parse', UParse)
Vue.component('owl-fiche', OwlFiche)
Vue.component('owl-avatar', OwlAvatar)
Vue.component('owl-icon', OwlIcon)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$store = Vuex

App.mpType = 'app'

new Vue({
    ...App,
    Vuex
}).$mount()
