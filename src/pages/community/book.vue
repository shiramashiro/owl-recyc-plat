<template>

<view>
  <view class="box" v-for="item in list">
    <view class="none"></view>

    <view class="title">{{item.title}}</view>

    <view class="messageTitle">{{item.messageTitle}}</view>
    <view class="message">{{item.message}}</view>

    <view class="imgList">
      <view class="item">
        <img :src="item.urlOne" alt="">
      </view>

      <view class="item">
        <img :src="item.urlTwo" alt="">
      </view>

      <view class="item">
        <img :src="item.urlThree" alt="">
      </view>

    </view>

    <view class="time">{{item.time}}</view>

  </view>
</view>

</template>

<script>
export default {
  name: "book",
  data(){
    return{

      list:[
        {
          title:"股票大作手回忆录（全译珍藏版）",
          messageTitle:"简略信息",
          message:"埃德温·勒菲弗著的《股票大作手回忆录（全译珍藏版）》记录了美国股票目前传奇人物杰西·利弗莫尔",
          urlOne:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8",
          urlTwo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8",
          urlThree:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8",
          time:"200人浏览  三天前"
        },
        {
          title:"股票大作手回忆录（全译珍藏版）",
          messageTitle:"简略信息",
          message:"埃德温·勒菲弗著的《股票大作手回忆录（全译珍藏版）》记录了美国股票目前传奇人物杰西·利弗莫尔",
          urlOne:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8",
          urlTwo:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8",
          urlThree:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8",
          time:"200人浏览  三天前"
        },

      ]

    }
  }
}
</script>

<style scoped>
.box{
  width: 95%;
  height: 245px;
  background-color: #ffffff;
  margin: 10px auto;
  border-radius: 8px;
  position: relative;
  box-shadow: 5px 5px 5px #e3e1e1;
  border: 1px #cccccc solid;
  border-bottom: none;
}
.none{
  width: 100%;
  height: 1px;
}
.title{
  width: 100%;
  height: 30px;
  background: #f6f3f3;
margin-top: 25px;
  position: relative;
  padding-top: 5px;
  padding-left: 10px;
  font-weight: 600;
  border-radius: 4px;
}
.messageTitle{
  border-radius: 4px;
  width: 100%;
  height: 30px;
  padding-top: 5px;
  padding-left: 10px;
  margin-top: 15px;
  background: #f6f3f3;

}
.message{
  padding-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 30px;
  padding-left: 10px;
  opacity: 0.8;
}
.imgList{
  width: 95%;
  height: 70px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item{
  height: 100%;
  width: 27%;
  background-color: black;
}
.time{
  position: absolute;
  bottom: 14px;
  right: 10px;
  opacity: 0.5;
}
.item img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>