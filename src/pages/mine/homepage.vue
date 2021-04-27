<template>
    <view
        class="homepage"
        :style="{ minHeight: $systemInfo.windowHeight + 'px' }"
    >
        <tui-navigation-bar :isFixed="true" :isOpacity="true">
            <navigator :url="'/pages/mine/mine'" open-type="switchTab">
                <image
                    class="margin-left-sm"
                    style="width: 70rpx; height: 70rpx"
                    @click="backIntoIndex()"
                    src="https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/fanhui.png"
                ></image>
            </navigator>
        </tui-navigation-bar>
        <view class="row-1">
            <image
                class="image"
                mode="aspectFill"
                :src="$store.state.userInfo.bgImage"
            ></image>
        </view>
        <view class="row-2">
            <view class="row-2-1">
                <view class="col-1">
                    <image
                        class="avatar"
                        model="aspectFit"
                        :src="$store.state.userInfo.avatar"
                    ></image>
                </view>
                <view class="col-2">
                    <view class="row-1 flex justify-between align-center">
                        <view class="cols text-center">
                            <view class="text-sm">
                                {{ $store.state.userInfo.fans }}
                            </view>
                            <view class="text-xs text-gray">粉丝</view>
                        </view>
                        <view class="cols text-center">
                            <view class="text-sm">
                                {{ $store.state.userInfo.follows }}
                            </view>
                            <view class="text-xs text-gray">关注</view>
                        </view>
                        <view class="cols text-center">
                            <view class="text-sm">
                                {{ $store.state.userInfo.praise }}
                            </view>
                            <view class="text-xs text-gray">获赞</view>
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
                <view class="row-1 text-lg">
                    {{ $store.state.userInfo.username }}
                </view>
                <view class="row-2 text-sm text-gray">
                    {{ $store.state.userInfo.profile }}
                </view>
            </view>
            <view class="row-2-3">
                <tui-tab
                    :scroll="false"
                    selectedColor="#87cefa"
                    sliderBgColor="#87cefa"
                    @slideTuiTab="slideTuiTab"
                    :current="index"
                    :swiperTabs="swiperTabs"
                ></tui-tab>
                <view class="components">
                    <component
                        :is="swiperTabs[index].componentName"
                    ></component>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import CollectedBooks from '@/components/mine/collected-books.vue'
import CollectedPosts from '@/components/mine/collected-posts.vue'

export default {
    name: 'mine',
    components: { CollectedBooks, CollectedPosts },
    data() {
        return {
            index: 0,
            swiperTabs: [
                { tabName: '收藏的书籍', componentName: 'CollectedBooks' },
                { tabName: '收藏的帖子', componentName: 'CollectedPosts' }
            ]
        }
    },
    methods: {
        slideTuiTab(info) {
            this.index = info.index
        }
    }
}
</script>

<style lang="scss" scoped>
.homepage {
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }

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
