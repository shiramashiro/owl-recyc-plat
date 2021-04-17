<template>
    <view class="book-detail">
        <view class="status_bar"> </view>
        <navbar :config="config">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
            </view>
        </navbar>
        <view class="rows">
            <view class="row-1">
                <swiper
                    :indicator-dots="true"
                    indicator-color="rgba(135, 206, 250, 0.3)"
                    indicator-active-color="#87cefa"
                    :style="{ height: swiperHeight + 'px' }"
                    :current="currentSwiper"
                    @change="slideSwiper"
                    :duration="360"
                >
                    <swiper-item
                        v-for="(cover, index) in book.covers"
                        :key="index"
                    >
                        <view :id="'swiper-item-' + index">
                            <image
                                mode="aspectFit"
                                class="image"
                                :src="cover"
                            ></image>
                        </view>
                    </swiper-item>
                </swiper>
            </view>
            <view class="rows-content margin-lr-lg">
                <view
                    class="row-2 margin-bottom-xs flex justify-between align-center"
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
                <view class="row-3 text-gray">{{ book.originPrice }}</view>
                <view class="row-4 margin-top-sm text-bold">
                    {{ book.desc }}
                </view>
            </view>
            <view class="row-5 margin-tb-sm">
                <tui-tab
                    :isSticky="isSticky"
                    :scroll="true"
                    selectedColor="#87cefa"
                    sliderBgColor="#87cefa"
                    :current="currentTuiTab"
                    @slideTuiTab="cutomSlideTuiTab"
                    :swiperTabs="swiperTabs"
                ></tui-tab>
            </view>
            <view class="row-6 margin-lr-sm">
                <comment :data="comments"></comment>
            </view>
        </view>
    </view>
</template>

<script>
import { suitSwiper } from '@/mixins/suit-swiper.js'
import Comment from '@/components/comment.vue'
import comments from '@/static/json/comments.json'

export default {
    name: 'BookDetail',
    mixins: [suitSwiper],
    components: {
        Comment
    },
    data() {
        return {
            comments: comments,
            currentSwiper: 0,
            currentTuiTab: 0,
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false,
                isCustomImmerse: true
            },
            swiperTabs: [
                { name: '全部评论' },
                { name: '好评' },
                { name: '中评' },
                { name: '差评' }
            ],
            book: {
                id: 1,
                covers: [
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28495225-1_w_3.jpg',
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28495225-1_w_3.jpg'
                ],
                name: '深入理解Java虚拟机',
                author: '周志明',
                price: '83.90',
                originPrice: '129.00',
                desc:
                    '周志明虚拟机新作，第3版新增内容近50%，5个维度全面剖析JVM，大厂面试知识点全覆盖。与 Java编程思想、Effective Java、Java核心技术 堪称：Java四大名著'
            }
        }
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/index/index'
            })
        }
    },
    onLoad(option) {
        console.log(option.id)
    }
}
</script>

<style lang="scss" scoped>
.book-detail {
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }

    .rows {
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
                        content: '¥';
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
                content: '¥';
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
