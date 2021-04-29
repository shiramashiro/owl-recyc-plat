<template>
    <view class="order">
        <!-- 任务：订单卡片UI，时间：2021年4月30日00:53:33 -->
        <!-- 这里的 {{datas}} 可以删除，只是做一个调试用的 -->
        {{ datas }}
    </view>
</template>

<script>
export default {
    name: 'order',
    data() {
        return {
            datas: []
        }
    },
    /**
     * 根据跳转页面的参数查询对应的订单类型。需登录才可以查询。
     */
    onLoad(options) {
        options['userId'] = this.$store.state.userInfo.id
        this.$axios
            .post('/get/order', options)
            .then(resp => {
                this.datas = resp.data
            })
            .catch(error => {
                alert('没有登录！！！')
            })
    }
}
</script>

<style scoped></style>
