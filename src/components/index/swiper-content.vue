<template>
    <view class="swiper-content">
        <view class="public-content flex">
            <book
                v-for="(item, index) in items"
                :key="index"
                :data="item"
            ></book>
        </view>
    </view>
</template>

<script>
import Book from './book.vue'

export default {
    name: 'SwiperContent',
    components: { Book },
    props: {
        tabName: {
            type: String,
            required: true
        }
    },
    mounted() {
        if (this.tabName === '全部') {
            this.items = this.items1
        } else if (this.tabName === '计算机/网络') {
            this.items = this.items2
        } else {
            this.items = this.items3
        }
    },
    data() {
        return {
            // 做一个假数据，根据tabName选取一个items给book
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
                },
                {
                    id: 10,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/22894393-1_w_1.jpg',
                    name: '编码：隐匿在计算机软硬件背后的语言',
                    author: '(美)佩措尔德',
                    price: '56.60',
                    originPrice: '59.00'
                },
                {
                    id: 11,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23989588-1_w_6.jpg',
                    name: 'TCP/IP详解 卷1：协议',
                    author: '凯文 R.福尔',
                    price: '101.90',
                    originPrice: '129.00'
                },
                {
                    id: 12,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29197803-1_w_3.jpg',
                    name: '高效减脂 打败停滞期',
                    author: '李姿仪',
                    price: '46.90',
                    originPrice: '49.80'
                },
                {
                    id: 13,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29201877-1_u_12.jpg',
                    name: '粗茶淡饭：梅子金黄杏子肥',
                    author: '高维生',
                    price: '18.00',
                    originPrice: '36.00'
                },
                {
                    id: 14,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/27920509-1_w_26.jpg',
                    name: '从一到无穷大',
                    author: '乔治·伽莫夫',
                    price: '55.70',
                    originPrice: '58.00'
                },
                {
                    id: 15,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25157989-1_u_5.jpg',
                    name: '果麦经典：了凡四训',
                    author: '袁了凡',
                    price: '15.80',
                    originPrice: '32.00'
                },
                {
                    id: 16,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23684605-1_w_1.jpg',
                    name: '里娅传奇',
                    author: '虹影',
                    price: '9.50',
                    originPrice: '32.80'
                },
                {
                    id: 16,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/1901258135_ii_cover.jpg',
                    name: '李清照传',
                    author: '杨雨',
                    price: '14.99',
                    originPrice: '16.00'
                },
                {
                    id: 17,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/27932536-1_u_3.jpg',
                    name: '会计基础',
                    author: '中华会计网校',
                    price: '22.90',
                    originPrice: '45.80'
                },
                {
                    id: 18,
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28470862-1_u_3.jpg',
                    name: '零基础绘画入门教程',
                    author: '程焰；凤凰空间',
                    price: '29.90',
                    originPrice: '49.80'
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
.swiper-content {
    .public-content {
        flex-flow: wrap;
    }
}
</style>
