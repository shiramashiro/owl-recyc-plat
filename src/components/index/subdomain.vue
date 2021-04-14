<template>
    <view class="subdomain margin-lr-xs">
        <view class="subdomain-wrap margin-top-xs">
            <view
                class="title text-black padding-tb-lg padding-lr-sm flex justify-between align-center"
            >
                <view class="rows flex">
                    <view class="col-1 text-lg">
                        {{ title }}
                    </view>
                    <view v-if="subTitle" class="col-2 text-xs flex align-end margin-left-xs">
                        {{ subTitle }}
                    </view>
                </view>
            </view>
            <view class="content padding-bottom-sm">
                <slot></slot>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'Subdomain',
    props: {
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: false
        }
    }
}
</script>

<style lang="scss" scoped>
.subdomain {
    border-radius: 24rpx 24rpx 2rpx 2rpx;
    background-color: white;
}
</style>
