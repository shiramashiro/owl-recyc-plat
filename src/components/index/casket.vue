<template>
    <view
        @click="viewMore()"
        class="casket flex padding-lr-xs justify-between align-center margin-tb-xs"
    >
        <view class="col-1">
            <view
                class="flex align-center row-1 text-black text-bold text-df"
                :class="data.icon"
            >
                {{ data.cnTitle }}
            </view>
            <view class="row-2 text-xs text-gray">{{ data.enTitle }}</view>
        </view>
        <view class="col-2">
            <image mode="aspectFit" class="image" :src="data.cover"></image>
        </view>
    </view>
</template>

<script>
export default {
    name: 'Casket',
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        viewMore() {
            uni.navigateTo({
                url: '/pages/index/week-rank?id=' + this.data.id
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.casket {
    height: 120rpx;
    width: 31.5%;
    /* #ifdef MP */
    width: 230rpx;
    /* #endif */
    background-color: white;
    border-radius: 16rpx;

    .col-2 {
        .image {
            width: 80rpx;
            height: 105rpx;
        }
    }
}
</style>
