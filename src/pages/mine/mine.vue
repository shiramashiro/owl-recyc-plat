<template>
    <view class="mine">
        <view class="row-1">
            <image
                class="image"
                mode="aspectFill"
                src="https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/88441329_p0.jpg"
            ></image>
        </view>
        <view class="row-2">
            <view class="row-2-1">
                <view class="col-1">
                    <image
                        class="avatar"
                        model="aspectFit"
                        src="https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg"
                    ></image>
                </view>
                <view class="col-2">
                    <view class="row-1 flex justify-between align-center">
                        <view class="cols text-center">
                            <view class="num text-lg">180</view>
                            <view class="desc text-sm text-gray">粉丝</view>
                        </view>
                        <view class="cols text-center">
                            <view class="num text-lg">124</view>
                            <view class="desc text-sm text-gray">关注</view>
                        </view>
                        <view class="cols text-center">
                            <view class="num text-lg">44</view>
                            <view class="desc text-sm text-gray">获赞</view>
                        </view>
                    </view>
                    <view class="row-2">
                        <button class="editor" size="mini" :plain="true">
                            编辑资料
                        </button>
                    </view>
                </view>
            </view>
            <view class="row-2-2">
                <view class="row-1 text-lg">kongsam</view>
                <view class="row-2 text-sm text-gray"
                    >Time tick away, dream faded away!</view
                >
            </view>
            <view class="row-2-3">
                <suitable-swiper :configs="configs" :swiperTabs="swiperTabs">
                    <swiper-item
                        v-for="(swiperTab, index) in swiperTabs"
                        :key="index"
                    >
                        <view :id="'swiper-item-' + index">
                            <view
                                v-for="(item, itemIndex) in swiperTab.items"
                                :key="itemIndex"
                            >
                                <component
                                    :is="swiperTab.componentName"
                                    :item="item"
                                ></component>
                            </view>
                        </view>
                    </swiper-item>
                </suitable-swiper>
            </view>
        </view>
    </view>
</template>

<script>
import shop from '@/components/mine/shop.vue'
import book from '@/components/mine/book.vue'
import suitableSwiper from '@/components/suitable-swiper.vue'

export default {
    components: { shop, book, suitableSwiper },
    data() {
        return {
            configs: {
                selectedColor: '#87cefa',
                sliderBgColor: '#87cefa',
                itemWidth: '50%',
                isWhiteSpace: false
            },
            swiperTabs: [
                {
                    name: '收藏书籍',
                    componentName: 'book',
                    items: [
                        {
                            cover:
                                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28495225-1_w_3.jpg',
                            name: '深入理解Java虚拟机',
                            shopName: '传智书城自营',
                            price: 67,
                            desc:
                                '周志明虚拟机新作，第3版新增内容近50%，5个维度全面剖析JVM，大厂面试知识点全覆盖。与 Java编程思想、Effective Java、Java核心技术 堪称：Java四大名著'
                        },
                        {
                            cover:
                                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28495225-1_w_3.jpg',
                            name: '深入理解Java虚拟机',
                            shopName: '传智书城自营',
                            price: 67,
                            desc:
                                '周志明虚拟机新作，第3版新增内容近50%，5个维度全面剖析JVM，大厂面试知识点全覆盖。与 Java编程思想、Effective Java、Java核心技术 堪称：Java四大名著'
                        },
                        {
                            cover:
                                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28495225-1_w_3.jpg',
                            name: '深入理解Java虚拟机',
                            shopName: '传智书城自营',
                            price: 67,
                            desc:
                                '周志明虚拟机新作，第3版新增内容近50%，5个维度全面剖析JVM，大厂面试知识点全覆盖。与 Java编程思想、Effective Java、Java核心技术 堪称：Java四大名著'
                        }
                    ]
                },
                {
                    name: '订阅店铺',
                    componentName: 'shop',
                    items: [
                        {
                            cover: require('../../static/mine/mexican.jpg'),
                            name: '稻草人',
                            star: 5,
                            likes: 10.9,
                            tags: [
                                {
                                    label: '促销',
                                    style:
                                        'background-color: rgb(255,245,244); color: rgb(234,73,56)'
                                },
                                {
                                    label: '券',
                                    style:
                                        'background-color: rgb(255,245,244); color: rgb(234,73,56)'
                                }
                            ]
                        },
                        {
                            cover: require('../../static/mine/a21.jpg'),
                            name: 'A21',
                            star: 4,
                            likes: 8.9,
                            tags: [
                                {
                                    label: '券',
                                    style:
                                        'background-color: rgb(255,245,244); color: rgb(234,73,56)'
                                },
                                {
                                    label: '上新',
                                    style:
                                        'background-color: rgb(230,249,243); color: rgb(77,202,161)'
                                }
                            ]
                        },
                        {
                            cover: require('../../static/mine/a21.jpg'),
                            name: 'A21',
                            star: 4,
                            likes: 8.9,
                            tags: [
                                {
                                    label: '促销',
                                    style:
                                        'background-color: rgb(255,245,244); color: rgb(234,73,56)'
                                },
                                {
                                    label: '上新',
                                    style:
                                        'background-color: rgb(230,249,243); color: rgb(77,202,161)'
                                }
                            ]
                        },
                        {
                            cover: require('../../static/mine/a21.jpg'),
                            name: 'A21',
                            star: 4,
                            likes: 8.9,
                            tags: [
                                {
                                    label: '券',
                                    style:
                                        'background-color: rgb(255,245,244); color: rgb(234,73,56)'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.mine {
    .row-1 {
        width: 100%;
        height: 100%;

        .image {
            width: 100%;
            height: 305rpx;
        }
    }

    .row-2 {
        .row-2-1 {
            padding: 0 20rpx;
            display: flex;
            flex-direction: row;
            align-items: center;
            align-content: center;

            .col-1 {
                margin-right: 60rpx;
                position: relative;

                .avatar {
                    position: inherit;
                    border: 10rpx solid white;
                    border-radius: 100%;
                    width: 180rpx;
                    height: 180rpx;
                    top: -15rpx;
                }
            }

            .col-2 {
                width: 100%;

                .row-1 {
                    .cols {
                        margin-right: 0;
                        margin: 0 0 10rpx 0;
                    }
                }

                .row-2 {
                    .editor {
                        width: 100%;
                        color: #87cefa;
                        border: #87cefa 1rpx solid;
                    }
                }
            }
        }

        .row-2-2 {
            padding: 0 20rpx;
            border-bottom: 1rpx solid #e8e8e8;

            .row-1 {
                margin-bottom: 13rpx;
                color: #87cefa;
            }

            .row-2 {
                padding-bottom: 25rpx;
            }
        }
    }
}
</style>
