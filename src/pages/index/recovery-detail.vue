<template>
    <view class="recovery-detail">
        <tui-navigation-bar>
            <navigator :delta="1" open-type="navigateBack">
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
