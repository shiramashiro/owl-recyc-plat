<template>
    <view class="owl-icon text-center">
        <image mode="aspectFill" :src="src" :style="{ height: size + 'rpx', width: size + 'rpx', margin: margin + 'rpx' }"></image>
    </view>
</template>
<script>
export default {
    name: 'owl-icon',
    props: {
        src: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            default: 60
        },
        margin: {
            type: String,
            default: '0 0 0 0'
        }
    }
}
</script>
