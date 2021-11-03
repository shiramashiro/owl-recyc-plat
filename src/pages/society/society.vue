<template>
    <view class="society">
        <!-- 爱心捐赠服务 -->
        <owl-fiche :title="'捐赠'" :sub-title="'捐赠书籍的公益'" :icon-path="require('../../assets/icon/公益捐赠.png')">
            <view class="donation flex align-center justify-between">
                <view class="school-donation">
                    <navigator :url="'/pages/transfer/more-transfer?type=school'">
                        <image model="aspectFill" src="../../assets/icon/学校.png"></image>
                        <view class="text-center">学校</view>
                    </navigator>
                </view>
                <view class="library-donation">
                    <navigator :url="'/pages/transfer/more-transfer?type=library'">
                        <image model="aspectFill" src="../../assets/icon/图书馆.png"></image>
                        <view class="text-center">图书馆</view>
                    </navigator>
                </view>
            </view>
        </owl-fiche>

        <!-- 社区帖子 -->
        <view class="posts card margin-xs padding-sm">
            <view class="item padding-bottom-sm" v-for="(item, index) in posts" :key="index">
                <view class="user-info flex align-center">
                    <owl-avatar :src="item.user.avatar" :size="45"></owl-avatar>
                    <view class="margin-left-sm">
                        <view class="username text-bold text-lg">{{ item.user.username }}</view>
                        <view class="post-date text-gray text-sm">发布于 {{ item.postDate }}</view>
                    </view>
                </view>
                <view class="brief-content margin-top-sm text-lg">{{ item.content }}</view>
                <view class="covers sort-by-one margin-top-sm" v-if="item.covers.length == 1">
                    <image :src="item.covers[0]"></image>
                </view>
                <view class="covers sort-by-two margin-top-sm" v-else-if="item.covers.length == 2">
                    <image :src="item.covers[0]"></image>
                    <image :src="item.covers[1]"></image>
                </view>
                <view class="covers sort-by-three margin-top-sm" v-else>
                    <view class="col-1">
                        <image :src="item.covers[0]"></image>
                    </view>
                    <view class="col-2">
                        <image :src="item.covers[1]"></image>
                        <image :src="item.covers[2]"></image>
                    </view>
                </view>
                <view class="dynamic-data margin-top-sm flex align-center justify-end">
                    <view class="comment flex align-center text-gray margin-right-sm">
                        <image class="comment-icon" mode="aspectFit" src="../../assets/icon/评论.png"></image>
                        <view class="num">
                            <span v-if="item.comments.length < 999">
                                {{ item.comments.length }}
                            </span>
                            <span v-else>999+</span>
                        </view>
                    </view>
                    <view class="like flex align-center text-gray">
                        <image class="like-icon" mode="aspectFit" src="../../assets/icon/点赞.png"></image>
                        <view class="num">
                            <span v-if="item.like < 999">
                                {{ item.like }}
                            </span>
                            <span v-else>999+</span>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import posts from '@/assets/data/posts.js'

export default {
    name: 'society',
    data() {
        return {
            posts
        }
    }
}
</script>

<style lang="scss" scoped>
.society {
    .donation {
        padding: 45rpx 140rpx;

        image {
            width: 120rpx;
            height: 120rpx;
        }
    }

    .posts {
        .item:first-child {
            margin-top: 0;
        }

        .item {
            margin-top: 20rpx;
            border-bottom: 1rpx solid #e5e5e5cc;

            .brief-content {
                display: -webkit-box;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
            }

            .covers {
                height: 380rpx;

                image {
                    border-radius: 20rpx;
                }
            }

            .sort-by-one {
                image {
                    width: 380rpx;
                    height: 100%;
                }
            }

            .sort-by-two {
                display: flex;
                align-items: center;
                justify-content: space-between;

                image {
                    width: 49%;
                    height: 100%;
                }
            }

            .sort-by-three {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .col-1 {
                    width: 55%;

                    image {
                        height: 380rpx;
                    }
                }

                .col-2 {
                    width: 43%;

                    image {
                        height: 190rpx;
                    }
                }
            }

            .dynamic-data {
                image {
                    width: 45rpx;
                    height: 45rpx;
                }
            }
        }
    }
}
</style>
