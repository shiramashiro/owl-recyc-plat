<template>
    <view class="more-recoveries">
        <tui-navigation-bar>
            <navigator :url="'/pages/index/index'" open-type="switchTab">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-lg">二手书籍分类</view>
        </tui-navigation-bar>
        <recoveries
            class="margin-top-sm margin-lr-xs"
            :maxSize="0"
        ></recoveries>
    </view>
</template>

<script>
import Recoveries from '@/components/index/recoveries.vue'

export default {
    name: 'MoreRecoveries',
    components: { Recoveries }
}
</script>

<style lang="scss" scoped>
.more-recoveries {
    background-color: rgb(248, 248, 248);
}
</style>
