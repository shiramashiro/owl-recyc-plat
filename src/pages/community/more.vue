<template>
    <view class="more">
        <tui-navigation-bar>
            <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
            <view class="margin-left-lg text-gray text-df">
                更多
            </view>
        </tui-navigation-bar>
        <posts
            class="margin-top-sm padding-lr-xs"
            :requestURL="'/get/post'"
            :URLAttrs="params"
        ></posts>
    </view>
</template>

<script>
import Posts from '@/components/community/posts.vue'

export default {
    components: { Posts },
    name: 'more',
    data() {
        return {
            params: {}
        }
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/community/community'
            })
        }
    },
    /**
     * 从community的“官方贴”和“全社热帖”跳转过来时，接收一个参数对象。
     * 注意：这个不是数组，而是对象，建议通过consloe打印查看结构。
     *
     * 这是由owl-fiche.vue的display函数处理过后传来的对象。
     * 可能接收的字段有limitNum、browseNum和id，其他字段都是无效的。
     * 接收到参数对象之后，需要把这个对象转交给posts组件，查询帖子数据。
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
