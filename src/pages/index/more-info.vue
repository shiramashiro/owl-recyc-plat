<template>
    <view class="more-info">
        <!-- #ifdef H5 -->
        <view class="status_bar"> </view>
        <navbar :cfg="cfg">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
            </view>
        </navbar>
        <!-- #endif -->
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
            <view class="row-5">
                <!-- 快递区 -->
            </view>
            <view class="row-6">
                <!-- 评论区 -->
            </view>
        </view>

      <comment></comment>
    </view>
</template>

<script>
import { suitSwiper } from '@/mixins/suit-swiper.js'
import comment from "@/components/index/comment";
export default {
    name: 'MoreInfo',
    mixins: [suitSwiper],
  components:{
    comment
  },
    data() {
        return {
            cfg: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false,
                isCustomImmerse: true
            },
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
            },
            id: 0
        }
    },
    methods: {
        // #ifdef H5
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/index/index'
            })
        }
        // #endif
    },
    onLoad(option) {
        this.id = option.id
      console.log(option.id);
    }
}
</script>

<style lang="scss" scoped>
.more-info {
    // #ifdef H5
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
    // #endif

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
