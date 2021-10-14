<template>
    <view class="trade">
        <!-- 爱心捐赠服务窗口 -->
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

        <!-- 已上架的二手书籍 -->
        <owl-fiche :title="'书籍'" :sub-title="'优质的二手书籍'" :icon-path="require('../../assets/icon/交易.png')">
            <view class="shelves flex align-center">
                <view class="item">
                    <view class="item-wrapper margin-xs padding-xs">
                        <image model="aspectFit" src="https://p1.music.126.net/UZducXaYUzyukQuRxZ5rng==/109951166445121244.jpg?imageView&quality=89" />
                        <view class="content">
                            <view class="row-1 margin-top-xs flex align-center">
                                <owl-tag>包邮</owl-tag>
                                <view class="title text-lg">9成新，进口机芯</view>
                            </view>
                            <view class="row-2 margin-top-xs flex align-center">
                                <view class="price">¥50</view>
                                <view class="text-sm text-gray">9人想要</view>
                            </view>
                            <view class="row-3 margin-top-xs flex align-center">
                                <owl-avatar :size="25" :src="'https://p1.music.126.net/UZducXaYUzyukQuRxZ5rng==/109951166445121244.jpg?imageView&quality=89'"></owl-avatar>
                                <view class="margin-left-sm">shiramashiro</view>
                            </view>
                            <view class="row-4 margin-top-xs">
                                <owl-tag :radius="10" :type="'hollow'" :width="70">信用极好</owl-tag>
                            </view>
                        </view>
                    </view>
                </view>

                <view class="item">
                    <view class="item-wrapper margin-xs padding-xs">
                        <image model="aspectFit" src="https://p1.music.126.net/UZducXaYUzyukQuRxZ5rng==/109951166445121244.jpg?imageView&quality=89" />
                        <view class="content">
                            <view class="row-1 margin-top-xs flex align-center">
                                <owl-tag>包邮</owl-tag>
                                <view class="title text-lg">9成新，进口机芯</view>
                            </view>
                            <view class="row-2 margin-top-xs flex align-center">
                                <view class="price">¥50</view>
                                <view class="text-sm text-gray">9人想要</view>
                            </view>
                            <view class="row-3 margin-top-xs flex align-center">
                                <owl-avatar :size="25" :src="'https://p1.music.126.net/UZducXaYUzyukQuRxZ5rng==/109951166445121244.jpg?imageView&quality=89'"></owl-avatar>
                                <view class="margin-left-sm">shiramashiro</view>
                            </view>
                            <view class="row-4 margin-top-xs">
                                <owl-tag :radius="10" :type="'hollow'" :width="70">信用极好</owl-tag>
                            </view>
                        </view>
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
export default {
    name: 'trade',
    data() {
        return {}
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

            .item-wrapper {
                border-radius: 10rpx;
                background-color: white;

                image {
                    width: 100%;
                    height: 350rpx;
                    border-radius: 10rpx;
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
