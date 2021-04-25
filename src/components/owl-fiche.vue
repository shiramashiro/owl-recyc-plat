<template>
    <view class="owl-fiche" :class="[isLrMargin ? 'margin-lr-xs' : '']">
        <view class="owl-fiche-wrap">
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
                        <view :style="{ fontSize: titleFontSize }">
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
                    v-if="navigateTo !== ''"
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
    name: 'owl-fiche',
    props: {
        // 主标题，必须有
        title: {
            type: String,
            required: true
        },
        // 子标题
        subTitle: {
            type: String,
            required: false
        },
        // 点击更多，跳转的页面URL
        navigateTo: {
            type: String,
            required: false
        },
        // URL参数
        URLAttrs: {
            type: Array,
            required: false
        },
        // 背景颜色
        bgColor: {
            type: String,
            default: 'white'
        },
        // icon图标
        iconPath: {
            type: String,
            default: ''
        },
        // icon图标宽度
        iconWidth: {
            type: String,
            default: '40rpx'
        },
        // icon图标高度
        iconHeight: {
            type: String,
            default: '40rpx'
        },
        // 是否开启左右的margin
        isLrMargin: {
            type: Boolean,
            default: true
        },
        // 是否开启左右padding
        isLrPadding: {
            type: Boolean,
            default: true
        },
        // 标题字体大小，默认30rpx
        titleFontSize: {
            type: String,
            default: '30rpx'
        }
    },
    methods: {
        display() {
            // 临时传入一个变量，避免Vue报错
            let confirmedURL = this.navigateTo
            // 获取参数的长度
            let URLLength = this.URLAttrs.length
            // 如果传入了参数，长度只能是大于0
            if (URLLength > 1) {
                // 将第一个参数的前面加上?
                confirmedURL += '?' + this.URLAttrs[0]
                for (let index = 1; index < URLLength; index++) {
                    confirmedURL += '&' + this.URLAttrs[index]
                }
            } else {
                confirmedURL += '?' + this.URLAttrs[0]
            }
            uni.navigateTo({
                url: confirmedURL
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.owl-fiche {
    border-radius: 24rpx;
    background-color: white;
}
</style>
