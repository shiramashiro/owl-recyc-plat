<template>
    <view class="comments">
        <view
            v-for="(item, index) in data"
            :key="index"
            class="comment margin-tb-sm padding-top-sm"
        >
            <view class="comment-wrap flex">
                <view class="col-1 margin-right-sm">
                    <avatar
                        :src="item.user.avatar"
                        mode="aspectFill"
                        :size="40"
                    ></avatar>
                </view>
                <view class="col-2">
                    <view class="row-1 margin-bottom-xs">
                        <view class="col-1 text-bold">
                            {{ item.user.username }}
                        </view>
                    </view>
                    <view class="row-2 margin-bottom-xs">
                        {{ item.content }}
                    </view>
                </view>
            </view>
            <view class="options flex justify-end">
                <view class="options-wrap flex">
                    <view class="col-2 text-gray margin-right-lg">
                        {{ item.postDate }}
                    </view>
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
    name: 'comment',
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
        /**
         * clickDisagree和clickAgreee复用handleClick，向外回传评论信息以及用户点击的是同意还是反对。
         * 使用此组件时，外界使用express触发该函数。
         */
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
.comments {
    .comment {
        border-top: 1rpx solid rgba(226, 226, 226, 0.8);
    }
}
</style>
