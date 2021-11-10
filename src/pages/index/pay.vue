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

    <owl-fiche title="收货人信息" sub-title="下单之前请填入收货人信息">
      <view class="receive-info padding-lr-lg">
        <!-- 电话号码 -->
        <view class="phone label flex align-center">
          <view class="tip flex align-center"><span v-if="!validation.phoneIsCorrect" class="text-red text-lg">*</span>电话号码：</view>
          <input value="18508153489" v-model="receiveInfo.phone" placeholder-style="font-size: 24rpx; color: gray;" placeholder="请输入电话号码" />
        </view>
        <!-- 收货地址 -->
        <view class="address label flex align-center">
          <view class="tip flex align-center"><span v-if="!validation.addressIsCorrect" class="text-red text-lg">*</span>收货地址：</view>
          <input value="四川省广安市" v-model="receiveInfo.address" placeholder-style="font-size: 24rpx; color: gray;" placeholder="请输入收货地址" />
        </view>
        <!-- 收货人 -->
        <view class="receiver label flex align-center">
          <view class="tip flex align-center"><span v-if="!validation.receiverIsCorrect" class="text-red text-lg">*</span>收货人：</view>
          <input value="郑人滏" v-model="receiveInfo.receiver" placeholder-style="font-size: 24rpx; color: gray;" placeholder="请输入收货人" />
        </view>
      </view>
    </owl-fiche>

    <owl-fiche title="支付方式" sub-title="请选择支付方式">
      <view class="payment-way padding-lr-lg">
        <view class="wechat flex align-center">
          <owl-icon :size="100" :src="require('../../static/icon/index/wechatpay.png')"></owl-icon>
          <view>选择微信支付</view>
        </view>
        <view class="alipay margin-top-sm flex align-center">
          <owl-icon :size="100" :src="require('../../static/icon/index/alipay.png')"></owl-icon>
          <view>选择支付宝支付</view>
        </view>
        <view class="text-gray">这只是一个暂时，功能未开放，默认为微信支付。</view>
        <view class="margin-top-sm pay-box flex justify-center">
          <tui-button width="250rpx" height="65rpx" :size="20" shape="circle" plain @click="defray">支付</tui-button>
        </view>
      </view>
    </owl-fiche>
    <tui-modal :show="isShowModal" @click="handleModalClick" title="提示" content="确定要结算购物车吗？"></tui-modal>
    <tui-tips :backgroundColor="tipsColor" position="center" ref="toast"></tui-tips>
  </view>
</template>

<script>
export default {
  name: 'pay',
  data() {
    return {
      tipsColor: '',
      receiveInfo: {
        phone: '',
        address: '',
        receiver: ''
      },
      isShowModal: false,
      validation: {
        phoneIsCorrect: true,
        receiverIsCorrect: true,
        addressIsCorrect: true
      }
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
    handleModalClick(e) {
      if (e.index == 0) {
        this.isShowModal = !this.isShowModal
      } else {
        let products = []
        this.$store.state.carts.forEach((item, index) => {
          products.push({
            id: item.book.id
          })
        })
        uni.request({
          method: 'POST',
          url: this.$baseURL + '/index/insert/products/into/orders',
          data: {
            products: products,
            user_id: 1,
            phone: this.receiveInfo.phone,
            address: this.receiveInfo.address,
            receiver: this.receiveInfo.receiver
          },
          success: res => {
            this.showTips({ tipsColor: '#19BE6B', msg: '支付成功~' })
          },
          fail: res => {
            this.showTips({ tipsColor: '#EB0909', msg: '支付失败！' })
          }
        })
      }
    },
    defray() {
      let phoneReg = new RegExp(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)
      let receiverReg = new RegExp(/^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/)
      this.validation.phoneIsCorrect = phoneReg.test(this.receiveInfo.phone)
      this.validation.receiverIsCorrect = receiverReg.test(this.receiveInfo.receiver)
      this.validation.addressIsCorrect = this.receiveInfo.address.length > 5
      if (this.validation.phoneIsCorrect && this.validation.addressIsCorrect && this.validation.receiverIsCorrect) {
        this.isShowModal = !this.isShowModal
      } else {
        this.showTips({ tipsColor: '#EB0909', msg: '信息填入不正确！' })
      }
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

  .receive-info {
    .label {
      margin-bottom: 30rpx;

      .tip {
        font-size: 34rpx;
      }
    }

    .label:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
