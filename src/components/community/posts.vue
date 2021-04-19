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
            <view class="row-5 text-gray text-cut">{{ item.breif }}</view>
            <view class="row-3 margin-tb-sm">
                <owl-imgs :imgs="item.imgs"></owl-imgs>
            </view>
            <view class="row-4 flex justify-between">
                <view class="col-1">
                    <owl-tag :type="'gray'">{{ item.tag }}</owl-tag>
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
                    breif:
                        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    tag: '需求帖',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    imgs: [
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/photos/86097313_p0.jpg',
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/photos/85810903_p0.png',
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/photos/85867954_p0.jpg'
                    ],
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                },
                {
                    id: 2,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    breif:
                        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    tag: '转卖帖',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    imgs: [
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/photos/86097313_p0.jpg'
                    ],
                    user: {
                        avatar:
                            'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/avatar.jpg',
                        username: 'xxxxxxxxx'
                    }
                },
                {
                    id: 3,
                    title: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    breif:
                        'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                    time: '04-09',
                    tag: '讨论帖',
                    browse: 100,
                    discussion: 110,
                    praise: 10,
                    imgs: [
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/photos/86097313_p0.jpg',
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/imgs/photos/85810903_p0.png'
                    ],
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
