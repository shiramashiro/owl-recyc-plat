<template>
    <view class="owl-indent">
        <view class="indent-wrap padding-lr-sm padding-bottom-sm">
            <view class="item flex align-center justify-between">
                <view class="left">时间</view>
                <view class="center">
                    <view v-if="dateTimeValue === ''" class="text-gray">
                        请选择日期
                    </view>
                    <view v-else>
                        {{ dateTimeValue }}
                    </view>
                </view>
                <view class="right" @click="openDateTime">
                    <image src="@/static/more.png" />
                </view>
            </view>
            <tui-datetime :startYear="new Date().getFullYear()" :endYear="new Date().getFullYear()" :setDateTime="initDateTime()" ref="dateTime" @confirm="confirmDateTime"> </tui-datetime>
            <view class="item flex align-center justify-between">
                <view class="left">地区</view>
                <view class="center">
                    <view v-if="addressValue === ''" class="text-gray">
                        请选择地址
                    </view>
                    <view v-else>
                        {{ addressValue }}
                    </view>
                </view>
                <view class="right text-center" @click="isOpenDrawer = !isOpenDrawer"><image src="@/static/more.png" /> </view>
            </view>
            <tui-drawer @close="isOpenDrawer = !isOpenDrawer" :mode="'bottom'" :visible="isOpenDrawer" ref="drawer">
                <tui-cascade-selection :itemList="itemList" @complete="confirmAddress" :headerLine="true"> </tui-cascade-selection>
            </tui-drawer>
            <view class="item flex align-center justify-between">
                <view class="left">数量</view>
                <view class="center">
                    <view v-if="numBoxValue === 0" class="text-gray">
                        请选择数量
                    </view>
                    <view v-else>
                        {{ numBoxValue }}
                    </view>
                </view>
                <view class="right">
                    <tui-numberbox :value="numBoxValue" @change="confirmNum"></tui-numberbox>
                </view>
            </view>
        </view>
        <view class="tips flex padding-lr-sm padding-tb-sm">
            <view class="tip text-gray flex justify-center align-center margin-right-sm" v-for="(item, index) in tips" :key="index">
                <image style="width: 38rpx; height: 38rpx" src="@/static/complete.png"></image>
                {{ item }}
            </view>
        </view>
        <tui-tips backgroundColor="#EB0909" color="#ffffff" ref="tips"></tui-tips>
    </view>
</template>

<script>
export default {
    name: 'owl-indent',
    data() {
        return {
            itemList: [
                {
                    text: '北京市',
                    children: [
                        {
                            text: '东城区'
                        },
                        {
                            text: '西城区'
                        },
                        {
                            text: '朝阳区'
                        }
                    ]
                },
                {
                    text: '四川省',
                    children: [
                        {
                            text: '成都市',
                            children: [
                                {
                                    text: '金牛区'
                                },
                                {
                                    text: '武侯区'
                                },
                                {
                                    text: '成华区'
                                }
                            ]
                        },
                        {
                            text: '自贡市',
                            children: [
                                {
                                    text: '荣县'
                                },
                                {
                                    text: '贡井区'
                                }
                            ]
                        }
                    ]
                }
            ],
            tips: ['上门取件', '价格保证', '立马转账'],
            isOpenDrawer: false,
            numBoxValue: 0,
            addressValue: '',
            dateTimeValue: ''
        }
    },
    methods: {
        initDateTime() {
            let date = new Date()
            return date.getFullYear() + '-' + date.getMonth() + '-' + (date.getDate() + 1) + ' ' + date.getHours() + ':' + date.getMinutes()
        },
        openDateTime() {
            this.$refs.dateTime.show()
        },
        confirmNum(e) {
            this.numBoxValue = e.value
        },
        confirmDateTime(e) {
            this.dateTimeValue = e.result
        },
        confirmAddress(e) {
            this.addressValue = e.text
        },
        /**
         * 获取订单信息，只有当信息有时才会返回indent对象，
         * 否则提示用户完善信息。
         */
        getIndent() {
            if (this.numBoxValue !== 0 && this.dateTimeValue !== '' && this.addressValue !== '') {
                return {
                    num: this.numBoxValue,
                    dateTime: this.dateTimeValue,
                    address: this.addressValue
                }
            } else {
                this.$refs.tips.showTips({
                    msg: '请完善信息！',
                    duration: 2000
                })
            }
        }
    }
}
</script>

<style lang="css" scoped>
.item {
    height: 70rpx;
    display: flex;
    border-bottom: 1rpx #f0f0f0 solid;
}

.item:last-child {
    border-bottom: 0;
}

.item .right image {
    width: 45rpx;
    height: 45rpx;
}

.center {
    color: #3d3d3d;
}

.tips {
    background-color: #fafafa;
}
</style>
