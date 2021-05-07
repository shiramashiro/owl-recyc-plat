import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isSignin: false,
        userInfo: {},
        cartList: []
    },
    mutations: {
        /**
         * 当用户登陆时，调用此方法，将userInfo信息填充为当前登录的用户。
         *
         * @param {Object | Boolean} state userInfo 用户对象 或 isSignin 用户是否登录
         * @param {Object} data userInfo 用户对象
         */
        setUserInfo(state, data) {
            state.isSignin = true
            state.userInfo = data
        },
        /**
         * 将书籍加入到购物车中
         *
         * @param {Array} state cartList
         * @param {Object} data 书籍信息
         */
        setToCart(state, data) {
            state.cartList.push(data)
        }
    },
    actions: {}
})
