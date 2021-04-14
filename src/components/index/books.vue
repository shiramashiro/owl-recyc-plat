<template>
    <view class="books flex">
        <view
            v-for="(item, index) in data"
            :key="index"
            class="book flex-sub margin-xs"
            @click="handleClick(item)"
        >
            <view class="row-1 margin-tb-xs">
                <view class="col-1">
                    <image mode="aspectFill" :src="item.cover[0].cover"></image>
                </view>
            </view>
            <view class="row-2 padding-sm">
                <view class="row-2-1 margin-bottom-xs">
                    {{ item.name }}
                </view>
                <view class="row-2-2 text-gray margin-bottom-xs">
                    {{ item.author }}
                </view>
                <view class="row-2-3 text-red text-lg margin-bottom-xs">
                    {{ item.price }}
                </view>
                <view class="row-2-4 text-gray text-lg">
                    {{ item.originPrice }}
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'Books',
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    methods: {
        handleClick(item) {
            this.$emit('selected', item)
        }
    }
}
</script>

<style lang="scss" scoped>
.books {
    flex-flow: wrap;

    .book {
        background-color: white;
        border-radius: 20rpx;
        width: 47%;

        .row-1 {
            .col-1 {
                text-align: center;
            }
        }

        .row-2 {
            .row-2-1 {
                display: -webkit-box;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .row-2-2 {
                display: -webkit-box;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .row-2-3::before {
                content: '回收价¥';
                font-size: 80%;
                margin-right: 4rpx;
            }

            .row-2-4::before {
                content: '原价¥';
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
