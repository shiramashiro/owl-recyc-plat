<template>
    <view class="subdomain margin-lr-xs">
        <view class="subdomain-wrap">
            <view
                class="title text-black padding-tb-sm padding-lr-sm flex justify-between align-center"
            >
                <view class="rows flex align-center">
                    <view class="col-1 text-lg text-bold">
                        {{ title }}
                    </view>
                    <view
                        v-if="subTitle"
                        class="col-2 text-xs flex align-end margin-left-xs"
                    >
                        {{ subTitle }}
                    </view>
                </view>
                <view
                    v-if="isDisplay"
                    @click="display"
                    class="text-gray text-sm"
                >
                    更多 >
                </view>
            </view>
            <view class="content padding-bottom-sm">
                <slot></slot>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'Subdomain',
    props: {
        // 主标题，必须有
        title: {
            type: String,
            required: true
        },
        // 子标题，可无
        subTitle: {
            type: String,
            required: false
        },
        // 是否显示更多按钮
        isDisplay: {
            type: Boolean,
            required: false,
            default: false
        },
        // 如果开启了显示更多按钮，请传入url地址跳转页面
        url: {
            type: String,
            required: false
        }
    },
    methods: {
        // 显示更多按钮的事件函数，即跳转页面
        display() {
            uni.navigateTo({
                url: this.url
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.subdomain {
    border-radius: 24rpx 24rpx 2rpx 2rpx;
    background-color: white;
}
</style>
