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
        <owl-fiche
            :sub-title="'废纸行业相关资讯'"
            :icon-path="require('../../assets/icon/新闻.png')"
            :navigate-to="'/pages/more'"
            :URLAttrs="['backNav=index/index', 'comName=owlPosts']"
            :title="'新闻 / 资讯'"
        >
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
        <owl-fiche :title="'二手市场'" :sub-title="'货源于官方渠道'"   :icon-path="require('../../assets/icon/市场.png')">
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
        <owl-fiche :title="'回收废纸'" :sub-title="'出售废纸到回收站'"   :icon-path="require('../../assets/icon/回收.png')">
            <owl-recoveries></owl-recoveries>
        </owl-fiche>

        <!-- 优质二手书推荐模块 -->
        <owl-fiche :title="'书籍推荐'" :sub-title="'官方推荐优质书籍'">
            <view class="books-panel flex">
                <view class="book-item padding-sm" v-for="(item, index) in books" :key="index">
                    <image mode="aspectFill" :src="item.cover"></image>
                    <view class="content">
                        <view class="name text-bold">
                            {{ item.name }}
                        </view>
                        <view class="author">
                            {{ item.author }}
                        </view>
                        <view class="discount text-red text-lg">
                            {{ item.discount }}
                        </view>
                        <view class="price text-gray">
                            {{ item.price }}
                        </view>
                    </view>
                </view>
            </view>
        </owl-fiche>
    </view>
</template>

<script>
import { navigateToMixins } from '@/mixins/navigate-to.js'
import { books } from '@/assets/data/books.js'
import { caskets, broadcast, carousels } from '@/assets/data/index.js'

export default {
    name: 'Index',
    mixins: [navigateToMixins],
    data() {
        return {
            books,
            caskets,
            broadcast,
            carousels,
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
        // this.$axios
        //     .get('/get/post', {
        //         params: {
        //             tagType: 'news',
        //             limitNum: 4
        //         }
        //     })
        //     .then(resp => {
        //         this.newsPanelList = resp.data
        //     })
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
            border-bottom: 0;
            padding-bottom: 0;
        }
    }

    .caskets-panel {
        flex-flow: wrap;

        .casket-item {
            height: 120rpx;
            width: 25%;
            background-color: white;

            image {
                width: 60rpx;
                height: 60rpx;
            }
        }
    }

    .books-panel {
        flex-flow: wrap;

        .book-item {
            background-color: white;
            width: 50%;

            /* content 元素下的子元素 */
            .content > view {
                margin-bottom: 10rpx;
            }

            .content {
                /* 匹配最后一个元素 */
                view:last-child {
                    margin-bottom: 0;
                }

                /* 匹配前两个元素 */
                view:nth-child(-n + 2) {
                    display: -webkit-box;
                    word-break: break-all;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                /* 匹配后两个元素 */
                view:nth-child(n - 2)::before {
                    font-size: 80%;
                    margin-right: 4rpx;
                }

                .name {
                    -webkit-line-clamp: 2;
                }

                .author {
                    -webkit-line-clamp: 1;
                }

                .price {
                    text-decoration: line-through;
                }

                .price::before {
                    content: '原价¥';
                }

                .discount::before {
                    content: '二手价¥';
                }
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
