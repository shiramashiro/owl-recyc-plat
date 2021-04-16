<template>
<view class="container">

   <view class="item" v-for="(item,index) in message" @click="itemClick(index)">
      <view class="top">
        <img :src="item.url" alt="">
      </view>

     <view class="detail">

     <view class="address">地址：{{item.address}}</view>
       <view class="price">评价回收价格:{{item.price}}</view>
       <view class="once">回收次数：{{item.once}}</view>

     </view>
   </view>


</view>
</template>

<script>
export default {
  name: "recovery",
  data(){
    return{
      message:[
        {
         url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg",
          address:"绵阳市涪城区",
          price:"12.00",
          once:"1000"
        },
        {
          url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=725350610,691782460&fm=26&gp=0.jpg",
          address:"成都市金牛区",
          price:"14.00",
          once:"2000"
        }
      ]
    }
  },
  methods:{
    itemClick(index){
  this.$emit('recoverys',index)
    }
  }
}
</script>

<style scoped>
.container{
 background-color: #ffffff;
  width: 95%;
  height: 150px;
  margin: 0  auto;
  display: flex;
  justify-content: space-between;
}
.item{
  width: 49.7%;
  height: 100%;
  border: 1px #cccccc solid;
  border-radius: 8px;
}

.top{
  width: 100%;
  height: 55%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top img{

  width: 90%;
  height: 90%;
  border-radius: 5px;
}
.detail{
  width: 100%;
  height: 45%;
}
.address,.price,.once{
  padding-left: 10px;
  padding-top: 3px;
  height: 33%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333333;
}
.once{
  opacity: 0.9;
}
.address{
  font-weight: bold;
  font-size: 13px;
}
.price,.once{
  font-size: 10px;
}
</style>