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
                :iconWidth="'65rpx'"
                :iconHeight="'65rpx'"
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
            <view class="posts margin-top-sm">
                <posts @selected="choosePost"></posts>
            </view>
        </view>
    </view>
</template>

<script>
import Activity from '@/components/community/activity.vue'
import Posts from '@/components/community/posts.vue'

export default {
    name: 'community',
    components: { Activity, Posts },
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
            ]
        }
    },
    methods: {
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
}
</style>
