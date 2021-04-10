<template>
  <view>
    <view class="top">
     <view class="topChild">
       <img src="../../static/回复.svg" alt="">
       <text>回复我的</text>
     </view>

      <view class="topChild">
        <img src="../../static/赞.svg" alt="">
        <text>收到的赞</text>
      </view>

      <view class="topChild">
        <img src="../../static/通知.svg" alt="">
        <text>系统通知</text>
      </view>

    </view>

    <view class="chart">

      <view class="chartTop">聊天列表</view>

      <view class="item" v-for="item in list">
        <view class="leftImg">
          <img :src="item.url" alt="">
        </view>

        <view class="rightMessage">

          <view class="title">
            <view class="name">{{item.name}}</view>
            <view class="time">{{item.time}}</view>
          </view>

          <view class="detail">
            {{item.detail}}
          </view>

        </view>
      </view>

    </view>

    <view class="content">
      <view class="cu-list menu-avatar" v-for="item in list">
        <view class="cu-item ">
          <view class="cu-avatar radius lg" >
            <img :src="item.url" alt="">
          </view>
          <view class="content">
            <view class="text-pink">
              <text class="text-cut">{{item.name}}</text>
            </view>
            <view class="text-gray text-sm flex">
              <text class="text-cut">{{item.detail}}</text>
            </view>
          </view>
          <view class="action">
            <view class="text-grey text-xs">{{item.time}}</view>
            <view class="cu-tag round bg-red sm">1</view>
          </view>
        </view>

      </view>
    </view>

  </view>
</template>

<script>
export default {
name: "msg",
  data(){
    return{
      list:[
        {
          url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg",
          name:"哔哩哔哩创作中心",
          time:"04-05",
          detail:"数据存储进行了性能优化，它的具体优化方式和升级注意事项"
        },
        {
          url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg",
          name:"哔哩哔哩创作中心",
          time:"04-05",
          detail:"数据存储进行了性能优化，它的具体优化方式和升级注意事项"
        },



      ],

    }
  }
}
</script>

<style scoped>
.cu-avatar ,.radius ,.lg{
  border-radius: 50%;

}
.cu-avatar ,.radius ,.lg img{
  width: 43px;
  height: 49px;
  border-radius: 50%;
}
.top{
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 2px 2px 5px #e5e0e0;
  display: flex;
}
.topChild{
  width: 33%;
  /*flex: 1;*/
display: flex;
/*  align-items: center;*/
  justify-content: center;

}
.topChild img{
  display:inline-block;
height: 60%;
}
.topChild text{
  position: absolute;
  top: 35px;
}
.chart{
  margin-top: 10px;
}
.chartTop{
  background-color: #ffffff;
  height: 30px;
  padding-top: 6px;
  padding-left: 16px;
  border-bottom: 1px #cccccc solid;
  color: #333333;

}
.item{
  height: 70px;
  width: 100%;

  display: flex;
}
.leftImg{
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}
.leftImg img{
  width: 80%;
  height: 70%;
  border-radius: 50%;
}
.rightMessage{
  width: 85%;
  height: 100%;
  border-bottom: 1px #e7e4e4 solid;
}
.title{
  width: 100%;
  height: 23px;
  margin-top: 10px;
  display: flex;
}
.name{
  width: 86%;
  color: deeppink;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 2px;
  padding-left: 4px;
}
.time{
  width: 14%;
  background-color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 5px;
  padding-left: 3px;
}
.detail{
  margin-left: 4px;
  margin-top: 8px;
  width: 85%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 10px;
}
</style>