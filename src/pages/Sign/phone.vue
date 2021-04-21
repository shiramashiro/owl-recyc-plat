<template>
    <view>
        <owl-navbar :config="config">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
                <view class="margin-left-lg text-lg">登录</view>
            </view>
        </owl-navbar>
        <view class="container">
            <view class="title1" @click="change" v-if="isShow">
                {{ message1 }}
            </view>
            <view class="title1" @click="change" v-else>{{ message2 }}</view>
            <view class="box1" v-if="isShow">
                <view class="image">
                    <view>
                        <image
                            mode="scaleToFill  "
                            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F7cf333adcb1562190d5be0b57803e37dfb26627615ad9c-kXca6I_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621423255&t=c3943783d9744feb3c4837a4e2e475a6"
                            alt=""
                        >
                        </image>
                    </view>
                </view>
                <view class="list">
                    <view class="item">
                        <view class="title">
                            <view>账号</view>
                        </view>
                        <view class="input"
                            ><input type="number" placeholder="请输入手机号"
                        /></view>
                        <view class="tips"></view>
                    </view>
                    <view class="item">
                        <view class="title">
                            <view>密码</view>
                        </view>
                        <view class="input"
                            ><input type="number" placeholder="请输入密码"
                        /></view>
                        <view class="tips">忘记密码?</view>
                    </view>
                </view>
                <view class="box1Btn">
                    <button class="btn1" @click="change">注册</button>
                    <button class="btn2">登录</button>
                </view>
            </view>
            <view class="box2" v-else>
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
                            <view>中国大陆</view>
                        </view>
                        <view class="input"></view>
                        <view
                            class="tips"
                            style="color: black;padding-left: 20rpx;font-size: 32rpx"
                            >>
                        </view>
                    </view>
                    <view class="item">
                        <view class="title">
                            <view>+86</view>
                        </view>
                        <view class="input"
                            ><input type="number" placeholder="请输入手机号"
                        /></view>
                        <view
                            class="tips"
                            style="color: #cccccc;border-left: 1px solid  #87cefa ;"
                            >获取验证码</view
                        >
                    </view>
                    <view class="item">
                        <view class="title">
                            <view>验证码</view>
                        </view>
                        <view class="input"
                            ><input type="number" placeholder="请输入验证码"
                        /></view>
                        <view class="tips" style="color: #cccccc"></view>
                    </view>
                </view>
                <view class="box2Btn">
                    <button>验证登录</button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'duanxin',
    data() {
        return {
            message1: '短信登录',
            message2: '密码登录',
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
        change() {
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
.title1 {
    top: 14rpx;
    right: 64rpx;
    font-size: 30rpx;
    position: absolute;
}
.container {
    height: 1280rpx;
    /*background: black;*/
    display: flex;
    align-items: center;
    justify-content: center;
}
.box1,
.box2 {
    /*border: 1px solid #cccccc;*/
    border-radius: 16rpx;
    /*box-shadow: 5px 5px 5px #e5dfdf;*/
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
    margin-left: 10rpx;
}
.image image {
    height: 100%;
    border-radius: 16rpx;
    padding-left: 10px;
}
.list {
    width: 100%;
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
    width: 20%;
    height: 84rpx;
}
.item .input {
    width: 65%;
    height: 84rpx;
    padding-left: 20rpx;
}
.item .tips {
    width: 25%;
    height: 84rpx;

    color: #87cefa;
}
.box1Btn {
    height: 88rpx;
    width: 95%;
    margin: 20rpx auto;
    display: flex;
}
.box1Btn .btn1,
.btn2 {
    width: 45%;
}
.box1Btn .btn1 {
    background: #87cefa;
}
.box1Btn .btn2 {
    background: #87cefa;
}
.box1Btn .btn2 {
    opacity: 0.7;
    background: #efebeb;
}
.box2Btn {
    width: 95%;
    margin: 20rpx auto;
}
.box2Btn button {
    background: #87cefa;
}
</style>
