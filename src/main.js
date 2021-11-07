import Vue from 'vue'
import App from './App'
import Vuex from './store/index'

import OwlAvatar from '@/components/owl-avatar.vue'
import OwlFiche from '@/components/owl-fiche.vue'
import OwlIcon from '@/components/owl-icon.vue'

Vue.component('owl-avatar', OwlAvatar)
Vue.component('owl-fiche', OwlFiche)
Vue.component('owl-icon', OwlIcon)

Vue.config.productionTip = false
Vue.prototype.$store = Vuex

App.mpType = 'app'

new Vue({
    ...App,
    Vuex
}).$mount()
