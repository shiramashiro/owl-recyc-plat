<template>
    <view class="more">
        <tui-navigation-bar>
            <navigator :delta="1" open-type="navigateBack">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-gray text-df">
                更多
            </view>
        </tui-navigation-bar>
        <template v-if="params.comName === 'owlPosts'">
            <owl-posts
                class="margin-top-sm padding-lr-xs"
                :requestURL="'/get/post'"
                :URLAttrs="params"
            ></owl-posts>
        </template>
        <template v-else-if="params.comName === 'owlBooks'">
            <owl-books :bookType="params.type"></owl-books>
        </template>
        <template v-else-if="params.comName === 'owlRecoveries'">
            <owl-recoveries :maxSize="Number(params.maxSize)"></owl-recoveries>
        </template>
    </view>
</template>

<script>
export default {
    name: 'more',
    data() {
        return {
            params: {}
        }
    },
    /**
     * 从owl-fiche的更多跳转过来时，接收一个对象。
     * 注意：不是数组，而是对象，建议通过consloe打印查看结构。
     *
     * 这是由owl-fiche组件的display函数处理过后传来的对象。
     * 可能接收的字段有limitNum、browseNum和id，
     * 接收到参数对象之后，需要把这个对象转交给组件，查数据。
     *
     * @param limitNum 限制查询帖子的数量
     * @param browseNum 通过帖子浏览数查询帖子
     * @param id 通过帖子id查询帖子
     */
    onLoad(option) {
        this.params = option
    }
}
</script>

<style lang="scss" scoped>
.more {
    background-color: rgb(248, 248, 248);
}
</style>
