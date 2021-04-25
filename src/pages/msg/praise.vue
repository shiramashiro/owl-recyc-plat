<template>
    <view class="praise" :style="{ height: height + 'px' }">
        <view class="status_bar"> </view>
        <owl-navbar
            style="box-shadow: 8rpx 8rpx 2rpx #f1f0f0;"
            :config="config"
        >
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
                <view class="margin-left-lg text-lg">收到的赞</view>
            </view>
        </owl-navbar>
        <praise-panel></praise-panel>
    </view>
</template>

<script>
import PraisePanel from '@/components/msg/praise-panel.vue'

export default {
    name: 'praise',
    components: {
        PraisePanel
    },
    data() {
        return {
            height: 0,
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            }
        }
    },
    mounted() {
        uni.getSystemInfo({
            success: res => {
                this.height = res.windowHeight
            }
        })
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/msg/msg'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.praise {
    background-color: #f8f8f8;

    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }
}
</style>
