<template>
    <tui-swipe-action
        :actions="actions"
        :open="isOpen"
        class="margin-bottom-lg margin-top-lg margin-right-sm margin-left-sm"
        style="border-radius: 20rpx;"
    >
        <template v-slot:content>
            <view class="favorite-shop flex align-center padding-xs">
                <view class="col-1 margin-right-sm">
                    <image class="cover" :src="item.cover"></image>
                </view>
                <view class="col-2 flex align-center justify-between">
                    <view class="col-2-1">
                        <view class="row-1 text-df">
                            {{ item.name }}
                        </view>
                        <view class="row-2 flex align-center justify-between">
                            <view class="star">
                                <tui-rate
                                    :size="14"
                                    :current="item.star"
                                    disabled
                                ></tui-rate>
                            </view>
                            <view class="likes text-xs text-gray"
                                >{{ item.likes }}万人关注</view
                            >
                        </view>
                        <view class="row-3 flex">
                            <view
                                class="tag text-xs text-center"
                                v-for="(tag, index) in item.tags"
                                :key="index"
                                :style="tag.style"
                            >
                                {{ tag.label }}
                            </view>
                        </view>
                    </view>
                    <view class="col-2-2">
                        <tui-icon
                            name="more-fill"
                            :size="40"
                            @click="open"
                            unit="rpx"
                        ></tui-icon>
                    </view>
                </view>
            </view>
        </template>
    </tui-swipe-action>
</template>

<script>
export default {
    name: 'favorite-shop',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            actions: [
                {
                    name: '取消',
                    color: '#fff',
                    fontsize: 30,
                    width: 70,
                    background: '#FD3B31'
                }
            ],
            isOpen: false
        }
    },
    methods: {
        open() {
            if (this.isOpen) {
                this.isOpen = false
            } else {
                this.isOpen = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.favorite-shop {
    .col-1 {
        .cover {
            width: 130rpx;
            height: 130rpx;
        }
    }

    .col-2 {
        width: 100%;

        .col-2-1 {
            .row-1 {
                display: -webkit-box;
                word-break: break-all;
                width: 300rpx;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .row-2 {
                .likes {
                    margin-left: 8rpx;
                }
            }

            .row-3 {
                .tag {
                    margin-right: 13rpx;
                    padding: 2rpx 15rpx;
                    border-radius: 50rpx;
                    border: 1px solid white;
                    background: #87cefa;
                    color: white;
                }

                .tag:last-child {
                    margin-right: 0;
                }
            }
        }

        .col-2-2 {
            margin-right: 20rpx;
        }
    }
}
</style>
