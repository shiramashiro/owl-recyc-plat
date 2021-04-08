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
        <view class="rows">
            <recommendation></recommendation>
            <tui-tab
                :isSticky="isSticky"
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
                <swiper-item v-for="(tab, index) in swiperTabs" :key="index">
                    <view :id="'swiper-item-' + index">
                        <swiper-content :tabName="tab.name"></swiper-content>
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
            isSticky: true,
            search: '',
            cfg: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            },
            swiperTabs: [
                { name: '全部' },
                { name: '计算机/网络' },
                { name: '教育' }
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

    .rows {
        .other-tab {
            flex-flow: row;
        }
    }
}
</style>
