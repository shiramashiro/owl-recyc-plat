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
          :style="{ height: swiperHeight + 'px' }"
          style="padding: 35rpx 20rpx 0 20rpx;"
        >
          <swiper-item v-for="(item, index) in tabs" :key="index">
            <template v-if="item.type !== 'shops'">
              <view :id="'swiper-item-' + index">
                <view v-for="item in 200" :key="item">{{ item }}</view>
              </view>
            </template>
            <template v-else>
              <view :id="'swiper-item-' + index">
                <shop
                  v-for="(shop, i) in item.items"
                  :key="i"
                  :shop="shop"
                ></shop>
              </view>
            </template>
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
          name: '收藏书籍',
          type: 'books',
          items: []
        },
        {
          name: '订阅店铺',
          type: 'shops',
          items: [
            {
              cover: require('../../static/mine/mexican.jpg'),
              name: '稻草人',
              star: 5,
              likes: 10.9,
              tags: [
                {
                  label: '促销',
                  style:
                    'background-color: rgb(255,245,244); color: rgb(234,73,56)'
                },
                {
                  label: '券',
                  style:
                    'background-color: rgb(255,245,244); color: rgb(234,73,56)'
                }
              ]
            },
            {
              cover: require('../../static/mine/a21.jpg'),
              name: 'A21',
              star: 4,
              likes: 8.9,
              tags: [
                {
                  label: '券',
                  style:
                    'background-color: rgb(255,245,244); color: rgb(234,73,56)'
                },
                {
                  label: '上新',
                  style:
                    'background-color: rgb(230,249,243); color: rgb(77,202,161)'
                }
              ]
            },
            {
              cover: require('../../static/mine/a21.jpg'),
              name: 'A21',
              star: 4,
              likes: 8.9,
              tags: [
                {
                  label: '促销',
                  style:
                    'background-color: rgb(255,245,244); color: rgb(234,73,56)'
                },
                {
                  label: '上新',
                  style:
                    'background-color: rgb(230,249,243); color: rgb(77,202,161)'
                }
              ]
            },
            {
              cover: require('../../static/mine/a21.jpg'),
              name: 'A21',
              star: 4,
              likes: 8.9,
              tags: [
                {
                  label: '券',
                  style:
                    'background-color: rgb(255,245,244); color: rgb(234,73,56)'
                }
              ]
            }
          ]
        }
      ],
      currentTab: 0,
      currentSwiper: 0,
      swiperHeight: 0
    }
  },
  onReady() {
    this.initSwiperHeight('0')
  },
  methods: {
    initSwiperHeight(index) {
      uni
        .createSelectorQuery()
        .in(this)
        .select('#swiper-item-' + index)
        .boundingClientRect(data => {
          this.swiperHeight = data.height + 30
        })
        .exec()
    },
    tuiTabsChange(event) {
      this.currentTab = event.index
      this.currentSwiper = event.index
      this.initSwiperHeight(event.index)
    },
    swiperChange(event) {
      this.currentTab = event.detail.current
      this.currentSwiper = event.detail.current
      this.initSwiperHeight(event.detail.current)
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
  }
}
</style>
