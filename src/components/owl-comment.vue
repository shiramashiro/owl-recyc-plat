<template>
    <view class="owl-comment">
        <view class="editor card flex align-center justify-between padding-sm margin-top-sm margin-lr-xs">
            <input @input="onInput" type="text" placeholder="请输入友好的评论" />
            <tui-button @click="publish" width="130rpx" height="50rpx" :size="10">发表</tui-button>
        </view>
        <view class="comments card padding-lr-sm margin-top-sm margin-lr-xs">
            <template v-if="comments.length > 0">
                <view class="item padding-tb-sm flex" v-for="(item, index) in comments" :key="index">
                    <view class="left">
                        <owl-avatar :src="item.user.avatar_url" size="35"></owl-avatar>
                    </view>
                    <view class="right margin-left-sm">
                        <view class="header flex justify-between align-center">
                            <view class="comment-info">
                                <view class="username text-lg">{{ item.user.username }}</view>
                                <view class="flex align-center text-gray">
                                    <view class="floor">{{ index + 1 }}F</view>
                                    <view class="create-date margin-left-sm">{{ item.create_date }}</view>
                                </view>
                            </view>
                            <view class="replay text-gray">回复</view>
                        </view>
                        <view class="content margin-top-sm text-lg">
                            {{ item.content }}
                        </view>
                        <view class="opinion flex align-center margin-top-sm text-gray">
                            <view class="agree flex align-center">
                                <owl-icon :margin="'0 5'" :size="35" :src="require('@/static/icon/agree.png')"></owl-icon>
                                <view class="data">
                                    100
                                </view>
                            </view>
                            <view class="oppose flex align-center margin-left-sm">
                                <owl-icon :margin="'0 5'" :size="35" :src="require('@/static/icon/oppose.png')"></owl-icon>
                                <view class="data">
                                    0
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </template>
            <template v-else>
                <view class="notdata text-center text-lg text-gray">
                    没有更多评论，发表一个评论吧！
                </view>
            </template>
        </view>
        <tui-tips :backgroundColor="tipColor" position="center" ref="toast"></tui-tips>
    </view>
</template>

<script>
export default {
    props: {
        comments: {
            type: Array,
            required: true
        },
        // 发起评论请求地址
        url: {
            type: String,
            required: true
        },
        // 发送评论用户信息，需要用户的id
        sponsorId: {
            type: [Number, String],
            required: true
        },
        sourceId: {
            type: [Number, String],
            required: true
        }
    },
    data() {
        return {
            inputValue: '',
            tipColor: '#19BE6B'
        }
    },
    methods: {
        showTips(e) {
            this.tipColor = e.tipColor
            this.$refs.toast.showTips({
                msg: e.msg,
                duration: 2000
            })
        },
        // 点击发表按钮之后开始发送一个post请求，将必要的数据发送到后端。
        publish() {
            uni.request({
                method: 'POST',
                url: this.url,
                data: {
                    user_id: this.sponsorId,
                    book_id: this.sourceId,
                    content: this.inputValue
                },
                success: res => {
                    this.$emit('status', res)
                    this.showTips({ tipColor: '#19BE6B', msg: '发表评论成功~' })
                },
                fail: res => {
                    this.$emit('status', res)
                    this.showTips({ tipColor: '#EB0909', msg: '发表评论失败！' })
                }
            })
        },
        // 接收 input 标签输入的值，将值赋值给 inputValue。
        onInput(e) {
            this.inputValue = e.detail.value
        }
    }
}
</script>

<style lang="scss" scoped>
.owl-comment {
    .comments {
        .item {
            border-bottom: 1rpx solid #cccc;

            .left {
                width: 15%;
            }

            .right {
                width: 85%;
            }
        }

        .notdata {
            padding: 100rpx 0;
        }

        .item:last-child {
            border-bottom: 0 !important;
        }
    }
}
</style>
