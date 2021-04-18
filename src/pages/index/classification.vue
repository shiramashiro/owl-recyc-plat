<template>
    <view class="classification">
        <view class="status_bar"> </view>
        <navbar :config="config">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
                <view class="margin-left-lg text-lg">二手书籍分类</view>
            </view>
        </navbar>
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
            books: [],
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false,
                isCustomImmerse: false
            }
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
    },
    methods: {
        chooseBook(info) {
            uni.navigateTo({
                url: '/pages/index/book-detail?id=' + info.id
            })
        },
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/index/index'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.classification {
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }
}
</style>
