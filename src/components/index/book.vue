<template>
    <view class="book margin-xs" @click="viewMore()">
        <view class="row-1 margin-bottom-xs padding-top-xs">
            <view class="col-1">
                <image mode="aspectFill" :src="data.cover"></image>
            </view>
        </view>
        <view class="row-2 padding-sm">
            <view class="col-1 margin-bottom-xs text-df">
                {{ data.name }}
            </view>
            <view class="col-2 margin-bottom-xs text-gray">
                {{ data.author }}
            </view>
            <view
                class="col-3 margin-bottom-xs flex align-center justify-between"
            >
                <view class="col-3-1 text-red text-lg">
                    {{ data.price }}
                </view>
                <view class="col-3-2 text-gray text-lg">
                    {{ data.originPrice }}
                </view>
            </view>
        </view>
    </view>
</template>

<script>
import { viewDetails } from '@/mixins/view-details.js'

export default {
    name: 'Book',
    mixins: [viewDetails]
}
</script>

<style lang="scss" scoped>
.book {
    background-color: white;
    border-radius: 20rpx;
    /* #ifdef H5 */
    width: 47%;
    /* #endif */

    .row-1 {
        .col-1 {
            text-align: center;
        }
    }

    .row-2 {
        .col-1 {
            display: -webkit-box;
            word-break: break-all;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .col-2 {
            display: -webkit-box;
            word-break: break-all;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .col-3 {
            .col-3-1::before {
                content: '¥';
                font-size: 80%;
                margin-right: 4rpx;
            }

            .col-3-2::before {
                content: '¥';
                font-size: 80%;
                margin-right: 4rpx;
            }

            .col-3-2 {
                text-decoration: line-through;
            }
        }
    }
}
</style>
