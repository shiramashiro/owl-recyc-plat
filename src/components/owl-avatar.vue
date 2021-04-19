<template>
    <view class="avatar-wrap flex align-center">
        <image
            :mode="mode"
            class="avatar"
            :style="{ '--size': size + 'px' }"
            :src="src"
        ></image>
    </view>
</template>

<script>
export default {
    name: 'owl-avatar',
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
.avatar-wrap {
    .avatar {
        width: var(--size);
        height: var(--size);
        border-radius: 100%;
    }
}
</style>
