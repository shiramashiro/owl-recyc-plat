<template>
    <view class="flex bookshelf">
        <book v-for="(item, index) in items" :key="index" :item="item"></book>
    </view>
</template>

<script>
import book from '@/components/index/book.vue'

export default {
    components: { book },
    props: {
        bookshelf: {
            type: Object,
            required: true
        }
    },
    mounted() {
        if (this.bookshelf.name === '全部') {
            this.items = this.items1
        } else if (this.bookshelf.name === '计算机/网络') {
            this.items = this.items2
        } else {
            this.items = this.items3
        }
    },
    data() {
        return {
            items: [
                {
                    id: 0,
                    cover: '',
                    name: '',
                    author: '',
                    price: '',
                    originPrice: ''
                }
            ],
            items1: [
                {
                    id: 1,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28495225-1_w_3.jpg',
                    name: '深入理解Java虚拟机',
                    author: '周志明',
                    price: '83.90',
                    originPrice: '129.00'
                },
                {
                    id: 2,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25317807-1_w_3.jpg',
                    name: '星火四级英语词汇周计划',
                    author: '马德高',
                    price: '24.30',
                    originPrice: '29.80'
                },
                {
                    id: 3,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23745571-1_w_1.jpg',
                    name: 'Java并发编程的艺术',
                    author: '方腾飞，魏鹏，程晓明',
                    price: '42.20',
                    originPrice: '59.00'
                },
                {
                    id: 4,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25220921-1_w_3.jpg',
                    name: '东方 六级词汇词根+联想记忆法：乱序版',
                    author: '俞敏洪',
                    price: '41.20',
                    originPrice: '48.00'
                },
                {
                    id: 5,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29142965-1_w_3.jpg',
                    name: 'Python零基础项目开发快速入门',
                    author: '张帆',
                    price: '71.00',
                    originPrice: '79.80'
                },
                {
                    id: 6,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29198330-1_w_3.jpg',
                    name: 'Spring 5 设计模式',
                    author: '[英]Dinesh Rajput',
                    price: '54.50',
                    originPrice: '79.00'
                },
                {
                    id: 7,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/21114192-1_u_3.jpg',
                    name: '新华字典（第11版）（单色本）',
                    author: '中国社科院语言所',
                    price: '19.30',
                    originPrice: '19.90'
                },
                {
                    id: 8,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23890604-1_w_5.jpg',
                    name: '中华成语词典(第3版,单色插图本)',
                    author: '《中华成语词典》编委会编',
                    price: '40.50',
                    originPrice: '45.00'
                },
                {
                    id: 9,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25294671-1_w_3.jpg',
                    name: '学生实用古汉语常用字字典（第6版）',
                    author: '冯蒸',
                    price: '24.00',
                    originPrice: '32.00'
                }
            ],
            items2: [
                {
                    id: 1,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28495225-1_w_3.jpg',
                    name: '深入理解Java虚拟机',
                    author: '周志明',
                    price: '83.90',
                    originPrice: '129.00'
                },
                {
                    id: 3,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23745571-1_w_1.jpg',
                    name: 'Java并发编程的艺术',
                    author: '方腾飞，魏鹏，程晓明',
                    price: '42.20',
                    originPrice: '59.00'
                },
                {
                    id: 5,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29142965-1_w_3.jpg',
                    name: 'Python零基础项目开发快速入门',
                    author: '张帆',
                    price: '71.00',
                    originPrice: '79.80'
                },
                {
                    id: 6,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29198330-1_w_3.jpg',
                    name: 'Spring 5 设计模式',
                    author: '[英]Dinesh Rajput',
                    price: '54.50',
                    originPrice: '79.00'
                }
            ],
            items3: [
                {
                    id: 2,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25317807-1_w_3.jpg',
                    name: '星火四级英语词汇周计划',
                    author: '马德高',
                    price: '24.30',
                    originPrice: '29.80'
                },
                {
                    id: 4,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25220921-1_w_3.jpg',
                    name: '东方 六级词汇词根+联想记忆法：乱序版',
                    author: '俞敏洪',
                    price: '41.20',
                    originPrice: '48.00'
                },
                {
                    id: 7,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/21114192-1_u_3.jpg',
                    name: '新华字典（第11版）（单色本）',
                    author: '中国社科院语言所',
                    price: '19.30',
                    originPrice: '19.90'
                },
                {
                    id: 8,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23890604-1_w_5.jpg',
                    name: '中华成语词典(第3版,单色插图本)',
                    author: '《中华成语词典》编委会编',
                    price: '40.50',
                    originPrice: '45.00'
                },
                {
                    id: 9,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25294671-1_w_3.jpg',
                    name: '学生实用古汉语常用字字典（第6版）',
                    author: '冯蒸',
                    price: '24.00',
                    originPrice: '32.00'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.bookshelf {
    flex-flow: wrap;

    .book {
        width: 47%;
    }
}
</style>
