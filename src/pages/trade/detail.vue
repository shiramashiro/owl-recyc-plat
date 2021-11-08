<template>
    <view class="detail">
        <!-- 发表用户信息 -->
        <view class="top-bar flex">
            <image src="../../static/icon/mine/about.png"></image>
            <view class="flex justify-between">
                <view class="user-message">
                    <view class="user-name">用户名</view>
                    <view class="time">3天前发布了该贴</view>
                </view>
                <view class="follow">+关注</view>
            </view>
        </view>
        <view class="price">￥50.62</view>
        <view class="describe">九成新进口书籍，随机赠送小礼品。</view>
        <view class="label flex justify-between">
            <view class="state">用户信誉极好</view>
            <view class="degree">九成新</view>
            <view class="stock">未出售</view>
        </view>
        <view class="pic"><image src="http://img3m5.ddimg.cn/6/32/29161545-1_l_14.jpg', 'http://img3m0.ddimg.cn/46/24/28477000-1_b_6.jpg"></image></view>
         <!-- <owl-comment
            :url="'http://1.116.123.44:8000/index/publish/comment'"
            :agree-url="'http://1.116.123.44:8000/index/publish/agree'"
            :oppose-url="'http://1.116.123.44:8000/index/publish/oppose'"
            :source-id="book.id"
            :sponsor-id="1"
            :comments="book.comments"
        ></owl-comment> -->
    </view>
</template>

<script>
export default {
    name: 'detail'
}
</script>

<style lang="scss" scoped>
.detail {
    .top-bar {
        image {
            width: 100rpx;
            height: 100rpx;
            border-radius: 100%;
        }
    }
    .user-message {
        margin-top: 10rpx;
        margin-left: 10rpx;
        margin-right: 300rpx;
        .user-name {
            font-size: 25rpx;
            color: black;
            text-shadow: gray;
            font-weight: bold;
        }
        .time {
            color: gray;
            margin-top: 10rpx;
        }
    }
    .follow {
        margin-top: 15rpx;
        width: 100rpx;
        height: 45rpx;
        text-align: center;
        border-radius: 15rpx;
        border: gray 1rpx solid;
    }
    .price {
        color: red;
        font-size: 45rpx;
    }
    .describe {
        font-size: 30rpx;
    }
    .label {
        margin: 30rpx;
        // 状态
        .state {
            width: 180rpx;
            border-radius: 15rpx;
            border: gray 1rpx solid;
            text-align: center;
        }
        // 新旧程度
        .degree {
            width: 100rpx;
            border-radius: 15rpx;
            border: gray 1rpx solid;
            text-align: center;
        }
        // 是否卖出
        .stock {
            width: 100rpx;
            border-radius: 15rpx;
            border: gray 1rpx solid;
            text-align: center;
        }
    }
}
</style>
