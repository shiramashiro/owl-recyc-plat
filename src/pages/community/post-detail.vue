<template>
    <view class="post-detail">
        <view class="status_bar"> </view>
        <owl-navbar :config="config">
            <view class="navi-content flex align-center">
                <view>
                    <i
                        @click="backIntoIndex()"
                        class="el-icon-third-fanhui"
                    ></i>
                </view>
                <view class="margin-left-lg text-df text-gray">帖子详情</view>
            </view>
        </owl-navbar>
        <view class="post-panel margin-top-sm padding-top-sm padding-lr-sm">
            <view class="row-1 flex align-center justify-between">
                <view class="col-1 flex align-center">
                    <view class="col-1-1">
                        <owl-avatar
                            :size="30"
                            :src="post.user.avatar"
                        ></owl-avatar>
                    </view>
                    <view class="col-1-2 margin-left-sm text-sm">
                        {{ post.user.username }}
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
                    <owl-tag
                        :type="'primary'"
                        :height="'45rpx'"
                        :width="'120rpx'"
                        >{{ post.tagName }}</owl-tag
                    >
                    <view
                        class="title margin-left-xs text-lg"
                        style="word-break: break-all"
                    >
                        {{ post.title }}
                    </view>
                </view>
                <view class="row-2 text-xs text-gray text-center margin-tb-lg">
                    文章发表：{{ post.time }}
                </view>
                <view class="row-3">
                    <view class="content margin-bottom-sm">
                        {{ post.content }}
                    </view>
                    <view class="imgs">
                        <image
                            class="img"
                            style="width: 100%; border-radius: 10rpx"
                            v-for="(item, index) in post.img"
                            :key="index"
                            mode="aspectFill"
                            :src="item.imgUrl"
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
                <view class="col-1">帖子浏览数：{{ post.browseNum }}</view>
            </view>
        </view>
        <owl-fiche class="margin-top-sm" :title="'评论区'">
            <owl-make-comment
                class="padding-lr-sm"
                :postUrl="'/set/comment'"
                :urlType="'post'"
                :belongedId="post.id"
            ></owl-make-comment>
            <owl-comment
                class="padding-lr-sm"
                :data="post.comment"
            ></owl-comment>
        </owl-fiche>
    </view>
</template>

<script>
export default {
    name: 'post-detail',
    data() {
        return {
            post: {
                id: 0,
                user: {
                    avatar: ''
                },
                img: [
                    {
                        belongedId: 0
                    }
                ],
                comment: [
                    {
                        belongedId: 0,
                        user: {
                            avatar: ''
                        }
                    }
                ]
            },
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
            .get('/get/post', {
                params: {
                    id: option.id
                }
            })
            .then(resp => {
                this.post = resp.data[0]
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
