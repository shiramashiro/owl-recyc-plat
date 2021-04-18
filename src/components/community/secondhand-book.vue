<template>
    <view class="secondhand-book padding-sm margin-bottom-sm margin-lr-sm">
        <view class="title text-lg margin-bottom-sm">{{ data.title }}</view>
        <view class="profile margin-bottom-sm">{{ data.message }}</view>
        <scroll-view scroll-x="true">
            <view class="img-list flex align-center">
                <view
                    class="item margin-right-lg"
                    v-for="(img, index) in data.imgs"
                    :key="index"
                >
                    <image mode="aspectFit" :src="img" />
                </view>
            </view>
        </scroll-view>
        <view class="time text-right text-sm text-gray margin-top-sm">
            {{ data.time }}
        </view>
    </view>
</template>

<script>
export default {
    name: 'secondhand-book',
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.secondhand-book {
    background: white;
    border-radius: 15rpx;

    .img-list image {
        width: 300rpx;
        height: 300rpx;
        border-radius: 15rpx;
    }
}
</style>
