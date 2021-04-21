<template>
    <view class="owl-comments">
        <view
            v-for="(item, index) in data"
            :key="index"
            class="owl-comment margin-tb-sm padding-top-sm"
        >
            <view class="comment-wrap">
                <view class="flex">
                    <view class="col-1">
                        <owl-avatar
                            :src="item.user.avatar"
                            mode="aspectFill"
                            :size="40"
                        ></owl-avatar>
                    </view>
                    <view class="col-2">
                        <view class="row-1">
                            <view class="margin-left-sm">
                                <view class="text-lg margin-bottom-xs">
                                    {{ item.user.username }}
                                </view>
                                <view
                                    class="col-2 text-xs text-gray margin-right-lg"
                                >
                                    {{ item.postDate }}
                                </view>
                            </view>
                        </view>
                        <view class="row-2 margin-left-sm margin-top-xs">
                            {{ item.content }}
                        </view>
                    </view>
                </view>
            </view>
            <view class="options flex justify-end">
                <view class="options-wrap flex text-sm text-gray">
                    <view
                        @click="clickDisagree(item, index)"
                        class="col-2 margin-right-lg el-icon-third-cai"
                    >
                        {{ item.disagree }}
                    </view>
                    <view
                        @click="clickAgree(item, index)"
                        class="col-1 el-icon-third-dianzan"
                    >
                        {{ item.agree }}
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'owl-comment',
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    methods: {
        // 点击不同意，传入评论的信息
        clickDisagree(item, index) {
            this.handleClick(item, index, 'disagree')
        },
        // 点击同意，传入评论的信息
        clickAgree(item, index) {
            this.handleClick(item, index, 'agree')
        },
        handleClick(item, index, type) {
            this.$emit('express', {
                type: type,
                item: item,
                index: index
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.owl-comments {
    .owl-comment {
        border-top: 1rpx solid rgba(226, 226, 226, 0.8);
    }
}
</style>
