<template>
    <view
        class="praise"
        :style="{ minHeight: $systemInfo.windowHeight + 'px' }"
    >
        <tui-navigation-bar style="box-shadow: 8rpx 8rpx 2rpx #f0f0f0;">
            <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
            <view class="margin-left-lg text-lg">收到的赞</view>
        </tui-navigation-bar>
        <view class="praise-panel">
            <view
                v-for="(item, index) in praiseItmes"
                :key="index"
                class="item margin-lr-xs margin-tb-sm padding-sm"
            >
                <tui-swipe-action
                    style="width: 100%"
                    @selected="chooseSwipe"
                    :content="item"
                    :actions="actions"
                >
                    <template v-slot:content>
                        <view class="item-wrap flex align-center">
                            <owl-avatar :size="50" :src="item.url"></owl-avatar>
                            <view class="margin-left-sm">
                                <view
                                    class="text-cut flex align-center margin-bottom-xs"
                                >
                                    <view>
                                        {{ item.name }}
                                    </view>
                                    <text class="margin-left-sm text-gray"
                                        >赞了我的评论</text
                                    >
                                </view>
                                <view class="text-xs text-gray">
                                    {{ item.time }}
                                </view>
                            </view>
                        </view>
                    </template>
                </tui-swipe-action>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'praise',
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
            praiseItmes: [
                {
                    id: 1,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: 'scroll',
                    time: '2小时前'
                },
                {
                    id: 2,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: 'scroll',
                    time: '2小时前'
                },
                {
                    id: 3,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: 'scroll',
                    time: '2小时前'
                },
                {
                    id: 4,
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: 'scroll',
                    time: '2小时前'
                }
            ]
        }
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/msg/msg'
            })
        },
        chooseSwipe(info) {
            console.log(info)
        }
    }
}
</script>

<style lang="scss" scoped>
.praise {
    background-color: #f8f8f8;

    .praise-panel {
        .item {
            border-radius: 15rpx;
            background-color: white;
        }
    }
}
</style>
