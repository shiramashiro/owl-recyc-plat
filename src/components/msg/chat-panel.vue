<template>
    <view class="chat-panel">
        <view
            class="cu-list menu-avatar"
            v-for="(item, index) in list"
            :key="index"
            @click="viewMore(item.id)"
        >
            <view class="cu-item">
                <view class="cu-avatar">
                    <owl-avatar :size="60" :src="item.url"></owl-avatar>
                </view>
                <view class="content">
                    <view class="text-pink">
                        <text class="text-cut">{{ item.name }}</text>
                    </view>
                    <view class="text-gray text-sm flex">
                        <text class="text-cut">{{ item.detail }}</text>
                    </view>
                </view>
                <view class="action">
                    <view class="text-grey text-xs">
                        {{ item.time }}
                    </view>
                    <template v-if="item.new > 0">
                        <view class="cu-tag round bg-red sm">
                            {{ item.new }}
                        </view>
                    </template>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'chat-panel',
    data() {
        return {
            list: [
                {
                    id: 1,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 0
                },
                {
                    id: 2,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 0
                },
                {
                    id: 3,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 0
                },
                {
                    id: 4,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 1
                },
                {
                    id: 5,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 20
                },
                {
                    id: 6,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 10
                },
                {
                    id: 7,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 10
                },
                {
                    id: 8,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 10
                }
            ]
        }
    },
    methods: {
        viewMore(id) {
            // 路由，传入聊天的id
            console.log(id)
        }
    }
}
</script>

<style lang="css" scoped>
.cu-list{
  border-bottom: 0.5rpx solid #faf8f8;
}
</style>
