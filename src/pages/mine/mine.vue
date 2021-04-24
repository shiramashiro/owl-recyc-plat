<template>
    <view class="mine">
        <view class="bg">
            <image
                class="image"
                mode="aspectFill"
                src="https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/photos/86097313_p0.jpg"
            ></image>
        </view>
        <view class="content padding-lr-sm">
            <view class="user-brief">
                <view class="brief-wrap">
                    <view v-if="!$store.state.isSignin" class="rows">
                        <view
                            class="row-1 text-center"
                            @click="goToTargetPage('/pages/entry/signin')"
                        >
                            <image
                                mode="aspectFill"
                                :src="
                                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/default-avatar.png'
                                "
                            ></image>
                            <view class="text-lg text-black margin-top-xs"
                                >点击登录</view
                            >
                        </view>
                        <view class="row-2 text-center text-gray text-sm">
                            登陆解锁更多精彩内容哟
                        </view>
                    </view>
                    <view v-else class="rows">
                        <view class="row-1 text-center">
                            <image
                                mode="aspectFill"
                                :src="$store.state.userInfo.avatar"
                            ></image>
                        </view>
                        <view class="row-2 flex justify-end text-gray text-sm">
                            <view
                                @click="goToTargetPage('/pages/mine/homepage')"
                                class="homepage text-center padding-xs"
                                >个人主页 ></view
                            >
                        </view>
                    </view>
                </view>
            </view>
            <view class="margin-top-sm">
                <owl-fiche :title="'服务'" :isLrMargin="false">
                    <tui-list-view color="#777">
                        <tui-list-cell
                            v-for="(cell, index) in listCells"
                            :key="index"
                            :hover="true"
                            :arrow="true"
                        >
                            <view
                                class="flex text-sm align-center"
                                @click="cell.action"
                            >
                                <view class="icon margin-right-xs">
                                    <image
                                        mode="aspectFit"
                                        style="width: 30rpx; height: 30rpx"
                                        :src="cell.icon"
                                    ></image>
                                </view>
                                <view class="name">{{ cell.name }}</view>
                            </view>
                        </tui-list-cell>
                    </tui-list-view>
                </owl-fiche>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'mine',
    data() {
        return {
            listCells: [
                {
                    icon:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/customer-service.png',
                    name: '联系客服',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/homepage'
                        })
                    }
                },
                {
                    icon:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/update.png',
                    name: '检查更新',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/homepage'
                        })
                    }
                },
                {
                    icon:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/advice.png',
                    name: '建议与反馈',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/homepage'
                        })
                    }
                },
                {
                    icon:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/about.png',
                    name: '关于猫头鹰',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/homepage'
                        })
                    }
                }
            ]
        }
    },
    methods: {
        goToTargetPage(targetPage) {
            uni.navigateTo({ url: targetPage })
        }
    }
}
</script>

<style lang="scss" scoped>
.mine {
    background-color: #f8f8f8;

    .bg {
        .image {
            width: 100%;
            height: 250rpx;
        }
    }

    .content {
        background-color: white;

        .user-brief {
            position: relative;

            .brief-wrap {
                position: inherit;
                top: -60rpx;

                .rows {
                    .row-1 {
                        width: 180rpx;
                        image {
                            width: 165rpx;
                            height: 165rpx;
                            border-radius: 100%;
                        }
                    }

                    .row-2 {
                        .homepage {
                            width: 160rpx;
                            border-radius: 10rpx;
                            border: 1rpx #cccc solid;
                        }
                    }
                }
            }
        }
    }
}
</style>
