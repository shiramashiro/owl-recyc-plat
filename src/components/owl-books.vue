<template>
    <view class="owl-books flex">
        <view v-for="(item, index) in container" :key="index" class="book flex-sub margin-xs" @click="navigateToClickedItem('/pages/index/book-detail', ['id=' + item.id])">
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
import { navigateToMixins } from '@/mixins/navigate-to.js'
import { books } from '@/assets/data/books.js'

export default {
    name: 'books',
    mixins: [navigateToMixins],
    props: {
        type: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            container: []
        }
    },
    mounted() {
        /**
         * index.vue传入书籍类型 type，你要根据bookType查询books里面的书籍。
         * index.vue 使用了owl-books.vue组件，并且给该子组件传递了一个 type（一个 props），type 代表了书籍的类别，与 books 中每一个对象中的 type 对等。
         * 如果 index.vue 给子组件 owl-books.vue 组件传递的 type 为 living，则需要“生活类”的书籍。
         * 所以，你需要把 books 中 type 为 living 的书籍全部放进 data 中 container 数组里。
         */








        /* 这里的代码你不需要管，也不需要去理解。这是后期连接数据库时用到的发起网络请求的代码。 */
        // this.$axios
        //     .get('/get/book', {
        //         params: {
        //             type: this.type
        //         }
        //     })
        //     .then(resp => {
        //         this.container = resp.data
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
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
