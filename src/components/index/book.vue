<template>
    <view class="book margin-xs padding-sm">
        <view class="row-1 margin-bottom-xs">
            <image mode="aspectFill" :src="book.cover"></image>
        </view>
        <view class="row-2 margin-bottom-xs text-df">{{ book.name }}</view>
        <view class="row-3 margin-bottom-xs text-gray">{{ book.author }}</view>
        <view class="row-4 margin-bottom-xs flex align-center justify-between">
            <view class="discount-price text-red text-lg">
                {{ book.price }}
            </view>
            <view class="origin-price text-gray text-lg">
                {{ book.originPrice }}
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.book {
    background-color: white;
    border-radius: 20rpx;

    .row-2 {
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .row-3 {
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .row-4 {
        .discount-price::before {
            content: '¥';
            font-size: 80%;
            margin-right: 4rpx;
        }

        .origin-price {
            text-decoration: line-through;
        }

        .origin-price::before {
            content: '¥';
            font-size: 80%;
            margin-right: 4rpx;
        }
    }
}
</style>
