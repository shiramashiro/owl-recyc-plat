<template>
    <view class="kong-avatar-wrap flex align-center">
        <image
            :mode="mode"
            class="kong-avatar"
            :style="{ '--size': size + 'px' }"
            :src="src"
        ></image>
    </view>
</template>

<script>
export default {
    name: 'KongAvatar',
    props: {
        src: {
            type: String,
            required: true
        },
        size: {
            type: [String, Number],
            required: false,
            default: 100
        },
        mode: {
            type: String,
            required: false,
            default: 'aspectFit'
        }
    }
}
</script>

<style lang="scss" scoped>
.kong-avatar-wrap {
    .kong-avatar {
        width: var(--size);
        height: var(--size);
        border-radius: 100%;
    }
}
</style>
