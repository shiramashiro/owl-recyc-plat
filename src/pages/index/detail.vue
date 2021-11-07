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
        <view class="goods-info card margin-top-sm margin-lr-xs padding-sm">
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

        <!-- 后期任务：将 sponsor-id 改成灵活地 -->
        <owl-comment
            :url="'http://1.116.123.44:8000/index/publish/comment'"
            :agree-url="'http://1.116.123.44:8000/index/publish/agree'"
            :oppose-url="'http://1.116.123.44:8000/index/publish/oppose'"
            :source-id="book.id"
            :sponsor-id="1"
            :comments="book.comments"
        ></owl-comment>

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
                        <image class="icon" src="../../static/icon/cart.png" />
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
                        <image class="icon" src="../../static/icon/cart.png" />
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
                        <image class="icon" src="../../static/icon/cart.png" />
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
                id: 1,
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
        uni.request({
            url: 'http://1.116.123.44:8000/index/find/by/id',
            data: {
                id: options.id
            },
            success: res => {
                this.book = res.data
            }
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

        .notdata {
            padding: 100rpx 0;
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
