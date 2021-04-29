<template>
    <view class="owl-books flex">
        <view
            v-for="(item, index) in books"
            :key="index"
            class="book flex-sub margin-xs"
            @click="
                navigateToClickedItem('/pages/index/book-detail', [
                    'id=' + item.id
                ])
            "
        >
            <view class="row-1 margin-tb-xs">
                <view class="col-1">
                    <image mode="aspectFill" :src="item.img[0].imgUrl"></image>
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
// 导入mixins
import { navigateToMixins } from '@/mixins/navigate-to.js'

export default {
    name: 'books',
    mixins: [navigateToMixins],
    props: {
        bookType: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            books: []
        }
    },
    mounted() {
        this.$axios
            .get('/get/book', {
                params: {
                    type: this.bookType
                }
            })
            .then(resp => {
                this.books = resp.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>

<style lang="scss" scoped>
.owl-books {
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
                content: '二手价¥';
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
