<template>
    <view class="container">
        <view class="status_bar"> </view>
        <owl-navbar
            style="box-shadow: 8rpx 8rpx 2rpx #f1f0f0;"
            :config="config"
        >
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
                <view class="margin-left-lg text-lg">聊天</view>
            </view>
        </owl-navbar>
        <view class="chat-message"> </view>
        <view class="operation flex align-center justify-between padding-lr-xs">
            <view class="left">
                <image src="@/static/chat.svg" />
            </view>
            <view class="center">
                <view class="send">
                    <input
                        v-model="chatContentValue"
                        type="text"
                        placeholder="输入聊天内容"
                    />
                </view>
                <view class="smiling">
                    <image src="@/static/face.svg"></image>
                </view>
            </view>
            <tui-button
                @click="send"
                :size="20"
                :width="'100rpx'"
                :height="'70rpx'"
            >
                发送
            </tui-button>
        </view>
    </view>
</template>

<script>
export default {
    name: 'chat',
    data() {
        return {
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            },
            chatContentValue: ''
        }
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/msg/msg'
            })
        },
        send() {
            console.log('发送')
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

.container {
    width: 100%;
    height: 100vh;
}

.chat-message {
    overflow: hidden;
}

.operation {
    border-top: 1rpx solid #cccc;
    width: 100%;
    height: 110rpx;
    position: fixed;
    bottom: 0;
    right: 0;
}

.left,
.center,
.right {
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.left {
    width: 10%;
}

.left image {
    width: 80%;
    height: 80%;
}

.center {
    opacity: 0.7;
    width: 70%;
    background: #f8f6f6;
    border-radius: 24rpx;
}

.smiling image {
    width: 80%;
    height: 80%;
}

.center .send {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
}

.send input {
    height: 100%;
    width: 100%;
}

.center .smiling {
    width: 20%;
    height: 100%;
    border-radius: 24rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right {
    width: 12%;
    border-radius: 24rpx;
    background: #f8f6f6;
    opacity: 0.7;
}
</style>
