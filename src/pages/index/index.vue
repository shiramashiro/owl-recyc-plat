<template>
    <view class="index">
        <view class="status_bar"></view>
        <navbar :cfg="cfg">
            <view class="nav-wrap margin-lr-lg flex justify-between">
                <view class="col-1 flex align-center">
                    <avatar :src="user.avatar" :size="33"></avatar>
                </view>
                <view class="col-2 flex align-center justify-center">
                    <view class="input-wrap flex align-center">
                        <input
                            class="input text-sm"
                            v-model="search"
                            placeholder="请输入搜索关键字"
                            type="text"
                            maxlength="50"
                        />
                    </view>
                </view>
                <view
                    class="col-3 flex align-center justify-center"
                    @click="openMsg()"
                >
                    <i class="el-icon-third-xiaoxixinxi" plain="true"></i>
                </view>
            </view>
        </navbar>
        <recommendation></recommendation>
        <view class="filter">
            <tui-tab
                :isSticky="true"
                :scroll="true"
                selectedColor="#87cefa"
                sliderBgColor="#87cefa"
                :current="currentTuiTab"
                @slideTuiTab="slide"
                :swiperTabs="swiperTabs"
            ></tui-tab>
            <swiper
                style="background-color: rgb(248,248,248)"
                :style="{ height: swiperHeight + 'px' }"
                :current="currentSwiper"
                @change="slide"
                :duration="360"
            >
                <swiper-item
                    v-for="(swiperTab, index) in swiperTabs"
                    :key="index"
                >
                    <view :id="'swiper-item-' + index">
                        <swiper-content
                            :tabType="swiperTab.type"
                        ></swiper-content>
                    </view>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<script>
import SwiperContent from '@/components/index/swiper-content.vue'
import Recommendation from '@/components/index/recommendation.vue'
import { suitSwiper } from '@/mixins/suit-swiper.js'

export default {
    name: 'Index',
    mixins: [suitSwiper],
    components: { SwiperContent, Recommendation },
    data() {
        return {
            search: '',
            currentSwiper: 0,
            currentTuiTab: 0,
            cfg: {
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
            book: [
                {
                    id: 0,
                    type: '',
                    cover: [],
                    name: '',
                    author: '',
                    price: 0,
                    originPrice: 0,
                    desc: ''
                }
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
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg'
            }
        }
    },
    methods: {
        openMsg() {
            console.log('open message center!')
        },
        slide(data) {
            let index = data.detail.current
            this.currentTuiTab = index
            this.currentSwiper = index
        }
    }
}
</script>

<style lang="scss" scoped>
.index {
    // #ifdef H5
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
    // #endif

    .nav-wrap {
        height: 100%;

        .col-1 {
            width: 10%;
        }

        .col-2 {
            width: 75%;

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

        .col-1 {
            width: 10%;
        }
    }

    .filter {
        .other-tab {
            flex-flow: row;
        }
    }
}
</style>
