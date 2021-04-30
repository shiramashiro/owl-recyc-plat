<template>
    <view class="order" :style="{ minHeight: $systemInfo.windowHeight + 'px' }">
        <tui-navigation-bar style="box-shadow: 8rpx 8rpx 2rpx #f0f0f0;">
            <navigator :url="'/pages/mine/mine'" open-type="switchTab">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-lg">订单详细</view>
        </tui-navigation-bar>
        <view
            class="wrap padding-sm margin-lr-sm margin-tb-sm"
            v-for="(item, index) in datas"
            :key="index"
        >
            <view class="">地址：{{ item.address }}</view>
            <view class="">时间：{{ item.dateTime }}</view>
            <view class="">数量：{{ item.num }}</view>
            <view class="footer margin-top-sm flex justify-end">
                <button
                    style="width: 200rpx; height: 50rpx; font-size: 24rpx"
                    class="margin-right-sm"
                >
                    查看发票
                </button>
                <button
                    style="width: 200rpx; height: 50rpx; font-size: 24rpx"
                    class="margin-right-sm"
                >
                    追加评价
                </button>
                <button
                    style="width: 200rpx; height: 50rpx; font-size: 24rpx"
                    class="margin-right-sm"
                >
                    售后
                </button>
            </view>
        </view>
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
    onLoad(options) {
        options['userId'] = this.$store.state.userInfo.id
        // options['userId'] = 1
        this.$axios
            .post('/get/order', options)
            .then(resp => {
                this.datas = resp.data
            })
            .catch(error => {})
    }
}
</script>

<style scoped>
.order {
    background-color: #f8f8f8;
}

.wrap {
    background-color: white;
    border-radius: 15rpx;
}
</style>
