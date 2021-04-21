<template>
    <view class="more">
        <posts
            :url="'/get/post'"
            :urlParam="tempParams"
            @selected="choosePost"
        ></posts>
    </view>
</template>

<script>
import Posts from '@/components/community/posts.vue'

export default {
    components: { Posts },
    name: 'more',
    data() {
        return {
            tempParams: []
        }
    },
    methods: {
        choosePost(info) {
            uni.navigateTo({
                url: '/pages/community/post-detail?id=' + info.item.id
            })
        }
    },
    onLoad(option) {
        let tempParams = {}
        for (let key in option) {
            tempParams[key] = option[key]
        }
        this.tempParams = tempParams
    }
}
</script>

<style lang="scss" scoped></style>
