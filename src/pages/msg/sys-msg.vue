<template>
    <view>
        <view class="top">
            全部消息
            <text>编辑</text>
        </view>

        <view class="item" v-for="item in list">
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
            list: [
                {
                    title: '终于揭晓了,B站跨年晚会即将开始',
                    detail: `目前英国各大标志建筑物已经降半旗致哀，在王室大型典礼中扮演重要角色的英国纹章院表示，
       菲利普亲王的葬礼将在温莎城堡内 圣乔治教堂举行，不会举行国葬和遗体瞻仰仪式
       ，呼吁公众不要参加菲利普亲王葬礼的相关活动`,
                    text: '&&网页链接',
                    time: '3个月前'
                },
                {
                    title: '直播即将开始',
                    detail: `目前英国各大标志建筑物已经降半旗致哀，在王室大型典礼中扮演重要角色的英国纹章院表示，
      ，不会举行国葬和遗体瞻仰仪式
       ，呼吁公众不要参加菲利普亲王葬礼的相关活动`,
                    text: '&&网页链接',
                    time: '3个月前'
                },
                {
                    title: '你的B站2020年年度报告',
                    detail: `目前英国各大标志建经降半旗致哀，在王室大型典礼中扮演重要角色的英国纹章院表示，
       菲利普亲王的葬礼将在温 圣乔治教堂举行，不会举行国葬和遗体瞻仰仪式
       ，呼吁公众不要参加菲利普亲王葬礼的相关活动`,
                    text: '&&网页链接',
                    time: '3个月前'
                }
            ]
        }
    }
}
</script>

<style scoped>
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
.item {
    width: 100%;
    border-bottom: 1px #eae8e8 solid;
}
.title {
    font-weight: bold;
    padding-top: 12px;
    padding-left: 16px;
}
.detail {
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
