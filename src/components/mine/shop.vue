<template>
  <tui-swipe-action
    :actions="actions"
    :open="isOpen"
    style="margin-bottom: 30rpx; border-radius: 20rpx;"
  >
    <template v-slot:content>
      <view class="shop">
        <view class="col-1">
          <image class="cover" :src="shop.cover"></image>
        </view>
        <view class="col-2">
          <view class="col-2-1">
            <view class="row-1">
              {{ shop.name }}
            </view>
            <view class="row-2">
              <view class="star">
                <tui-rate :size="14" :current="shop.star" disabled></tui-rate>
              </view>
              <view class="likes">{{ shop.likes }}万人关注</view>
            </view>
            <view class="row-3">
              <view
                class="tag"
                v-for="(tag, index) in shop.tags"
                :key="index"
                :style="tag.style"
              >
                {{ tag.label }}
              </view>
            </view>
          </view>
          <view class="col-2-2">
            <tui-icon
              name="more-fill"
              :size="40"
              @click="open"
              unit="rpx"
            ></tui-icon>
          </view>
        </view>
      </view>
    </template>
  </tui-swipe-action>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      actions: [
        {
          name: '取消订阅',
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
.shop {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  padding: 14rpx;

  .col-1 {
    margin-right: 30rpx;

    .cover {
      border-radius: 100%;
      width: 130rpx;
      height: 130rpx;
    }
  }

  .col-2 {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-content: center;

    .col-2-1 {
      .row-1 {
        font-size: 30rpx;
        display: -webkit-box;
        word-break: break-all;
        width: 300rpx;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .row-2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;

        .likes {
          margin-left: 8rpx;
          font-size: 8rpx;
          color: #a7a7a7;
        }
      }

      .row-3 {
        display: flex;
        flex-direction: row;

        .tag {
          font-size: 10rpx;
          margin-right: 13rpx;
          padding: 2rpx 15rpx;
          text-align: center;
          border-radius: 50rpx;
          border: 1px solid white;
          background: #87cefa;
          color: white;
        }

        .tag:last-child {
          margin-right: 0;
        }
      }
    }

    .col-2-2 {
      margin-right: 20rpx;
    }
  }
}
</style>
