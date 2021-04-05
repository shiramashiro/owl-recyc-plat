<template>
    <tui-navigation-bar
        :splitLine="cfg.splitLine"
        @init="initNavigation"
        :isFixed="cfg.isFixed"
        :isOpacity="cfg.isOpacity"
        :isCustom="cfg.isCustom"
        :transparent="cfg.transparent"
        :isImmersive="cfg.isImmersive"
        :isCustomImmerse="cfg.isCustomImmerse"
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
    name: 'Navbar',
    props: {
        cfg: {
            type: Object,
            required: true
        }
    },
    methods: {
        initNavigation(rollback) {
            console.log(rollback)
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-content-box {
    width: 100%;
    height: 100%;
}
</style>
