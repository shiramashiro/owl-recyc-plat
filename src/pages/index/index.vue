<template>
    <view class="index">
        <tui-navigation-bar>
            <view class="input-wrap flex align-center padding-lr-sm">
                <input
                    style="width: 100%"
                    class="input text-sm"
                    v-model="searchValue"
                    placeholder="请输入搜索关键字"
                    type="text"
                    maxlength="50"
                />
            </view>
        </tui-navigation-bar>

        <view class="tui-rolling-news">
            <tui-icon name="news-fill" :size="28" color="#5677fc"></tui-icon>
            <swiper
                vertical
                autoplay
                circular
                interval="3000"
                class="tui-swiper"
            >
                <swiper-item
                    v-for="(newsItem, index) in newsList"
                    :key="index"
                    class="tui-swiper-item"
                >
                    <view class="tui-news-item" @tap="detail">{{
                        newsItem
                    }}</view>
                </swiper-item>
            </swiper>
        </view>

        <view class="slide-show margin-lr-xs">
            <swiper autoplay>
                <swiper-item
                    v-for="(slideshowItem, index) in slideshowList"
                    :key="index"
                >
                    <image
                        class="slide-show-image"
                        mode="aspectFit"
                        :src="slideshowItem"
                    ></image>
                </swiper-item>
            </swiper>
        </view>

        <owl-fiche
            :iconPath="
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/icon/news.png'
            "
            class="margin-top-sm"
            :navigateTo="'/pages/more'"
            :URLAttrs="['backNav=index/index', 'comName=owlPosts']"
            :title="'新闻 / 资讯'"
        >
            <view class="news-panel">
                <template v-for="(newsItem, index) in newsPanelList">
                    <navigator
                        :url="'/pages/transfer/post-detail?id=' + newsItem.id"
                        :key="index"
                    >
                        <view
                            class="news-item align-center flex padding-lr-sm padding-tb-sm margin-bottom-xs"
                        >
                            <view class="news-num margin-right-sm">
                                {{ index + 1 }}
                            </view>
                            <view class="news-brief text-cut">
                                {{ newsItem.title }}
                            </view>
                        </view>
                    </navigator>
                </template>
            </view>
        </owl-fiche>

        <owl-fiche
            :iconPath="
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/icon/market.png'
            "
            class="margin-top-sm"
            :title="'二手市场'"
        >
            <view class="caskets flex justify-between padding-lr-sm">
                <view
                    class="casket padding-lr-xs margin-tb-xs flex justify-between align-center"
                    v-for="(casketItem, index) in casketList"
                    :key="index"
                    @click="
                        navigateToClickedItem('/pages/more', [
                            'type=' + casketItem.type,
                            'comName=owlBooks'
                        ])
                    "
                >
                    <view class="text">
                        <view
                            class="flex align-center text-black text-bold text-df"
                            :class="casketItem.icon"
                        >
                            {{ casketItem.cnTitle }}
                        </view>
                        <view class="text-xs text-gray">
                            {{ casketItem.enTitle }}
                        </view>
                    </view>
                    <image mode="aspectFit" :src="casketItem.cover"></image>
                </view>
            </view>
        </owl-fiche>

        <owl-fiche
            :iconPath="
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/icon/recovery.png'
            "
            class="margin-top-sm"
            :navigateTo="'/pages/more'"
            :URLAttrs="[
                'maxSize=0',
                'backNav=index/index',
                'comName=owlRecoveries'
            ]"
            :title="'回收点'"
        >
            <owl-recoveries></owl-recoveries>
        </owl-fiche>

        <owl-fiche
            :iconPath="
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/icon/recommendation.png'
            "
            class="margin-top-sm"
            :title="'推荐'"
        >
            <owl-books :bookType="'all'"></owl-books>
        </owl-fiche>
    </view>
</template>

<script>
// 导入mixins
import { navigateToMixins } from '@/mixins/navigate-to.js'

export default {
    name: 'Index',
    mixins: [navigateToMixins],
    data() {
        return {
            searchValue: '',
            casketList: [
                {
                    type: 'all',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/22894393-1_w_1.jpg',
                    icon: 'el-icon-third-guanjun',
                    cnTitle: '全部',
                    enTitle: 'General List'
                },
                {
                    type: 'living',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29197803-1_w_3.jpg',
                    icon: 'el-icon-third-shiwu',
                    cnTitle: '生活',
                    enTitle: 'Living'
                },
                {
                    type: 'technology',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/27920509-1_w_26.jpg',
                    icon: 'el-icon-third-keji',
                    cnTitle: '科技',
                    enTitle: 'Technology'
                },
                {
                    type: 'social',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25157989-1_u_5.jpg',
                    icon: 'el-icon-third-shehui',
                    cnTitle: '社会',
                    enTitle: 'Social Sciences'
                },
                {
                    type: 'business',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/27932536-1_u_3.jpg',
                    icon: 'el-icon-third-qiandai',
                    cnTitle: '经管',
                    enTitle: 'Business'
                },
                {
                    type: 'literature',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/1901258135_ii_cover.jpg',
                    icon: 'el-icon-third-wenxue',
                    cnTitle: '文学',
                    enTitle: 'Literature'
                },
                {
                    type: 'art',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28470862-1_u_3.jpg',
                    icon: 'el-icon-third-yishu',
                    cnTitle: '艺术',
                    enTitle: 'Art'
                },
                {
                    type: 'education',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/21114192-1_u_3.jpg',
                    icon: 'el-icon-third-xueshimaoxuexibiye',
                    cnTitle: '辅教',
                    enTitle: 'Education'
                },
                {
                    type: 'children',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23684605-1_w_1.jpg',
                    icon: 'el-icon-third-ertong',
                    cnTitle: '童书',
                    enTitle: "Children's Books"
                }
            ],
            newsList: [
                '致力发展负责任的人工智能 中国发布八大治理原则',
                '600万吨包装纸产能砸向市场',
                '4月27日废纸价格最高上调50元/吨'
            ],
            slideshowList: [
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/2021032611362390127.jpg',
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/20210326193508509.jpg',
                'https://owl-town.oss-cn-chengdu.aliyuncs.com/static/slideshow/2021032619353510220.jpg'
            ],
            newsPanelList: []
        }
    },
    mounted() {
        this.$axios
            .get('/get/post', {
                params: {
                    tagType: 'news',
                    limitNum: 4
                }
            })
            .then(resp => {
                this.newsPanelList = resp.data
            })
    }
}
</script>

<style lang="scss" scoped>
.index {
    background-color: rgb(248, 248, 248);

    .input-wrap {
        width: 100%;
        border-radius: 50rpx;
        background-color: rgb(244, 244, 244);
        padding: 0 20rpx;
        height: 58rpx;
    }

    .input-wrap::before {
        content: '\e623';
        margin-right: 14rpx;
        font-family: 'iconfont' !important;
        font-size: 25rpx;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .caskets {
        flex-flow: wrap;

        .casket {
            height: 120rpx;
            width: 31.5%;
            background-color: white;

            image {
                width: 80rpx;
                height: 105rpx;
            }
        }
    }

    .tui-rolling-news {
        background-color: white;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;

        .tui-swiper {
            font-size: 28rpx;
            height: 50rpx;
            flex: 1;
        }

        .tui-swiper-item {
            display: flex;
            align-items: center;

            .tui-news-item {
                line-height: 28rpx;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }

    .slide-show {
        .slide-show-image {
            width: 100%;
            height: 100%;
        }
    }

    .news-panel {
        .news-item {
            border-bottom: 1rpx solid #f0f0f0 !important;
        }
    }
}
</style>
