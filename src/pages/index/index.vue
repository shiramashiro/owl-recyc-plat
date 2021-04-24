<template>
    <view class="index">
        <view class="status_bar"></view>
        <owl-navbar :config="config">
            <view class="nav-wrap margin-lr-lg flex justify-between">
                <view class="row flex align-center justify-center">
                    <view class="input-wrap flex align-center">
                        <input
                            style="width: 100%"
                            class="input text-sm"
                            v-model="search"
                            placeholder="请输入搜索关键字"
                            type="text"
                            maxlength="50"
                        />
                    </view>
                </view>
            </view>
        </owl-navbar>
        <view class="slide-show margin-lr-xs">
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
        <owl-fiche
            :iconPath="
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/market.png'
            "
            class="margin-top-sm"
            :title="'二手市场'"
        >
            <caskets @selected="chooseCasket"></caskets>
        </owl-fiche>
        <owl-fiche
            :bgColor="'rgb(248, 248, 248)'"
            class="margin-top-sm"
            :iconPath="
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/recovery.png'
            "
            :url="'/pages/index/more-recoveries'"
            :title="'回收点'"
        >
            <recoveries @selected="chooseRecovery"></recoveries>
        </owl-fiche>
        <owl-fiche
            :iconPath="
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/recommendation.png'
            "
            :bgColor="'rgb(248, 248, 248)'"
            :title="'推荐'"
            class="margin-top-sm"
        >
            <books @selected="chooseBook" :data="books"></books>
        </owl-fiche>
    </view>
</template>

<script>
import Recoveries from '@/components/index/recoveries.vue'
import Caskets from '@/components/index/caskets.vue'
import Books from '@/components/index/books.vue'

export default {
    name: 'Index',
    components: { Caskets, Recoveries, Books },
    data() {
        return {
            search: '',
            books: [],
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            },
            swiperTabs: [
                { name: '全部', type: 'all' },
                { name: '生活', type: 'living' },
                { name: '科技', type: 'technology' },
                { name: '社会', type: 'social' },
                { name: '经管', type: 'business' },
                { name: '文学', type: 'literature' },
                { name: '艺术', type: 'art' },
                { name: '辅教', type: 'education' },
                { name: '童书', type: 'children' }
            ],
            slideShow: [
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032611362390127.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/20210326193508509.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032619353510220.jpg'
            ],
            user: {
                fans: 180,
                praise: 44,
                follows: 124,
                username: 'kongsam',
                profile: 'Time tick away, dream faded away!',
                bgImage:
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/88441329_p0.jpg',
                avatar:
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/user01.jpg'
            }
        }
    },
    methods: {
        chooseCasket(info) {
            uni.navigateTo({
                url: '/pages/index/classification?type=' + info.item.type
            })
        },
        chooseRecovery(info) {
            uni.navigateTo({
                url: '/pages/index/recovery-detail?id=' + info.item.id
            })
        },
        chooseBook(info) {
            uni.navigateTo({
                url: '/pages/index/book-detail?id=' + info.id
            })
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
                this.books = resp.data
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

    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .nav-wrap {
        height: 100%;

        .row {
            width: 100%;

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
        }
    }

    .slide-show {
        .slide-show-image {
            width: 100%;
            height: 100%;
        }
    }

    .filter {
        .other-tab {
            flex-flow: row;
        }
    }
}
</style>
