<template>
    <view class="post margin-bottom-sm">
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
                <view class="col-2-1 margin-right-sm">
                    {{ data.browse }}
                </view>
                <view class="col-2-2 margin-right-sm">
                    {{ data.discussion }}
                </view>
                <view class="col-2-3">
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
    }
}
</script>

<style lang="scss" scoped></style>
