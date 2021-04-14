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
            books: [
                // {
                //     type: '',
                //     id: 0,
                //     cover: [],
                //     author: '',
                //     name: '',
                //     price: 0,
                //     originPrice: 0,
                //     desc: ''
                // }
            ]
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
        chooseBook(item) {
            console.log(item)
        }
    }
}
</script>

<style lang="scss" scoped>
.classification {
    // background-color: rgb(248, 248, 248);
    background-color: rgb(121, 175, 224);
}
</style>
