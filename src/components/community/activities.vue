<template>
    <view class="activities">
        <view
            v-for="(item, index) in posts"
            :key="index"
            @click="handleClick(item, index)"
            class="activity padding-sm margin-tb-sm"
        >
            <view class="row-1 margin-bottom-xs text-cut text-sm">
                {{ item.title }}
            </view>
            <view class="row-2 flex align-center justify-between">
                <owl-tag>{{ item.tagName }}</owl-tag>
                <view class="col-2 text-gray text-xs">
                    {{ item.time }}
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'activities',
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.$axios
            .get('/get/post', {
                params: {
                    limitNum: 3,
                    tagType: 'official'
                }
            })
            .then(resp => {
                this.posts = resp.data
            })
            .catch(error => {
                console.log(error)
            })
    },
    methods: {
        handleClick(item, index) {
            this.$emit('selected', {
                item: item,
                index: index
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.activity {
    background-color: #e8e8e8;
    border-radius: 12rpx;
}
</style>
