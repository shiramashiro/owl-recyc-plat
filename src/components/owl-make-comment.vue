<template>
    <view class="owl-make-comment flex justify-between">
        <view class="col-1 margin-right-xs">
            <view class="padding-xs input-wrap">
                <textarea
                    style="height: 120rpx"
                    v-model="inputValue"
                    type="text"
                    maxlength="500"
                    placeholder="发表你的看法..."
                />
            </view>
        </view>
        <view class="col-2">
            <tui-button
                :height="'60rpx'"
                :width="'100rpx'"
                :type="'primary'"
                :size="24"
                @click="publishComment"
            >
                发表
            </tui-button>
        </view>
        <tui-tips :backgroundColor="tipColor" ref="toast"></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'post-comment',
    props: {
        // 所属哪个页面下的评论的Id
        belongedId: {
            type: Number,
            required: true
        },
        // 提交的请求地址
        postUrl: {
            type: String,
            required: true
        },
        // 提交的请求类型，如book的评论、recovery的评论或者post的评论
        urlType: {
            type: String,
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
        showTips(msg, color) {
            this.tipColor = color
            this.$refs.toast.showTips({
                msg: msg,
                duration: 2000
            })
        },
        publishComment() {
            if (this.inputValue === '') {
                this.showTips('你还没有输入任何信息！', '#EB0909')
                return
            }
            if (JSON.stringify(this.$store.state.userInfo) === '{}') {
                console.log('没有登录')
                this.showTips('你还没有登陆哟~无法发表评论', '#EB0909')
                return
            }
            this.$axios
                .post(this.postUrl, {
                    userId: this.$store.state.userInfo.id,
                    belongedId: this.belongedId,
                    content: this.inputValue,
                    type: this.urlType
                })
                .then(resp => {
                    if (resp.status !== 200) {
                        this.showTips('发表失败！', '#EB0909')
                        return
                    }
                    this.showTips('发表成功~', '#19BE6B')
                })
                .catch(error => {
                    this.showTips('服务器发生了错误！', '#EB0909')
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.owl-make-comment {
    .col-1 {
        .input-wrap {
            background-color: rgb(248, 248, 248);
            border-radius: 6px;

            input {
                width: 100%;
            }
        }
    }
}
</style>
