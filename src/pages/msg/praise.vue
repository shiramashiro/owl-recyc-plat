<template>
    <view class="praise">
        <!-- #ifdef H5 -->
        <view class="status_bar"> </view>
        <navbar style="box-shadow: 8rpx 8rpx 2rpx #f1f0f0;" :config="config">
            <view class="navi-content flex align-center">
                <view>
                    <i
                        @click="backIntoIndex()"
                        class="el-icon-third-fanhui"
                    ></i>
                </view>
                <view class="margin-left-lg text-lg">收到的赞</view>
            </view>
        </navbar>
        <!-- #endif -->
        <view
            class="items margin-tb-xs"
            v-for="(item, index) in list"
            :key="index"
        >
            <view class="flex align-center">
                <avatar
                    class="margin-right-sm"
                    :size="50"
                    :src="item.url"
                ></avatar>
                <view class="col-2 margin-right-sm">
                    <view class="row-1 margin-bottom-xs">
                        {{ item.name }}
                        <text class="margin-left-xs text-gray"
                            >赞了我的评论</text
                        >
                    </view>
                    <view class="row-2 margin-bottom-xs">
                        {{ item.detail }}
                    </view>
                    <view class="row-3 text-xs text-gray">
                        {{ item.time }}
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'praise',
    data() {
        return {
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            },
            list: [
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: 'scroll',
                    time: '2小时前',
                    detail: '在B站为止迄今收到最多的赞'
                },
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: 'scroll',
                    time: '2小时前',
                    detail: '在B站为止迄今收到最多的赞'
                },
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: 'scroll',
                    time: '2小时前',
                    detail: '在B站为止迄今收到最多的赞'
                },
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: 'scroll',
                    time: '2小时前',
                    detail: '在B站为止迄今收到最多的赞'
                }
            ]
        }
    },
    methods: {
        // #ifdef H5
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/msg/msg'
            })
        }
        // #endif
    }
}
</script>

<style lang="scss" scoped>
// #ifdef H5
.status_bar {
    height: var(--status-bar-height);
    width: 100%;
}
// #endif

.navi-content {
    height: 100%;
}

.items {
    width: 100%;
    border-bottom: 1rpx solid #f1f0f0;
}
</style>
