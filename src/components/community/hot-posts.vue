<template>
    <view class="hot-posts padding-lr-sm">
        <view
            class="hot-post padding-tb-sm flex align-center justify-between"
            v-for="(item, index) in hotPosts"
            :key="index"
            @click="handleClick(item, index)"
        >
            <view class="col-1 text-sm text-center">{{ index + 1 }}</view>
            <view class="col-2 text-cut margin-left-xs">{{ item.title }}</view>
            <view
                class="text-center text-cut col-3 flex align-center text-gray text-xs"
            >
                <view class="col-3-1">
                    <image mode="aspectFill" src="@/static/hot.png"></image>
                </view>
                <view class="col-3-2">1000</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'hot-posts',
    data() {
        return {
            hotPosts: []
        }
    },
    methods: {
        handleClick(item, index) {
            this.$emit('selected', {
                item: item,
                index: index
            })
        }
    },
    mounted() {
        this.$axios
            .get('/get/post', {
                params: {
                    limitNum: 3,
                    browseNum: 100
                }
            })
            .then(resp => {
                this.hotPosts = resp.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>

<style lang="css" scoped>
.hot-post {
    margin-bottom: 20rpx;
    border-bottom: 1rpx solid #cccc;
}

.col-3-1 image {
    width: 30rpx;
    height: 30rpx;
}

.col-1 {
    width: 5%;
}

.col-2 {
    width: 80%;
}

.col-3 {
    width: 15%;
}

.hot-post:last-child {
    margin-bottom: 0;
    border-bottom: 0;
}
</style>
