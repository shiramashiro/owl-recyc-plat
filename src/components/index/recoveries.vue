<template>
    <view class="container flex justify-between">
        <template v-for="(item, index) in recoveries">
            <view
                v-if="index < maxSize || maxSize === 0"
                :key="index"
                class="item margin-xs"
                @click="clickItem(item, index)"
            >
                <image mode="aspectFill" :src="item.url" />
                <view class="detail padding-lr-xs padding-tb-sm">
                    <view class="address text-lg">
                        地址：{{ item.address }}
                    </view>
                    <view class="price text-gray text-xs">
                        回收价：{{ item.price }}元 / 斤
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
            recoveries: []
        }
    },
    mounted() {
        this.$axios
            .get('/get/recoveries', {
                params: {
                    limitNum: this.maxSize
                }
            })
            .then(resp => {
                this.recoveries = resp.data
            })
            .catch(error => {
                console.log(error)
            })
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
        background-color: white;
        border-radius: 10rpx;
        width: 47%;

        .detail {
            .address {
                display: -webkit-box;
                word-break: break-all;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        image {
            height: 300rpx;
            border-radius: 10rpx 10rpx 0 0;
        }
    }
}
</style>
