<template>
    <view
        class="owl-editor"
        :style="{ minHeight: $systemInfo.windowHeight + 'px' }"
    >
        <tui-navigation-bar>
            <view class="navi-content flex align-center justify-between">
                <navigator :delta="1" open-type="navigateBack">
                    <i class="el-icon-third-fanhui"></i>
                </navigator>
                <view class="margin-left-lg text-gray">
                    发布帖子
                </view>
            </view>
        </tui-navigation-bar>
        <view class="title padding-tb-sm margin-lr-sm">
            <input
                @input="onTitleKeyInput"
                v-model="titleValue"
                placeholder-style="font-size: 20rpx; color: #ccc"
                maxlength="50"
                placeholder="标题(必填)"
            />
        </view>
        <view class="content">
            <view
                :style="{
                    minHeight: $systemInfo.windowHeight - 157.4 + 'px'
                }"
                class="textarea padding-tb-sm margin-lr-sm"
                contentEditable="true"
                v-model="textareaValue"
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
        <view class="toolbar margin-top-sm">
            <view
                class="iconfont icon-bold"
                @click="toolBarClick('bold')"
            ></view>
            <view
                class="iconfont icon-italic"
                @click="toolBarClick('italic')"
            ></view>
            <view
                class="iconfont icon-xiahuaxian1"
                @click="toolBarClick('header')"
            ></view>
            <view
                class="iconfont icon-underline"
                @click="toolBarClick('underline')"
            ></view>
            <view
                class="iconfont icon-strike"
                @click="toolBarClick('strike')"
            ></view>
            <view
                class="iconfont icon-alignleft"
                @click="toolBarClick('alignleft')"
            ></view>
            <view
                class="iconfont icon-aligncenter"
                @click="toolBarClick('aligncenter')"
            ></view>
            <view
                class="iconfont icon-alignright"
                @click="toolBarClick('alignright')"
            ></view>
            <view
                class="iconfont icon-qingkong"
                @click="toolBarClick('clear')"
            ></view>
            <view class="iconfont text-sm" @click="toolBarClick('submit')"
                >保存</view
            >
        </view>
        <tui-tips :backgroundColor="tipColor" ref="toast"></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'owl-editor',
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
            textareaValue: '',
            isDisabled: false,
            tipColor: '#19BE6B',
            titleValue: '',
            contentValue: '',
            radioCurrent: 0,
            endOffset: 0,
            startOffset: 0,
            endContainer: '',
            startContainer: ''
        }
    },
    methods: {
        /**
         * 当键盘输入时，判断标题和内容是否有值，否则不允许使用发布按钮。
         */
        onTitleKeyInput() {
            this.estimate()
        },
        estimate() {
            if (this.titleValue !== '' && this.textareaValue !== '') {
                this.isDisabled = false
            } else {
                this.isDisabled = true
            }
        },
        /**
         * 点击radio时获取当前radio信息
         */
        radioChange(evt) {
            for (let index = 0; i < this.radios.length; index++) {
                if (this.radios[index].value === evt.target.value) {
                    this.radioCurrent = index
                    break
                }
            }
        },
        /**
         * 显示消息提示
         */
        showTips(msg, color) {
            this.tipColor = color
            this.$refs.toast.showTips({
                msg: msg,
                duration: 2000
            })
        },
        /**
         * 当点击发布按钮时，开始将文章插入到数据库中。
         */
        publishPost() {
            if (JSON.stringify(this.$store.state.userInfo) === '{}') {
                this.showTips('你还没有登陆哟~', '#EB0909')
                this.isDisabled = true
                return
            }
            if (this.titleValue !== '') {
                this.$axios
                    .post('/set/post', {
                        title: this.titleValue,
                        content: this.textareaValue.target.innerHTML,
                        userId: this.$store.state.userInfo.id,
                        tagName: this.radios[this.radioCurrent].name,
                        tagType: this.radios[this.radioCurrent].value
                    })
                    .then(resp => {
                        if (resp.status !== 200) {
                            this.showTips('发表失败！', '#EB0909')
                            return
                        }
                        // 200的情况进入这一步
                        this.showTips('发表成功~', '#19BE6B')
                    })
                    .catch(error => {
                        this.showTips('服务器错误，发表失败！', '#EB0909')
                    })
            } else {
                this.isDisabled = true
                this.showTips('发表失败！请输入标题~', '#EB0909')
            }
        },
        toolBarClick(type) {
            if (type == 'bold') {
                var bold = document.execCommand('bold', false, null)
            } else if (type == 'italic') {
                document.execCommand('italic', false, null)
            } else if (type == 'header') {
                uni.showActionSheet({
                    itemList: [
                        '标题1',
                        '标题2',
                        '标题3',
                        '标题4',
                        '标题5',
                        '标题6'
                    ],
                    success: res => {
                        switch (res.tapIndex) {
                            case 0:
                                document.execCommand('fontsize', false, 1)
                                return
                            case 1:
                                document.execCommand('fontsize', false, 2)
                                return
                            case 2:
                                document.execCommand('fontsize', false, 3)
                                return
                            case 3:
                                document.execCommand('fontsize', false, 4)
                                return
                            case 4:
                                document.execCommand('fontsize', false, 5)
                                return
                            case 5:
                                document.execCommand('fontsize', false, 6)
                                return
                        }
                    }
                })
            } else if (type == 'underline') {
                document.execCommand('underline', false, null)
            } else if (type == 'strike') {
                document.execCommand('strikeThrough', false, null)
            } else if (type == 'alignleft') {
                document.execCommand('justifyLeft', false, null)
            } else if (type == 'aligncenter') {
                document.execCommand('justifyCenter', false, null)
            } else if (type == 'alignright') {
                document.execCommand('justifyRight', false, null)
            } else if (type == 'link') {
                let selection = document.getSelection()
                if (selection.type == 'Range') {
                    var range = selection.getRangeAt(0)
                    this.endOffset = range.endOffset
                    this.startOffset = range.startOffset
                    this.endContainer = range.endContainer
                    this.startContainer = range.startContainer
                    this.isOpen = 'true'
                } else {
                    this.isOpen2 = 'true'
                }
            } else if (type == 'imgage') {
                let selection = document.getSelection()
                console.log(selection)
                if (selection.type != 'None') {
                    this.isOpen4 = 'true'
                }
            } else if (type == 'clear') {
                this.isOpen3 = 'true'
            } else if (type == 'submit') {
                if (this.textareaValue != '') {
                    this.publishPost()
                } else {
                    this.showTips('发表失败！请输入内容~', '#EB0909')
                }
            }
        },
        isClean() {
            if (this.textareaValue != '') {
                this.textareaValue.target.innerHTML = ''
            }
        }
    }
}
</script>

<style lang="css" scoped>
@import '@/static/icon/markdown.css';

.toolbar {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    box-shadow: 0 0upx 4upx rgba(0, 0, 0, 0.157),
        0 0upx 4upx rgba(0, 0, 0, 0.227);
}

.toolbar .iconfont {
    display: flex;
    align-items: center;
    align-content: center;
    height: 80rpx;
    font-size: 30rpx;
    padding: 10rpx 15rpx;
    color: #757575;
}
</style>
