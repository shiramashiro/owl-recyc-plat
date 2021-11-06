<template>
    <view class="detail">
        <swiper
            class="swiper card padding-sm margin-xs"
            :indicator-dots="true"
            :indicator-color="'rgba(135, 206, 250, 0.3)'"
            :indicator-active-color="'#87cefa'"
            :current="currentSwiper"
            :duration="360"
        >
            <template v-if="book.covers.length > 0">
                <swiper-item class="swiper-container" v-for="(item, index) in book.covers" :key="index">
                    <image mode="aspectFill" :src="item.url"></image>
                </swiper-item>
            </template>
            <template v-else>
                <swiper-item class="swiper-container">
                    <image mode="aspectFill" :src="book.cover_url"></image>
                </swiper-item>
            </template>
        </swiper>

        <!-- 商品信息 -->
        <view class="goods-info card margin-xs padding-sm">
            <view class="name text-bold text-lg">
                {{ book.name }}
            </view>
            <view class="price margin-top-sm">
                <view class="current text-red">
                    {{ book.price * 0.9 }}
                </view>
                <view class="original text-gray margin-top-sm">
                    {{ book.price }}
                </view>
            </view>
            <view class="description margin-top-sm">
                {{ book.description }}
            </view>
        </view>

        <view class="comments card padding-lr-sm margin-top-sm margin-lr-xs">
            <template v-if="book.comments.length > 0">
                <view class="item padding-tb-sm flex" v-for="(item, index) in book.comments" :key="index">
                    <view class="left">
                        <owl-avatar :src="item.user.avatar_url" size="35"></owl-avatar>
                    </view>
                    <view class="right margin-left-sm">
                        <view class="header flex justify-between align-center">
                            <view class="userinfo">
                                <view class="username text-lg">{{ item.user.username }}</view>
                                <view class="floor text-gray">{{ index + 1 }}F</view>
                            </view>
                            <view class="replay text-gray">回复</view>
                        </view>
                        <view class="content margin-top-sm text-lg">
                            {{ item.content }}
                        </view>
                        <view class="footer flex align-center justify-between margin-top-sm text-gray"> 发表于：{{ item.create_date }} </view>
                        <view class="actions flex align-center margin-top-xs text-gray">
                            <view class="like">赞成 100</view>
                            <view class="dislike margin-left-sm">反对 0</view>
                        </view>
                    </view>
                </view>
            </template>
            <template v-else>
                <!-- 任务：如果书籍没有评论数据时，这里会显示没有数据的图片，请让图片显示完美。或者添加一些文字提示。一 -->
                <image src="../../assets/icon/notdata.png"></image>
            </template>
        </view>

        <view class="card padding-sm margin-lr-xs margin-top-sm text-gray">
            <view class="text-center margin-bottom-sm">
                —— 价格说明 ——
            </view>
            1、原价：原价为商品的销售价，是您最终决定是否购买商品的依据。<br />
            2、划线价：商品展示的划横线价格为参考价，并非原价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价或其他真实有依据的价格。该价格仅供您参考。<br />
            4、异常问题：商品促销信息以商品详情页“促销”栏中的信息为准;如您发现商品售价或信息有异常,建议购买前先联系销售商咨询。
        </view>

        <!-- 底部栏 -->
        <view class="bottom-bar flex align-center justify-between padding-sm">
            <view class="left flex justify-between align-center">
                <view class="item">
                    <view class="row-1 flex align-center justify-center">
                        <image class="icon" src="../../assets/icon/cart.png" />
                        <tui-badge v-if="$store.state.tentativeTrade.length !== 0" type="danger">
                            {{ $store.state.tentativeTrade.length }}
                        </tui-badge>
                    </view>
                    <view class="row-2 text-sm">
                        客服
                    </view>
                </view>

                <view class="item">
                    <view class="row-1 flex align-center justify-center">
                        <image class="icon" src="../../assets/icon/cart.png" />
                        <tui-badge v-if="$store.state.tentativeTrade.length !== 0" type="danger">
                            {{ $store.state.tentativeTrade.length }}
                        </tui-badge>
                    </view>
                    <view class="row-2 text-sm">
                        客服
                    </view>
                </view>

                <view class="item">
                    <view class="row-1 flex align-center justify-center">
                        <image class="icon" src="../../assets/icon/cart.png" />
                        <tui-badge v-if="$store.state.tentativeTrade.length !== 0" type="danger">
                            {{ $store.state.tentativeTrade.length }}
                        </tui-badge>
                    </view>
                    <view class="row-2 text-sm">
                        购物车
                    </view>
                </view>
            </view>

            <view class="right flex justify-between align-center">
                <tui-button height="80rpx" width="160rpx" type="primary" :size="25" shape="circle" background="#87cefa">
                    立即购买
                </tui-button>

                <tui-button height="80rpx" width="180rpx" type="gray" :size="25" shape="circle">
                    加入购物车
                </tui-button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'detail',
    data() {
        return {
            currentSwiper: 0,
            book: {
                covers: [{}],
                comments: [
                    {
                        user: {
                            avatar_url: ''
                        }
                    }
                ]
            }
        }
    },
    onLoad(options) {
        this.$axios.get(`/index/find/by/id?id=${options.id}`).then(response => {
            this.book = response.data
        })
    }
}
</script>

<style lang="scss" scoped>
.detail {
    background-color: rgb(248, 248, 248);

    .swiper {
        height: 650rpx;

        .swiper-container {
            image {
                height: 100%;
                width: 100%;
            }
        }
    }

    .comments {
        .item {
            border-bottom: 1rpx solid #cccc;

            .left {
                width: 15%;
            }

            .right {
                width: 85%;
            }
        }

        .item:last-child {
            border-bottom: 0 !important;
        }
    }

    .goods-info {
        .price {
            .current {
                font-size: 45rpx;
            }

            .current::before {
                content: '二手价¥';
                font-size: 80%;
                margin-right: 4rpx;
            }

            .original {
                text-decoration: line-through;
            }

            .original::before {
                content: '原价¥';
                font-size: 80%;
                margin-right: 4rpx;
            }
        }

        .description {
            display: -webkit-box;
            word-break: break-all;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .bottom-bar {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: white;

        .left {
            width: 40%;

            .icon {
                width: 40rpx;
                height: 40rpx;
            }
        }

        .right {
            width: 50%;
        }
    }
}
</style>
