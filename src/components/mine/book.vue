<template>
  <view class="book">
    <view class="row-1">
      {{ book.shopName }}
    </view>
    <view class="row-2">
      <view class="col-1">
        <image class="cover" mode="aspectFill" :src="book.cover"></image>
      </view>
      <view class="col-2">
        <view class="row-1">
          <view class="name">{{ book.name }}</view>
        </view>
        <view class="row-2">{{ book.desc }}</view>
        <view class="row-3">
          <text class="label">¥</text>
          <text class="price">{{ book.price }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dropdownShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.book {
  background-color: white;
  margin-bottom: 20rpx;
  border-radius: 20rpx;
  padding: 30rpx 20rpx;

  .row-1 {
    font-size: 30rpx;
    margin-bottom: 15rpx;
  }

  .row-2 {
    display: flex;
    flex-direction: row;
    align-items: center;

    .col-1 {
      .cover {
        width: 250rpx;
        height: 230rpx;
      }
    }

    .col-2 {
      .row-1 {
        .name {
          font-size: 30rpx;
        }
      }

      .row-2 {
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 0 20rpx 0;
      }

      .row-3 {
        color: red;
        .label {
          margin-right: 6rpx;
        }

        .price {
          font-size: 40rpx;
          letter-spacing: 4rpx;
        }
      }
    }
  }
}
</style>
