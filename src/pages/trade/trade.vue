<template>
    <view class="trade">
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

        <!-- 可交易的书籍 -->
        <owl-fiche :title="'书籍'" :sub-title="'优质的二手书籍'" :icon-path="require('../../assets/icon/交易.png')">
            <view class="shelves flex align-center">
                <!-- 交易 -->
                <view class="item padding-sm" v-for="(item, index) in tradableBooks" :key="index">
                    <!-- 书籍封面 -->
                    <image model="aspectFit" :src="item.book.cover" />
                    <view class="content">
                        <!-- 标签 -->
                        <view class="row-1 margin-top-sm flex align-center">
                            <owl-tag class="margin-right-xs" v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex">{{ tagItem }}</owl-tag>
                        </view>
                        <!-- 交易标题 -->
                        <view class="row-2 text-lg">{{ item.title }}</view>
                        <view class="row-3 margin-top-sm flex align-center">
                            <!-- 交易价格 -->
                            <view class="price text-red text-lg margin-right-sm">¥{{ item.book.price }}</view>
                            <!-- 喜欢此交易的人数 -->
                            <view class="text-sm text-gray">{{ item.like }}人想要</view>
                        </view>
                        <view class="row-4 margin-top-sm flex align-center">
                            <!-- 用户头像 -->
                            <owl-avatar :size="25" :src="item.user.avatar"></owl-avatar>
                            <!-- 用户名称 -->
                            <view class="margin-left-sm">{{ item.user.username }}</view>
                        </view>
                        <!-- 信用 -->
                        <owl-tag class="row-5 margin-top-sm" :radius="10" :type="'hollow'" :width="70">信用{{ item.user.credit }}</owl-tag>
                    </view>
                </view>
            </view>
        </owl-fiche>
        <!-- <view class="make-post">
            <navigator :url="'/pages/transfer/post-editor'">
                <view class="post-btn-wrap">
                    <image mode="aspectFit" src="https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/make-new-post.png"></image>
                </view>
            </navigator>
        </view> -->
    </view>
</template>

<script>
import tradableBooks from '@/assets/data/tradable-books.js'

export default {
    name: 'trade',
    data() {
        return {
            tradableBooks
        }
    },
    mounted() {}
}
</script>

<style lang="scss" scoped>
.trade {
    background-color: rgb(248, 248, 248);
    .donation {
        padding: 45rpx 140rpx;

        image {
            width: 120rpx;
            height: 120rpx;
        }
    }

    .shelves {
        flex-wrap: wrap;

        .item {
            width: 50%;
            background-color: white;

            image {
                width: 100%;
                height: 350rpx;
            }

            .content {
                .row-1 {
                    flex-wrap: wrap;
                }

                .row-3,
                .row-4,
                .row-2 {
                    word-break: break-all;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 1;
                }
            }
        }
    }

    // .make-post {
    //     .post-btn-wrap {
    //         opacity: 0.75;
    //         position: fixed;
    //         bottom: 400rpx;
    //         z-index: 998;
    //         right: 20rpx;

    //         image {
    //             border-radius: 100%;
    //             width: 70rpx;
    //             height: 70rpx;
    //             padding: 14rpx;
    //             background-color: white;
    //             box-shadow: 5rpx 5rpx 10rpx #87cefa;
    //         }
    //     }
    // }
}
</style>
