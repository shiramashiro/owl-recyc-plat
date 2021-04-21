<template>
    <view class="make-post">
        <view class="status_bar"> </view>
        <owl-navbar :config="config">
            <view class="navi-content flex align-center justify-between">
                <i @click="backIntoIndex()" class="el-icon-third-fanhui"></i>
                <view class="margin-left-lg text-gray text-sm">
                    发布新帖子
                </view>
                <view class="post-btn margin-right-sm">
                    <tui-button
                        @click="publishPost"
                        plain
                        :width="'110rpx'"
                        :height="'40rpx'"
                        :size="20"
                    >
                        发布
                    </tui-button>
                </view>
            </view>
        </owl-navbar>
        <view class="title padding-tb-sm margin-lr-sm">
            <input
                v-model="titleValue"
                placeholder-style="font-size: 32rpx; color: #ccc"
                maxlength="50"
                placeholder="标题（必填） 最多可输入50字"
            />
        </view>
        <view class="content padding-tb-sm margin-lr-sm">
            <textarea
                v-model="contentValue"
                placeholder-style="font-size: 28rpx; color: #ccc"
                style="width: 100%"
                maxlength="1000"
                placeholder="请尽情发挥吧... 最多可输入1000字"
            />
        </view>
        <view class="select-post-type padding-lr-sm">
            <radio-group class="flex" @change="radioChange">
                <label
                    class="flex margin-right-sm align-center"
                    v-for="(item, index) in radios"
                    :key="item.value"
                >
                    <view class="margin-right-xs">
                        <radio
                            style="transform:scale(0.6)"
                            color="#87cefa"
                            :value="item.value"
                            :checked="index === radioCurrent"
                        />
                    </view>
                    <view class="text-df">{{ item.name }}</view>
                </label>
            </radio-group>
        </view>
        <view class="options margin-top-sm padding-lr-sm">
            开发中...
        </view>
    </view>
</template>

<script>
export default {
    name: 'make-post',
    data() {
        return {
            radios: [
                {
                    name: '需求帖',
                    value: 'require'
                },
                {
                    name: '转卖贴',
                    value: 'transfer'
                },
                {
                    name: '讨论帖',
                    value: 'discussion'
                }
            ],
            config: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false,
                isCustomImmerse: false
            },
            titleValue: '',
            contentValue: '',
            radioCurrent: 0
        }
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/community/community'
            })
        },
        radioChange: function(evt) {
            for (let i = 0; i < this.radios.length; i++) {
                if (this.radios[i].value === evt.target.value) {
                    this.radioCurrent = i
                    break
                }
            }
        },
        publishPost() {
            let post = {
                content: this.contentValue,
                title: this.titleValue,
                tagName: this.radios[this.radioCurrent].name,
                tagType: this.radios[this.radioCurrent].value,
                userId: 1
            }
            this.$axios.post('/set/post', post)
        }
    }
}
</script>

<style lang="scss" scoped>
.make-post {
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }

    .navi-content {
        height: 100%;
    }

    .title {
        border-bottom: 1rpx #cccc solid;
    }

    .content {
        height: 1000rpx;
    }
}
</style>
