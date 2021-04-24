<template>
  <view>
    <owl-navbar :config="config">
      <view class="navi-content flex align-center">
        <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
        <view class="margin-left-lg text-lg">登录</view>
      </view>
    </owl-navbar>
    <view class="container">


      <view class="box2" :style="{width:width + 'px'}">
        <view class="image">
          <view>
            <image
                mode="scaleToFill "
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7cf333adcb1562190d5be0b57803e37dfb26627615ad9c-kXca6I_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621423255&t=c3943783d9744feb3c4837a4e2e475a6"
                alt=""
            >
            </image>
          </view>
        </view>
        <view class="list">
          <view class="item">
            <view class="title">
              <view>手机号</view>
            </view>
            <view class="input"><input type="text" placeholder="请输入手机号" v-model="phoneValue"></view>
            <view
                class="tips"

            >
            </view>
          </view>
          <view class="item">
            <view class="title">
              <view>密码</view>
            </view>
            <view class="input"
            ><input type="password" placeholder="请输入密码" v-model="passValue"
            /></view>

          </view>
          <view class="item">
            <view class="title">
              <view>用户名</view>
            </view>
            <view class="input"
            ><input type="text" placeholder="请输入用户名"
                    v-model="userName"
            /></view>

          </view>
        </view>
        <view class="box2Btn">
          <button @click="signup" >验证登录</button>
        </view>
      </view>
    </view>
    <!--      1. 随便在哪个地方引入tui-tips组件-->
<!--  4. 可传入props修改提示颜色值  -->
    <tui-tips backgroundColor="#5677fc" color="#fff" :size="30" ref="toast"></tui-tips>
  </view>
</template>

<script>
export default {
  name: 'duanxin',
  data() {
    return {
      // 给一个初始值
      code:400,
      isDisable:true,
      msg:'请输入正确的格式',
     center:'center',
      phoneValue: '',
      passValue: '',
      userName: '',
      width: 0,

      tipColor: '#19BE6B',
      isShow: true,
      config: {
        splitLine: false,
        isFixed: false,
        isOpacity: false,
        isCustom: true,
        tansparent: false,
        isImmersive: false,
        isCustomImmerse: false
      }
    }
  },
  methods: {
    showTips: function(e) {
      let index = 0
      let options = {
        msg:this.msg,
        duration:  2000,
        type: "green"
      };
      this.$refs.toast.showTips(options);
    },

    // 3. 当点击按钮式调用此方法

    backIntoIndex() {
      uni.switchTab({
        url: '/pages/index/index'
      })
    },
    signup() {
      this.$axios.post('/signup', {
        phone: this.phoneValue,
        password: this.passValue,
        username: this.userName
      }).then(res =>{
        // alert(res.data.object)
        // this.msg='注册成功'
        // this.showTips();
        setTimeout(()=>{
          if(res.data.code===this.code){
            this.msg='存在相同的手机号,注册失败'
            this.showTips()
          }else {
            this.msg="注册成功"
            this.showTips()
          }
        },1000)
      })

    },

    },

    onReady() { //相当于mounted
      uni.getSystemInfo({
        success: res => {  //获取对象

          this.width = res.windowWidth * 0.9
        }

      })
    },

}
</script>

<style scoped>


.container {
  height: 1280 rpx;

  display: flex;
  align-items: center;
  justify-content: center;
}


.box2 {

  border-radius: 16 rpx;

  height: 350px;
  width: 95%;
  margin: 0 auto;
}

.box2 {
  height: 400px;
}

.image {
  width: 100%;
  height: 164px;
  display: flex;
}

.image view {
  margin-left: 10 rpx;
}

.image image {

  height: 100%;
  border-radius: 16 rpx;
  padding-left: 10px;
}

.list {
  width: 100%;
  height: 270rpx;
}

.item {
  width: 95%;
  height: 33%;
  display: flex;
  margin: 0 auto;
  border-bottom: 1px #87cefa solid;
}

.title,
.input,
.tips {
  display: flex;
  align-items: center;
  justify-content: center;
}

.item .title {
  width: 30%;
  height: 84 rpx;
}

.item .input {
  width: 70%;
  height: 84 rpx;
  padding-left: 20 rpx;
 background: #ffffff;
}

.item .tips {
  width: 0%;
  height: 84 rpx;

  color: #87cefa;
}

.box2Btn {
  width: 95%;
  margin: 40rpx auto;
}

.box2Btn button {

  background: #87cefa;
}
</style>
