<template>
    <view class="container padding-lr-sm flex justify-between">
        <view
            class="item margin-bottom-sm"
            v-for="(item, index) in message"
            :key="index"
            @click="clickItem(item, index)"
        >
            <image mode="aspectFill" :src="item.url" />
            <view class="detail padding-lr-xs">
                <view class="address text-lg"> 地址：{{ item.address }} </view>
                <view class="price text-gray text-xs">
                    评价回收价：{{ item.price }}
                </view>
                <view class="once text-gray text-xs">
                    回收次数：{{ item.once }}
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'Recoveries',
    data() {
        return {
            message: [
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
                }
            ]
        }
    },
    methods: {
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
