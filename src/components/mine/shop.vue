<template>
  <view class="shop">
    <view class="cover-wrapper">
      <image class="image" :src="shop.cover"></image>
    </view>
    <view class="name-wrapper">
      {{ shop.name }}
    </view>
    <view class="cancel-wrapper">
      <button
        class="cu-btn round line-blue button-hover"
        role="button"
        aria-disabled="false"
      >
        取消收藏
      </button>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.shop {
  .cover-wrapper {
    .image {
      width: 100rpx;
      height: 90rpx;
    }
  }
}
</style>
