<template>
    <view class="more">
        <view class="status_bar"> </view>
        <owl-navbar :config="config">
            <view class="navi-content flex align-center">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
                <view class="margin-left-lg text-gray text-df">
                    更多
                </view>
            </view>
        </owl-navbar>
        <posts
            class="margin-top-sm padding-lr-xs"
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
            tempParams: [],
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
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/community/community'
            })
        },
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

<style lang="scss" scoped>
.more {
    background-color: rgb(248, 248, 248);

    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }
}
</style>
