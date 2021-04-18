<template>
    <view class="book-detail">
        <view class="status_bar"> </view>
        <navbar :config="config">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
                <view class="margin-left-lg text-lg">二手书详细</view>
            </view>
        </navbar>
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
                    <swiper-item
                        v-for="(item, index) in book.bookCover"
                        :key="index"
                    >
                        <view :id="'swiper-item-' + index">
                            <image
                                mode="aspectFit"
                                class="image"
                                :src="item.url"
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
                <view class="row-4 margin-top-sm padding-bottom-sm text-bold">
                    {{ book.desc }}
                </view>
            </view>
        </view>
        <view class="row-6 margin-lr-xs margin-top-sm">
            <subdomain :title="'评论区'">
                <post-comment></post-comment>
                <comment
                    class="padding-lr-sm"
                    @express="expressView"
                    :data="book.bookComment"
                ></comment>
            </subdomain>
        </view>
    </view>
</template>

<script>
import Comment from '@/components/comment.vue'
import Subdomain from '@/components/subdomain.vue'
import PostComment from '@/components/post-comment.vue'

export default {
    name: 'BookDetail',
    components: { Comment, Subdomain, PostComment },
    data() {
        return {
            currentSwiper: 0,
            swiperHeight: 0,
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false,
                isCustomImmerse: false
            },
            swiperTabs: [
                { name: '全部评论' },
                { name: '好评' },
                { name: '中评' },
                { name: '差评' }
            ],
            book: {
                id: 0,
                type: '',
                name: '',
                author: '',
                price: 0,
                originPrice: 0,
                desc: '',
                bookCover: [
                    {
                        id: 0,
                        bookId: 0,
                        url: ''
                    }
                ],
                bookComment: [
                    {
                        id: 0,
                        userId: 0,
                        bookId: 0,
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
            }
        }
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/index/index'
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
        },
        expressView(info) {
            console.log(info)
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

    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }

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
