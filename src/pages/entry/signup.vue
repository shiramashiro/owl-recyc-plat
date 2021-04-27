<template>
    <view class="signup">
        <tui-navigation-bar :isFixed="true" :isOpacity="true">
            <navigator :url="'/pages/entry/signin'">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-lg">注册</view>
        </tui-navigation-bar>
        <view
            class="container flex align-center justify-center"
            :style="{ height: $systemInfo.windowHeight + 'px' }"
        >
            <view
                class="wrap"
                :style="{ width: $systemInfo.windowWidth * 0.7 + 'px' }"
            >
                <image
                    class="background"
                    mode="aspectFill "
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7cf333adcb1562190d5be0b57803e37dfb26627615ad9c-kXca6I_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621423255&t=c3943783d9744feb3c4837a4e2e475a6"
                >
                </image>
                <view class="list">
                    <view class="item margin-top-sm">
                        <input
                            :class="[
                                onPhoneSelected ? 'selected' : 'signup-input'
                            ]"
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
                            :class="[
                                onUsernameSelected ? 'selected' : 'signup-input'
                            ]"
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
                            :class="[
                                onPwdSelected ? 'selected' : 'signup-input'
                            ]"
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
                <tui-button
                    :height="'75rpx'"
                    :size="30"
                    :disabled="
                        !isInputedPhone || !isInputedPwd || !isInputedUsername
                    "
                    @click="signup"
                    >注册</tui-button
                >
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
            this.$axios
                .post('/signup', {
                    phone: this.phoneValue,
                    password: this.pwdValue,
                    username: this.userNameValue
                })
                .then(res => {
                    if (res.data.code === 400) {
                        this.showTips('存在相同的手机号，注册失败！', '#EB0909')
                        return
                    }
                    this.showTips('注册成功，返回登陆吧！', '#19BE6B')
                })
                .catch(error => {
                    this.showTips('服务器错误', '#EB0909')
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
