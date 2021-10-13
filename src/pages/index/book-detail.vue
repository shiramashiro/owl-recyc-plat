<template>
    <view class="book-detail">
        <tui-navigation-bar>
            <navigator :url="'/pages/index/index'" open-type="switchTab">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-lg">二手书详细</view>
        </tui-navigation-bar>
        <view class="rows margin-lr-xs">
            <view class="row-1">
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
                            <image mode="aspectFit" class="image" :src="item.imgUrl"></image>
                        </view>
                    </swiper-item>
                </swiper>
            </view>
            <view class="rows-content margin-lr-lg">
                <view class="col-0 text-bold text-lg">
                    {{ book.name }}
                </view>
                <view class="row-2 margin-bottom-xs flex justify-between align-center">
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
                <view class="row-3 text-gray">{{ book.originPrice }}</view>
                <view class="row-4 margin-top-sm padding-bottom-sm">
                    {{ book.desc }}
                </view>
            </view>
        </view>
        <owl-fiche class="margin-top-sm">
            <owl-indent ref="indent"></owl-indent>
        </owl-fiche>
        <view class="row-6 margin-lr-xs margin-top-sm">
            <owl-fiche :title="'评论区'">
                <owl-make-comment :postUrl="'/set/comment'" :urlType="'book'" :belongedId="book.id" class="padding-lr-sm"></owl-make-comment>
                <owl-comment class="padding-lr-sm" :belongedName="'book'" :data="book.comment"></owl-comment>
            </owl-fiche>
        </view>
        <owl-action-bar :type="'bookTrade'" @rightBtn="notify" @leftBtn="notify"></owl-action-bar>
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
            swiperTabs: [{ name: '全部评论' }, { name: '好评' }, { name: '中评' }, { name: '差评' }],
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
        /**
         * 通过refs对象获取组件的getIndent方法。
         * 然后通过自定义函数得知，用户点击的哪一个按钮，
         * 不同的按钮将不同的数据塞入Vuex数组中进行存储。
         * 注意：只有当获取的ident对象存在时才可以设置comit。
         *
         * @param e owl-indent组件返回的indent对象。
         */
        notify(e) {
            let indent = this.$refs.indent.getIndent()
            if (indent !== undefined) {
                if (this.$store.state.isSignin) {
                    indent['tradeContentType'] = 'book'
                    if (e.type === 'rightBtn') {
                        indent['tradeType'] = 'decide'
                        this.$store.commit('setNowTrade', indent)
                    } else {
                        indent['tradeType'] = 'tentative'
                        this.$store.commit('setTentativeTrade', indent)
                    }
                    indent['userId'] = this.$store.state.userInfo.id
                    this.$axios
                        .post('/set/order', indent)
                        .then(resp => {
                            if (resp.status !== 200) {
                                this.showTips('操作失败！', '#EB0909')
                                return
                            }
                            this.showTips('操作成功！', '#19BE6B')
                        })
                        .catch(error => {
                            this.showTips('服务器错误', '#EB0909')
                        })
                } else {
                    this.showTips('没有登录哦~', '#EB0909')
                }
            }
        },
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
                console.log(error)
            })
    }
}
</script>

<style lang="scss" scoped>
.book-detail {
    background-color: rgb(248, 248, 248);

    .rows {
        background-color: white;

        .row-1 {
            .image {
                height: 480rpx;
                width: 100%;
            }
        }

        .rows-content {
            .row-2 {
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

            .row-3 {
                text-decoration: line-through;
            }

            .row-3::before {
                content: '原价¥';
                font-size: 80%;
                margin-right: 4rpx;
            }

            .row-4 {
                display: -webkit-box;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
