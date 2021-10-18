<template>
    <view class="detail">
        <!-- <tui-navigation-bar>
            <navigator :url="'/pages/index/index'" open-type="switchTab">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-lg">二手书详细</view>
        </tui-navigation-bar> -->

        <!-- 轮播图 -->
        <swiper
            class="swiper card padding-sm margin-sm"
            :indicator-dots="true"
            :indicator-color="'rgba(135, 206, 250, 0.3)'"
            :indicator-active-color="'#87cefa'"
            :current="currentSwiper"
            :duration="360"
        >
            <swiper-item class="swiper-container" v-for="(item, index) in books[0].coverGroup" :key="index">
                <image mode="aspectFill" :src="item"></image>
            </swiper-item>
        </swiper>

        <!-- 商品信息 -->
        <view class="goods-info card padding-sm margin-sm">
            <view class="name text-bold text-lg">
                {{ books[0].name }}
            </view>
            <view class="price margin-top-sm">
                <view class="current text-red">
                    {{ books[0].price * 0.9 }}
                </view>
                <view class="original text-gray margin-top-sm">
                    {{ books[0].price }}
                </view>
            </view>
            <view class="description margin-top-sm">
                {{ books[0].description }}
            </view>
        </view>
        <owl-fiche class="margin-top-sm">
            <owl-indent ref="indent"></owl-indent>
        </owl-fiche>
        <!-- <view class="row-6 margin-lr-xs margin-top-sm">
            <owl-fiche :title="'评论区'">
                <owl-make-comment :postUrl="'/set/comment'" :urlType="'book'" :belongedId="book.id" class="padding-lr-sm"></owl-make-comment>
                <owl-comment class="padding-lr-sm" :belongedName="'book'" :data="book.comment"></owl-comment>
            </owl-fiche>
        </view> -->
        <owl-action-bar :type="'bookTrade'" @rightBtn="notify" @leftBtn="notify"></owl-action-bar>
        <tui-tips :backgroundColor="tipColor" ref="tips"></tui-tips>
    </view>
</template>

<script>
import { books } from '@/assets/data/books.js'

export default {
    name: 'detail',
    data() {
        return {
            currentSwiper: 0,
            swiperHeight: 0,
            swiperTabs: [{ name: '全部评论' }, { name: '好评' }, { name: '中评' }, { name: '差评' }],
            books,
            // comment: [
            //     {
            //         id: 0,
            //         userId: 0,
            //         belongedId: 0,
            //         content: '',
            //         postDate: '',
            //         agree: 0,
            //         disagree: 0,
            //         user: {
            //             id: 0,
            //             username: '',
            //             avatar: ''
            //         }
            //     }
            // ],
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
        }
    },
    onLoad(options) {
        //     this.$axios
        //         .get('/get/detail/book', {
        //             params: {
        //                 id: option.id
        //             }
        //         })
        //         .then(resp => {
        //             this.book = resp.data
        //             setTimeout(() => {
        //             }, 0)
        //         })
        //         .catch(error => {
        //             console.log(error)
    }
}
</script>

<style lang="scss" scoped>
.detail {
    background-color: rgb(248, 248, 248);

    .swiper {
        height: 400rpx;

        .swiper-container {
            image {
                height: 100%;
                width: 100%;
            }
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
}
</style>
