<template>
    <view class="msg">
        <view class="top padding-lr-lg flex justify-between align-center">
            <navigator :url="'/pages/msg/reply'">
                <view class="flex align-center justify-center">
                    <image
                        style="width: 70rpx; height: 70rpx"
                        mode="aspectFill"
                        src="@/static/回复.svg"
                    />
                </view>
                <view class="text-gray">
                    回复我的
                </view>
            </navigator>
            <navigator :url="'/pages/msg/praise'">
                <view class="flex align-center justify-center">
                    <image
                        style="width: 70rpx; height: 70rpx"
                        mode="aspectFill"
                        src="@/static/赞.svg"
                    />
                </view>
                <view class="text-gray">
                    收到的赞
                </view>
            </navigator>
            <navigator :url="'/pages/msg/sys-msg'">
                <view class="flex align-center justify-center">
                    <image
                        style="width: 70rpx; height: 70rpx"
                        mode="aspectFill"
                        src="@/static/通知.svg"
                    />
                </view>
                <view class="text-gray">
                    系统通知
                </view>
            </navigator>
        </view>
        <view class="chart">
            <view
                class="cu-list menu-avatar"
                v-for="(item, index) in list"
                :key="index"
            >
                <view class="cu-item">
                    <view class="cu-avatar radius lg">
                        <img :src="item.url" alt="" />
                    </view>
                    <view class="content">
                        <view class="text-pink">
                            <text class="text-cut">{{ item.name }}</text>
                        </view>
                        <view class="text-gray text-sm flex">
                            <text class="text-cut">{{ item.detail }}</text>
                        </view>
                    </view>
                    <view class="action">
                        <view class="text-grey text-xs">
                            {{ item.time }}
                        </view>
                        <template v-if="item.new > 0">
                            <view class="cu-tag round bg-red sm">
                                {{ item.new }}
                            </view>
                        </template>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'msg',
    data() {
        return {
            list: [
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '哔哩哔哩创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 0
                },
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '哔哩哔哩创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 0
                },
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '哔哩哔哩创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 0
                },
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '哔哩哔哩创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 1
                },
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '哔哩哔哩创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 20
                },
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '哔哩哔哩创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 10
                },
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '哔哩哔哩创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 10
                },
                {
                    url:
                        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg',
                    name: '哔哩哔哩创作中心',
                    time: '04-05',
                    detail:
                        '数据存储进行了性能优化，它的具体优化方式和升级注意事项',
                    new: 10
                }
            ]
        }
    }
}
</script>

<style lang="css" scoped>
.cu-avatar,
.radius,
.lg {
    border-radius: 50%;
}
.cu-avatar,
.radius,
.lg img {
    width: 100rpx;
    height: 100rpx;
    border-radius: 100%;
}
.top {
    position: sticky;
    top: 0;
    z-index: 998;
    width: 100%;
    height: 120rpx;
    background-color: #ffffff;
    box-shadow: 8rpx 8rpx 10rpx #e5e0e0;
}
.item {
    height: 70px;
    width: 100%;
    display: flex;
}
.leftImg {
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.leftImg img {
    width: 80%;
    height: 70%;
    border-radius: 50%;
}
.rightMessage {
    width: 85%;
    height: 100%;
    border-bottom: 1px #e7e4e4 solid;
}
.title {
    width: 100%;
    height: 23px;
    margin-top: 10px;
    display: flex;
}
.name {
    width: 86%;
    color: deeppink;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 2px;
    padding-left: 4px;
}
.time {
    width: 14%;
    background-color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 5px;
    padding-left: 3px;
}
.detail {
    margin-left: 4px;
    margin-top: 8px;
    width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 10px;
}
</style>
