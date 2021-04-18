<template>
    <view class="more-recoveries">
        <view class="status_bar"> </view>
        <navbar :config="config">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
                <view class="margin-left-lg text-lg">二手书籍分类</view>
            </view>
        </navbar>
        <recoveries
            @selected="chooseRecovery"
            class="margin-top-sm margin-lr-xs"
            :maxSize="0"
        ></recoveries>
    </view>
</template>

<script>
import Recoveries from '@/components/index/recoveries.vue'

export default {
    name: 'MoreRecoveries',
    components: { Recoveries },
    data() {
        return {
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false,
                isCustomImmerse: false
            }
        }
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/index/index'
            })
        },
        chooseRecovery(info) {
            uni.navigateTo({
                url: '/pages/index/recovery-detail?id=' + info.item.id
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.more-recoveries {
    background-color: rgb(248, 248, 248);

    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }
}
</style>
