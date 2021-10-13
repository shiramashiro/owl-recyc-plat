<template>
    <view class="owl-action-bar">
        <view class="container padding-xs flex align-center justify-between">
            <view class="item flex">
                <navigator :url="'/pages/order'">
                    <view class="top flex align-center justify-center">
                        <image src="@/static/cart.png" />
                        <template v-if="$store.state.tentativeTrade.length !== 0">
                            <tui-badge type="danger">
                                {{ $store.state.tentativeTrade.length }}
                            </tui-badge>
                        </template>
                    </view>
                    <view class="bottom text-sm">
                        <template v-if="type === 'bookTrade'">
                            购物车
                        </template>
                        <template v-else>
                            暂定
                        </template>
                    </view>
                </navigator>
            </view>

            <view class="item flex">
                <navigator :url="'/pages/order'">
                    <view class="top flex align-center justify-center">
                        <image src="@/static/order.png" />
                        <template v-if="$store.state.decideTrade.length !== 0">
                            <tui-badge type="danger">
                                {{ $store.state.decideTrade.length }}
                            </tui-badge>
                        </template>
                    </view>
                    <view class="bottom text-sm">
                        订单
                    </view>
                </navigator>
            </view>

            <view class="item flex recycle-btn">
                <tui-button @click="handleClick('rightBtn')" height="80rpx" type="primary" :size="25" shape="circle" background="#87cefa">
                    <template v-if="type === 'bookTrade'">
                        立即购买
                    </template>
                    <template v-else>
                        通知回收
                    </template>
                </tui-button>
            </view>

            <view class="item flex">
                <tui-button @click="handleClick('leftBtn')" height="80rpx" :size="25" type="gray" shape="circle">
                    <template v-if="type === 'bookTrade'">
                        加入购物车
                    </template>
                    <template v-else>
                        暂定回收
                    </template>
                </tui-button>
            </view>
        </view>

        <tui-tips backgroundColor="#EB0909" color="#ffffff" ref="toast"></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'owl-action-bar',
    data() {
        return {}
    },
    props: {
        // 默认为default，可选为bookTrade
        type: {
            type: String,
            default: 'default'
        }
    },
    methods: {
        handleClick(e) {
            if (e == 'rightBtn') {
                this.$emit('rightBtn', {
                    type: e
                })
            } else {
                this.$emit('leftBtn', {
                    type: e
                })
            }
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
