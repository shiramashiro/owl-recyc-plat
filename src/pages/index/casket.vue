<template>
    <view class="casket">
        <view class="books-panel flex">
            <view @click="guide(`/pages/index/detail?id=${item.id}`)" class="book-item padding-sm" v-for="(item, index) in books" :key="index">
                <image mode="aspectFill" :src="item.cover_url"></image>
                <view class="content">
                    <view class="name text-bold">{{ item.name }}</view>
                    <view class="author">{{ item.author }}</view>
                    <view class="discount text-red text-lg">{{ (item.price * item.discount).toFixed(2) }}</view>
                    <view class="price text-gray">{{ item.price }}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'casket',
    data() {
        return {
            books: []
        }
    },
    methods: {
        guide(url) {
            uni.navigateTo({
                url: url
            })
        }
    },
    onLoad(options) {
        this.$axios.get(`/index/find/by/type?type=${options.type}`).then(response => {
            this.books = response.data
        })
    }
}
</script>

<style lang="scss" scoped>
.casket {
    .books-panel {
        flex-flow: wrap;

        .book-item {
            background-color: white;
            width: 50%;

            .content > view {
                margin-bottom: 10rpx;
            }

            .content {
                view:last-child {
                    margin-bottom: 0;
                }

                view:nth-child(-n + 2) {
                    display: -webkit-box;
                    overflow: hidden;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                }

                view:nth-child(n - 2)::before {
                    font-size: 80%;
                    margin-right: 4rpx;
                }

                .name {
                    -webkit-line-clamp: 2;
                }

                .author {
                    -webkit-line-clamp: 1;
                }

                .price {
                    text-decoration: line-through;
                }

                .price::before {
                    content: '原价¥';
                }

                .discount::before {
                    content: '二手价¥';
                }
            }
        }
    }
}
</style>
