<template>
    <view class="signin">
        <view class="status_bar"> </view>
        <owl-navbar :config="config" :color="color">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
            </view>
        </owl-navbar>
        <view
            class="signin-wrap flex align-center"
            :style="{ height: height + 'px' }"
        >
            <view class="sigin-body">
                <view class="image flex align-center justify-center">
                    <owl-avatar
                        :size="80"
                        :src="
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/user05.png'
                        "
                    ></owl-avatar>
                </view>
                <view class="input">
                    <input type="text" placeholder="手机号/邮箱" />
                    <input type="password" placeholder="密码" />
                </view>
                <button class="btn" :disabled="!isShow">登录</button>
                <view class="forget">
                    <view class="left">忘记密码?</view>
                    <view class="right">新用户注册</view>
                </view>
                <view class="lastBox">
                    <view class="last">
                        <img
                            src="@/static/true.png"
                            height="15"
                            width="15"
                            v-if="isShow"
                            @click="show"
                        />
                        <img
                            src="@/static/checked.png"
                            height="20"
                            width="18"
                            v-else
                            @click="show"
                        />
                        <view>我已阅读协议</view>
                    </view>
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
            color: 'black',
            isShow: true,
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
            }
        })
    },
    methods: {
        show() {
            this.isShow = !this.isShow
        },
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/index/index'
            })
        }
    }
}
</script>

<style scoped>
.status_bar {
    height: var(--status-bar-height);
    width: 100%;
}

.navi-content {
    height: 100%;
}
.signin {
    background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew13.photophoto.cn%2F20190507%2Fxiaoqingxinbeijingtu-33040572_1.jpg&refer=http%3A%2F%2Fpicnew13.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621392403&t=2b129de3de7282b951fbeacbbb0dd2c1')
        no-repeat;
}
.input {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40rpx;
}
.input input {
    width: 70%;
    height: 80rpx;
    border-bottom: 1px #87cefa solid;
    /*border-radius: 16rpx;*/
    margin-top: 40rpx;
}
button {
    margin-top: 40rpx;
    width: 70%;
    height: 80rpx;
    border-radius: 20rpx;
    color: #5a5454;
    background: #87cefa;
}
.forget {
    width: 70%;
    margin: 20rpx auto;
    height: 40rpx;
}
.left {
    float: left;
    color: cornflowerblue;
}
.right {
    float: right;
    color: cornflowerblue;
}
.last img {
    width: 30rpx;
    height: 30rpx;
    padding-top: 10rpx;
}
.lastBox {
    width: 100%;
    display: flex;
    justify-content: center;
}
.last view {
    float: right;
    margin-top: 5rpx;
}
</style>
