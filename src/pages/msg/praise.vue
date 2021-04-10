<template>

  <view class="praise">

<view class="item" v-for="item in list">
  <view class="top">
    <view class="left">
      <img :src="item.url">
    </view>

    <view class="right">

     <view class="name">
       {{item.name}}
     </view>

      <view class="time">
        {{item.time}}
      </view>
    </view>
  </view>

  <view class="center">
     <view>{{item.detail}}</view>
  </view>

  <view class="bottom">
    <view class="box">
      在b站至今为止收到最多
    </view>
  </view>

</view>

  </view>
 

</template>

<script>
export default {
  name: "praise",
  data(){
    return{
      list:[
        {
          url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg",
          name:"scroll",
          time:"2小时前",
          praise:"等200人赞了你",
          detail:"在B站为止迄今收到最多的赞"
        },
        {
          url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg",
          name:"scroll",
          time:"2小时前",
          praise:"等200人赞了你",
          detail:"在B站为止迄今收到最多的赞"
        },
        {
          url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg",
          name:"scroll",
          time:"2小时前",
          praise:"等200人赞了你",
          detail:"在B站为止迄今收到最多的赞"
        },
        {
          url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2621980968,324835243&fm=26&gp=0.jpg",
          name:"scroll",
          time:"2小时前",
          praise:"等200人赞了你",
          detail:"在B站为止迄今收到最多的赞"
        },
      ]
    }
  }
}
</script>

<style scoped>

.item{
  margin-bottom: 8px;
  width: 100%;
  height: 130px;
  box-shadow: 3px 3px 3px #f1f0f0;
}
.top{
  width: 100%;
  display: flex;
  height: 45px;

}
.left {
  width: 15%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
.left img{
  border-radius: 50%;
  width: 80%;
  height: 80%;
}
.right{
  width: 85%;
  height: 100%;

}
.name{
 height: 20px;
  padding-left: 10px;
  padding-top: 5px;
  font-size: 14px;

}
.time{
  padding-left: 10px;
  padding-top: 5px;
  font-size: 8px;
  opacity: 0.7;
}
.center{
 display: flex;
  padding-left: 62px;
  align-items: center;

  height: 30px;
}
.bottom{
  margin-top: 5px;
  width: 100%;
  height: 30px;
  background-color: #f5f3f3;
  margin-left: 62px;
 display: flex;
  align-items: center;
  border-radius: 8px;
}
.bottom view{
  padding-left: 10px;
  color: deeppink;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>