<template>
    <view class="owl-indent">
        <view class="indent-wrap">
            <view class="item flex align-center justify-between">
                <view class="left">时间</view>
                <view class="center">{{ result.result }}</view>
                <view class="right text-center" @click="openDateTime">
                    <image src="@/static/more.png" />
                </view>
            </view>
            <view class="item flex align-center justify-between">
                <view class="left">地区</view>
                <view class="center">{{ addressValue }}</view>
                <view
                    class="right text-center"
                    @click="isOpenDrawer = !isOpenDrawer"
                    ><image src="@/static/more.png" />
                </view>
            </view>
            <view class="item flex align-center justify-between">
                <view class="left">重量</view>
                <view class="center">{{ numberValue }}</view>
                <view class="right text-center" @click="!isOpenDrawer">{{
                    typeValue
                }}</view>
            </view>
        </view>
        <tui-datetime
            :startYear="new Date().getFullYear()"
            :endYear="new Date().getFullYear()"
            :setDateTime="initDateTime()"
            ref="dateTime"
            @confirm="confirm"
        >
        </tui-datetime>
        <tui-drawer @close="isOpenDrawer = !isOpenDrawer" :mode="mode" :visible="isOpenDrawer" ref="drawer">
            <tui-cascade-selection
                :itemList="itemList"
                @complete="address"
                @click="change"
                :headerLine="true"
            >
            </tui-cascade-selection>
        </tui-drawer>
        <tui-drawer
            :mode="mode"
            :visible="visibleBook"
            @close="closeBook"
            ref="drawer"
        >
            <tui-cascade-selection
                :itemList="itemListBook"
                @complete="number"
                @click="change"
                headerBgColor="black"
                :headerLine="true"
                width="300px"
            >
            </tui-cascade-selection>
        </tui-drawer>
    </view>
</template>

<script>
export default {
    name: 'owl-indent',
    data() {
        return {
            itemList: [
                {
                    //级联选择地区
                    src: '', //图标地址
                    text: '四川省', //主文本
                    subText: '', //副文本
                    value: 10, //value值
                    children: [
                        {
                            text: '成都市', //主文本
                            subText: '', //副文本
                            value: 0, //value值
                            children: [
                                {
                                    text: '金牛区', //主文本
                                    subText: '', //副文本
                                    value: 0 //value值
                                }
                            ] //子级数据 如果数据长度为0则表示没有下一级数据了
                        }
                    ] //子级数据
                }
            ],
            itemListBook: [
                {
                    //级联选择书本斤数
                    src: '', //图标地址
                    text: '本数量', //主文本
                    subText: '1', //副文本
                    value: 1 //value值
                }
            ],
            isOpenDrawer: false,
            //抽屉里的 那个级联数据
            visibleShow: true,
            mode: 'bottom',
            visible: false,
            visibleTime: false,
            visibleBook: false,
            numberValue: '',
            addressValue: '',
            result: ''
        }
    },
    methods: {
        /**
         * 初始化日期时间：年-月-日 时:分
         */
        initDateTime() {
            let date = new Date()

            return (
                date.getFullYear() +
                '-' +
                date.getMonth() +
                '-' +
                (date.getDate() + 1) +
                ' ' +
                date.getHours() +
                ':' +
                date.getMinutes()
            )
        },
        openDateTime() {
            this.$refs.dateTime.show()
        },
        confirm(result) {
            this.result = result
        },
        address(args) {
            this.addressValue = args.text
        },
        number(args) {
            this.numberValue = args.value
        }
    },
    props: {
        typeValue: {
            type: String,
            default: '本'
        }
    }
}
</script>

<style scoped>
.item {
    height: 70rpx;
    display: flex;
    border-bottom: 1rpx #f0f0f0 solid;
}

.item .left {
    width: 20%;
}

.item .center {
    width: 60%;
}

.item .right {
    width: 20%;
}

.item .right image {
    width: 45rpx;
    height: 45rpx;
}
</style>
