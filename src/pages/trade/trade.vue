<template>
    <view class="trade">
        <!-- 可交易的书籍 -->
        <owl-fiche :title="'书籍'" :sub-title="'优质的二手书籍'" :icon-path="require('../../assets/icon/交易.png')">
            <view class="shelves flex align-center">
                <view class="item padding-sm" v-for="(item, index) in tradableBooks" :key="index">
                    <image model="aspectFit" :src="item.book.cover" />
                    <view class="tags margin-top-sm flex align-center">
                        <view class="margin-right-xs" v-for="(tagItem, tagIndex) in item.tags" :key="tagIndex">
                            <tui-tag size="10rpx" plain>{{ tagItem }}</tui-tag>
                        </view>
                    </view>
                    <view class="title margin-top-sm text-lg">{{ item.title }}</view>
                    <view class="dynamic margin-top-sm flex align-center">
                        <view class="price margin-right-sm text-red text-lg">¥{{ item.book.price }}</view>
                        <view class="like text-sm text-gray">{{ item.like }}人想要</view>
                    </view>
                    <view class="initiator margin-top-sm flex align-center">
                        <owl-avatar :size="25" :src="item.user.avatar"></owl-avatar>
                        <view class="username margin-left-sm">{{ item.user.username }}</view>
                    </view>
                </view>
            </view>
        </owl-fiche>
    </view>
</template>

<script>
import tradableBooks from '@/assets/data/tradable-books.js'

export default {
    name: 'trade',
    data() {
        return {
            tradableBooks
        }
    },
    mounted() {}
}
</script>

<style lang="scss" scoped>
.trade {
    background-color: rgb(248, 248, 248);

    .shelves {
        flex-wrap: wrap;

        .item {
            width: 50%;
            background-color: white;

            image {
                width: 100%;
                height: 350rpx;
            }

            .tags {
                flex-wrap: wrap;
            }

            .title,
            .dynamic,
            .initiator {
                word-break: break-all;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
            }
        }
    }
}
</style>
