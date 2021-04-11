<template>
    <view
        class="post margin-bottom-sm padding-bottom-sm"
        @click="viewPostDetail()"
    >
        <view class="row-1 flex align-center margin-bottom-sm">
            <view class="col-1 margin-right-sm">
                <avatar :src="data.user.avatar" :size="33"></avatar>
            </view>
            <view class="col-2">
                <view class="col-2-1">
                    {{ data.user.username }}
                </view>
                <view class="col-2-2 text-gray text-xs">
                    {{ data.time }}
                </view>
            </view>
        </view>
        <view class="row-2">{{ data.title }}</view>
        <view class="row-3">
            <!-- 保留区域 -->
        </view>
        <view class="row-4 flex justify-between">
            <view class="col-1">
                <!-- 保留区域 -->
            </view>
            <view class="col-2 flex align-center text-gray text-xs">
                <view class="col-2-1 margin-right-sm flex align-center">
                    <image src="@/static/browse.png"></image>
                    {{ data.browse }}
                </view>
                <view class="col-2-2 margin-right-sm flex align-center">
                    <image src="@/static/discussion.png"></image>
                    {{ data.discussion }}
                </view>
                <view class="col-2-3 flex align-center">
                    <image src="@/static/like.png"></image>
                    {{ data.praise }}
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        viewPostDetail() {
            uni.navigateTo({
                url: '/pages/community/detail?id=' + this.data.id
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.post {
    border-bottom: 1rpx solid #cccc;

    .row-4 {
        .col-2 image {
            width: 34rpx;
            height: 34rpx;
        }
    }
}
</style>
