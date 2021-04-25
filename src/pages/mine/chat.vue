<template>
<view class="container">

    <view class="topChat">
      <view class="chatLeft">
        <img src="../../static/notice.svg" alt="">
        <view class="notice">不接受推送</view>
        <view class="notice">正常接收</view>
      </view>

      <view class="chatRight">
        <img src="../../static/message.svg" alt="">
      加关注
      </view>
    </view>

    <view class="chatMessage">

    </view>

    <view class="bottom">
      <view class="left"><image src="../../static/chat.svg" alt=""/></view>

      <view class="center">
        <view class="send"><input type="text" placeholder="聊天内容"></view>
        <view class="smiling"><image src="../../static/face.svg"></image></view>
      </view>

      <view class="right">发送</view>
    </view>


</view>
</template>

<script>
export default {
  name: "chat"
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0);

}
.topChat{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110rpx;
  border-bottom:1px solid #eae8e8;
  display: flex;
  background:rgba(0,0,0,0);
}
.chatLeft{
  height: 100%;
  width: 50%;

  position: relative;
}
.chatLeft img{
  position: absolute;
  top: 20rpx;
  left: 14%;
  width: 60rpx;
  height:80rpx;
}
.chatRight{
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left:1px solid #cccccc;
}
.chatRight img{
  left: 18%;
  position: absolute;
  top: 20rpx;

  width: 60rpx;
  height:80rpx;
}
.notice{
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chatMessage{
 overflow: hidden;

}
.bottom{
  background:rgba(0,0,0,0);
  border-top: 1px solid #cccccc;
  width: 100%;
  height: 110rpx;
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.left,.center,.right{
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;

}
.left{
  width: 10%;

}
.left image{
  width: 80%;
  height: 80%;
}
.center{
  opacity: 0.7;
  width: 70%;
  background: #f8f6f6;
 border-radius: 24rpx;
}
.smiling image{
  width: 80%;
  height: 80%;
}
.center .send{
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;

}
.send input{
  height: 100%;
  width: 100%;
}
.center .smiling{
  width: 20%;
  height: 100%;
  justify-content: center;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
}
.right{
  width: 12%;
  border-radius: 24rpx;
  background: #f8f6f6;
  opacity: 0.7;
}
</style>