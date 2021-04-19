<template>
 <view class="box">

   <view class="image align-center justify-center">
   <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F83456068.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621392654&t=7acb1fd423c41d7a927bedfe12177343" alt="">
 </view>

   <view class="input">
     <input type="text" placeholder="QQ号/手机号/邮箱">
     <input type="password" placeholder="密码" >

   </view>

   <button class="btn" :disabled="! isShow">登录</button>

   <view class="forget">
     <view class="left">忘记密码?</view>
     <view class="right">新用户注册</view>
   </view>

   <view class="lastBox">
     <view class="last">
       <img src="../../static/true.png" height="15" width="15" v-if="isShow" @click="show"/>
       <img src="../../static/checked.png" height="20" width="18" v-else @click="show"/>
       <view>我已阅读协议</view>
     </view>

   </view>


 </view>
</template>

<script>
import TuiKeyboardInput from "@/components/thorui/tui-keyboard-input/tui-keyboard-input";
export default {
name: "sign",
  components: {TuiKeyboardInput},
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    show(){
      this.isShow=!this.isShow
    }
  }
}
</script>

<style scoped>
.box{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1350rpx;
  /*background: yellow;*/
  background:url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew13.photophoto.cn%2F20190507%2Fxiaoqingxinbeijingtu-33040572_1.jpg&refer=http%3A%2F%2Fpicnew13.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621392403&t=2b129de3de7282b951fbeacbbb0dd2c1") no-repeat ;
}
.image{
 margin-top: 200rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200rpx;
}
.image img{
  width: 140rpx;
  height: 140rpx;
  border-radius: 50%;
}
.input{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40rpx;
}
.input input{
  width: 70%;
  height: 80rpx;
  border: 1px black solid;
  border-radius: 16rpx;
  margin-top: 40rpx;
}
button{
  margin-top: 40rpx;
  width: 70%;
  height: 80rpx;
  border-radius: 20rpx;
  color: #1d1c1c;
}
.forget{
  width: 70%;
  margin: 20rpx auto;
  height: 40rpx;

}
.left{
  float: left;
  color: cornflowerblue;
}
.right{
  float: right;
  color: cornflowerblue;
}
.last img{
  width: 30rpx;
  height: 30rpx;
  padding-top: 10rpx;

}
.lastBox{
  width: 100%;
  display: flex;
  justify-content: center;
}
.last view{
  float: right;
  margin-top: 5rpx;
}



</style>