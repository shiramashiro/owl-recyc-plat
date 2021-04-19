<template>
    <view class="hot-posts padding-lr-sm">
        <view
            class="hot-post padding-sm flex align-center justify-between"
            v-for="(item, index) in data"
            :key="index"
        >
            <view class="col-1 text-sm">{{ index + 1 }}</view>
            <view class="col-2 text-cut">{{ item.title }}</view>
            <view class="col-3 flex align-center text-gray text-xs">
                <view class="col-3-1"></view>
                <view class="col-3-2">1000</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'hot-posts',
    props: {
        data: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="css" scoped>
.hot-post {
    margin-bottom: 20rpx;
    border-bottom: 1rpx solid #cccc;
}

.hot-post:last-child {
    margin-bottom: 0;
    border-bottom: 0;
}
</style>
