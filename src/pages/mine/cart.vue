<template>
  <view class="cart">
    <template v-if="products.length > 0">
      <view class="products card margin-xs">
        <view class="item padding-tb-sm margin-sm flex justify-between align-center" v-for="(item, index) in products" :key="index">
          <owl-icon :src="item.book.cover_url" :size="150"></owl-icon>
          <view class="name text-cut">
            {{ item.book.name }}
          </view>
          <view class="price text-red">
            <text>¥</text>
            {{ (item.book.price * item.book.discount).toFixed(2) }}
          </view>
          <view class="number">
            {{ item.num }}
          </view>
          <tui-button @click="delProduct(item.id, index)" plain :width="'40rpx'" shape="circle" :height="'50rpx'">x</tui-button>
        </view>
      </view>
      <view class="margin-xs">
        <tui-button @click="defray">结算</tui-button>
      </view>
    </template>
    <template v-else>
      <view class="tip text-center text-gray">你的购物车还没有商品哦~</view>
    </template>
    <tui-tips :backgroundColor="tipsColor" position="center" ref="toast"></tui-tips>
  </view>
</template>

<script>
export default {
  name: 'cart',
  data() {
    return {
      tipsColor: '',
      products: [{ num: 0, book: { cover_url: '', discount: 0, price: 0, name: '' } }]
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
    defray() {
      this.$store.commit('setCarts', this.products)
      uni.navigateTo({
        url: '/pages/index/pay'
      })
    },
    delProduct(id, index) {
      uni.request({
        method: 'POST',
        url: this.$baseURL + '/index/del/product/from/carts',
        data: {
          id: id
        },
        success: res => {
          this.showTips({ tipsColor: '#19BE6B', msg: '删除商品成功~' })
          this.$store.state.carts.splice(index, 1)
          this.products.splice(index, 1)
        },
        fail: res => {
          this.showTips({ tipsColor: '#EB0909', msg: '删除商品失败！' })
        }
      })
    }
  },
  onLoad() {
    uni.request({
      method: 'GET',
      url: this.$baseURL + '/index/find/carts/by/userId',
      data: {
        userId: 1
      },
      success: res => {
        this.products = res.data
      },
      fail: res => {}
    })
  }
}
</script>

<style lang="scss" scoped>
.cart {
  .products {
    .item {
      border-bottom: 1rpx solid #f3ececcc;

      .name {
        width: 35% !important;
      }
    }
  }

  .tip {
    font-size: 34rpx;
    margin-top: 100rpx;
  }
}
</style>
