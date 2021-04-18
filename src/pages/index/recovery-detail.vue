<template>
    <view class="recovery-detail">
        <view class="status_bar"> </view>
        <navbar :config="config">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
                <view class="margin-left-lg text-lg">回收点详细</view>
            </view>
        </navbar>
        <view class="recovery-wrap margin-lr-xs margin-top-xs">
            <view class="recovery-info">
                <image mode="aspectFill" :src="recovery.url"></image>
                <view
                    class="detail-wrap padding-lr-sm padding-bottom-sm margin-top-sm"
                >
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
            </view>
            <subdomain class="margin-top-sm" :title="'评论区'">
                <post-comment
                    :postUrl="'/set/recovery/comment'"
                    :belongedId="recovery.id"
                    class="padding-lr-sm"
                ></post-comment>
                <comment
                    class="padding-lr-sm"
                    @express="expressView"
                    :data="recovery.recoveryComment"
                ></comment>
            </subdomain>
        </view>
    </view>
</template>

<script>
import Subdomain from '@/components/subdomain.vue'
import Comment from '@/components/comment.vue'
import PostComment from '@/components/post-comment.vue'

export default {
    name: 'RecoveryDetail',
    components: { Comment, Subdomain, PostComment },
    data() {
        return {
            recovery: {},
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false,
                isCustomImmerse: false
            },
            holiday: ['周四', '周五']
        }
    },
    methods: {
        expressView(info) {
            console.log(info)
        },
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/index/index'
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

    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }

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
