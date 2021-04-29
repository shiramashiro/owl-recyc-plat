<template>
    <view class="signin">
        <tui-navigation-bar :isFixed="true" :isOpacity="true">
            <navigator :url="'/pages/mine/mine'" open-type="switchTab">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-lg">登录</view>
        </tui-navigation-bar>
        <view
            class="signin-wrap flex align-center justify-center"
            :style="{ height: $systemInfo.windowHeight + 'px' }"
        >
            <view class="sigin-body">
                <view class="avatar flex align-center justify-center">
                    <owl-avatar :size="80" :src="avatarUrl"></owl-avatar>
                </view>
                <view
                    class="user-info margin-tb-xl"
                    :style="{ width: $systemInfo.windowWidth * 0.7 + 'px' }"
                >
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
                <view
                    class="signin-btn"
                    :style="{ width: $systemInfo.windowWidth * 0.7 + 'px' }"
                >
                    <tui-button
                        :height="'75rpx'"
                        :size="30"
                        @click="signin"
                        :disabled="!isInputedPhone || !isInputedPwd"
                    >
                        登录
                    </tui-button>
                </view>
                <view
                    class="help margin-top-sm flex align-center justify-between"
                    :style="{ width: $systemInfo.windowWidth * 0.7 + 'px' }"
                >
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
            avatarUrl:
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/default-avatar.png',
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
                        this.showTips(
                            '登陆失败~请检查密码是否错误！',
                            '#EB0909'
                        )
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
