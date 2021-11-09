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
            :comments="book.comments"
            :url="$baseURL + '/index/insert/comment'"
            :agree-url="$baseURL + '/index/update/comment/agree'"
            :oppose-url="$baseURL + '/index/update/comment/oppose'"
            :source-id="book.id"
            :sponsor-id="1"
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
                    <owl-icon :size="40" :src="require('../../static/icon/cart.png')"></owl-icon>
                    <view class="row-2 text-sm">
                        客服
                    </view>
                </view>

                <view class="item">
                    <owl-icon :size="40" :src="require('../../static/icon/cart.png')"></owl-icon>
                    <view class="row-2 text-sm">
                        客服
                    </view>
                </view>

                <tui-bottom-popup :height="400" :radius="false" :zIndex="1002" :maskZIndex="1001" :show="popupShow" @close="controlPopup">
                    <view class="wrapper">
                        <view class="header margin-sm">
                            <h3>我的购物车</h3>
                        </view>
                        <view class="carts">
                            <view class="item padding-tb-sm margin-sm flex justify-between align-center" v-for="(item, index) in book.carts" :key="index">
                                <owl-icon :src="item.book.cover_url" :size="150"></owl-icon>
                                <view class="name text-cut">{{ item.book.name }}</view>
                                <view class="text-red">¥ {{ item.book.price * item.book.discount }}</view>
                                <view class="num">{{ item.num }}</view>
                                <tui-button plain :width="'40rpx'" shape="circle" :height="'50rpx'">x</tui-button>
                            </view>
                        </view>
                    </view>
                </tui-bottom-popup>
                <view class="item cart" @click="controlPopup">
                    <view class="budget" v-show="book.carts.length > 0">{{ book.carts.length }}</view>
                    <owl-icon :size="40" :src="require('../../static/icon/cart.png')"></owl-icon>
                    <view class="row-2 text-sm">
                        购物车
                    </view>
                </view>
            </view>

            <view class="right flex justify-between align-center">
                <tui-button @click="guide('/pages/index/pay')" height="80rpx" width="160rpx" type="primary" :size="25" shape="circle" background="#87cefa">
                    立即购买
                </tui-button>
                <tui-button @click="insertCart" height="80rpx" width="180rpx" type="gray" :size="25" shape="circle">
                    加入购物车
                </tui-button>
            </view>
        </view>
        <tui-tips :backgroundColor="tipsColor" position="center" ref="toast"></tui-tips>
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
                ],
                carts: [
                    {
                        book: {
                            cover_url: ''
                        }
                    }
                ]
            },
            // 提示消息的背景颜色
            tipsColor: '',
            popupShow: false
        }
    },
    methods: {
        controlPopup() {
            this.popupShow = !this.popupShow
        },
        // 提示消息
        showTips(options) {
            this.tipsColor = options.tipsColor
            this.$refs.toast.showTips({
                msg: options.msg,
                duration: 2000
            })
        },
        // 页面导航
        guide(url) {
            uni.navigateTo({
                url: url
            })
        },
        // 加入购物车
        insertCart() {
            // 1. 对购物车图标上方加一个徽标
            // 2. 将本书籍的id加入到数据库的表中保存
        }
    },
    onLoad(options) {
        uni.request({
            url: this.$baseURL + '/index/find/book/by/id',
            data: {
                id: options.id,
                userId: 1
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

            .cart {
                position: relative;

                .budget {
                    position: absolute;
                    right: -32rpx;
                    top: -12rpx;
                    color: white;
                    border-radius: 100%;
                    background: #e54d42;
                    width: 42rpx;
                    height: 42rpx;
                    font-size: 25rpx;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }

            .wrapper {
                overflow-x: hidden;
                overflow-y: scroll;

                .carts {
                    .item {
                        border-bottom: 1rpx solid #f3ececcc;

                        .name {
                            width: 35%;
                        }
                    }
                }
            }
        }

        .right {
            width: 50%;
        }
    }
}
</style>
