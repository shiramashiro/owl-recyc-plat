<template>
    <view class="owl-action-bar">
        <view class="container padding-xs flex align-center justify-between">
            <view class="item flex">
                <view class="top">
                    <image src="@/static/serve.svg" />
                </view>
                <view class="bottom text-sm" @click="serve">客服</view>
            </view>

            <view class="item flex">
                <view class="top">
                    <image src="@/static/cart.svg" />
                </view>
                <view class="bottom text-sm">订单</view>
            </view>

            <view class="item flex recycle-btn">
                <tui-button
                    height="80rpx"
                    type="primary"
                    shape="circle"
                    background="#87cefa"
                    >通知回收</tui-button
                >
            </view>

            <view class="item flex">
                <tui-button height="80rpx" type="gray" shape="circle"
                    >暂定回收</tui-button
                >
            </view>
        </view>

        <tui-tips
            backgroundColor="#EB0909"
            color="#ffffff"
            ref="toast"
        ></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'owl-action-bar',
    data() {
        return {}
    },
    methods: {
        showTips(msg) {
            this.$refs.toast.showTips({
                msg: msg,
                duration: 2000,
                type: 'green'
            })
        },
        serve() {
            this.showTips('该功能正在完善中')
        }
    }
}
</script>

<style lang="css" scoped>
.container {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #f8f6f6;
}

.item {
    width: 23%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.top image {
    width: 40rpx;
    height: 40rpx;
}
</style>
