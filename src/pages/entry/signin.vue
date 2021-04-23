<template>
    <view class="signin">
        <view class="status_bar"> </view>
        <owl-navbar :config="config">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
            </view>
        </owl-navbar>
        <view
            class="signin-wrap flex align-center justify-center"
            :style="{ height: height + 'px' }"
        >
            <view class="sigin-body">
                <view class="avatar flex align-center justify-center">
                    <owl-avatar :size="80" :src="avatarUrl"></owl-avatar>
                </view>
                <view
                    class="user-info margin-tb-xl"
                    :style="{ width: width + 'px' }"
                >
                    <input
                        :class="[onPhoneSelected ? 'selected' : 'signin-input']"
                        @input="onPhoneKeyInput"
                        @click="onPhoneSelected = true"
                        @blur="getAvatar"
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
                <view class="signin-btn" :style="{ width: width + 'px' }">
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
                    :style="{ width: width + 'px' }"
                >
                    <view class="forget-pwd" @click="forgetPwd">忘记密码?</view>
                    <view class="signup" @click="signup">新用户注册</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'signin',
    data() {
        return {
            height: 0,
            onPhoneSelected: false,
            onPwdSelected: false,
            phoneValue: '',
            pwdValue: '',
            isInputedPhone: false,
            isInputedPwd: false,
            avatarUrl:
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/default-avatar.png',
            width: 0,
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false,
                isCustomImmerse: true
            }
        }
    },
    onReady() {
        uni.getSystemInfo({
            success: res => {
                this.height = res.windowHeight
                this.width = res.windowWidth * 0.7
            }
        })
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
        /**
         * 当手机号输入框失去焦点后，向服务器查询该用户的头像，
         * 如果查询到头像，则把默认头像地址替换为当前用户的头像，
         * 如果没有查询到头像，则仍旧以默认头像地址为准。
         */
        getAvatar() {
            this.onPhoneSelected = false
            if (this.phoneValue != '') {
                this.$axios
                    .get('/get/signin/avatar', {
                        params: {
                            phone: this.phoneValue
                        }
                    })
                    .then(resp => {
                        if (resp.data.object != null) {
                            this.avatarUrl = resp.data.object
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
        signin() {
            // 发起登陆的请求...
            console.log('登陆...')
        },
        forgetPwd() {
            console.log('触发服务...跳转相应的页面！')
        },
        signup() {
            console.log('触发服务...跳转相应的页面！')
        },
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/index/index'
            })
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

.status_bar {
    height: var(--status-bar-height);
    width: 100%;
}

.navi-content {
    height: 100%;
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
