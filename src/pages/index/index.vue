<template>
    <view class="index">
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
                            class="input text-xs"
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
            <kong-swiper :configs="configs" :swiperTabs="swiperTabs">
                <swiper-item
                    v-for="(swiperTab, index) in swiperTabs"
                    :key="index"
                >
                    <view :id="'swiper-item-' + index">
                        <component
                            :bookshelf="swiperTab"
                            :is="swiperTab.componentName"
                        ></component>
                    </view>
                </swiper-item>
            </kong-swiper>
        </view>
    </view>
</template>

<script>
import kongSwiper from '@/components/kong-swiper.vue'
import bookshelf from '@/components/index/bookshelf.vue'
import homeTab from '@/components/index/home-tab.vue'
import kongAvatar from '@/components/kong-avatar.vue'
import kongNavigation from '@/components/kong-navigation.vue'

export default {
    name: 'index',
    components: {
        kongSwiper,
        kongNavigation,
        bookshelf,
        homeTab,
        kongAvatar
    },
    data() {
        return {
            configs: {
                selectedColor: '#87cefa',
                sliderBgColor: '#87cefa',
                itemWidth: '100%',
                isScroll: true
            },
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
                    componentName: 'homeTab'
                },
                {
                    name: '计算机/网络',
                    componentName: 'bookshelf'
                },
                {
                    name: '教育',
                    componentName: 'bookshelf'
                }
            ],
            title: '首页',
            search: '',
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
        openMessage() {
            console.log('open message center!')
        }
    }
}
</script>

<style lang="scss">
.index {
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
