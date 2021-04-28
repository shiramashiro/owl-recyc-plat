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
        <view class="tui-rolling-news padding-xs margin-xs">
            <tui-icon name="news-fill" :size="28" color="#5677fc"></tui-icon>
            <swiper
                vertical
                autoplay
                circular
                interval="3000"
                class="tui-swiper"
            >
                <swiper-item
                    v-for="(item, index) in newsList"
                    :key="index"
                    class="tui-swiper-item"
                >
                    <view class="tui-news-item" @tap="detail">{{ item }}</view>
                </swiper-item>
            </swiper>
        </view>
        <view class="slide-show margin-lr-xs">
            <swiper autoplay>
                <swiper-item
                    v-for="(carouselItem, index) in carouselMaps"
                    :key="index"
                >
                    <image
                        class="slide-show-image"
                        mode="aspectFit"
                        :src="carouselItem"
                    ></image>
                </swiper-item>
            </swiper>
        </view>
        <owl-fiche
            :iconPath="
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/news.png'
            "
            class="margin-top-sm"
            :navigateTo="'/pages/more'"
            :URLAttrs="['backNav=index/index']"
            :title="'新闻 / 资讯'"
        >
            <view class="panel">
                <template v-for="(item, index) in newsPanelList">
                    <navigator
                        :url="'/pages/post-detail?id=' + item.id"
                        :key="index"
                    >
                        <view
                            class="list-item flex align-center padding-lr-sm padding-tb-sm margin-bottom-xs"
                        >
                            <view class="num margin-right-sm">
                                {{ index + 1 }}
                            </view>
                            <view class="brief text-cut">
                                {{ item.title }}
                            </view>
                        </view>
                    </navigator>
                </template>
            </view>
        </owl-fiche>
        <owl-fiche
            :iconPath="
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/market.png'
            "
            class="margin-top-sm"
            :title="'二手市场'"
        >
            <view class="caskets flex justify-between padding-lr-sm">
                <view
                    class="casket padding-lr-xs margin-tb-xs flex justify-between align-center"
                    v-for="(renderedCasketItem, index) in renderedCasketsData"
                    :key="index"
                    @click="
                        navigateToClickedItem('/pages/index/classification', [
                            'type=' + renderedCasketItem.type
                        ])
                    "
                >
                    <view class="col-1">
                        <view
                            class="flex align-center row-1 text-black text-bold text-df"
                            :class="renderedCasketItem.icon"
                        >
                            {{ renderedCasketItem.cnTitle }}
                        </view>
                        <view class="row-2 text-xs text-gray">
                            {{ renderedCasketItem.enTitle }}
                        </view>
                    </view>
                    <view class="col-2">
                        <image
                            mode="aspectFit"
                            class="image"
                            :src="renderedCasketItem.cover"
                        ></image>
                    </view>
                </view>
            </view>
        </owl-fiche>
        <owl-fiche
            :bgColor="'rgb(248, 248, 248)'"
            class="margin-top-sm"
            :iconPath="
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/recovery.png'
            "
            :navigateTo="'/pages/index/more-recoveries'"
            :title="'回收点'"
        >
            <recoveries></recoveries>
        </owl-fiche>
        <owl-fiche
            :iconPath="
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/recommendation.png'
            "
            :bgColor="'rgb(248, 248, 248)'"
            :title="'推荐'"
            class="margin-top-sm"
        >
            <books :data="renderedBooksData"></books>
        </owl-fiche>
    </view>
</template>

<script>
import Recoveries from '@/components/index/recoveries.vue'
import Books from '@/components/index/books.vue'

// 导入mixins
import { navigateToMixins } from '@/mixins/navigate-to.js'

export default {
    name: 'Index',
    components: { Recoveries, Books },
    mixins: [navigateToMixins],
    data() {
        return {
            // 绑定输入框的输入值
            searchValue: '',
            // 被渲染的书籍数据
            renderedBooksData: [],
            // 被渲染的九宫格数据
            renderedCasketsData: [
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
                '格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气',
                '阿里计划将每股普通股拆为8股，增加筹资灵活性'
            ],
            newsPanelList: [
                {
                    id: 1,
                    title: '600万吨包装纸产能砸向市场'
                },
                {
                    id: 2,
                    title: '4月27日废纸价格最高上调50元/吨 最高下调30元/吨'
                },
                {
                    id: 3,
                    title: '玖龙纸业美国Old Town工厂开始生产废纸浆'
                },
                {
                    id: 4,
                    title: '惠普携手合兴包装 全力加速包装印刷业数字化转型'
                }
            ],
            carouselMaps: [
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032611362390127.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/20210326193508509.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032619353510220.jpg'
            ]
        }
    },
    onLoad() {
        this.$axios
            .get('/get/book', {
                params: {
                    type: 'all'
                }
            })
            .then(resp => {
                this.renderedBooksData = resp.data
            })
            .catch(error => {
                console.log(error)
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
            border-radius: 16rpx;
            border: 1rpx solid #cccc;

            .col-2 {
                .image {
                    width: 80rpx;
                    height: 105rpx;
                }
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

    .panel {
        .list-item {
            border-bottom: 1rpx solid #f0f0f0 !important;
        }
    }
}
</style>
