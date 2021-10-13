<template>
    <view class="msg" :style="{ minHeight: $systemInfo.windowHeight + 'px' }">
        <view class="top padding-lr-lg flex justify-between align-center">
            <navigator v-for="(navigator, index) in navigators" :key="index" :url="navigator.url">
                <view class="flex align-center justify-center">
                    <image style="width: 70rpx; height: 70rpx" mode="aspectFill" :src="navigator.image" />
                </view>
                <view class="text-gray">
                    {{ navigator.name }}
                </view>
            </navigator>
        </view>
        <owl-fiche class="margin-top-sm" :title="'聊天列表'">
            <view class="chat-panel">
                <view class="chat-list-item margin-bottom-sm padding-sm" v-for="(item, index) in chats" :key="index">
                    <navigator :url="'/pages/msg/chat?id=' + item.id">
                        <tui-swipe-action style="width: 100%" @selected="chooseSwipe" :content="item" :actions="actions">
                            <template v-slot:content>
                                <view class="item flex align-center justify-between">
                                    <owl-avatar class="avatar" :size="40" :src="item.url"></owl-avatar>
                                    <view class="content">
                                        <view class="text-cut">
                                            {{ item.name }}
                                        </view>
                                        <view class="text-gray text-sm text-cut">
                                            {{ item.detail }}
                                        </view>
                                    </view>
                                    <view class="tips text-center">
                                        <view class="text-grey text-xs">
                                            {{ item.time }}
                                        </view>
                                        <template v-if="item.new > 0">
                                            <view class="cu-tag round margin-top-sm bg-red sm">
                                                {{ item.new }}
                                            </view>
                                        </template>
                                    </view>
                                </view>
                            </template>
                        </tui-swipe-action>
                    </navigator>
                </view>
            </view>
        </owl-fiche>
    </view>
</template>

<script>
export default {
    name: 'msg',
    data() {
        return {
            actions: [
                {
                    name: '删除',
                    color: '#fff',
                    fontsize: 30, //单位rpx
                    width: 50, //单位px
                    background: '#FD3B31',
                    borderRadius: 15 //单位rpx
                }
            ],
            navigators: [
                {
                    url: '/pages/msg/reply',
                    name: '回复我的',
                    image: require('@/static/reply.png')
                },
                {
                    url: '/pages/msg/praise',
                    name: '收到的赞',
                    image: require('@/static/praise.png')
                },
                {
                    url: '/pages/msg/notify',
                    name: '系统通知',
                    image: require('@/static/notify.png')
                }
            ],
            chats: [
                {
                    id: 1,
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail: '数据存储进行了性能优化，它的具体sssssssssssss优',
                    new: 10
                },
                {
                    id: 2,
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail: '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 0
                },
                {
                    id: 3,
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail: '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 0
                },
                {
                    id: 4,
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail: '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 1
                },
                {
                    id: 5,
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail: '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 20
                },
                {
                    id: 6,
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail: '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 10
                },
                {
                    id: 7,
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail: '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 10
                },
                {
                    id: 8,
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '创作中心',
                    time: '04-05',
                    detail: '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 10
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.msg {
    background-color: #f8f8f8;
}

.item {
    .avatar {
        width: 10%;
    }

    .content {
        width: 75%;
    }

    .tips {
        widows: 10%;
    }
}

.chat-list-item {
    background-color: white;
    border-top: 1rpx solid #f0f0f0;
}

.top {
    position: sticky;
    top: 0;
    z-index: 998;
    width: 100%;
    height: 120rpx;
    background-color: #ffffff;
    box-shadow: 8rpx 8rpx 10rpx #f0f0f0;
}
</style>
