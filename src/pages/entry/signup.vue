<template>
  <view class="signup">
    <view class="container flex align-center justify-center" :style="{ height: $deviceInfo.windowHeight + 'px' }">
      <view class="wrap" :style="{ width: $deviceInfo.windowWidth * 0.7 + 'px' }">
        <image class="background" mode="aspectFill " src="https://tse2-mm.cn.bing.net/th/id/OIP-C.nT2leSchjxsqoIdUIWk3SgHaEK?w=329&h=185&c=7&r=0&o=5&dpr=3&pid=1.7"> </image>
        <view class="list">
          <view class="item margin-top-sm">
            <input
              :class="[onPhoneSelected ? 'selected' : 'signup-input']"
              @click="onPhoneSelected = true"
              @blur="onPhoneSelected = false"
              @input="onPhoneKeyInput"
              type="text"
              placeholder-style="font-size: 28rpx"
              placeholder="请输入手机号"
              v-model="phoneValue"
            />
          </view>
          <view class="item margin-top-sm">
            <input
              :class="[onUsernameSelected ? 'selected' : 'signup-input']"
              @blur="onUsernameSelected = false"
              @click="onUsernameSelected = true"
              @input="onUsernameKeyInput"
              type="text"
              placeholder-style="font-size: 28rpx"
              placeholder="请输入用户名"
              v-model="usernameValue"
            />
          </view>
          <view class="item margin-tb-sm">
            <input
              :class="[onPwdSelected ? 'selected' : 'signup-input']"
              @click="onPwdSelected = true"
              @blur="onPwdSelected = false"
              @input="onPwdKeyInput"
              type="password"
              placeholder-style="font-size: 28rpx"
              placeholder="请输入密码"
              v-model="pwdValue"
            />
          </view>
        </view>
        <tui-button :height="'75rpx'" :size="30" :disabled="!isInputedPhone || !isInputedPwd || !isInputedUsername" @click="signup">注册</tui-button>
      </view>
    </view>
    <tui-tips :backgroundColor="tipColor" :size="30" ref="toast"></tui-tips>
  </view>
</template>

<script>
export default {
  name: 'signup',
  data() {
    return {
      onPhoneSelected: false,
      onPwdSelected: false,
      onUsernameSelected: false,
      isInputedPhone: false,
      isInputedPwd: false,
      isInputedUsername: false,
      phoneValue: '',
      pwdValue: '',
      usernameValue: '',
      tipColor: '#19BE6B'
    }
  },
  methods: {
    showTips(msg, color) {
      this.tipColor = color
      this.$refs.toast.showTips({
        msg: msg,
        duration: 2000
      })
    },
    onPwdKeyInput(evet) {
      this.isInputedPwd = this.estimate(this.pwdValue)
    },
    onPhoneKeyInput(evet) {
      this.isInputedPhone = this.estimate(this.phoneValue)
    },
    onUsernameKeyInput(evet) {
      this.isInputedUsername = this.estimate(this.usernameValue)
    },
    estimate(target) {
      return target !== ''
    },
    signup() {
      uni.request({
        url: this.$baseURL + '/index/signup',
        method: 'POST',
        data: {
          phone: this.phoneValue,
          password: this.pwdValue,
          username: this.usernameValue
        },
        success: res => {
          if (res.data.repeat) {
            this.showTips('存在相同的手机号，注册失败！', '#EB0909')
            return
          }
          this.showTips('注册成功，返回登陆吧！', '#19BE6B')
          setTimeout(() => {
            uni.navigateTo({
              url: '/pages/entry/signin'
            })
          }, 1000)
        },
        fail: res => {
          this.showTips('服务器错误', '#EB0909')
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.signup {
  background-color: #f8f8f8;
}

.signup-input {
  background-color: #f8f8f8;
  transition: 0.2s;
  height: 70rpx;
  border-bottom: 1px #87cefa solid;
}

.selected {
  background-color: #f8f8f8;
  height: 70rpx;
  transition: 0.2s;
  padding: 0 5px;
  box-shadow: 0 2px 3px -1px #87cefa;
}

.background {
  width: 100%;
  height: 125px;
}
</style>
