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
                        :disabled="isDisabled"
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
                @input="onTitleKeyInput"
                v-model="titleValue"
                placeholder-style="font-size: 32rpx; color: #ccc"
                maxlength="50"
                placeholder="标题（必填） 最多可输入50字"
            />
        </view>
        <view class="content padding-tb-sm margin-lr-sm">
            <textarea
                @input="onContentKeyInput"
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
        <tui-tips :backgroundColor="tipColor" ref="toast"></tui-tips>
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
            isDisabled: false,
            tipColor: '#19BE6B',
            titleValue: '',
            contentValue: '',
            radioCurrent: 0
        }
    },
    mounted() {
        if (JSON.stringify(this.$store.state.userInfo) === '{}') {
            this.showTips('你还没有登陆哟~', '#EB0909')
            this.isDisabled = true
        }
    },
    methods: {
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/community/community'
            })
        },
        onTitleKeyInput() {
            this.estimate()
        },
        onContentKeyInput() {
            this.estimate()
        },
        estimate() {
            if (this.titleValue !== '' && this.contentValue !== '') {
                this.isDisabled = false
            } else {
                this.isDisabled = true
            }
        },
        radioChange(evt) {
            for (let index = 0; i < this.radios.length; index++) {
                if (this.radios[index].value === evt.target.value) {
                    this.radioCurrent = index
                    break
                }
            }
        },
        showTips(msg, color) {
            this.tipColor = color
            this.$refs.toast.showTips({
                msg: msg,
                duration: 2000
            })
        },
        publishPost() {
            if (this.titleValue !== '' && this.contentValue !== '') {
                this.$axios
                    .post('/set/post', {
                        title: this.titleValue,
                        content: this.contentValue,
                        userId: this.$store.state.userInfo.id,
                        tagName: this.radios[this.radioCurrent].name,
                        tagType: this.radios[this.radioCurrent].value
                    })
                    .then(resp => {
                        if (resp.status !== 200) {
                            this.showTips('发表失败！', '#EB0909')
                            return
                        }
                        this.showTips('发表成功~', '#19BE6B')
                    })
                    .catch(error => {
                        this.showTips('服务器错误，发表失败！', '#EB0909')
                    })
            } else {
                this.isDisabled = true
                this.showTips('发表失败！请输入内容~', '#EB0909')
            }
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
