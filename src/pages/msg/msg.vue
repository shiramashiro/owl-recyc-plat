<template>
    <view class="msg">
        <view class="top padding-lr-lg flex justify-between align-center">
            <template v-for="(navigator, index) in navigators">
                <navigator :key="index" :url="navigator.url">
                    <view class="flex align-center justify-center">
                        <image
                            style="width: 70rpx; height: 70rpx"
                            mode="aspectFill"
                            :src="navigator.image"
                        />
                    </view>
                    <view class="text-gray">
                        {{ navigator.name }}
                    </view>
                </navigator>
            </template>
        </view>
        <chart></chart>
    </view>
</template>

<script>
import chart from '@/components/msg/chart.vue'

export default {
    name: 'msg',
    components: { chart },
    data() {
        return {
            navigators: [
                {
                    url: '/pages/msg/reply',
                    name: '回复我的',
                    image: require('@/static/reply.png')
                },
                {
                    url: '/pages/msg/praise',
                    name: '收到的赞',
                    image: require('@/static/praise.png')
                },
                {
                    url: '/pages/msg/sys-msg',
                    name: '系统通知',
                    image: require('@/static/sys-msg.png')
                }
            ]
        }
    }
}
</script>

<style lang="css" scoped>
.top {
    position: sticky;
    top: 0;
    z-index: 998;
    width: 100%;
    height: 120rpx;
    background-color: #ffffff;
    box-shadow: 8rpx 8rpx 10rpx #e5e0e0;
}
</style>
