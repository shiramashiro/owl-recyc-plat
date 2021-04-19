<template>
    <view
        :style="{ width: width, height: height }"
        :class="['owl-tag-' + type]"
        class="owl-tag text-xs text-center"
    >
        <slot></slot>
    </view>
</template>

<script>
export default {
    name: 'owl-tag',
    props: {
        // primary | danger | warning
        type: {
            type: String,
            default: 'primary'
        },
        width: {
            type: String,
            required: false
        },
        height: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="css" scoped>
.owl-tag {
    border-radius: 8rpx;
    padding: 6rpx 10rpx;
}

.owl-tag-primary {
    color: white;
    background-color: #87cefa;
}

.owl-tag-gray {
    color: #81868a;
    background-color: #f0f1f5;
}
</style>
