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
                    <view> 地址：{{ recovery.address }} </view>
                    <view>
                        营业时间：{{ recovery.openTime }} ~
                        {{ recovery.closeTime }}
                    </view>
                    <view>
                        休息时间：
                        <template v-for="(item, index) in holiday">
                            <text class="margin-right-sm" :key="index">
                                {{ item }}
                            </text>
                        </template>
                    </view>
                    <view> 回收次数：{{ recovery.times }} </view>
                    <view> 回收价：{{ recovery.price }}元 / 斤 </view>
                </view>
                <view class="options-wrap padding-lr-sm padding-bottom-sm">
                    <!-- 2021年4月26日23:08:10，指派任务：回收点添加新的交互UI，指派人：yuanhang -->
                </view>
            </view>
            <owl-fiche class="margin-top-sm" :title="'评论区'">
                <owl-make-comment
                    :postUrl="'/set/comment'"
                    :urlType="'recovery'"
                    :belongedId="recovery.id"
                    class="padding-lr-sm"
                ></owl-make-comment>
                <owl-comment
                    class="padding-lr-sm"
                    @express="expressView"
                    :data="recovery.comment"
                ></owl-comment>
            </owl-fiche>
        </view>
        <tui-tips :backgroundColor="tipColor" ref="toast"></tui-tips>
    </view>
</template>

<script>
// 导入mixins
import { setViewMixins } from '@/mixins/set-view.js'

export default {
    name: 'RecoveryDetail',
    mixins: [setViewMixins],
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
            commentType: 'recovery'
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
        }
    }
}
</style>
