<template>
    <view class="classification">
        <books :data="books" @selected="chooseBook"></books>
    </view>
</template>

<script>
import Books from '@/components/index/books.vue'

export default {
    name: 'Classification',
    components: { Books },
    data() {
        return {
            books: []
        }
    },
    onLoad(option) {
        this.$axios
            .get('/get/book', {
                params: {
                    type: option.type
                }
            })
            .then(resp => {
                console.log(resp)
                this.books = resp.data
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        // 获取点击的书籍信息
        chooseBook(item) {
            console.log(item)
        }
    }
}
</script>

<style lang="scss" scoped>
.classification {
    background-color: rgb(248, 248, 248);
}
</style>
