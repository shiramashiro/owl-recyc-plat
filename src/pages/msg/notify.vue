<template>
    <view class="notify" :style="{ height: height + 'px' }">
        <view class="status_bar"> </view>
        <owl-navbar
            style="box-shadow: 8rpx 8rpx 2rpx #f1f0f0;"
            :config="config"
        >
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
                <view class="margin-left-lg text-lg">系统通知</view>
            </view>
        </owl-navbar>
        <view class="notify-panel">
            <view
                class="item margin-lr-xs margin-tb-sm padding-sm"
                v-for="(item, index) in notifies"
                :key="index"
            >
                <tui-swipe-action
                    style="width: 100%"
                    @selected="chooseSwipe"
                    :content="item"
                    :actions="actions"
                >
                    <template v-slot:content>
                        <view class="margin-tb-sm text-cut text-bold">
                            {{ item.title }}
                        </view>
                        <view class="margin-tb-sm text-sm">
                            {{ item.content }}
                        </view>
                        <view class="flex justify-end text-gray text-sm">
                            <view class="time">{{ item.time }}</view>
                        </view>
                    </template>
                </tui-swipe-action>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'notify',
    data() {
        return {
            height: 0,
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            },
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
            notifies: [
                {
                    title: '终于揭晓了',
                    content: `目前英国各大标志建筑物已经降半旗致哀，在王室大型典礼中扮演重要角色的英国纹章院表示，
       菲利普亲王的葬礼将在温莎城堡内 圣乔治教堂举行，不会举行国葬和遗体瞻仰仪式
       ，呼吁公众不要参加菲利普亲王葬礼的相关活动`,
                    time: '3个月前'
                },
                {
                    title: '直播即将开始',
                    content: `目前英国各大标志建筑物已经降半旗致哀，在王室大型典礼中扮演重要角色的英国纹章院表示，
      ，不会举行国葬和遗体瞻仰仪式
       ，呼吁公众不要参加菲利普亲王葬礼的相关活动`,
                    time: '3个月前'
                },
                {
                    title: '你的2020年年度报告',
                    content: `目前英国各大标志建经降半旗致哀，在王室大型典礼中扮演重要角色的英国纹章院表示，
       菲利普亲王的葬礼将在温 圣乔治教堂举行，不会举行国葬和遗体瞻仰仪式
       ，呼吁公众不要参加菲利普亲王葬礼的相关活动`,
                    time: '3个月前'
                }
            ]
        }
    },
    mounted() {
        uni.getSystemInfo({
            success: res => {
                this.height = res.windowHeight
            }
        })
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
.notify {
    background-color: #f8f8f8;

    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }

    .notify-panel {
        .item {
            background-color: white;
            border-radius: 15rpx;
        }
    }
}
</style>
