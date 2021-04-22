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
                    <owl-avatar
                        :size="80"
                        :src="
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/user05.png'
                        "
                    ></owl-avatar>
                </view>
                <view
                    class="user-info margin-tb-xl"
                    :style="{ width: width + 'px' }"
                >
                    <input
                        @input="onPhoneKeyInput"
                        v-model="phoneValue"
                        placeholder-style="font-size: 28rpx"
                        type="text"
                        class="margin-bottom-sm"
                        placeholder="您的手机号"
                    />
                    <input
                        @input="onPwdKeyInput"
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
            phoneValue: '',
            pwdValue: '',
            isInputedPhone: false,
            isInputedPwd: false,
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
        signin() {
            // 发起异步请求...
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

.signin {
    background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew13.photophoto.cn%2F20190507%2Fxiaoqingxinbeijingtu-33040572_1.jpg&refer=http%3A%2F%2Fpicnew13.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621392403&t=2b129de3de7282b951fbeacbbb0dd2c1')
        no-repeat;
}

.user-info input {
    height: 70rpx;
    border-bottom: 1px #87cefa solid;
}
</style>
