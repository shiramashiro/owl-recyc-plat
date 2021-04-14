<template>
    <view class="comment margin-tb-lg padding-bottom-xs">
        <view class="comment-wrap flex justify-between align-center">
            <view class="col-1 margin-right-sm">
                <avatar
                    :src="data.user.avatar"
                    mode="aspectFill"
                    :size="80"
                ></avatar>
            </view>
            <view class="col-2">
                <view
                    class="row-1 margin-bottom-xs flex justify-between align-center"
                >
                    <view class="col-1 text-bold">
                        {{ data.user.username }}
                    </view>
                    <view class="col-2 text-gray">
                        {{ data.postDate }}
                    </view>
                </view>
                <view class="row-2 margin-bottom-xs">
                    {{ data.postContent }}
                </view>
            </view>
        </view>
        <view class="options flex justify-end">
            <view class="options-wrap flex">
                <view class="col-2 margin-right-lg el-icon-third-cai">
                    {{ data.disagree }}
                </view>
                <view class="col-1 el-icon-third-dianzan">
                    {{ data.agree }}
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
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.comment {
    border-bottom: 1px solid #cccc;
}
</style>
