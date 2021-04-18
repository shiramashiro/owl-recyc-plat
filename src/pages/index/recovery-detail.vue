<template>
    <view class="recovery-detail">

        <detail :detail="list"></detail>

        <view class="recovery-wrap margin-lr-sm">
            <view class="recovery-info">
                <view></view>
            </view>


            <subdomain :title="title"
                       :isDisplay=true
            >
              <comment @express="expressView" :data="list.recoveryComment" ></comment>
            </subdomain>


       </view>
    </view>
</template>

<script>
import subdomain from "@/components/index/subdomain";
import Comment from '@/components/comment.vue'
import comments from '@/static/json/comments.json'
import detail from "@/pages/index/detail";

export default {
    name: 'RecoveryDetail',
    components: { Comment,detail ,subdomain},
    data() {
        return {
              title:"评论区",
            comments: comments,
             list:{},
            listArray:[],
            id: 0
        }
    },
    methods: {
        expressView(info) {
            console.log(info)
        },

    },
   onLoad(option) {
        this.id = option.id

     this.$axios.get('/get/detail/recovery',{
       params:{
         id:option.id
       }
     }).then(res=>{
       console.log(res.data.recoveryComment);
       this.list=res.data
       this.listArray=res.data.recoveryComment
     })
    },

}
</script>

<style lang="scss" scoped></style>
