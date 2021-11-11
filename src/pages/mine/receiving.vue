<template>
  <view class="receiving">
    <template v-if="receiving.length > 0">
      <view class="orders card margin-xs" v-for="(item, index) in receiving" :key="index">
        <view class="action flex justify-end">
          <tui-button @click="delOrder(item.id, index)" shape="circle" plain width="40rpx" height="40rpx">x</tui-button>
        </view>
        <view class="products card margin-xs">
          <view class="item padding-tb-sm margin-sm flex justify-between align-center" v-for="(product, index) in item.products" :key="index">
            <owl-icon :src="product.cover_url" :size="150"></owl-icon>
            <view class="name text-cut">
              {{ product.name }}
            </view>
            <view class="price text-red">
              <text>¥</text>
              {{ (product.price * product.discount).toFixed(2) }}
            </view>
            <view class="number">
              {{ product.num }}
            </view>
          </view>
        </view>
        <view class="recivier margin-xs padding-sm">
          <view class="order-code text-cut">订单号：{{ item.id }}</view>
          <view class="name">收货人：{{ item.receiver }}</view>
          <view class="phone">手机号：{{ item.phone }}</view>
          <view class="create-date">创建日期：{{ item.create_date }}</view>
          <view class="status">
            <text>订单状态：已收货</text>
          </view>
        </view>
      </view>
    </template>
    <template v-else>
      <view class="tip text-center text-gray">你还没有运输中的订单哦~</view>
    </template>
    <tui-tips :backgroundColor="tipsColor" position="center" ref="toast"></tui-tips>
  </view>
</template>

<script>
export default {
  name: 'receiving',
  data() {
    return {
      tipsColor: '',
      receiving: []
    }
  },
  methods: {
    // 提示消息
    showTips(options) {
      this.tipsColor = options.tipsColor
      this.$refs.toast.showTips({
        msg: options.msg,
        duration: 2000
      })
    },
    delOrder(id, index) {
      uni.request({
        method: 'POST',
        url: this.$baseURL + '/index/del/order/by/id',
        data: {
          id: id
        },
        success: res => {
          this.orders.splice(index, 1)
          this.showTips({ tipsColor: '#19BE6B', msg: '删除成功~' })
        }
      })
    }
  },
  onLoad() {
    uni.request({
      url: this.$baseURL + '/index/find/orders/by/status/and/userId',
      method: 'POST',
      data: {
        user_id: 1,
        status: 0
      },
      success: res => {
        this.receiving = res.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.receiving {
  .orders {
    .products {
      .item {
        border-bottom: 1rpx solid #f3ececcc;

        .name {
          width: 35% !important;
        }
      }
    }

    .recivier {
      view {
        margin-bottom: 10rpx;
      }

      view:last-child {
        margin-bottom: 0;
      }
    }
  }

  .tip {
    font-size: 34rpx;
    margin-top: 100rpx;
  }
}
</style>
