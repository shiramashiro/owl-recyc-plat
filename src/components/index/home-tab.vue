<template>
    <view class="home-tab">
        <view class="row-1 margin-bottom-xs">
            <swiper autoplay>
                <swiper-item v-for="(item, index) in slideShow" :key="index">
                    <image
                        class="slide-show"
                        mode="aspectFit"
                        :src="item"
                    ></image>
                </swiper-item>
            </swiper>
        </view>
        <view class="row-2 margin-bottom-xs">
            <view class="row-2-1 flex justify-between align-center">
                <view class="col-1 flex text-lg">
                    <view class="col-1-1 text-lg">
                        最受欢迎书籍日榜
                    </view>
                    <view class="col-1-2 flex align-end margin-left-xs text-xs">
                        人气品牌·每日更新
                    </view>
                </view>
                <view class="col-2">
                    <view class="col-3">
                        <button size="mini" disabled="true">更多</button>
                    </view>
                </view>
            </view>
            <view class="row-2">
                <!-- 组件，宫格组件 -->
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'HomeTab',
    components: {},
    data() {
        return {
            slideShow: [
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032611362390127.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/20210326193508509.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032619353510220.jpg'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.home-tab {
    .row-1 {
        .slide-show {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
