<template>


 <view>
   {{$store.state.userInfo.username}}
   <view class="table">
     <view class="item">
       <view class="left">时间</view>
       <view class="center">{{result.result}}</view>
       <view class="right" @click="show"><image src="../static/省略号.svg" alt=""/></view>
     </view>

     <view class="item">
       <view class="left">地区</view>
       <view class="center">{{addressValue}}</view>
       <view class="right" @click=" closeDrawer"><image src="../static/省略号.svg" alt=""/></view>
     </view>

     <view class="item">
       <view class="left">重量</view>
       <view class="center" >{{numberValue}}</view>
       <view class="right" @click=" closeBook">{{typeValue}}</view>
     </view>

   </view>


<!--   <tui-drawer :mode="mode" :visible="visibleTime" @close="closeTime">-->
<!--     <view class="d-container">-->
<!--       <tui-button height="80rpx" type="warning" shape="circle" @click="closeTime">关闭抽屉</tui-button>-->

<!--     </view>-->
<!--   </tui-drawer>-->

<!--   这个时间我没放到 抽屉里面   放进去他只会显示点点-->
   <tui-datetime :type="2"
                 :setDateTime="setDateTime"
                 ref="dateTime"
                 @confirm="confirm"
   >
   </tui-datetime>
<!------------------------------------------------------------------------>


   <tui-drawer :mode="mode" :visible="visible" @close="closeDrawer" ref="drawer">
     <view class="d-container">
       <tui-button height="80rpx" type="warning" shape="circle" @click="closeDrawer">关闭抽屉</tui-button>


       <tui-cascade-selection height="200px"
                              :itemList="itemList"
                              @complete="address"
                              @click="change"
                              :headerLine=true


       >

       </tui-cascade-selection>

     </view>
   </tui-drawer>
<!--   -------------------------------------------------------------------->


   <tui-drawer :mode="mode" :visible="visibleBook" @close="closeBook" ref="drawer" >
     <view class="d-container">
       <tui-button height="80rpx" type="warning" shape="circle" @click="closeBook">关闭抽屉</tui-button>


       <tui-cascade-selection height="200px"
                              :itemList="itemListBook"
                              @complete="number"
                              @click="change"
                              headerBgColor="black"
                              :headerLine=true
                              width="300px"


       >
       </tui-cascade-selection>

     </view>
   </tui-drawer>

 </view>
</template>

<script>
export default {
name: "owl-indent",
  data(){
  return{
    itemList:[{ //级联选择地区
      src: "", //图标地址
      text: "四川省",//主文本
      subText: "",//副文本
      value: 10, //value值

      children:[{
        text: "成都市",//主文本
        subText: "",//副文本
        value: 0,//value值
        children:[
          {
            text: "金牛区",//主文本
            subText: "",//副文本
            value: 0,//value值
          }
        ] //子级数据 如果数据长度为0则表示没有下一级数据了
      }] //子级数据
    }],

    itemListBook:[{//级联选择书本斤数
      src: "", //图标地址
      text: "本数量",//主文本
      subText: "1",//副文本
      value: 1, //value值
    }],

    //抽屉里的 那个级联数据
    visibleShow:true,
    mode:'bottom',
    visible:false,
    visibleTime:false,
    visibleBook:false,
    numberValue:'',
    addressValue:'',
  //  时间数据
    setDateTime:'2019-08-01',
    result:'',
  }
  },
  methods:{

    change(args){

    },
    closeDrawer(){
      if(this.$store.state.userInfo.username ==null){
        this.visible=false
      }else {
        this.visible=!this.visible
      }
    },

    show: function(e) {

      if(this.$store.state.userInfo.username !=null){
        this.$refs.dateTime.show();
      }
    },
    closeTime(){
      this.visibleTime=!this.visibleTime
    },
    closeBook(){
      // this.visibleBook=!this.visibleBook
      if(this.$store.state.userInfo.username ==null){
        // this.visibleBook=!this.visibleBook
        this.visibleBook=false
      }else {
        this.visibleBook=!this.visibleBook
      }
    },
    confirm(result){
      this.result=result
    },
    address(args){
      this.addressValue=args.text

    },
    number(args){
   this.numberValue=args.value
    }


  },
  props:{
  typeValue:{
    type:String,
    default:'本'
  }
  },


}
</script>

<style scoped>
.table{
  width: 100%;
  height: 250rpx;

}
.item{
  width: 100%;
  height: 33%;
  display: flex;
  border-bottom: 1px #cccccc solid;
}
.left,.right{
  display: flex;
  align-items: center;
  justify-content: center;
}
.item .left{
  width: 20%;
  height: 100%;

}
.item .center{
  width: 60%;
  height: 100%;
 display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20rpx;
}
.item .right{
  width: 20%;
  height: 100%;

}
.item .right image{
  width: 40%;
  height: 100%;

}
</style>