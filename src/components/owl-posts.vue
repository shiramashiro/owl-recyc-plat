<template>
    <view class="posts">
        <view v-for="(item, index) in posts" :key="index" class="post">
            <navigator :url="'/pages/post-detail?id=' + item.id">
                <view class="margin-bottom-sm padding-sm">
                    <view class="row-1 flex align-center margin-bottom-sm">
                        <view class="col-1 margin-right-sm">
                            <owl-avatar
                                :src="item.user.avatar"
                                :size="33"
                            ></owl-avatar>
                        </view>
                        <view class="col-2">
                            <view class="col-2-1">
                                {{ item.user.username }}
                            </view>
                            <view class="col-2-2 text-gray text-xs">
                                {{ item.time }}
                            </view>
                        </view>
                    </view>
                    <view class="row-2 text-lg text-cut">{{ item.title }}</view>
                    <view class="row-5 text-gray text-sm margin-top-xs">
                        {{ item.content }}
                    </view>
                    <view class="row-3 margin-tb-sm">
                        <owl-imgs :imgs="item.img"></owl-imgs>
                    </view>
                    <view class="row-4 flex justify-between">
                        <view class="col-1">
                            <owl-tag :type="'gray'">{{ item.tagName }}</owl-tag>
                        </view>
                        <view class="col-2 flex align-center text-gray text-xs">
                            <view
                                class="col-2-1 margin-right-sm flex align-center"
                            >
                                <image
                                    class="margin-right-xs"
                                    mode="aspectFill"
                                    src="@/static/browse.png"
                                ></image>
                                {{ item.browseNum }}
                            </view>
                            <view
                                class="col-2-2 margin-right-sm flex align-center"
                            >
                                <image
                                    class="margin-right-xs"
                                    mode="aspectFill"
                                    src="@/static/discussion.png"
                                ></image>
                                {{ item.discussionNum }}
                            </view>
                            <view class="col-2-3 flex align-center">
                                <image
                                    class="margin-right-xs"
                                    mode="aspectFill"
                                    src="@/static/like.png"
                                ></image>
                                {{ item.praiseNum }}
                            </view>
                        </view>
                    </view>
                </view>
            </navigator>
        </view>
    </view>
</template>

<script>
export default {
    name: 'posts',
    props: {
        // 请求URL地址
        requestURL: {
            type: String,
            required: true
        },
        // 请求参数，可以不传入，不传入代表查询所有的帖子
        URLAttrs: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        // 如果父组件传递过来的参数不为空，则发起请求时顺带提交参数。
        if (JSON.stringify(this.URLAttrs) !== '{}') {
            this.$axios
                .get(this.requestURL, {
                    params: this.URLAttrs
                })
                .then(resp => {
                    this.posts = resp.data
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            // 没有参数传递则查询所有的帖子
            this.$axios
                .get(this.requestURL)
                .then(resp => {
                    this.posts = resp.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.posts {
    .post {
        background-color: white;
        border-radius: 15rpx;

        .row-4 {
            .col-2 image {
                width: 34rpx;
                height: 34rpx;
            }
        }

        .row-5 {
            display: -webkit-box;
            word-break: break-all;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}
</style>
