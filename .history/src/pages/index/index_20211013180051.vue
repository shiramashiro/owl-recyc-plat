<template>
    <view class="index">
        <view class="tui-rolling-news">
            <tui-icon name="news-fill" :size="28" color="#5677fc"></tui-icon>
            <swiper vertical autoplay circular interval="3000" class="tui-swiper">
                <swiper-item v-for="(item, index) in broadcast" :key="index" class="tui-swiper-item">
                    <view class="tui-news-item" @tap="detail">{{ item }}</view>
                </swiper-item>
            </swiper>
        </view>

        <!-- 轮播图模块 -->
        <view class="slide-show margin-lr-xs">
            <swiper autoplay>
                <swiper-item v-for="(item, index) in carousels" :key="index">
                    <image mode="aspectFit" :src="item"></image>
                </swiper-item>
            </swiper>
        </view>

        <!-- 新闻/资讯模块 -->
        <owl-fiche class="margin-top-sm" :navigate-to="'/pages/more'" :URLAttrs="['backNav=index/index', 'comName=owlPosts']" :title="'新闻 / 资讯'">
            <view class="news-panel">
                <view
                    v-for="(item, index) in information"
                    :key="index"
                    @click="navigateTo('/pages/transfer/post-detail?id=' + item.id)"
                    class="news-item align-center flex padding-lr-sm padding-tb-sm margin-bottom-xs"
                >
                    <view class="news-num margin-right-sm">
                        {{ index + 1 }}
                    </view>
                    <view class="news-brief text-cut">
                        {{ item.title }}
                    </view>
                </view>
            </view>
        </owl-fiche>

        <!-- 二手市场分类模块 -->
        <owl-fiche class="margin-top-sm" :title="'二手市场'">
            <view class="caskets-panel flex justify-between padding-lr-sm">
                <view
                    class="casket-item padding-lr-xs margin-tb-xs text-center"
                    v-for="(item, index) in caskets"
                    :key="index"
                    @click="navigateToClickedItem('/pages/more', ['type=' + item.type, 'comName=owlBooks', 'backNav=index/index'])"
                >
                    <image mode="aspectFit" :src="item.icon"></image>
                    <view class="text-center text-black text-bold text-df">
                        {{ item.title }}
                    </view>
                </view>
            </view>
        </owl-fiche>

        <!-- 附近回收点模块 -->
        <owl-fiche class="margin-top-sm" :navigate-to="'/pages/more'" :URLAttrs="['maxSize=0', 'backNav=index/index', 'comName=owlRecoveries']" :title="'附近回收点'">
            <owl-recoveries></owl-recoveries>
        </owl-fiche>

        <!-- 优质二手书推荐模块 -->
        <owl-fiche class="margin-top-sm" :title="'优质二手书推荐'">
            <owl-books :book-type="'all'"></owl-books>
        </owl-fiche>
    </view>
</template>

<script>
import { navigateToMixins } from '@/mixins/navigate-to.js'

export default {
    name: 'Index',
    mixins: [navigateToMixins],
    data() {
        return {
            searchValue: '',
            caskets: [
                {
                    type: 'all',
                    icon: '../../assets/icon/全部.png',
                    title: '全部'
                },
                {
                    type: 'living',
                    icon: '../../assets/icon/生活.png',
                    title: '生活'
                },
                {
                    type: 'technology',
                    icon: '../../assets/icon/科技.png',
                    title: '科技'
                },
                {
                    type: 'social',
                    icon: '../../assets/icon/社会.png',
                    title: '社会'
                },
                {
                    type: 'business',
                    icon: '../../assets/icon/经营.png',
                    title: '经管'
                },
                {
                    type: 'literature',
                    icon: '../../assets/icon/文学.png',
                    title: '文学'
                },
                {
                    type: 'art',
                    icon: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28470862-1_u_3.jpg',
                    title: '艺术'
                },
                {
                    type: 'education',
                    icon: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/21114192-1_u_3.jpg',
                    title: '辅教'
                },
                {
                    type: 'children',
                    icon: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23684605-1_w_1.jpg',
                    title: '童书'
                }
            ],
            broadcast: ['致力发展负责任的人工智能 中国发布八大治理原则', '600万吨包装纸产能砸向市场', '4月27日废纸价格最高上调50元/吨'],
            carousels: [
                'https://p1.music.126.net/UZducXaYUzyukQuRxZ5rng==/109951166445121244.jpg?imageView&quality=89',
                'https://p1.music.126.net/L6qUp1pk0CHe763ZWapSQQ==/109951166511220740.jpg?imageView&quality=89',
                'https://p1.music.126.net/RdwUlDHKhfumKGerywHXew==/109951166511217995.jpg?imageView&quality=89',
                'https://p1.music.126.net/1Z68-RH4zsT5cDxsXy56tw==/109951166511196968.jpg?imageView&quality=89'
            ],
            information: [
                {
                    title: '致力发展负责任的人工智能 中国发布八大治理原则'
                },
                {
                    title: '600万吨包装纸产能砸向市场'
                },
                {
                    title: '4月27日废纸价格最高上调50元/吨'
                }
            ]
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

    .slide-show {
        image {
            width: 100%;
            height: 100%;
        }
    }

    .news-panel {
        .news-item {
            border-bottom: 1rpx solid #f0f0f0;
        }

        .news-item:last-child {
            border-bottom: 0 !important;
        }
    }

    .caskets-panel {
        flex-flow: wrap;

        .casket-item {
            height: 120rpx;
            width: 31.5%;
            background-color: white;

            image {
                width: 80rpx;
                height: 80rpx;
            }
        }
    }

    .tui-rolling-news {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        box-sizing: border-box;
        justify-content: center;
        background-color: white;

        .tui-swiper {
            font-size: 28rpx;
            height: 50rpx;
            flex: 1;
        }

        .tui-swiper-item {
            display: flex;
            align-items: center;

            .tui-news-item {
                overflow: hidden;
                line-height: 28rpx;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
