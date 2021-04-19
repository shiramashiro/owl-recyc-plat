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
            <view class="row-2">{{ item.title }}</view>
            <view class="row-3">
                <!-- 图片展示区域 -->
            </view>
            <view class="row-4 flex justify-between">
                <view class="col-1">
                    <!-- tags区域 -->
                    <owl-tag :type="'gray'">需求帖</owl-tag>
                </view>
                <view class="col-2 flex align-center text-gray text-xs">
                    <view class="col-2-1 margin-right-sm flex align-center">
                        <image
                            mode="aspectFill"
                            src="@/static/browse.png"
                        ></image>
                        {{ item.browse }}
                    </view>
                    <view class="col-2-2 margin-right-sm flex align-center">
                        <image
                            mode="aspectFill"
                            src="@/static/discussion.png"
                        ></image>
                        {{ item.discussion }}
                    </view>
                    <view class="col-2-3 flex align-center">
                        <image
                            mode="aspectFill"
                            src="@/static/like.png"
                        ></image>
                        {{ item.praise }}
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'posts',
    props: {},
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                },
                {
                    id: 2,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                },
                {
                    id: 3,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                },
                {
                    id: 3,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                },
                {
                    id: 3,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                }
            ]
        }
    },
    methods: {
        // 点击事件函数，回传每一项的信息以及对应的索引值
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
    }
}
</style>
