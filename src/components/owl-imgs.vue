<template>
    <view class="owl-imgs flex justify-between" style="height: 160px">
        <template v-if="imgs.length > 0 && imgs.length < 2">
            <image
                style="height: 100%; width: 100%"
                mode="aspectFill"
                :src="imgs[0].imgUrl"
            ></image>
        </template>
        <template v-else-if="imgs.length < 3">
            <view class="rows flex justify-between" style="width: 100%">
                <view
                    v-for="(item, index) in imgs"
                    :key="index"
                    style="width: 49%"
                    class="row"
                >
                    <image
                        style="height: 100%"
                        mode="aspectFill"
                        :src="item.imgUrl"
                    ></image>
                </view>
            </view>
        </template>
        <template v-else>
            <view class="col-1" style="width: 59%">
                <image
                    :src="imgs[0].imgUrl"
                    style="height: 100%"
                    mode="aspectFill"
                ></image>
            </view>
            <view class="col-2" style="width: 39%;">
                <template v-for="(item, index) in imgs">
                    <template v-if="index > 0">
                        <view class="rows" style="height: 49%" :key="index">
                            <image
                                mode="aspectFill"
                                style="height: 100%"
                                :src="item.imgUrl"
                            ></image>
                        </view>
                    </template>
                </template>
            </view>
        </template>
    </view>
</template>

<script>
export default {
    name: 'owl-imgs',
    props: {
        imgs: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.owl-imgs {
    image {
        border-radius: 10rpx;
    }

    .col-2 {
        .rows:first-child {
            margin-bottom: 10rpx;
        }
    }
}
</style>
