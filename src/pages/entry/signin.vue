<template>
    <view class="signin">
        <tui-navigation-bar :isFixed="true" :isOpacity="true">
            <navigator :url="'/pages/mine/mine'" open-type="switchTab">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-lg">登录</view>
        </tui-navigation-bar>
        <view class="signin-wrap flex align-center justify-center" :style="{ height: $systemInfo.windowHeight + 'px' }">
            <view class="sigin-body">
                <view class="avatar flex align-center justify-center">
                    <owl-avatar :size="80" :src="avatarUrl"></owl-avatar>
                </view>
                <view class="user-info margin-tb-xl" :style="{ width: $systemInfo.windowWidth * 0.7 + 'px' }">
                    <input
                        :class="[onPhoneSelected ? 'selected' : 'signin-input']"
                        @input="onPhoneKeyInput"
                        @click="onPhoneSelected = true"
                        @blur="onPhoneKeyInputRemove"
                        v-model="phoneValue"
                        placeholder-style="font-size: 28rpx"
                        type="text"
                        class="margin-bottom-sm"
                        placeholder="您的手机号"
                    />
                    <input
                        :class="[onPwdSelected ? 'selected' : 'signin-input']"
                        @input="onPwdKeyInput"
                        @click="onPwdSelected = true"
                        @blur="onPwdSelected = false"
                        v-model="pwdValue"
                        placeholder-style="font-size: 28rpx"
                        type="password"
                        placeholder="您的密码"
                    />
                </view>
                <view class="signin-btn" :style="{ width: $systemInfo.windowWidth * 0.7 + 'px' }">
                    <tui-button :height="'75rpx'" :size="30" @click="signin" :disabled="!isInputedPhone || !isInputedPwd">
                        登录
                    </tui-button>
                </view>
                <view class="help margin-top-sm flex align-center justify-between" :style="{ width: $systemInfo.windowWidth * 0.7 + 'px' }">
                    <view class="forget-pwd" @click="forgetPwd">忘记密码?</view>
                    <navigator :url="'/pages/entry/signup'">
                        <view class="signup">新用户注册</view>
                    </navigator>
                </view>
            </view>
        </view>
        <tui-tips :backgroundColor="tipColor" ref="toast"></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'signin',
    data() {
        return {
            onPhoneSelected: false,
            onPwdSelected: false,
            phoneValue: '',
            pwdValue: '',
            isInputedPhone: false,
            isInputedPwd: false,
            // 1. 把这里的地址也修改了，就是你之前找的那个默认用户头像
            avatarUrl: 'data:image/jpeg;base64,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',
            tipColor: '#19BE6B'
        }
    },
    methods: {
        onPwdKeyInput(evet) {
            this.isInputedPwd = this.estimate(this.pwdValue)
        },
        onPhoneKeyInput(evet) {
            this.isInputedPhone = this.estimate(this.phoneValue)
        },
        estimate(target) {
            return target !== ''
        },
        onPhoneKeyInputRemove() {
            this.onPhoneSelected = false
            if (this.phoneValue != '') {
                this.$axios
                    .get('/get/signin/avatar', {
                        params: {
                            phone: this.phoneValue
                        }
                    })
                    .then(resp => {
                        if (resp.data.object == null) {
                            this.showTips('请检查手机号是否错误！', '#EB0909')
                            return
                        }
                        this.avatarUrl = resp.data.object
                    })
                    .catch(error => {
                        this.showTips('服务器错误', '#EB0909')
                    })
            }
        },
        signin() {
            this.$axios
                .post('/signin', {
                    phone: this.phoneValue,
                    password: this.pwdValue
                })
                .then(res => {
                    if (res.data.code !== 200) {
                        this.showTips('登陆失败~请检查密码是否错误！', '#EB0909')
                        return
                    }
                    this.$store.commit('setUserInfo', res.data.object)
                    this.showTips('登陆成功~', '#19BE6B')
                    setTimeout(() => {
                        uni.switchTab({
                            url: '/pages/mine/mine'
                        })
                    }, 2100)
                })
                .catch(error => {
                    this.showTips('服务器错误', '#EB0909')
                })
        },
        showTips(msg, color) {
            this.tipColor = color
            this.$refs.toast.showTips({
                msg: msg,
                duration: 2000
            })
        },
        forgetPwd() {
            this.showTips('此服务正在开发中...', '#FF7900')
        }
    }
}
</script>

<style lang="css" scoped>
.selected {
    background-color: #f8f8f8;
    height: 70rpx;
    transition: 0.2s;
    padding: 0 5px;
    box-shadow: 0 2px 3px -1px #87cefa;
}

.signin {
    background-color: #f8f8f8;
}

.help {
    color: #87cefa;
}

.signin-input {
    background-color: #f8f8f8;
    transition: 0.2s;
    height: 70rpx;
    border-bottom: 1px #87cefa solid;
}
</style>
