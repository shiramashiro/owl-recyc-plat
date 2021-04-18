<template>
    <view class="activity padding-sm margin-tb-sm">
        <view class="row-1 margin-tb-xs">
            {{ data.title }}
        </view>
        <view class="row-2 flex align-center justify-between">
            <view class="col-1 text-xs text-white">
                {{ data.tag }}
            </view>
            <view class="col-2 text-gray text-xs">
                {{ data.time }}
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'activity',
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.activity {
    background-color: #e8e8e8;
    border-radius: 12rpx;

    .row-2 {
        .col-1 {
            background-color: #87cefa;
            border-radius: 8rpx;
            padding: 4rpx 8rpx;
        }
    }
}
</style>
