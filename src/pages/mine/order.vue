<template>
  <view class="order">
    <view class="orders card margin-xs" v-for="(item, index) in orders" :key="index">
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
          <text>订单状态：</text>
          <template v-if="item.status == 0">
            <text class="status-0 text-green">运输中</text>
          </template>
          <template v-else>
            <text class="status-1 text-red">已收货</text>
          </template>
        </view>
        <view class="check-order" v-if="item.status == 0">
          <tui-button @click="check(item.id, index)" plain shape="circle" :size="14" height="54rpx" width="250rpx">确认收货</tui-button>
        </view>
      </view>
    </view>
    <tui-tips :backgroundColor="tipsColor" position="center" ref="toast"></tui-tips>
  </view>
</template>

<script>
export default {
  name: 'order',
  data() {
    return {
      tipsColor: '',
      orders: []
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
    },
    check(id, index) {
      uni.request({
        method: 'POST',
        url: this.$baseURL + '/index/update/order/status',
        data: {
          id: id,
          status: 1
        },
        success: res => {
          this.orders[index].status = 1
          this.showTips({ tipsColor: '#19BE6B', msg: '收货成功~' })
        }
      })
    }
  },
  onLoad() {
    uni.request({
      url: this.$baseURL + '/index/find/orders/by/userId',
      method: 'GET',
      data: {
        userId: this.$store.state.userInfo.id
      },
      success: res => {
        this.orders = res.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.order {
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
}
</style>
