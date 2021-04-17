<template>
    <view class="container padding-lr-sm flex justify-between">
        <template v-for="(item, index) in recoveries">
            <view
                v-if="index < maxSize || maxSize === 0"
                :key="index"
                class="item margin-bottom-sm"
                @click="clickItem(item, index)"
            >
                <image mode="aspectFill" :src="item.url" />
                <view class="detail padding-lr-xs padding-tb-xs">
                    <view class="address">
                        地址：{{ item.address }}
                    </view>
                    <view class="price text-gray text-xs">
                        评价回收价：{{ item.price }}
                    </view>
                    <view class="once text-gray text-xs">
                        回收次数：{{ item.times }}
                    </view>
                </view>
            </view>
        </template>
    </view>
</template>

<script>
export default {
    name: 'Recoveries',
    props: {
        // maxSize为0时，代表无限制显示，规定默认显示6个
        maxSize: {
            type: Number,
            required: false,
            default: 6
        }
    },
    data() {
        return {
            recoveries: [
                {
                    id: 1,
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '绵阳市涪城区科创园区西南财经大学天府学院',
                    price: '12.00',
                    times: '1000',
                    openTime: '08:00',
                    closeTime: '18:00',
                    notWork: ['周五', '周六']
                },
                {
                    id: 2,
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '绵阳市涪城区科创园区西南财经大学天府学院',
                    price: '12.00',
                    times: '1000',
                    openTime: '08:00',
                    closeTime: '18:00',
                    notWork: ['周五', '周六']
                },
                {
                    id: 3,
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '绵阳市涪城区科创园区西南财经大学天府学院',
                    price: '12.00',
                    times: '1000',
                    openTime: '08:00',
                    closeTime: '18:00',
                    notWork: ['周五', '周六']
                },
                {
                    id: 4,
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '绵阳市涪城区科创园区西南财经大学天府学院',
                    price: '12.00',
                    times: '1000',
                    openTime: '08:00',
                    closeTime: '18:00',
                    notWork: ['周五', '周六']
                },
                {
                    id: 5,
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '绵阳市涪城区科创园区西南财经大学天府学院',
                    price: '12.00',
                    times: '1000',
                    openTime: '08:00',
                    closeTime: '18:00',
                    notWork: ['周五', '周六']
                },
                {
                    id: 6,
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '绵阳市涪城区科创园区西南财经大学天府学院',
                    price: '12.00',
                    times: '1000',
                    openTime: '08:00',
                    closeTime: '18:00',
                    notWork: ['周五', '周六']
                },
                {
                    id: 7,
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '绵阳市涪城区科创园区西南财经大学天府学院',
                    price: '12.00',
                    times: '1000',
                    openTime: '08:00',
                    closeTime: '18:00',
                    notWork: ['周五', '周六']
                }
            ]
        }
    },
    onLoad() {
        // 发起异步请求，分页查询maxsize，如果maxsize为0，则查询所有
    },
    methods: {
        // 点击事件，回传每一项信息以及对应的索引值
        clickItem(item, index) {
            this.$emit('selected', {
                item: item,
                index: index
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    flex-flow: wrap;

    .item {
        border: 1rpx solid #cccc;
        border-radius: 10rpx;
        width: 48%;

        image {
            height: 300rpx;
            border-radius: 10rpx;
        }

        .detail {
            .address {
                display: -webkit-box;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
