<template>
    <!-- 组件已全局注册，无需在 main.js 中 import -->
    <view class="owl-action-bar">
        <!-- 注意：**！flex布局和margin、padding都使用colorui的类名，减少css代码，并且个人写没有colorui做的精致。**！ -->
        <!-- 客服这做一个提示，用tui-tips组件，如果用户点击就显示“该功能正在完善中”。这个功能不打算做，只做静态，工作放在重点上。 -->
        <!-- “立即购买”改成“通知回收”，这个按钮圆角也跟着京东的来就行，颜色当然是主题色#87cefa，不是镂空的按钮 -->
        <!-- “加入购物车”改成“暂定回收”，意思跟加入购物车类似，但是主题表达意思不一样，是暂时做了一个回收决定，没有立即通知回收点回收。 -->

      <view class="container flex align-center justify-center  justify-between">
        <view class="item  flex column">
          <view class="top "><image src="../static/serve.svg" alt=""/></view>
          <view class="bottom" @click="serve">客服</view>
        </view>


        <view class="item  flex ">
          <view class="top"><image src="../static/cart.svg" alt=""/></view>
          <view class="bottom">购物车</view>
        </view>

        <view class="item  flex  btn1">
          <tui-button height="80rpx" type="warning" shape="circle" background="#87cefa">通知回收</tui-button>
        </view>

        <view class="item  flex ">
          <tui-button height="80rpx" type="warning" shape="circle">暂定回收</tui-button>
        </view>

      </view>

       <tui-tips backgroundColor="#EB0909"  color='#ffffff'  ref="toast"></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'owl-action-bar',
  data(){
      return{

      }
  },
  methods:{
    showTips: function(e) {
      let index = 0
      let options = {
        msg: "该功能正在完善中",
        duration:  2000,
        type: "green"
      };
      this.$refs.toast.showTips(options);
    },

    serve(){
      this.showTips();
    }
  }
}
</script>

<style lang="css" scoped>
.container{
  width: 100%;
  height: 110rpx;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #f8f6f6;

}
.item{
  width: 23%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.top{
  height: 50%;
}
 .top image{
  width:100rpx;
  height: 80%;
}

</style>
