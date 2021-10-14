<template>
    <view class="owl-tag text-xs flex align-center justify-center" :style="{ width: width + 'px', height: height + 'px', borderRadius: radius + 'px' }" :class="['owl-tag-' + type]">
        <slot></slot>
    </view>
</template>

<script>
export default {
    name: 'owl-tag',
    props: {
        // primary | danger | warning | gray | hollow
        type: {
            type: String,
            default: 'primary'
        },
        width: {
            type: [Number, String],
            required: false
        },
        height: {
            type: [Number, String],
            required: false
        },
        radius: {
            type: Number,
            default: 5
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

.owl-tag-hollow {
    color: #87cefa;
    background-color: white;
    border: 1px solid #87cefa;
}
</style>
