<template>
    <view class="recommendation">
        <view class="slide-show margin-xs">
            <swiper autoplay>
                <swiper-item v-for="(item, index) in slideShow" :key="index">
                    <image
                        class="slide-show-image"
                        mode="aspectFit"
                        :src="item"
                    ></image>
                </swiper-item>
            </swiper>
        </view>
        <view class="new-book margin-top-xs">
            <view
                class="text-black row-2-1 margin-lr-xs padding-tb-lg padding-lr-sm flex justify-between align-center"
            >
                <view class="col-1 flex text-lg">
                    <view class="col-1-1 text-lg">
                        新书上架
                    </view>
                    <view class="col-1-2 flex align-end margin-left-xs text-xs">
                        新鲜出炉·抢先一读
                    </view>
                </view>
            </view>
            <scroll-view scroll-x="true">
                <view class="rows flex">
                    <new-book
                        v-for="(book, index) in newBooks"
                        :key="index"
                        :data="book"
                    ></new-book>
                </view>
            </scroll-view>
        </view>
        <view class="daily-rank">
            <view
                class="text-black row-2-1 margin-lr-xs padding-tb-lg padding-lr-sm flex justify-between align-center"
            >
                <view class="col-1 flex text-lg">
                    <view class="col-1-1 text-lg">
                        最受欢迎的书籍
                    </view>
                    <view class="col-1-2 flex align-end margin-left-xs text-xs">
                        人气书籍·每周更新
                    </view>
                </view>
            </view>
            <view class="sudoku flex justify-between margin-lr-xs">
                <casket
                    v-for="(item, index) in caskets"
                    :key="index"
                    :data="item"
                >
                </casket>
            </view>
        </view>
    </view>
</template>

<script>
import NewBook from './new-book.vue'
import Casket from './casket.vue'

export default {
    name: 'Recommendation',
    components: { NewBook, Casket },
    data() {
        return {
            slideShow: [
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032611362390127.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/20210326193508509.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032619353510220.jpg'
            ],
            newBooks: [
                {
                    id: 7,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/21114192-1_u_3.jpg',
                    name: '新华字典（第11版）（单色本）',
                    originPrice: '19.90'
                },
                {
                    id: 8,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23890604-1_w_5.jpg',
                    name: '中华成语词典(第3版,单色插图本)',
                    originPrice: '45.00'
                },
                {
                    id: 9,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25294671-1_w_3.jpg',
                    name: '学生实用古汉语常用字字典（第6版）',
                    originPrice: '32.00'
                },
                {
                    id: 5,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29142965-1_w_3.jpg',
                    name: 'Python零基础项目开发快速入门',
                    originPrice: '79.80'
                },
                {
                    id: 6,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29198330-1_w_3.jpg',
                    name: 'Spring 5 设计模式',
                    originPrice: '79.00'
                }
            ],
            caskets: [
                {
                    id: 1,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/22894393-1_w_1.jpg',
                    icon: 'el-icon-third-guanjun',
                    cnTitle: '总榜',
                    enTitle: 'General List'
                },
                {
                    id: 2,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29197803-1_w_3.jpg',
                    icon: 'el-icon-third-shiwu',
                    cnTitle: '生活榜',
                    enTitle: 'Living'
                },
                {
                    id: 3,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/27920509-1_w_26.jpg',
                    icon: 'el-icon-third-keji',
                    cnTitle: '科技榜',
                    enTitle: 'Technology'
                },
                {
                    id: 4,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25157989-1_u_5.jpg',
                    icon: 'el-icon-third-shehui',
                    cnTitle: '社会榜',
                    enTitle: 'Social Sciences'
                },
                {
                    id: 5,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/27932536-1_u_3.jpg',
                    icon: 'el-icon-third-qiandai',
                    cnTitle: '经管榜',
                    enTitle: 'Business'
                },
                {
                    id: 6,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/1901258135_ii_cover.jpg',
                    icon: 'el-icon-third-wenxue',
                    cnTitle: '文学榜',
                    enTitle: 'Literature'
                },
                {
                    id: 7,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28470862-1_u_3.jpg',
                    icon: 'el-icon-third-yishu',
                    cnTitle: '艺术榜',
                    enTitle: 'Art'
                },
                {
                    id: 8,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/21114192-1_u_3.jpg',
                    icon: 'el-icon-third-xueshimaoxuexibiye',
                    cnTitle: '辅教榜',
                    enTitle: 'Education'
                },
                {
                    id: 9,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23684605-1_w_1.jpg',
                    icon: 'el-icon-third-ertong',
                    cnTitle: '童书榜',
                    enTitle: "Children's Books"
                }
            ]
        }
    },
    methods: {
        viewMore() {}
    }
}
</script>

<style lang="scss" scoped>
.recommendation {
    background-color: rgb(248, 248, 248);

    .slide-show {
        .slide-show-image {
            width: 100%;
            height: 100%;
        }
    }

    .row-2-1 {
        border-radius: 24rpx 24rpx 2rpx 2rpx;
        background-color: white;

        .col-2 {
            .col-2-1 {
                border: 1rpx solid #cccc;
                border-radius: 50rpx;
                padding: 4rpx 40rpx;
            }

            .col-2-1::after {
                font-family: 'iconfont' !important;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                content: '\e78a';
            }
        }
    }

    .daily-rank {
        .sudoku {
            flex-flow: wrap;
        }
    }
}
</style>
