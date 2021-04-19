<template>
    <view class="community">
        <view class="top-wrap padding-lr-xs">
            <view class="top">
                <view class="secondary-market-entry flex align-center">
                    <view
                        class="col-1 flex align-center margin-right-sm margin-left-sm"
                    >
                        <image src="@/static/transfered-book.png"></image>
                    </view>
                    <view
                        class="col-2 flex align-center justify-between margin-tb-sm"
                    >
                        <view class="col-1-1">
                            <view class="row-1 margin-bottom-xs">
                                二手书籍转让区
                            </view>
                            <view class="row-2 text-gray text-sm">
                                提高书籍利用率·减少纸张浪费
                            </view>
                        </view>
                        <navigator :url="'/pages/community/secondhand'">
                            <view
                                class="col-1-2 text-sm flex align-center margin-right-lg"
                            >
                                进入
                                <view class="more"></view>
                            </view>
                        </navigator>
                    </view>
                </view>
            </view>
        </view>
        <view class="body margin-lr-xs">
            <owl-fiche
                class="margin-top-sm"
                :title="'官方活动'"
                :iconWidth="'45rpx'"
                :iconHeight="'45rpx'"
                :iconPath="
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/speaker.png'
                "
                :url="'/pages/community/more-activity'"
            >
                <activity
                    class="margin-lr-sm"
                    v-for="(activity, index) in activities"
                    :data="activity"
                    :key="index"
                ></activity>
            </owl-fiche>
            <owl-fiche
                :iconWidth="'45rpx'"
                :iconHeight="'45rpx'"
                :iconPath="
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/hot.png'
                "
                class="margin-top-sm"
                :title="'全社热帖'"
                :url="'/pages/community/more-activity'"
            >
                <hot-posts :data="hotPosts"></hot-posts>
            </owl-fiche>
            <view class="posts margin-top-sm">
                <posts @selected="choosePost"></posts>
            </view>
        </view>
        <view class="make-post">
            <view class="post-btn-wrap" @click="makePost">
                <image
                    mode="aspectFit"
                    src="https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/make-new-post.png"
                ></image>
            </view>
        </view>
    </view>
</template>

<script>
import Posts from '@/components/community/posts.vue'
import Activity from '@/components/community/activity.vue'
import HotPosts from '@/components/community/hot-posts.vue'

export default {
    name: 'community',
    components: { Activity, Posts, HotPosts },
    data() {
        return {
            hotPosts: [
                {
                    id: 1,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    breif:
                        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    browse: 100
                },
                {
                    id: 1,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    breif:
                        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    browse: 100
                },
                {
                    id: 1,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    breif:
                        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    browse: 100
                }
            ],
            activities: [
                {
                    title: '转让二手书籍，获得10个金币！',
                    tag: '活动',
                    time: '04-09'
                },
                {
                    title: '转让二手书籍，获得10个金币！',
                    tag: '活动',
                    time: '04-09'
                }
            ]
        }
    },
    methods: {
        makePost() {
            uni.navigateTo({
                url: '/pages/community/make-post'
            })
        },
        choosePost(info) {
            uni.navigateTo({
                url: '/pages/community/post-detail?id=' + info.item.id
            })
        }
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
            height: 410rpx;
            position: relative;

            .secondary-market-entry {
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
    }

    .make-post {
        .post-btn-wrap {
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
