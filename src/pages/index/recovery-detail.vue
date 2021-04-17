<template>
    <view class="recovery-detail">
        <view class="recovery-wrap margin-lr-sm">
            <view class="recovery-info">
                <view></view>
            </view>
            <comment @express="expressView" :data="comments"></comment>
        </view>
    </view>
</template>

<script>
import Comment from '@/components/comment.vue'
import comments from '@/static/json/comments.json'

export default {
    name: 'RecoveryDetail',
    components: { Comment },
    data() {
        return {
            comments: comments,
            recovery: {
                id: 1,
                url:
                    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                address: '绵阳市涪城区',
                price: '12.00',
                times: '1000',
                openTime: '08:00',
                closeTime: '18:00',
                notWork: ['周五', '周六'],
                comments: [
                    {
                        id: 1,
                        bookId: 1,
                        userId: 1,
                        user: {
                            id: 1,
                            username: '哈哈哈哈',
                            avatar:
                                'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2633587454,2833522707&fm=26&gp=0.jpg'
                        },
                        postContent:
                            '北京大学蒋绍愚教授主持修订中学生、语文教师、大学中文系学生必备工具书曾荣获首届中国辞书奖一等奖，迄今发行量超',
                        postDate: '2020-04-09 13:46:13',
                        agree: 10,
                        disagree: 0
                    },
                    {
                        id: 2,
                        bookId: 1,
                        userId: 2,
                        user: {
                            id: 2,
                            username: '你才到碗啊啊啊',
                            avatar:
                                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F14%2F20150614155423_FZNxW.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620549645&t=c17995f54415f42ad567421f523a928a'
                        },
                        postContent:
                            '北京大学蒋绍愚教授主持修订中学生、语文教师',
                        postDate: '2020-04-06 08:29:09',
                        agree: 0,
                        disagree: 0
                    },
                    {
                        id: 3,
                        bookId: 1,
                        userId: 2,
                        user: {
                            id: 2,
                            username: '你才到碗啊啊啊',
                            avatar:
                                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F14%2F20150614155423_FZNxW.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620549645&t=c17995f54415f42ad567421f523a928a'
                        },
                        postContent:
                            '北京大学蒋绍愚教授主持修订中学生、语文教师',
                        postDate: '2020-04-06 08:29:09',
                        agree: 0,
                        disagree: 0
                    }
                ]
            },
            id: 0
        }
    },
    methods: {
        expressView(info) {
            console.log(info)
        }
    },
    onLoad(option) {
        this.id = option.id
    }
}
</script>

<style lang="scss" scoped></style>
