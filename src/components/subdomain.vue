<template>
    <view class="subdomain margin-lr-xs">
        <view class="subdomain-wrap">
            <view
                :class="[isLrPadding ? 'padding-lr-sm' : '']"
                class="title text-black padding-tb-sm flex justify-between align-center"
            >
                <view class="rows flex align-center">
                    <view class="col-1 flex align-center text-lg">
                        <template v-if="iconPath !== ''">
                            <image
                                :style="{
                                    height: iconHeight,
                                    width: iconWidth
                                }"
                                class="margin-right-sm"
                                mode="aspectFit"
                                :src="iconPath"
                            ></image>
                        </template>
                        <view>
                            {{ title }}
                        </view>
                    </view>
                    <view
                        v-if="subTitle"
                        class="col-2 text-xs flex align-end margin-left-xs"
                    >
                        {{ subTitle }}
                    </view>
                </view>
                <view
                    v-if="url !== ''"
                    @click="display"
                    class="text-gray text-sm"
                >
                    更多 >
                </view>
            </view>
            <view
                :style="{ backgroundColor: bgColor }"
                class="content padding-bottom-xs"
            >
                <slot></slot>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'subdomain',
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
        // 如果开启了显示更多按钮，请传入url地址跳转页面
        url: {
            type: String,
            default: '',
            required: false
        },
        // 背景颜色
        bgColor: {
            type: String,
            required: false,
            default: 'white'
        },
        // icon图标
        iconPath: {
            type: String,
            required: false,
            default: ''
        },
        isLrPadding: {
            type: Boolean,
            default: true
        },
        iconWidth: {
            type: String,
            default: '40rpx'
        },
        iconHeight: {
            type: String,
            default: '40rpx'
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
    border-radius: 24rpx;
    background-color: white;
}
</style>
