<template>
  <tui-swipe-action
    :actions="actions"
    :open="isOpen"
    style="margin-bottom: 30rpx; border-radius: 20rpx; white-space: normal"
  >
    <template v-slot:content>
      <view class="book">
        <view class="row-1 shop-name">
          {{ item.shopName }}
        </view>
        <view class="row-2">
          <view class="col-1">
            <image class="cover" mode="aspectFill" :src="item.cover"></image>
          </view>
          <view class="col-2">
            <view class="row-1">
              <view class="name">{{ item.name }}</view>
            </view>
            <view class="row-2">{{ item.desc }}</view>
            <view class="row-3">
              <text class="label">¥</text>
              <text class="price">{{ item.price }}</text>
            </view>
            <view class="row-4">
              <tui-icon
                color="#87cefa"
                class="cart"
                name="cart"
                :size="30"
                unit="rpx"
              ></tui-icon>
              <tui-icon
                name="more-fill"
                :size="40"
                @click="open"
                unit="rpx"
              ></tui-icon>
            </view>
          </view>
        </view>
      </view>
    </template>
  </tui-swipe-action>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      actions: [
        {
          name: '取消收藏',
          color: '#fff',
          fontsize: 30,
          width: 70,
          background: '#FD3B31'
        }
      ],
      isOpen: false
    }
  },
  methods: {
    open() {
      if (this.isOpen) {
        this.isOpen = false
      } else {
        this.isOpen = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.book {
  background-color: white;
  padding: 30rpx 20rpx;

  .row-1.shop-name {
    margin-bottom: 25rpx;
  }

  .row-2 {
    display: flex;
    flex-direction: row;
    align-items: center;

    .col-1 {
      .cover {
        width: 200rpx;
        height: 230rpx;
        border-radius: 15rpx;
        margin-right: 20rpx;
      }
    }

    .col-2 {
      .row-1 {
        .name {
          margin-bottom: 20rpx;
          display: -webkit-box;
          word-break: break-all;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
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

      .row-4 {
        float: right;
        display: inline-flex;
        align-items: center;

        .cart {
          border-radius: 100%;
          border: 1rpx solid #87cefa;
          padding: 10rpx;
          margin-right: 24rpx !important;
        }
      }
    }
  }
}
</style>
