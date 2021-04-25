<template>
    <view class="sys-msg">
        <view class="status_bar"> </view>
        <owl-navbar style="box-shadow: 8rpx 8rpx 2rpx #f1f0f0;" :config="config">
            <view class="navi-content flex align-center">
                <view>
                    <i
                        @click="backIntoIndex()"
                        class="el-icon-third-fanhui"
                    ></i>
                </view>
                <view class="margin-left-lg text-lg">系统消息</view>
            </view>
        </owl-navbar>


        <view class="items" v-for="(item, index) in list" :key="index">
            <view class="title">{{ item.title }}</view>
            <view class="detail">
                {{ item.detail }}
                <text>{{ item.text }}</text>
            </view>
            <view class="time">{{ item.time }}</view>
        </view>


    </view>
</template>

<script>
export default {
    name: 'sys-msg',
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
                    title: '终于揭晓了',
                    detail: `目前英国各大标志建筑物已经降半旗致哀，在王室大型典礼中扮演重要角色的英国纹章院表示，
       菲利普亲王的葬礼将在温莎城堡内 圣乔治教堂举行，不会举行国葬和遗体瞻仰仪式
       ，呼吁公众不要参加菲利普亲王葬礼的相关活动`,
                    time: '3个月前'
                },
                {
                    title: '直播即将开始',
                    detail: `目前英国各大标志建筑物已经降半旗致哀，在王室大型典礼中扮演重要角色的英国纹章院表示，
      ，不会举行国葬和遗体瞻仰仪式
       ，呼吁公众不要参加菲利普亲王葬礼的相关活动`,
                    time: '3个月前'
                },
                {
                    title: '你的2020年年度报告',
                    detail: `目前英国各大标志建经降半旗致哀，在王室大型典礼中扮演重要角色的英国纹章院表示，
       菲利普亲王的葬礼将在温 圣乔治教堂举行，不会举行国葬和遗体瞻仰仪式
       ，呼吁公众不要参加菲利普亲王葬礼的相关活动`,
                    time: '3个月前'
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
.status_bar {
    height: var(--status-bar-height);
    width: 100%;
}

.navi-content {
    height: 100%;
}
.top {
    height: 40px;
    width: 100%;
    padding-top: 12px;
    padding-left: 16px;
    position: relative;
    border-bottom: 1px #ece9e9 solid;
}
.top text {
    position: absolute;
    right: 15px;
    color: deeppink;
}
.items {
    width: 95%;
    border: 1px #eae8e8 solid;
    margin: 20rpx auto;
    border-radius:16rpx ;
    box-shadow: 3px 3px 3px #e8e3e3;

}
.title {
    font-weight: bold;
    padding-top: 12px;
    padding-left: 16px;
}
.detail {
    padding: 0 20rpx;
    margin-top: 10px;
}
.detail text {
    color: #4a67d6;
}
.time {
    margin-top: 10px;
    padding-bottom: 10px;
    margin-right: 10px;
    opacity: 0.4;
    margin-left: 80%;
}
</style>
