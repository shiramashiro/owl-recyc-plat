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
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.58cdn.com.cn%2Fp1%2Fbig%2Fn_v201ec6d6b3f434ee58e10ba890a3318a5.jpg%3Fw%3D425%26h%3D320&refer=http%3A%2F%2Fpic3.58cdn.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621160791&t=30c8d47c020266b7027f4e14e1cd6433",
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
}
.top img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.detail{
  width: 100%;
  height: 45%;
}
.address,.price,.once{
  padding-left: 5px;
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
</style>