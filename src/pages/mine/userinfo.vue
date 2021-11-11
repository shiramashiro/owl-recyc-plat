<template>
  <view class="userinfo card margin-xs padding-sm">
    <view class="username item">
      <view class="label">
        用户名：
      </view>
      <input v-model="userInfo.username" :value="userInfo.username" />
    </view>

    <view class="password item">
      <view class="label">
        密码：
      </view>
      <input v-model="userInfo.password" :value="userInfo.password" />
    </view>

    <view class="avatar-url item">
      <view class="label">
        头像地址：
      </view>
      <input v-model="userInfo.avatar_url" :value="userInfo.avatar_url" />
    </view>

    <view class="phone item">
      <view class="label">
        电话号码：
      </view>
      <input v-model="userInfo.phone" :value="userInfo.phone" />
    </view>

    <view class="signature item">
      <view class="label">
        个性签名：
      </view>
      <input v-model="userInfo.signature" :value="userInfo.signature" />
    </view>

    <view class="background-url item">
      <view class="label">
        背景地址：
      </view>
      <input v-model="userInfo.background_url" :value="userInfo.background_url" />
    </view>
    <view class="update">
      <tui-button @click="update" plain shape="circle">保存</tui-button>
    </view>
    <tui-tips :backgroundColor="tipsColor" position="center" ref="toast"></tui-tips>
  </view>
</template>
<script>
export default {
  name: 'userinfo',
  data() {
    return {
      tipsColor: '',
      userInfo: {
        id: 0,
        username: '',
        password: '',
        avatar_url: '',
        phone: '',
        signature: '',
        backgournd_url: ''
      }
    }
  },
  methods: {
    // 提示消息
    showTips(options) {
      this.tipsColor = options.tipsColor
      this.$refs.toast.showTips({
        msg: options.msg,
        duration: 2000
      })
    },
    update() {
      let flag = false
      for (let key in this.userInfo) {
        if (this.userInfo[key] !== '') {
          flag = true
        }
      }
      if (flag) {
        uni.request({
          url: this.$baseURL + '/index/update/user',
          data: this.userInfo,
          method: 'POST',
          success: res => {
            this.showTips({ tipsColor: '#19BE6B', msg: '保存成功~' })
            this.$store.commit('setUserInfo', this.userInfo)
          },
          fail: res => {
            this.showTips({ tipsColor: '#EB0909', msg: '保存失败！' })
          }
        })
      } else {
        this.showTips({ tipsColor: '#EB0909', msg: '信息不能为空！' })
      }
    }
  },
  onLoad() {
    this.userInfo = this.$store.state.userInfo
  }
}
</script>

<style lang="scss" scoped>
.userinfo {
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;
    border-bottom: 1rpx solid #efe8e8cc;
    padding: 10rpx 0;
    font-size: 34rpx;
  }

  .item:last-child {
    margin-bottom: 0;
    border-bottom: 0;
  }
}
</style>
