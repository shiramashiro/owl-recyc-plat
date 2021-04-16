<template>
    <view class="community">
        <view class="top-wrap padding-lr-sm">
            <view class="top">
                <view class="secondary-market-entry flex align-center">
                    <view
                        class="col-1 flex align-center margin-right-sm margin-left-sm"
                    >
                        <image src="@/static/old-book.png"></image>
                    </view>
                    <view
                        class="col-2 flex align-center justify-between margin-tb-sm"
                    >
                        <view class="col-1-1">
                            <view class="row-1 text-bold margin-bottom-xs">
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
        <view class="body margin-lr-sm">
            <view class="activities">
                <view class="activity-title margin-top-sm flex align-center">
                    <view class="col-1 flex align-center">
                        <image src="@/static/speaker.png"></image>
                    </view>
                    <view class="col-2 flex align-center justify-between">
                        <view class="col-1-1 text-lg">官方活动</view>
                        <view
                            class="col-1-2 text-gray text-sm flex align-center"
                        >
                            全部
                            <view class="more"></view>
                        </view>
                    </view>
                </view>
                <activity
                    v-for="(activity, index) in activities"
                    :data="activity"
                    :key="index"
                ></activity>
            </view>
            <view class="posts">
                <post
                    v-for="(post, index) in posts"
                    :key="index"
                    :data="post"
                ></post>
            </view>
        </view>
    </view>
</template>

<script>
import activity from '@/components/community/activity.vue'
import post from '@/components/community/post.vue'

export default {
    name: 'community',
    components: { activity, post },
    data() {
        return {
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
            ],
            posts: [
                {
                    id: 1,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                },
                {
                    id: 2,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                },
                {
                    id: 3,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                },
                {
                    id: 3,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                },
                {
                    id: 3,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.community {
    .top-wrap {
        background-image: url('@/static/community-bg.png');
        background-size: 100% 100%;
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
        .activities {
            .activity-title {
                .col-1 image {
                    width: 45rpx;
                    height: 45rpx;
                }

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
        }
    }
}
</style>
