<template>
    <view class="recovery-detail">
        <tui-navigation-bar>
            <navigator :url="'/pages/index/index'" open-type="switchTab">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-lg">回收点详细</view>
        </tui-navigation-bar>
        <view class="recovery-wrap margin-lr-xs margin-top-xs">
            <view class="recovery-info">
                <image mode="aspectFill" :src="recovery.url"></image>
                <view class="detail-wrap padding-lr-sm margin-tb-sm">
                    <view class="item margin-bottom-sm padding-bottom-sm">
                        <text class="text-bold margin-right-lg">详细地址</text>
                        <text class="info">
                            {{ recovery.address }}
                        </text>
                    </view>
                    <view class="item margin-bottom-sm padding-bottom-sm">
                        <text class="text-bold margin-right-lg">营业时间</text>
                        <text class="info">
                            {{ recovery.openTime }} ~ {{ recovery.closeTime }}
                        </text>
                    </view>
                    <view class="item margin-bottom-sm padding-bottom-sm">
                        <text class="text-bold margin-right-lg">休息时间</text>
                        <template v-for="(item, index) in holiday">
                            <text class="margin-right-sm info" :key="index">
                                {{ item }}
                            </text>
                        </template>
                    </view>
                    <view class="item margin-bottom-sm padding-bottom-sm">
                        <text class="text-bold margin-right-lg">回收次数</text>
                        <text class="info">
                            {{ recovery.times }}
                        </text>
                    </view>
                    <view class="item margin-bottom-sm padding-bottom-sm">
                        <text class="text-bold margin-right-lg">回收价格</text>
                        <text class="info"> {{ recovery.price }}元 / 斤 </text>
                    </view>
                </view>
            </view>
            <owl-fiche class="margin-top-sm">
                <owl-indent ref="indent"></owl-indent>
            </owl-fiche>
            <owl-fiche class="margin-top-sm" :title="'评论区'">
                <owl-make-comment
                    :postUrl="'/set/comment'"
                    :urlType="'recovery'"
                    :belongedId="recovery.id"
                    class="padding-lr-sm"
                ></owl-make-comment>
                <owl-comment
                    class="padding-lr-sm"
                    :belongedName="'recovery'"
                    :data="recovery.comment"
                ></owl-comment>
            </owl-fiche>
            <owl-action-bar
                @rightBtn="notify"
                @leftBtn="notify"
            ></owl-action-bar>
        </view>
        <tui-tips :backgroundColor="tipColor" ref="toast"></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'RecoveryDetail',
    data() {
        return {
            recovery: {
                id: 0,
                comment: [
                    {
                        belongedId: 0,
                        user: {
                            avatar: ''
                        }
                    }
                ]
            },
            holiday: ['周四', '周五'],
            tipColor: '#19BE6B'
        }
    },
    methods: {
        /**
         * 通过refs对象获取组件的getIndent方法。
         * 然后通过自定义函数得知，用户点击的哪一个按钮，
         * 不同的按钮将不同的数据塞入Vuex数组中进行存储。
         * 注意：只有当获取的ident对象存在时才可以设置comit。
         *
         * @param e owl-indent组件返回的indent对象。
         */
        notify(e) {
            let indent = this.$refs.indent.getIndent()
            if (indent !== undefined) {
                indent['tradeContentType'] = 'recovery'
                if (e.type === 'rightBtn') {
                    indent['tradeType'] = 'decide'
                    this.$store.commit('setNowTrade', indent)
                } else {
                    indent['tradeType'] = 'tentative'
                    this.$store.commit('setTentativeTrade', indent)
                }
                if (this.$store.state.isSignin) {
                    indent['userId'] = this.$store.state.userInfo.id
                    this.$axios
                        .post('/set/order', indent)
                        .then(resp => {
                            if (resp.status !== 200) {
                                this.showTips('操作失败！', '#EB0909')
                                return
                            }
                            this.showTips('操作成功！', '#19BE6B')
                        })
                        .catch(error => {
                            this.showTips('服务器错误', '#EB0909')
                        })
                } else {
                    this.showTips('没有登录哦~', '#EB0909')
                }
            }
        },
        showTips(msg, color) {
            this.tipColor = color
            this.$refs.toast.showTips({
                msg: msg,
                duration: 2000
            })
        }
    },
    onLoad(option) {
        this.$axios
            .get('/get/detail/recovery', {
                params: {
                    id: option.id
                }
            })
            .then(res => {
                this.recovery = res.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>

<style lang="scss" scoped>
.recovery-detail {
    background-color: rgb(248, 248, 248);

    .recovery-wrap {
        .recovery-info {
            background-color: white;

            image {
                border-radius: 10rpx;
                width: 100%;
                height: 400rpx;
            }

            .detail-wrap {
                .item {
                    border-bottom: 1rpx #f0f0f0 solid;
                }

                .item:last-child {
                    border-bottom: 0;
                }

                .info {
                    color: #3d3d3d;
                }
            }
        }
    }
}
</style>
