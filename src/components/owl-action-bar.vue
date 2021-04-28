<template>
    <!-- 组件已全局注册，无需在 main.js 中 import -->
    <view class="owl-action-bar">
        <!-- 注意：**！flex布局和margin、padding都使用colorui的类名，减少css代码，并且个人写没有colorui做的精致。**！ -->
        <!-- 客服这做一个提示，用tui-tips组件，如果用户点击就显示“该功能正在完善中”。这个功能不打算做，只做静态，工作放在重点上。 -->
        <!-- “立即购买”改成“通知回收”，这个按钮圆角也跟着京东的来就行，颜色当然是主题色#87cefa，不是镂空的按钮 -->
        <!-- “加入购物车”改成“暂定回收”，意思跟加入购物车类似，但是主题表达意思不一样，是暂时做了一个回收决定，没有立即通知回收点回收。 -->
    </view>
</template>

<script>
export default {
    name: 'owl-action-bar'
}
</script>

<style lang="css" scoped></style>
