<template>
    <view class="container">
        <view class="top">
            <img :src="detail.url" alt="" />
        </view>

        <view class="center">
            <view class="item1">地址：{{ detail.address }}</view>
            <view class="item2">开门时间：{{ detail.openTime }}</view>
            <view class="item3">休息时间：{{ detail.closeTime }}</view>
            <view class="item4">回收次数：{{ detail.times }}</view>
            <view class="item">评价回收价：{{ detail.price }}</view>
        </view>
    </view>
</template>

<script>
import subdomain from '@/components/index/subdomain'
import comment from '@/components/comment'

export default {
    name: 'Detail',
    components: { subdomain, comment },
    props: {
        detail: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.container {
}
.top {
    width: 95%;
    height: 300rpx;
    background: black;
    margin: 20rpx auto;
    border-radius: 16rpx;
    box-shadow: 10rpx 10rpx 10rpx #cccccc;
}
.top img {
    width: 100%;
    height: 100%;
    border-radius: 16rpx;
}
.center {
    border: 1px solid #cccccc;
    width: 95%;
    height: 240rpx;
    margin: 0 auto;
    border-radius: 16rpx;
    box-shadow: 10rpx 10rpx 10rpx #eae8e8;
}
.item1,
.item2,
.item3,
.item4,
.item {
    border-radius: 16rpx;
    width: 100%;
    height: 20%;
    padding-left: 10rpx;
    display: flex;
    align-items: center;
}
.item1 {
    padding-top: 4rpx;
    padding-left: 88rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item2,
.item3,
.item4 {
    padding-left: 35rpx;
}
.bottom {
    width: 95%;
    height: 700rpx;

    margin: 20rpx auto;
    border-radius: 16rpx;
    box-shadow: 10rpx 10rpx 10rpx #cccccc;
}
</style>
