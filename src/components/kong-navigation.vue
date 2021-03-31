<template>
    <tui-navigation-bar
        :splitLine="navConfigs.splitLine"
        @init="initNavigation"
        :isFixed="navConfigs.isFixed"
        :isOpacity="navConfigs.isOpacity"
        :isCustom="navConfigs.isCustom"
        :transparent="navConfigs.transparent"
        :isImmersive="navConfigs.isImmersive"
        backgroundColor="black"
        color="#87cefa"
    >
        <view class="tui-content-box">
            <slot></slot>
        </view>
    </tui-navigation-bar>
</template>

<script>
export default {
    name: 'kongNavigation',
    props: {
        navConfigs: {
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
.tui-content-box {
    width: 100%;
    height: 100%;
}
</style>
