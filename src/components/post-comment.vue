<template>
    <view class="post-comment flex align-center justify-between">
        <tui-tips :backgroundColor="tipColor" ref="toast"></tui-tips>
        <view class="col-1">
            <avatar
                :size="28"
                :src="
                    'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg'
                "
            ></avatar>
        </view>
        <view class="col-2">
            <view class="padding-xs input-wrap">
                <input
                    placeholder-style="font-size: 10px;"
                    v-model="inputValue"
                    type="text"
                    maxlength="100"
                    placeholder="发表你的看法..."
                />
            </view>
        </view>
        <view class="col-3">
            <tui-button
                :height="'60rpx'"
                :width="'100rpx'"
                :type="'primary'"
                :size="28"
                @click="postComment"
            >
                发表
            </tui-button>
        </view>
    </view>
</template>

<script>
export default {
    name: 'post-comment',
    props: {
        // 所属哪个页面下的评论的Id，比如回收点id的评论
        belongedId: {
            type: Number,
            required: true
        },
        // 提交的请求地址
        postUrl: {
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
        showToast(msg) {
            let options = {
                msg: msg,
                duration: 2000
            }
            this.$refs.toast.showTips(options)
        },
        postComment() {
            if (this.inputValue === '') {
                this.showToast('你还没有输入任何信息！')
                this.tipColor = '#EB0909'
                return
            }
            this.$axios
                .post(this.postUrl, {
                    // 临时的userId，后期改
                    userId: 1,
                    belongedId: this.belongedId,
                    content: this.inputValue
                })
                .then(resp => {
                    if (resp.status === 200) {
                        this.showToast('发表成功~')
                        this.tipColor = '#19BE6B'
                    } else {
                        this.showToast('发表失败！')
                        this.tipColor = '#EB0909'
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.post-comment {
    .col-2 {
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
