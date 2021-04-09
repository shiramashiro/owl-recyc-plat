<template>
<view class="comment">

  <view class="big">
    <view class="commentBlock">评论</view>
  </view>


  <view class="list">

<view class="item">
<view class="left">

   <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2633587454,2833522707&fm=26&gp=0.jpg "  alt=""/>

</view>

  <view class="right">
    <view class="userName">
    <text class="name">哈哈哈哈</text>
      <text class="time">2020-04-06 08:29:09</text>
    </view>

    <view class="detail">
      <view class="detailText">
        <text>北京大学蒋绍愚教授主持修订 中学生、语文教师、大学中文系学生必备工具书 曾荣获首届中国辞书奖一等奖，迄今发行量超</text>
      </view>
    </view>

    <view class="opinion">
      <text class="num1">0</text>
      <text class="num2">1</text>
      <view class="lastImg">
        <img src="../../static/点赞.png" height="200" width="200" alt="" class="one"/>
        <img src="../../static/反对.png" height="200" width="200" alt=""  class="two"/>

      </view>
    </view>

  </view>
</view>


  </view>

  <view class="list">

    <view class="item">
      <view class="left">

        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F14%2F20150614155423_FZNxW.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620549645&t=c17995f54415f42ad567421f523a928a"  alt=""/>

      </view>

      <view class="right">
        <view class="userName">
          <view class="name">你才到碗啊啊啊</view>
          <view class="time">2020-04-06 08:29:09</view>
        </view>

        <view class="detail">
          <view class="detailText">
            <text>北京大学蒋绍愚教授主持修订 中学生、语文教师</text>
          </view>
        </view>

        <view class="opinion">
          <text class="num1">0</text>
          <text class="num2">10</text>
          <view class="lastImg">
            <img src="../../static/点赞.png" height="200" width="200" alt="" class="one"/>
            <img src="../../static/反对.png" height="200" width="200" alt=""  class="two"/>

          </view>
        </view>

      </view>
    </view>


  </view>

</view>
</template>

<script>
export default {
name: "comment"
}
</script>

<style scoped>
.big{
  border-bottom: 1px #cccccc solid;
  border-top: 1px #cccccc solid;
  height: 50px;
  border-radius: 3px;
}
.commentBlock{
  width: 110px;
  height: 40px;
  padding-top: 8px;
  padding-left: 40px;
  border-right: 1px #cccccc solid;
  border-bottom: 1px #cccccc solid;
  border-radius: 8px;
}

.comment{
  width: 100%;
}
.list{
  display: flex;
  width: 100%;

}
.item{
  width: 100%;
  height: 130px;
  border-right: 1px #cccccc solid;
  border-bottom: 1px #cccccc solid;
  border-left: 1px #cccccc solid;
  border-radius: 5px;
}
.left{
  width: 30%;
  height: 100%;

  float: left;
   display: flex;
  justify-content: center;
  align-items: center;
}
.left img{
  width: 70%;
  height: 60%;
  margin:0 auto;
  border-radius:50%;
}
.right{

  width: 70%;
display: inline-block;
  height: 100%;
}
.userName{
  width: 100%;
  margin-top: 10px;
  height: 25px;

  position: relative;
}
.time{
  display: inline-block;
  margin-left: 20px;

  width: 150px;
  position: absolute;
  top: 1px;
  right: 0;
  padding-left: 5px;
}
.name{
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  padding-left: 5px;
  font-size: 10px;
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;

}
.detail{
  width: 100%;
  height: 50px;
  overflow: hidden;
 text-overflow: ellipsis;
}
.opinion{
  width: 100%;
  height: 40px;
 margin-top: 5px;
  position: relative;
}
.num1,.num2{
  display: inline-block;
  float: right;
}
.num2{
  margin-right: 25px;
}
.num1{
  margin-right: 20px;
}
.two{
  width: 23px;
  height: 23px;
  position: absolute;
  right: 12px;
  top: 15px;
}
.one{
  width: 20px;
  height: 20px;
  position: absolute;
  right: 46px;
  top: 15px;
}




</style>