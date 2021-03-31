<template>
    <view class="book-details">
        {{ id }}
        <view class="sss" v-for="(item, index) in 110" :key="index">
            {{ item }}
        </view>
    </view>
</template>

<script>
export default {
    name: 'bookDetails',
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
</style>
