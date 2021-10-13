<template>
    <view class="transfer-detail" :style="{ minHeight: $systemInfo.windowHeight + 'px' }">
        <tui-navigation-bar>
            <view class="navi-content flex align-center justify-between">
                <navigator :url="'/pages/transfer/more-transfer'">
                    <i class="el-icon-third-fanhui"></i>
                </navigator>
                <view class="margin-left-lg">
                    捐赠详细
                </view>
            </view>
        </tui-navigation-bar>
        <view class="header">
            <image :src="data.cover" mode="aspectFill"></image>
            <view class="info padding-lr-sm padding-tb-sm">
                <view class="margin-top-smtext-bold text-lg">
                    {{ data.name }}
                </view>
                <view class="margin-top-sm">
                    {{ data.area }}
                </view>
                <view class="margin-top-sm flex align-center justify-between">
                    <view class=""> 累计收书：{{ data.receive }} </view>
                    <view class=""> 预期收书：{{ data.respect }} </view>
                </view>
            </view>
        </view>
        <view class="receive margin-top-sm">
            <owl-fiche :title="'收书情况'">
                <view class="books flex justify-between">
                    <view v-for="(item, index) in data.books" :key="index" class="book margin-bottom-sm">
                        <image :src="item.cover" mode="aspectFill"></image>
                        <view class="name text-lg">{{ item.name }}</view>
                        <view class="num">已收：{{ item.received }}</view>
                        <view class="respect">预期：{{ item.respect }}</view>
                        <view class="select margin-top-sm flex align-center">
                            <radio style="transform:scale(0.8)" class="margin-right-xs" color="#87cefa"></radio>
                            <view>选择捐赠</view>
                        </view>
                    </view>
                </view>
            </owl-fiche>
        </view>
        <view class="owl-action-bar">
            <view class="container padding-xs flex align-center justify-between">
                <view class="item flex">
                    <navigator :url="'/pages/order'">
                        <view class="top flex align-center justify-center">
                            <image src="@/static/cart.png" />
                        </view>
                        <view class="bottom text-sm">
                            已选择
                        </view>
                    </navigator>
                </view>
                <view class="item flex recycle-btn">
                    <tui-button @click="handleClick" height="80rpx" type="primary" :size="25" shape="circle" background="#87cefa">
                        确认捐赠
                    </tui-button>
                </view>
            </view>
            <tui-tips backgroundColor="#19BE6B" color="#ffffff" ref="tips"></tui-tips>
        </view>
    </view>
</template>

<script>
export default {
    name: 'transfer-detail',
    data() {
        return {
            data: {
                id: 3,
                cover: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/common/demo-library.png',
                name: '图文信息中心图书馆',
                area: '北京市朝阳区',
                receive: 1283,
                respect: 13,
                type: 'library',
                books: [
                    {
                        cover: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/21114192-1_u_3.jpg',
                        name: '新华字典',
                        received: 11,
                        respect: 3
                    },
                    {
                        cover: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28495225-1_w_3.jpg',
                        name: '深入理解Java虚拟机',
                        received: 23,
                        respect: 4
                    },
                    {
                        cover: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29198330-1_w_3.jpg',
                        name: 'Spring5设计模式',
                        received: 3,
                        respect: 2
                    },
                    {
                        cover: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23745571-1_w_1.jpg',
                        name: 'Java并发编程的艺术',
                        received: 8,
                        respect: 4
                    }
                ]
            }
        }
    },
    methods: {
        handleClick() {
            this.$refs.tips.showTips({
                msg: '捐赠成功',
                duration: 2000
            })
        }
    },
    onLoad(options) {
        console.log(options)
    }
}
</script>

<style lang="scss" scoped>
.transfer-detail {
    background-color: #f8f8f8;

    .header {
        background-color: white;
        border-radius: 15rpx;

        image {
            width: 100%;
        }
    }

    .receive {
        .books {
            flex-flow: wrap;

            .book {
                width: 47%;

                image {
                    width: 100%;
                }
            }
        }
    }

    .container {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #f8f6f6;
    }

    .item {
        width: 23%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .top image {
        width: 40rpx;
        height: 40rpx;
    }
}
</style>
