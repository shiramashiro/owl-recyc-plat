<template>
    <view class="community">
        <view class="top-wrap padding-lr-xs">
            <view class="top">
                <!-- 内容区域，保留位置 -->
            </view>
        </view>
        <view class="body margin-lr-xs">
            <owl-fiche
                class="margin-top-sm"
                :title="'官方帖'"
                :iconWidth="'45rpx'"
                :iconHeight="'45rpx'"
                :iconPath="
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/speaker.png'
                "
                :navigateTo="'/pages/more-item'"
                :URLAttrs="['tagType=official', 'backNav=community/community']"
            >
                <view class="activities padding-lr-sm">
                    <view
                        class="activity"
                        v-for="(item, index) in renderedPostsData"
                        :key="index"
                    >
                        <navigator :url="'/pages/post-detail?id=' + item.id">
                            <view class="padding-sm margin-tb-sm">
                                <view
                                    class="row-1 margin-bottom-xs text-cut text-sm"
                                >
                                    {{ item.title }}
                                </view>
                                <view class="flex align-center justify-between">
                                    <owl-tag>
                                        {{ item.tagName }}
                                    </owl-tag>
                                    <view class="text-gray text-xs">
                                        {{ item.time }}
                                    </view>
                                </view>
                            </view>
                        </navigator>
                    </view>
                </view>
            </owl-fiche>
            <owl-fiche
                class="margin-top-sm"
                :iconWidth="'45rpx'"
                :iconHeight="'45rpx'"
                :iconPath="
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/hot.png'
                "
                :title="'全社热帖'"
                :navigateTo="'/pages/more-item'"
                :URLAttrs="['browseNum=100', 'backNav=community/community']"
            >
                <view class="hot-posts padding-lr-sm">
                    <view
                        class="hot-post"
                        v-for="(item, index) in renderedHotPostsData"
                        :key="index"
                    >
                        <navigator :url="'/pages/post-detail?id=' + item.id">
                            <view
                                class="padding-tb-sm flex align-center justify-between"
                            >
                                <view class="col-1 text-sm text-center">
                                    {{ index + 1 }}
                                </view>
                                <view class="col-2 text-cut margin-left-xs">
                                    {{ item.title }}
                                </view>
                                <view
                                    class="text-center text-cut col-3 flex align-center text-gray text-xs"
                                >
                                    <view class="col-3-1">
                                        <image
                                            mode="aspectFill"
                                            src="@/static/hot.png"
                                        ></image>
                                    </view>
                                    <view class="col-3-2">
                                        {{ item.browseNum }}
                                    </view>
                                </view>
                            </view>
                        </navigator>
                    </view>
                </view>
            </owl-fiche>
            <view class="posts margin-top-sm">
                <owl-posts :requestURL="'/get/post'"></owl-posts>
            </view>
        </view>
        <view class="make-post">
            <navigator :url="'/pages/community/make-post'">
                <view class="post-btn-wrap">
                    <image
                        mode="aspectFit"
                        src="https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/make-new-post.png"
                    ></image>
                </view>
            </navigator>
        </view>
    </view>
</template>

<script>
export default {
    name: 'community',
    data() {
        return {
            renderedHotPostsData: [],
            renderedPostsData: []
        }
    },
    /**
     * 执行并发请求
     */
    mounted() {
        this.$axios.all([
            this.$axios
                .get('/get/post', {
                    params: {
                        limitNum: 3,
                        browseNum: 100
                    }
                })
                .then(resp => {
                    this.renderedHotPostsData = resp.data
                })
                .catch(error => {
                    console.log(error)
                }),
            this.$axios
                .get('/get/post', {
                    params: {
                        tagType: 'official'
                    }
                })
                .then(resp => {
                    this.renderedPostsData = resp.data
                })
                .catch(error => {
                    console.log(error)
                })
        ])
    }
}
</script>

<style lang="scss" scoped>
.community {
    background-color: rgb(248, 248, 248);

    .top-wrap {
        background-image: url('@/static/community-bg.png');
        background-position: 18% 85%;
        background-repeat: no-repeat;

        .top {
            height: 310rpx;
            position: relative;

            .content-item {
                position: absolute;
                width: 100%;
                bottom: 25rpx;
                background-color: white;
                border-radius: 14rpx;

                .col-1 image {
                    width: 85rpx;
                    height: 85rpx;
                }

                .col-2 {
                    width: 100%;
                }

                .more::after {
                    content: '\e78a';
                    font-family: 'iconfont' !important;
                    font-style: normal;
                    font-weight: bold;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            }
        }
    }

    .body {
        .col-2 {
            width: 100%;

            .more::after {
                content: '\e78a';
                font-family: 'iconfont' !important;
                font-style: normal;
                font-weight: bold;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        }

        .activities {
            .activity {
                background-color: #e8e8e8;
                border-radius: 12rpx;
            }
        }

        .hot-posts {
            .hot-post {
                margin-bottom: 20rpx;
                border-bottom: 1rpx solid #f0f0f0;

                .col-3-1 image {
                    width: 30rpx;
                    height: 30rpx;
                }

                .col-1 {
                    width: 5%;
                }

                .col-2 {
                    width: 80%;
                }

                .col-3 {
                    width: 15%;
                }
            }

            .hot-post:last-child {
                margin-bottom: 0;
                border-bottom: 0;
            }
        }
    }

    .make-post {
        .post-btn-wrap {
            opacity: 0.75;
            position: fixed;
            bottom: 400rpx;
            z-index: 998;
            right: 20rpx;

            image {
                border-radius: 100%;
                width: 70rpx;
                height: 70rpx;
                padding: 14rpx;
                background-color: white;
                box-shadow: 5rpx 5rpx 10rpx #87cefa;
            }
        }
    }
}
</style>
