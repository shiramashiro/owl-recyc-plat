<template>
    <view class="owl-fiche margin-sm">
        <view class="header text-black padding-sm flex justify-between align-center">
            <view class="title-box flex align-center">
                <image class="icon" mode="aspectFit" v-if="iconPath !== ''" :src="iconPath"></image>
                <view class="main-title text-bold text-lg margin-left-sm">
                    {{ title }}
                </view>
                <view v-if="subTitle" class="sub-title text-gray text-xs margin-left-xs">
                    {{ subTitle }}
                </view>
            </view>
            <view v-if="navigateTo !== ''" @click="display" class="more text-gray text-sm">
                更多 >
            </view>
        </view>
        <view class="content padding-tb-sm" :style="{ backgroundColor: bgColor }">
            <slot></slot>
        </view>
    </view>
</template>

<script>
export default {
    name: 'owl-fiche',
    props: {
        // 主标题
        title: {
            type: String,
            required: false
        },
        // 子标题
        subTitle: {
            type: String,
            required: false
        },
        // 跳转
        navigateTo: {
            type: String,
            default: ''
        },
        // 参数
        URLAttrs: {
            type: Array,
            default() {
                return []
            }
        },
        // 背景
        bgColor: {
            type: String,
            default: 'white'
        },
        // icon
        iconPath: {
            type: String,
            default: ''
        }
    },
    methods: {
        /**
         * 组装从父组件传递过来的URLAttrs和navigateTo，
         * 由于参数是多个的，所以涉及到拼接字符串的工作。
         *
         * 当参数大于1就代表有至少两个参数，当参数小于1就代表只有一个参数。
         */
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

    .header {
        .title-box {
            .icon {
                width: 40rpx;
                height: 40rpx;
            }

            .main-title {
                font-size: 30rpx;
            }
        }
    }
}
</style>
