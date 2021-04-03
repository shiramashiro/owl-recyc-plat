<template>
    <view class="sub-index">
        <view class="status_bar"> </view>
        <navbar :navConfigs="navConfigs">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
            </view>
        </navbar>
        <view class="rows">
            <view class="row-1"></view>
            <view class="row-2"></view>
            <view class="row-3"></view>
            <view class="row-4"></view>
            <view class="row-5"></view>
            <view class="row-6"></view>
            <view class="row-7"></view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'MoreInfo',
    data() {
        return {
            navConfigs: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            },
            id: 0
        }
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/index/index'
            })
        }
    },
    onLoad(option) {
        this.id = option.id
    }
}
</script>

<style lang="scss" scoped>
.more-info {
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }
}
</style>
