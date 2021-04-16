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
                <view class="detail padding-lr-xs padding-tb-sm">
                    <view class="address text-lg">
                        地址：{{ item.address }}
                    </view>
                    <view class="price text-gray text-xs">
                        评价回收价：{{ item.price }}
                    </view>
                    <view class="once text-gray text-xs">
                        回收次数：{{ item.once }}
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
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '绵阳市涪城区',
                    price: '12.00',
                    once: '1000'
                },
                {
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '成都市金牛区',
                    price: '14.00',
                    once: '2000'
                },
                {
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '成都市金牛区',
                    price: '14.00',
                    once: '2000'
                },
                {
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '成都市金牛区',
                    price: '14.00',
                    once: '2000'
                },
                {
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '成都市金牛区',
                    price: '14.00',
                    once: '2000'
                },
                {
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '成都市金牛区',
                    price: '14.00',
                    once: '2000'
                },
                {
                    url:
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg',
                    address: '成都市金牛区',
                    price: '14.00',
                    once: '2000'
                }
            ]
        }
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
    }
}
</style>
