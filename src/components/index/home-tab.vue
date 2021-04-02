<template>
    <view class="home-tab">
        <view class="row-1 margin-bottom-xs">
            <swiper autoplay>
                <swiper-item v-for="(item, index) in slideShow" :key="index">
                    <image
                        class="slide-show"
                        mode="aspectFit"
                        :src="item"
                    ></image>
                </swiper-item>
            </swiper>
        </view>
        <view class="row-2">
            <view
                class="text-white row-2-1 margin-left-xs margin-right-xs padding-top-lg padding-bottom-lg padding-left-sm padding-right-sm flex justify-between align-center"
            >
                <view class="col-1 flex text-lg">
                    <view class="col-1-1 text-lg">
                        最受欢迎书籍日榜
                    </view>
                    <view class="col-1-2 flex align-end margin-left-xs text-xs">
                        人气品牌·每日更新
                    </view>
                </view>
                <view class="col-2">
                    <view class="col-2-1 text-xs">
                        更多
                    </view>
                </view>
            </view>
            <scroll-view scroll-x="true" class="row-2-2 margin-bottom-lg">
                <view class="rows flex">
                    <daily-book
                        v-for="(book, index) in dailyBooks"
                        :key="index"
                        :data="book"
                    ></daily-book>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
import DailyBook from './daily-book.vue'

export default {
    name: 'HomeTab',
    components: { DailyBook },
    data() {
        return {
            slideShow: [
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032611362390127.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/20210326193508509.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032619353510220.jpg'
            ],
            dailyBooks: [
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.home-tab {
    .row-1 {
        .slide-show {
            width: 100%;
            height: 100%;
        }
    }

    .row-2 {
        .row-2-1 {
            background-color: rgb(106, 173, 252);
            border-radius: 24rpx 24rpx 2rpx 2rpx;

            .col-2 {
                .col-2-1 {
                    border-radius: 50rpx;
                    border: 1px solid rgb(103, 160, 249);
                    padding: 4rpx 40rpx;
                    background-color: rgb(103, 160, 249);
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

        .row-2-1 {
        }
    }
}
</style>
