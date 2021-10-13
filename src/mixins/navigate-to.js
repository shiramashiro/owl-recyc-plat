export const navigateToMixins = {
    methods: {
        /**
         * 导航到被点击项的页面
         *
         * @param url 类型：String。作用：跳转目标页URL地址
         * @param params 类型：Array。作用：跳转页面可能需要携带必要的参数
         */
        navigateToClickedItem(url, params) {
            // 判断是否传入参数，如果小于0则说明没有传入参数
            if (params.length > 1) {
                url += '?' + params[0]
                for (let index = 1; index < params.length; index++) {
                    url += '&' + params[index]
                }
            } else {
                // 传递了一个参数值
                url += '?' + params[0]
            }
            // 拼接url之后传递给此方法进行跳转
            uni.navigateTo({
                url: url
            })
        },
        navigateTo(url, params) {
            uni.navigateTo({
                url: url
            })
        }
    }
}
