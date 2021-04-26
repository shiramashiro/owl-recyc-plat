<template>
    <view class="more-recoveries">
        <tui-navigation-bar>
            <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
            <view class="margin-left-lg text-lg">二手书籍分类</view>
        </tui-navigation-bar>
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
        return {}
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
}
</style>
