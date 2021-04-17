<template>
    <view class="comments">
        <view
            v-for="(item, index) in data"
            :key="index"
            class="comment margin-tb-sm padding-bottom-sm"
        >
            <view class="comment-wrap flex align-center">
                <view class="col-1 margin-right-sm">
                    <avatar
                        :src="item.user.avatar"
                        mode="aspectFill"
                        :size="40"
                    ></avatar>
                </view>
                <view class="col-2">
                    <view
                        class="row-1 margin-bottom-xs flex justify-between align-center"
                    >
                        <view class="col-1 text-bold">
                            {{ item.user.username }}
                        </view>
                        <view class="col-2 text-gray">
                            {{ item.postDate }}
                        </view>
                    </view>
                    <view class="row-2 margin-bottom-xs">
                        {{ item.postContent }}
                    </view>
                </view>
            </view>
            <view class="options flex justify-end">
                <view class="options-wrap flex">
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
    name: 'Comment',
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    methods: {
        clickDisagree(item, index) {
            this.handleClick(item, index, 'disagree')
        },
        clickAgree(item, index) {
            this.handleClick(item, index, 'agree')
        },
        handleClick(item, index, type) {
            this.$emit('selected', {
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
        border-bottom: 1px solid #cccc;
    }
}
</style>
