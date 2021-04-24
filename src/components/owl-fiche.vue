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
    name: 'owl-fiche',
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
        // 是否开启左右padding
        isLrPadding: {
            type: Boolean,
            default: true
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
        // url参数
        urlParams: {
            type: Array,
            required: false
        },
        // 是否开启左右的margin
        isLrMargin: {
            type: Boolean,
            default: true
        },
        titleFontSize: {
            type: String,
            default: '30rpx'
        }
    },
    methods: {
        display() {
            let targetUrl = this.url
            if (this.urlParams !== '') {
                targetUrl += '?' + this.urlParams[0]
                if (this.urlParams.length > 0) {
                    for (
                        let index = 1;
                        index < this.urlParams.length;
                        index++
                    ) {
                        targetUrl += '&' + this.urlParams[index]
                    }
                }
            }
            uni.navigateTo({
                url: targetUrl
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
