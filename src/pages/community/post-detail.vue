<template>
    <view class="post-detail">
        <view class="status_bar"> </view>
        <owl-navbar
            style="background-color: rgb(248, 248, 248); box-shadow: 8rpx 8rpx 2rpx #f1f0f0;"
            :config="config"
        >
            <view class="navi-content flex align-center">
                <view>
                    <i
                        @click="backIntoIndex()"
                        class="el-icon-third-fanhui"
                    ></i>
                </view>
                <view class="margin-left-lg text-lg">帖子详情</view>
            </view>
        </owl-navbar>
        <view class="post-panel padding-top-sm padding-lr-sm">
            <view class="row-1 flex align-center justify-between">
                <view class="col-1 flex align-center">
                    <view class="col-1-1">
                        <owl-avatar
                            :size="30"
                            :src="
                                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg'
                            "
                        ></owl-avatar>
                    </view>
                    <view class="col-1-2 margin-left-sm text-sm">
                        kongsam
                    </view>
                </view>
                <view class="col-2">
                    <tui-button
                        :plain="true"
                        :height="'40rpx'"
                        :width="'100rpx'"
                        :type="'primary'"
                        :size="24"
                    >
                        + 关注</tui-button
                    >
                </view>
            </view>
            <view class="panel margin-tb-lg">
                <view class="row-1 flex">
                    <owl-tag :type="'primary'" :height="'22px'" :width="'70px'"
                        >需求帖</owl-tag
                    >
                    <view
                        class="title margin-left-xs text-lg"
                        style="word-break: break-all"
                    >
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </view>
                </view>
                <view class="row-2 text-xs text-gray text-center margin-tb-lg">
                    —— 文章发表：04-13 ——
                </view>
                <view class="row-3">
                    <view class="content margin-bottom-sm">
                        三年后多多多多多多多多多多多
                        多多多多多多多多多多多多多多多多多多多多多多多多
                        多多多多多多多多多多多多多多多多多多多多多多多多哒哒哒哒哒哒多多对多多
                    </view>
                    <view class="imgs">
                        <image
                            class="img"
                            style="width: 100%; border-radius: 10rpx"
                            v-for="(item, index) in imgs"
                            :key="index"
                            mode="aspectFill"
                            :src="item"
                        ></image>
                    </view>
                </view>
            </view>
            <view class="footer flex align-center text-gray text-xs">
                <view
                    class="col-1 margin-right-xs"
                    style="width: 50rpx; height: 50rpx"
                >
                    <image
                        style="width: 100%; height: 100%"
                        src="@/static/browse.png"
                        mode="aspectFit"
                    ></image>
                </view>
                <view class="col-1">帖子浏览数：5000</view>
            </view>
        </view>
        <owl-fiche class="margin-top-sm" :title="'评论区'">
            <owl-comment
                class="padding-lr-sm"
                :data="comment.bookComment"
            ></owl-comment>
        </owl-fiche>
    </view>
</template>

<script>
export default {
    name: 'post-detail',
    data() {
        return {
            imgs: [
                'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/photos/86097313_p0.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/photos/85810903_p0.png',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/photos/85867954_p0.jpg'
            ],
            comment: {},
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            }
        }
    },
    onLoad(option) {
        this.$axios
            .get('/get/detail/book', {
                params: {
                    id: 1
                }
            })
            .then(resp => {
                console.log(resp)
                this.comment = resp.data
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/community/community'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.post-detail {
    background-color: rgb(248, 248, 248);

    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }

    .post-panel {
        background-color: white;

        .panel {
            .row-3 {
                .imgs {
                    .img {
                        margin-bottom: 10rpx;
                    }

                    .img:last-child {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>
