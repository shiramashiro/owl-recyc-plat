<template>
    <view class="more-transfer" :style="{ minHeight: $systemInfo.windowHeight + 'px' }">
        <tui-navigation-bar>
            <view class="navi-content flex align-center justify-between">
                <navigator :url="'/pages/transfer/transfer'" open-type="switchTab">
                    <i class="el-icon-third-fanhui"></i>
                </navigator>
                <view class="margin-left-lg">
                    捐赠书籍
                </view>
            </view>
        </tui-navigation-bar>
        <view class="items">
            <view v-for="(item, index) in datas" :key="index" @click="navigateTo(item.id)" class="item margin-lr-xs margin-sm padding-bottom-sm">
                <image mode="aspectFill" :src="item.cover"></image>
                <view class="footer padding-lr-sm">
                    <view class="name margin-tb-sm text-lg">
                        {{ item.name }}
                    </view>
                    <view class="area margin-bottom-sm">
                        {{ item.area }}
                    </view>
                    <view class="total margin-bottom-sm flex justify-between align-center">
                        <view class="receive">累计收书：{{ item.receive }} 本</view>
                        <view class="respect">预期收书：{{ item.respect }}本</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'more-transfer',
    data() {
        return {
            dataslibrary: [
                {
                    id: 1,
                    cover: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/common/demo-library.png',
                    name: '图文信息中心图书馆',
                    area: '北京市朝阳区',
                    receive: 1283,
                    respect: 13,
                    type: 'library'
                },
                {
                    id: 2,
                    cover: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/common/demo-library.png',
                    name: '图文信息中心图书馆',
                    area: '北京市朝阳区',
                    receive: 1283,
                    respect: 13
                },
                {
                    id: 3,
                    cover: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/common/demo-library.png',
                    name: '图文信息中心图书馆',
                    area: '北京市朝阳区',
                    receive: 1283,
                    respect: 13,
                    type: 'library'
                }
            ],
            datasschool: [
                {
                    id: 1,
                    cover: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/common/demo-school.png',
                    name: '中心小学',
                    area: '北京市朝阳区',
                    receive: 453,
                    respect: 131,
                    type: 'shool'
                },
                {
                    id: 1,
                    cover: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/common/demo-school.png',
                    name: '中心小学',
                    area: '北京市朝阳区',
                    receive: 222,
                    respect: 174,
                    type: 'shool'
                }
            ],
            datas: []
        }
    },
    methods: {
        navigateTo(item) {
            uni.navigateTo({
                url: '/pages/transfer/transfer-detail?id=' + item
            })
        }
    },
    onLoad(options) {
        if (options.type == 'school') {
            this.datas = this.datasschool
        } else {
            this.datas = this.dataslibrary
        }
    }
}
</script>

<style lang="scss" scoped>
.more-transfer {
    background-color: #f8f8f8;

    .items {
        .item {
            background-color: white;
            border-radius: 15rpx;

            image {
                width: 100%;
                height: 400rpx;
                border-radius: 15rpx;
            }
        }
    }
}
</style>
