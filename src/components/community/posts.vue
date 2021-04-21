<template>
    <view class="posts">
        <view
            v-for="(item, index) in posts"
            :key="index"
            @click="handleClick(item, index)"
            class="post margin-bottom-sm padding-sm"
        >
            <view class="row-1 flex align-center margin-bottom-sm">
                <view class="col-1 margin-right-sm">
                    <owl-avatar :src="item.user.avatar" :size="33"></owl-avatar>
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
                    <view class="col-2-1 margin-right-sm flex align-center">
                        <image
                            class="margin-right-xs"
                            mode="aspectFill"
                            src="@/static/browse.png"
                        ></image>
                        {{ item.browseNum }}
                    </view>
                    <view class="col-2-2 margin-right-sm flex align-center">
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
    </view>
</template>

<script>
export default {
    name: 'posts',
    props: {
        url: {
            type: String,
            required: true
        },
        urlParam: {
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
        if (JSON.stringify(this.urlParam) !== '{}') {
            let tempParams = {}
            for (let key in this.urlParam) {
                tempParams[key] = this.urlParam[key]
            }
            this.$axios
                .get(this.url, {
                    params: tempParams
                })
                .then(resp => {
                    this.posts = resp.data
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            this.$axios
                .get(this.url)
                .then(resp => {
                    this.posts = resp.data
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    methods: {
        handleClick(item, index) {
            this.$emit('selected', {
                item: item,
                index: index
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
