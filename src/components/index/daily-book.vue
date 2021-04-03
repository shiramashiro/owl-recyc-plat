<template>
    <view
        @click="viewDetails()"
        class="daily-book margin-right-sm margin-left-sm padding-sm"
    >
        <view class="row-1">
            <image mode="aspectFill" class="cover" :src="data.cover"></image>
        </view>
        <view class="row-2 text-xs">
            {{ data.name }}
        </view>
        <view class="row-3 margin-top-sm text-red text-bold">
            {{ data.originPrice }}
        </view>
    </view>
</template>

<script>
import { viewDetails } from '@/mixins/view-details.js'

export default {
    name: 'DailyBook',
    mixins: [viewDetails]
}
</script>

<style lang="scss" scoped>
.daily-book {
    background-color: white;
    border-radius: 15rpx;

    .row-1 {
        .cover {
            width: 220rpx;
            height: 300rpx;
        }
    }

    .row-3::before {
        content: '¥';
        font-size: 80%;
        margin-right: 4rpx;
    }

    .row-2 {
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
