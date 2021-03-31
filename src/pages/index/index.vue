<template>
    <view class="index">
        <view class="status_bar"> </view>
        <kong-navigation :navConfigs="navConfigs">
            <view
                class="nav-wrap margin-right-lg margin-left-lg flex justify-between"
            >
                <view class="col-1 flex align-center">
                    <kong-avatar :src="user.avatar" :size="33"></kong-avatar>
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
                    @click="openMessage()"
                >
                    <i class="el-icon-third-xiaoxixinxi" plain="true"></i>
                </view>
            </view>
        </kong-navigation>
        <view class="rows">
            <tui-tab
                :scroll="true"
                selectedColor="#87cefa"
                sliderBgColor="#87cefa"
                :current="currentTuiTab"
                @slideTuiTab="slideTuiTab"
                :swiperTabs="swiperTabs"
            ></tui-tab>
            <swiper
                style="background-color: rgb(248,248,248)"
                :style="{ height: swiperHeight + 'px' }"
                :current="currentSwiper"
                @change="slideSwiper"
                :duration="360"
            >
                <swiper-item
                    v-for="(swiperTab, index) in swiperTabs"
                    :key="index"
                >
                    <view :id="'swiper-item-' + index">
                        <!-- #ifdef H5 -->
                        <component
                            :bookshelf="swiperTab"
                            :is="swiperTab.componentName"
                        ></component>
                        <!-- #endif -->
                        <!-- #ifdef MP-WEIXIN || MP-QQ-->
                        <template v-if="swiperTab.name === '全部'">
                            <home-tab :bookshelf="swiperTab"></home-tab>
                        </template>
                        <template v-else>
                            <bookshelf :bookshelf="swiperTab"></bookshelf>
                        </template>
                        <!-- #endif -->
                    </view>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<script>
import KongAvatar from '@/components/kong-avatar.vue'
import KongNavigation from '@/components/kong-navigation.vue'
import HomeTab from '@/components/index/home-tab.vue'
import Bookshelf from '@/components/index/bookshelf.vue'

export default {
    name: 'Index',
    components: {
        KongAvatar,
        KongNavigation,
        Bookshelf,
        HomeTab
    },
    data() {
        return {
            search: '',
            swiperHeight: 0,
            currentSwiper: 0,
            currentTuiTab: 0,
            navConfigs: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            },
            swiperTabs: [
                {
                    name: '全部',
                    componentName: 'HomeTab'
                },
                {
                    name: '计算机/网络',
                    componentName: 'Bookshelf'
                },
                {
                    name: '教育',
                    componentName: 'Bookshelf'
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
    mounted() {
        setTimeout(() => {
            this.initSwiperHeight(0)
        }, 0)
    },
    methods: {
        initSwiperHeight(index) {
            uni.createSelectorQuery()
                .in(this)
                .select('#swiper-item-' + index)
                .boundingClientRect(data => {
                    this.swiperHeight = data.height + 30
                })
                .exec()
        },
        slideTuiTab(event) {
            this.initSwiperHeight(event.index)
            this.currentTuiTab = event.index
            this.currentSwiper = event.index
        },
        slideSwiper(event) {
            this.initSwiperHeight(event.detail.current)
            this.currentTuiTab = event.detail.current
            this.currentSwiper = event.detail.current
        },
        openMessage() {
            console.log('open message center!')
        }
    }
}
</script>

<style lang="scss" scoped>
.index {
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

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
                background-color: rgba(240, 240, 240, 0.8);
                padding: 0 20rpx;
                height: 44rpx;
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
}
</style>
