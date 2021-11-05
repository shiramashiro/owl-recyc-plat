<template>
    <view>
        <image :src="src" :style="{ height: size + 'rpx', width: size + 'rpx' }"></image>
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
        }
    }
}
</script>
