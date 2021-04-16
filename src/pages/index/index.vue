<template>
    <view class="index">
        <view class="status_bar"></view>
        <navbar :config="config">
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
            </view>
        </navbar>
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
        <subdomain :title="'书籍分类'">
            <caskets @selected="chooseCasket"></caskets>
        </subdomain>
        <!-- 如果要增加其他模块，就在subdomain内部中写 -->
        <subdomain :title="'废纸回收点'">
            <!-- 组件 -->
        </subdomain>
    </view>
</template>

<script>
import Subdomain from '@/components/index/subdomain.vue'
import Caskets from '@/components/index/caskets.vue'

export default {
    name: 'Index',
    components: { Subdomain, Caskets, Subdomain },
    data() {
        return {
            search: '',
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
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg'
            }
        }
    },
    methods: {
        chooseCasket(info) {
            uni.navigateTo({
                url: '/pages/index/classification?type=' + info.casket.type
            })
        }
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

        .col-1 {
            width: 10%;
        }

        .col-2 {
            width: 85%;

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
