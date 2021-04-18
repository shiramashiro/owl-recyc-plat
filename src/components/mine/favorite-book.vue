<template>
    <tui-swipe-action
        :actions="actions"
        :open="isOpen"
        class="margin-bottom-lg margin-top-lg margin-right-sm margin-left-sm"
        style="border-radius: 20rpx; white-space: normal"
    >
        <template v-slot:content>
            <view class="favorite-book padding">
                <view class="row-1 margin-bottom-sm text-lg">
                    {{ item.shopName }}
                </view>
                <view class="row-2 flex align-center">
                    <view class="col-1">
                        <image
                            class="cover"
                            mode="aspectFill"
                            :src="item.cover"
                        ></image>
                    </view>
                    <view class="col-2">
                        <view class="row-1 text-df">{{ item.name }}</view>
                        <view class="row-2 text-sm">{{ item.desc }}</view>
                        <view class="row-3 text-red">
                            <text class="col-1 text-xl">{{ item.price }}</text>
                        </view>
                        <view class="row-4">
                            <tui-icon
                                color="#87cefa"
                                class="cart padding-xs"
                                name="cart"
                                :size="30"
                                unit="rpx"
                            ></tui-icon>
                            <tui-icon
                                name="more-fill"
                                :size="40"
                                @click="open"
                                unit="rpx"
                            ></tui-icon>
                        </view>
                    </view>
                </view>
            </view>
        </template>
    </tui-swipe-action>
</template>

<script>
export default {
    name: 'favorite-book',
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
.favorite-book {
    background-color: white;

    .row-2 {
        .col-1 {
            .cover {
                width: 200rpx;
                height: 230rpx;
                border-radius: 15rpx;
                margin-right: 20rpx;
            }
        }

        .col-2 {
            .row-1 {
                margin-bottom: 20rpx;
                display: -webkit-box;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .row-2 {
                display: -webkit-box;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 0 0 20rpx 0;
            }

            .row-3 {
                .col-1::before {
                    content: '¥';
                    font-size: 80%;
                    margin-right: 4rpx;
                }
            }

            .row-4 {
                float: right;
                display: inline-flex;
                align-items: center;

                .cart {
                    border-radius: 100%;
                    border: 1rpx solid #87cefa;
                    margin-right: 20rpx !important;
                }
            }
        }
    }
}
</style>
