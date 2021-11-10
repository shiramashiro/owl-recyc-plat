import Vue from 'vue'
import App from './App'
import Vuex from './store/index'

import OwlComment from '@/components/owl-comment.vue'
import OwlAvatar from '@/components/owl-avatar.vue'
import OwlFiche from '@/components/owl-fiche.vue'
import OwlIcon from '@/components/owl-icon.vue'

Vue.component('owl-comment', OwlComment)
Vue.component('owl-avatar', OwlAvatar)
Vue.component('owl-fiche', OwlFiche)
Vue.component('owl-icon', OwlIcon)

Vue.config.productionTip = false
Vue.prototype.$store = Vuex
// Vue.prototype.$baseURL = 'http://1.116.123.44:8000'
Vue.prototype.$baseURL = 'http://localhost:8000'

App.mpType = 'app'

new Vue({
  ...App,
  Vuex
}).$mount()
