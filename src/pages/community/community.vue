<template>
    <view class="community">
        <view class="top-wrap padding-lr-xs">
            <view class="top">
                <!-- 内容，暂时没有 -->
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
                :navigateTo="'/pages/community/more'"
                :URLAttrs="['tagType=official']"
            >
                <activities
                    @selected="chooseActivity"
                    class="margin-lr-sm"
                ></activities>
            </owl-fiche>
            <owl-fiche
                :iconWidth="'45rpx'"
                :iconHeight="'45rpx'"
                :iconPath="
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/hot.png'
                "
                class="margin-top-sm"
                :title="'全社热帖'"
                :navigateTo="'/pages/community/more'"
                :URLAttrs="['browseNum=100']"
            >
                <hot-posts @selected="chooseHotPost"></hot-posts>
            </owl-fiche>
            <view class="posts margin-top-sm">
                <posts :requestURL="'/get/post'" @selected="choosePost"></posts>
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
import Activities from '@/components/community/activities.vue'
import HotPosts from '@/components/community/hot-posts.vue'

export default {
    name: 'community',
    components: { Activities, Posts, HotPosts },
    methods: {
        makePost() {
            uni.navigateTo({
                url: '/pages/community/make-post'
            })
        },
        chooseHotPost(info) {
            this.choosePost(info)
        },
        chooseActivity(info) {
            this.choosePost(info)
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
