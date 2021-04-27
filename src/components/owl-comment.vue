<template>
    <view class="owl-comments">
        <view v-if="data.length === 0">
            <tui-no-data imgUrl="/static/nocomment.png">
                <text class="tui-color__black"
                    >还没有任何评论哦~发表一个吧！</text
                >
            </tui-no-data>
        </view>
        <view
            v-for="(item, index) in data"
            :key="index"
            class="owl-comment margin-tb-sm padding-top-sm"
        >
            <view class="comment-wrap">
                <view class="flex">
                    <view class="col-1">
                        <owl-avatar
                            :src="item.user.avatar"
                            mode="aspectFill"
                            :size="40"
                        ></owl-avatar>
                    </view>
                    <view class="col-2">
                        <view class="row-1">
                            <view class="margin-left-sm">
                                <view
                                    class="text-cut text-lg flex align-center margin-bottom-xs"
                                >
                                    <view class="margin-right-xs">
                                        {{ item.user.username }}
                                    </view>
                                    <view>
                                        <owl-tag
                                            :type="'gray'"
                                            :height="'30rpx'"
                                        >
                                            lv{{ item.user.level }}
                                        </owl-tag>
                                    </view>
                                </view>
                                <view
                                    class="col-2 text-xs text-gray margin-right-lg"
                                >
                                    {{ item.postDate }}
                                </view>
                            </view>
                        </view>
                        <view class="row-2 margin-left-sm margin-top-xs">
                            {{ item.content }}
                        </view>
                    </view>
                </view>
            </view>
            <view class="options flex justify-end">
                <view class="options-wrap flex text-sm text-gray">
                    <view
                        @click="handleClick(item.id, index, 'disagree')"
                        class="col-2 margin-right-lg el-icon-third-cai"
                    >
                        {{ item.disagree }}
                    </view>
                    <view
                        @click="handleClick(item.id, index, 'agree')"
                        class="col-1 el-icon-third-dianzan"
                    >
                        {{ item.agree }}
                    </view>
                </view>
            </view>
        </view>
        <tui-tips :backgroundColor="tipColor" ref="toast"></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'owl-comment',
    props: {
        data: {
            type: Array,
            required: true
        },
        // 属于哪个组件的评论
        belongedName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            tipColor: '#19BE6B'
        }
    },
    methods: {
        handleClick(id, index, viewType) {
            let tipType = '点赞'
            if (viewType === 'disagree') {
                this.data[index].disagree += 1
                tipType = '反对'
            } else {
                this.data[index].agree += 1
            }
            this.$axios
                .post('/set/view', {
                    id: id,
                    viewType: viewType,
                    type: this.belongedName
                })
                .then(resp => {
                    if (resp.status !== 200) {
                        this.showToast(tipType + '失败！', '#EB0909')
                        return
                    }
                    this.showToast(tipType + '成功~', '#19BE6B')
                })
                .catch(error => {
                    this.showToast('服务器错误！', '#EB0909')
                })
        },
        showToast(msg, color) {
            this.tipColor = color
            this.$refs.toast.showTips({
                msg: msg,
                duration: 2000
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.owl-comments {
    .owl-comment {
        border-top: 1rpx solid rgba(226, 226, 226, 0.8);

        .comment-wrap {
            .col-2 {
                .row-2 {
                    word-break: break-all;
                }
            }
        }
    }

    .owl-comment:first-child {
        border-top: 0;
    }
}
</style>
