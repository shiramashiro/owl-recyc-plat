<template>
    <view class="classification">
        <tui-navigation-bar>
            <navigator :url="'/pages/index/index'" open-type="switchTab">
                <i class="el-icon-third-fanhui"></i>
            </navigator>
            <view class="margin-left-lg text-lg">二手书籍分类</view>
        </tui-navigation-bar>
        <books :data="books"></books>
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
                this.books = resp.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>

<style lang="scss" scoped></style>
