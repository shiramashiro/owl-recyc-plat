<template>
    <view class="book-details">
        <view class="status_bar"> </view>
        {{ id }}
        <view class="sss" v-for="(item, index) in 110" :key="index">
            {{ item }}
        </view>
    </view>
</template>

<script>
export default {
    name: 'BookDetails',
    data() {
        return {
            id: 0,
            title: '首页',
            search: '',
            avatarUrl:
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg'
        }
    },
    methods: {},
    onLoad(option) {
        this.id = option.id
    }
}
</script>

<style lang="scss" scoped>
.status_bar {
    height: var(--status-bar-height);
    width: 100%;
}
</style>
