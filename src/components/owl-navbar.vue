<template>
    <tui-navigation-bar
        :splitLine="config.splitLine"
        @init="initNavigation"
        :isFixed="config.isFixed"
        :isOpacity="config.isOpacity"
        :isCustom="config.isCustom"
        :transparent="config.transparent"
        :isImmersive="config.isImmersive"
        :isCustomImmerse="config.isCustomImmerse"
        backgroundColor="black"
        color="#87cefa"
    >
        <view class="navbar-content-box">
            <slot></slot>
        </view>
    </tui-navigation-bar>
</template>

<script>

export default {
    name: 'navbar',
    props: {
        config: {
            type: Object,
            required: true
        }
    },
    methods: {
        initNavigation(rollback) {}
    }
}
</script>

<style lang="scss" scoped>
.navbar-content-box {
    width: 100%;
    height: 100%;
}
</style>
