<template>
    <view class="index">
        <view class="row-1">
            <suitable-swiper :configs="configs" :swiperTabs="swiperTabs">
                <swiper-item
                    v-for="(swiperTab, index) in swiperTabs"
                    :key="index"
                >
                    <view :id="'swiper-item-' + index">
                        <view v-for="item in 100" :key="item">{{ item }}</view>
                    </view>
                </swiper-item>
            </suitable-swiper>
        </view>
    </view>
</template>

<script>
import suitableSwiper from '@/components/suitable-swiper.vue'

export default {
    components: { suitableSwiper },
    data() {
        return {
            configs: {
                selectedColor: '#87cefa',
                sliderBgColor: '#87cefa',
                itemWidth: '100%',
                isWhiteSpace: true
            },
            swiperTabs: [
                {
                    name: '首页',
                    componentName: '',
                    items: []
                },
                {
                    name: '电子书',
                    componentName: '',
                    items: []
                },
                {
                    name: '网络文学',
                    componentName: '',
                    items: []
                },
                {
                    name: '服装',
                    componentName: '',
                    items: []
                },
                {
                    name: '运动户外',
                    componentName: '',
                    items: []
                },
                {
                    name: '孕婴童',
                    componentName: '',
                    items: []
                },
                {
                    name: '家居',
                    componentName: '',
                    items: []
                },
                {
                    name: '食品',
                    componentName: '',
                    items: []
                },
                {
                    name: '食品',
                    componentName: '',
                    items: []
                },
                {
                    name: '食品',
                    componentName: '',
                    items: []
                },
                {
                    name: '食品',
                    componentName: '',
                    items: []
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.index {
}
</style>
