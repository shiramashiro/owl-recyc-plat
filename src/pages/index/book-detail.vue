<template>
    <view class="book-detail">
        <tui-navigation-bar>
            <navigator :delta="1" open-type="navigateBack">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-lg">二手书详细</view>
        </tui-navigation-bar>

        <view class="detail-wrap margin-lr-xs">
            <view class="preview">
                <swiper
                    :indicator-dots="true"
                    indicator-color="rgba(135, 206, 250, 0.3)"
                    indicator-active-color="#87cefa"
                    :style="{ height: swiperHeight + 'px' }"
                    :current="currentSwiper"
                    :duration="360"
                >
                    <swiper-item v-for="(item, index) in book.img" :key="index">
                        <view :id="'swiper-item-' + index">
                            <image mode="aspectFit" :src="item.imgUrl"></image>
                        </view>
                    </swiper-item>
                </swiper>
            </view>

            <view class="content margin-lr-lg">
                <view class="name text-bold text-lg">
                    {{ book.name }}
                </view>
                <view
                    class="row-1 margin-bottom-xs flex justify-between align-center"
                >
                    <view class="col-1 text-red">
                        <view class="col-1-1">{{ book.price }}</view>
                    </view>
                    <view class="col-2">
                        <view class="col-2-1 text-center">
                            <i class="text-lg el-icon-third-shoucang1"></i>
                        </view>
                        <view class="col-2-2 text-xs">收藏</view>
                    </view>
                </view>
                <view class="row-2 text-gray">{{ book.originPrice }}</view>
                <view class="desc margin-top-sm padding-bottom-sm">
                    {{ book.desc }}
                </view>
            </view>
        </view>

        <owl-fiche class="margin-top-sm">
            <owl-indent
                :tips="['7天无理由退货', '价格保证', '急速送达', '官方直售']"
                ref="indent"
            ></owl-indent>
        </owl-fiche>

        <view class="comment-wrap margin-lr-xs margin-top-sm">
            <owl-fiche :title="'评论区'">
                <owl-make-comment
                    :urlType="'book'"
                    :belongedId="book.id"
                    class="padding-lr-sm"
                ></owl-make-comment>
                <owl-comment
                    class="padding-lr-sm"
                    :belongedName="'book'"
                    :data="book.comment"
                ></owl-comment>
            </owl-fiche>
        </view>

        <view class="action-bar">
            <view
                class="container padding-xs flex align-center justify-between"
            >
                <view class="item flex">
                    <navigator :url="'/pages/mine/order'">
                        <view class="top flex align-center justify-center">
                            <image
                                src="https://owl-town.oss-cn-chengdu.aliyuncs.com/static/icon/full-cart.png"
                            />
                            <tui-badge
                                v-if="$store.state.cartList.length !== 0"
                                type="danger"
                            >
                                {{ $store.state.cartList.length }}
                            </tui-badge>
                        </view>
                        <view class="bottom text-sm">
                            购物车
                        </view>
                    </navigator>
                </view>

                <view class="item flex">
                    <navigator :url="'/pages/order'">
                        <view class="top flex align-center justify-center">
                            <image
                                src="https://owl-town.oss-cn-chengdu.aliyuncs.com/static/icon/custom-server.png"
                            />
                        </view>
                        <view class="bottom text-sm">
                            客服
                        </view>
                    </navigator>
                </view>

                <view class="item flex">
                    <tui-button
                        @click="setToCart"
                        height="80rpx"
                        :size="25"
                        type="gray"
                        shape="circle"
                    >
                        加入购物车
                    </tui-button>
                </view>

                <view class="item flex recycle-btn">
                    <tui-button
                        @click="navigateTo"
                        height="80rpx"
                        type="primary"
                        :size="25"
                        shape="circle"
                        background="#87cefa"
                    >
                        立即购买
                    </tui-button>
                </view>
            </view>
        </view>

        <tui-tips :backgroundColor="tipColor" ref="tips"></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'BookDetail',
    data() {
        return {
            currentSwiper: 0,
            swiperHeight: 0,
            book: {
                id: 0,
                type: '',
                name: '',
                author: '',
                price: 0,
                originPrice: 0,
                desc: '',
                img: [
                    {
                        id: 0,
                        belongedId: 0,
                        imgUrl: ''
                    }
                ],
                comment: [
                    {
                        id: 0,
                        userId: 0,
                        belongedId: 0,
                        content: '',
                        postDate: '',
                        agree: 0,
                        disagree: 0,
                        user: {
                            id: 0,
                            username: '',
                            avatar: ''
                        }
                    }
                ]
            },
            tipColor: '#19BE6B'
        }
    },
    methods: {
        setToCart() {
            let indent = this.$refs.indent.getIndent()
            this.$store.commit('setToCart', indent)
        },
        navigateTo() {},
        showTips(msg, color) {
            this.tipColor = color
            this.$refs.tips.showTips({
                msg: msg,
                duration: 2000
            })
        },
        setSwiperItem(index) {
            uni.createSelectorQuery()
                .in(this)
                .select('#swiper-item-' + index)
                .boundingClientRect(data => {
                    this.swiperHeight = data.height + 25
                })
                .exec()
        }
    },
    onLoad(option) {
        this.$axios
            .get('/get/detail/book', {
                params: {
                    id: option.id
                }
            })
            .then(resp => {
                this.book = resp.data
                setTimeout(() => {
                    this.setSwiperItem(0)
                }, 0)
            })
            .catch(error => {
                this.showTips('服务器错误！', '#EB0909')
            })
    }
}
</script>

<style lang="scss" scoped>
.book-detail {
    background-color: rgb(248, 248, 248);

    .detail-wrap {
        background-color: white;

        .preview {
            image {
                height: 480rpx;
                width: 100%;
            }
        }

        .content {
            .row-1 {
                .col-1 {
                    .col-1-1::before {
                        content: '二手价¥';
                        font-size: 80%;
                        margin-right: 4rpx;
                    }

                    .col-1-1 {
                        font-size: 45rpx;
                    }
                }
            }

            .row-2 {
                text-decoration: line-through;
            }

            .row-2::before {
                content: '原价¥';
                font-size: 80%;
                margin-right: 4rpx;
            }

            .desc {
                display: -webkit-box;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .action-bar {
        .container {
            width: 100%;
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: #f8f6f6;
        }

        .item {
            width: 23%;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .top image {
            width: 40rpx;
            height: 40rpx;
        }
    }
}
</style>
