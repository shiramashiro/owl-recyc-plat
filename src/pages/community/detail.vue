<template>
    <view>
        <!-- #ifdef H5 -->
        <view class="status_bar"> </view>
        <navbar style="box-shadow: 8rpx 8rpx 2rpx #f1f0f0;" :cfg="cfg">
            <view class="navi-content flex align-center">
                <view>
                    <i
                        @click="backIntoIndex()"
                        class="el-icon-third-fanhui"
                    ></i>
                </view>
                <view class="margin-left-lg text-lg">帖子详情</view>
            </view>
        </navbar>
        <!-- #endif -->
        <view class="box">
            <view class="top">
                <view class="left">
                    <view class="img">
                        <img
                            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620699526&t=21f6c3c48bd1a1e0eb0f60d16f8a9170"
                            alt=""
                        />
                    </view>
                    <view class="name">你才到碗里去啊</view>
                </view>
                <view class="right">
                    <view class="follow">
                        <text>+</text>
                        <text class="two">关注</text>
                    </view>
                </view>
            </view>
            <view class="title">这是一遍文章</view>
            <view class="time">
                <view>————文章发表于9小时前————</view>
            </view>
            <view class="bottom"></view>
        </view>
        <view class="item">
            <view class="itemTop">
                <view class="itemImg">
                    <img
                        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620699526&t=21f6c3c48bd1a1e0eb0f60d16f8a9170"
                        alt=""
                    />
                </view>
                <view class="itemName">
                    <view>我才是B站大会员</view>
                </view>
            </view>
            <view class="itemCenter"></view>
            <view class="itemBottom">
                <view class="itemTime">13个小时前</view>
                <view class="itemParise">点赞2010</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'detail',
    data() {
        return {
            cfg: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            }
        }
    },
    methods: {
        // #ifdef H5
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/community/community'
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
.box {
    width: 95%;
    height: 400px;
    background-color: #ffffff;
    margin: 10px auto;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #e3e1e1;
    border: 1px #cccccc solid;
    border-bottom: none;
}
.top {
    height: 55px;
    width: 100%;

    margin-top: 10px;
    display: flex;
    position: relative;
    border-radius: 5px;
}
.left {
    width: 70%;
    height: 100%;

    display: flex;
}
.img {
    height: 100%;
    width: 30%;
}
.img img {
    padding-left: 10px;
    padding-top: 5px;
    width: 70%;
    height: 70%;
    border-radius: 45%;
}
.name {
    display: flex;
    align-items: center;
}
.right {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.follow {
    background-color: #f3efef;
    width: 70%;
    font-size: 16px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    opacity: 0.7;
}
.two {
    margin-left: 15px;
}
.title {
    height: 25px;
    width: 100%;

    margin-top: 10px;
    font-weight: 500;
    padding-left: 10px;
    border-radius: 5px;
}
.time {
    height: 20px;
    display: flex;
    justify-content: center;
}
.bottom {
    width: 95%;
    height: 260px;
    background-color: #f6f3f3;
    border-radius: 5px;
    margin: 10px auto;
}

.item {
    width: 95%;
    height: 170px;
    background-color: #ffffff;
    margin: 10px auto;
    border-radius: 5px;
    box-shadow: 5px 5px 5px #e3e1e1;
    border: 1px #cccccc solid;
    border-bottom: none;
}
.itemTop {
    width: 100%;
    height: 40px;
    display: flex;
    margin-top: 5px;
}
.itemImg {
    width: 20%;
    height: 100%;

    display: flex;
    align-items: center;
}
.itemImg img {
    height: 90%;
    width: 70%;
    border-radius: 50%;
    padding-left: 10px;
}
.itemName {
    display: flex;
    align-items: center;
    width: 80%;
    height: 100%;
    font-weight: 500;
}
.itemCenter {
    width: 76%;
    height: 80px;
    background-color: #faf8f8;
    margin-top: 7px;
    margin-left: 20%;
    border-radius: 10px;
}
.itemBottom {
    width: 76%;
    height: 30px;

    margin-top: 7px;
    margin-left: 20%;
    border-radius: 5px;
    position: relative;
}
.itemTime {
    float: left;
    left: 0;
    opacity: 0.7;
}
.itemParise {
    float: right;
    opacity: 0.7;
}
</style>
