<template>
    <view class="owl-comment">
        <view class="editor card flex align-center justify-between padding-sm margin-top-sm margin-lr-xs">
            <input @input="onInput" type="text" placeholder="请一段输入友好的评论" />
            <tui-button @click="publish" width="130rpx" height="50rpx" :size="10">发表</tui-button>
        </view>
        <view class="comments card padding-lr-sm margin-top-sm margin-lr-xs">
            <template v-if="comments.length > 0">
                <view class="item flex padding-tb-sm" v-for="(item, index) in comments" :key="index">
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
                            <view @click="agree(item.id, index)" class="agree flex align-center">
                                <owl-icon :margin="'0 5'" :size="35" :src="require('@/static/icon/agree.png')"></owl-icon>
                                <view class="data">
                                    {{ item.agree }}
                                </view>
                            </view>
                            <view @click="oppose(item.id, index)" class="oppose flex align-center margin-left-sm">
                                <owl-icon :margin="'0 5'" :size="35" :src="require('@/static/icon/oppose.png')"></owl-icon>
                                <view class="data">{{ item.oppose }} </view>
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
        <tui-tips :backgroundColor="tipsColor" position="center" ref="toast"></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'owl-comment',
    props: {
        // 评论
        comments: {
            type: Array,
            required: true
        },
        // 发起评论的请求地址
        url: {
            type: String,
            required: true
        },
        // 发送评论的用户Id
        sponsorId: {
            type: [Number, String],
            required: true
        },
        // 当前书籍或者当前交易或者当前帖子的Id
        sourceId: {
            type: [Number, String],
            required: true
        },
        // 点击同意的请求地址
        agreeUrl: {
            type: String,
            required: true
        },
        // 点击反对的请求地址
        opposeUrl: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            // 获取评论输入框的数据
            inputValue: '',
            // 提示消息的背景颜色
            tipsColor: ''
        }
    },
    methods: {
        // 提示消息
        showTips(options) {
            this.tipsColor = options.tipsColor
            this.$refs.toast.showTips({
                msg: options.msg,
                duration: 2000
            })
        },
        // 发表评论
        publish() {
            if (this.inputValue.length > 10) {
                uni.request({
                    method: 'POST',
                    url: this.url,
                    data: {
                        user_id: this.sponsorId,
                        book_id: this.sourceId,
                        content: this.inputValue
                    },
                    success: res => {
                        this.showTips({ tipsColor: '#19BE6B', msg: '发表评论成功~' })
                    },
                    fail: res => {
                        this.showTips({ tipsColor: '#EB0909', msg: '发表评论失败！' })
                    }
                })
            } else {
                this.showTips({ tipsColor: '#EB0909', msg: '输入的内容必须要大于10个字符哦~' })
            }
        },
        // 反对
        oppose(id, index) {
            uni.request({
                method: 'POST',
                url: this.opposeUrl,
                data: {
                    id: id
                },
                success: res => {
                    this.comments[index].oppose += 1
                    this.showTips({ tipsColor: '#EB0909', msg: '你反对了该条评论！' })
                },
                fail: res => {
                    this.showTips({ tipsColor: '#EB0909', msg: '检查是否网络错误！' })
                }
            })
        },
        // 赞成
        agree(id, index) {
            uni.request({
                method: 'POST',
                url: this.agreeUrl,
                data: {
                    id: id
                },
                success: res => {
                    this.comments[index].agree += 1
                    this.showTips({ tipsColor: '#19BE6B', msg: '你赞成了该条评论~' })
                },
                fail: res => {
                    this.showTips({ tipsColor: '#EB0909', msg: '检查是否网络错误！' })
                }
            })
        },
        // 监听输入框
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
            border-bottom: 1rpx solid #f3ececcc;

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
