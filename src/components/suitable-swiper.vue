<template>
    <view class="suitable-swiper">
        <scroll-view
            scroll-x
            :style="{
                whiteSpace: configs.isWhiteSpace === true ? 'nowrap' : 'normal'
            }"
        >
            <tui-tabs
                :selectedColor="configs.selectedColor"
                :sliderBgColor="configs.sliderBgColor"
                :itemWidth="configs.itemWidth"
                :currentTab="currentTuiTab"
                @slideTuiTab="slideTuiTab"
                :swiperTabs="swiperTabs"
            ></tui-tabs>
        </scroll-view>
        <swiper
            :style="{
                height: swiperHeight + 'px',
                backgroundColor: bgColor,
                padding: padding
            }"
            :current="currentSwiper"
            @change="slideSwiper"
            :duration="360"
        >
            <slot></slot>
        </swiper>
    </view>
</template>

<script>
export default {
    props: {
        configs: {
            type: Object,
            required: true
        },
        swiperTabs: {
            type: Array,
            required: true
        },
        bgColor: {
            type: String,
            default: 'rgb(248, 248, 248)'
        },
        padding: {
            type: String,
            default: '35rpx 20rpx 0 20rpx'
        }
    },
    data() {
        return {
            swiperHeight: 0,
            currentSwiper: 0,
            currentTuiTab: 0
        }
    },
    mounted() {
        this.initSwiperHeight(0)
    },
    methods: {
        initSwiperHeight(index) {
            uni.createSelectorQuery()
                .in(this)
                .select('#swiper-item-' + index)
                .boundingClientRect(data => {
                    this.swiperHeight = data.height + 30
                })
                .exec()
        },
        slideTuiTab(event) {
            this.initSwiperHeight(event.index)
            this.currentTuiTab = event.index
            this.currentSwiper = event.index
        },
        slideSwiper(event) {
            this.initSwiperHeight(event.detail.current)
            this.currentTuiTab = event.detail.current
            this.currentSwiper = event.detail.current
        }
    }
}
</script>
