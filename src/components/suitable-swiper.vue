<template>
  <view class="suitable-swiper">
    <tui-tabs
      :selectedColor="configs.selectedColor"
      :sliderBgColor="configs.sliderBgColor"
      :itemWidth="configs.itemWidth"
      :currentTab="currentTuiTab"
      @change="slideTuiTab"
      :tabs="swiperTabs"
      style="width: 100%"
    ></tui-tabs>
    <swiper
      style="padding: 35rpx 20rpx 0 20rpx; background-color: rgb(248, 248, 248)"
      :style="{ height: swiperHeight + 'px' }"
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
      uni
        .createSelectorQuery()
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
