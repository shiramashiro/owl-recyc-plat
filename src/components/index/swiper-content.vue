<template>
    <view class="swiper-content">
        <view class="public-content flex">
            <book
                v-for="(book, index) in books"
                :key="index"
                :data="book"
            ></book>
        </view>
    </view>
</template>

<script>
import Book from './book.vue'

export default {
    name: 'SwiperContent',
    components: { Book },
    props: {
        tabType: {
            type: String,
            required: true
        }
    },
    mounted() {
        // this.$axios
        //     .get('/get/book', {
        //         params: {
        //             type: this.tabType
        //         }
        //     })
        //     .then(response => {
        //         this.books = response.data
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    },
    data() {
        return {
            books: [
                {
                    id: 0,
                    cover: '',
                    name: '',
                    author: '',
                    price: '',
                    originPrice: ''
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper-content {
    .public-content {
        flex-flow: wrap;
    }
}
</style>
