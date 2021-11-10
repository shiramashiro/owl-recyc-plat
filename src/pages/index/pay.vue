<template>
  <view class="pay">
    <owl-fiche title="商品列表" sub-title="要结算的商品">
      <view class="item padding-tb-sm margin-sm flex justify-between align-center" v-for="(item, index) in $store.state.carts" :key="index">
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
    </owl-fiche>

    <owl-fiche title="收货人信息" sub-title="下单之前请填入收货人信息"> </owl-fiche>

    <owl-fiche title="支付方式" sub-title="请选择支付方式"> </owl-fiche>

    <tui-tips :backgroundColor="tipsColor" position="center" ref="toast"></tui-tips>
  </view>
</template>

<script>
export default {
  name: 'pay',
  data() {
    return { tipsColor: '' }
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
        },
        fail: res => {
          this.showTips({ tipsColor: '#EB0909', msg: '删除商品失败！' })
        }
      })
    }
  },
  onLoad() {}
}
</script>

<style lang="scss" scoped>
.pay {
  .item {
    border-bottom: 1rpx solid #f3ececcc;

    .name {
      width: 35%;
    }
  }
}
</style>
