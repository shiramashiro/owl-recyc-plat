<template>
  <view class="mine">
    <cu-custom bgColor="bg-gradual-blue" :isBack="true">
      <block slot="backText">返回</block>
      <block slot="content">导航栏</block>
    </cu-custom>
    <view class="background">
      <image
        class="image"
        mode="aspectFill"
        src="../../static/mine/background.png"
      ></image>
    </view>
    <view class="wrapper">
      <view class="top-wrapper">
        <view class="col-1">
          <image
            class="avatar"
            model="aspectFit"
            src="../../static/mine/avatar.jpg"
          ></image>
        </view>
        <view class="col-2">
          <view class="row-1">
            <view class="col-1">
              <view class="num">180</view>
              <view class="desc">粉丝</view>
            </view>
            <view class="col-1">
              <view class="num">124</view>
              <view class="desc">关注</view>
            </view>
            <view class="col-1">
              <view class="num">44</view>
              <view class="desc">获赞</view>
            </view>
          </view>
          <view class="row-2">
            <button class="editor" size="mini" :plain="true">编辑资料</button>
          </view>
        </view>
      </view>
      <view class="header-wrapper">
        <view class="row-1">
          <view class="col-1">kongsam</view>
        </view>
        <view class="row-2">
          <view style="color: #a7a7a7; font-size: 25rpx; font-weight: normal">
            Time tick away, dream faded away!
          </view>
        </view>
      </view>
      <view class="body-wrapper">
        <tui-tabs
          style="width: 100%"
          selectedColor="#87cefa"
          sliderBgColor="#87cefa"
          :tabs="tabs"
          itemWidth="50%"
          :currentTab="currentTab"
          @change="tuiTabsChange"
        ></tui-tabs>
        <swiper
          :current="currentSwiper"
          :duration="360"
          @change="swiperChange"
          style="background-color: rgb(249 249 250);"
        >
          <swiper-item>
            <view class="swiper-item">
              <template v-for="(shop, index) in shops">
                <shop :key="index" :shop="shop"></shop>
              </template>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">2</view>
          </swiper-item>
        </swiper>
      </view>
    </view>
  </view>
</template>

<script>
import shop from '@/components/mine/shop.vue'

export default {
  components: { shop },
  data() {
    return {
      tabs: [
        {
          name: '订阅店铺'
        },
        {
          name: '收藏书籍'
        }
      ],
      shops: [
        {
          cover: '',
          name: '稻草人'
        },
        {
          cover: '',
          name: 'A21'
        }
      ],
      currentTab: 0,
      currentSwiper: 0
    }
  },
  methods: {
    tuiTabsChange(event) {
      this.currentTab = event.index
      this.currentSwiper = event.index
    },
    swiperChange(event) {
      this.currentSwiper = event.detail.current
      this.currentTab = event.detail.current
    }
  }
}
</script>

<style lang="scss" scoped>
.mine {
  .background {
    width: 100%;
    height: 100%;

    .image {
      width: 100%;
      height: 235rpx;
    }
  }

  .wrapper {
    .top-wrapper {
      padding: 0 20rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: center;

      .col-1 {
        margin-right: 60rpx;
        position: relative;

        .avatar {
          position: inherit;
          border: 10rpx solid white;
          border-radius: 100%;
          width: 180rpx;
          height: 180rpx;
          top: -15rpx;
        }
      }

      .col-2 {
        width: 100%;

        .row-1 {
          display: flex;
          flex-direction: row;
          align-items: center;
          align-content: center;
          justify-content: space-between;

          .col-1 {
            text-align: center;
            margin-right: 0;
            margin: 0 0 10rpx 0;

            .num {
              font-size: 30rpx;
            }

            .desc {
              color: #a7a7a7;
            }
          }
        }

        .row-2 {
          .editor {
            width: 100%;
            color: #87cefa;
            border: #87cefa 5rpx solid;
          }
        }
      }
    }

    .header-wrapper {
      padding: 0 20rpx;
      border-bottom: 1rpx solid #e8e8e8;

      .row-1 {
        margin-bottom: 13rpx;

        .col-1 {
          font-size: 34rpx;
          color: #87cefa;
        }
      }

      .row-2 {
        padding-bottom: 25rpx;
      }
    }

    .body-wrapper {
      .swiper-item {
        padding: 35rpx 20rpx 0 20rpx;
      }
    }
  }
}
</style>
