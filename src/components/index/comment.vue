<template>
    <view class="comment margin-tb-lg padding-bottom-xs">
        <view class="comment-wrap flex justify-between align-center">
            <!-- col-1是头像，第一列 -->
            <view class="col-1 margin-right-sm">
                <!-- 这里推荐使用uni-app原生组件image，其中mode可以避免头像拉伸破裂，头像我已经封装到了avatar.vue组件了，直接拿来用即可 -->
                <!-- avatar组件无需再导入，已经在main.js中声明了全局组件，size可以调整头像大小 -->
                <avatar
                    :src="data.user.avatar"
                    mode="aspectFill"
                    :size="80"
                ></avatar>
            </view>
            <!-- col-2是内容，第二列 -->
            <view class="col-2">
                <!-- 第一行是用户名、发表日期 -->
                <view
                    class="row-1 margin-bottom-xs flex justify-between align-center"
                >
                    <!-- 第一列是用户名-->
                    <view class="col-1 text-bold">
                        {{ data.user.username }}
                    </view>
                    <!-- 第二列是发表日期  -->
                    <view class="col-2 text-gray">
                        {{ data.postDate }}
                    </view>
                </view>
                <!-- 第二行是评论的内容 -->
                <view class="row-2 margin-bottom-xs">
                    <!-- 直接包裹在view标签内即可 -->
                    {{ data.postContent }}
                </view>
            </view>
        </view>
        <!-- 第三行是点赞和反对icon -->
        <view class="options flex justify-end">
            <view class="options-wrap flex">
                <view class="col-2 margin-right-lg el-icon-third-cai">
                    {{ data.disagree }}
                </view>
                <view class="col-1 el-icon-third-dianzan">
                    {{ data.agree }}
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'comment',
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.comment {
    border-bottom: 1px solid #cccc;
}
</style>
