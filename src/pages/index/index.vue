<template>
    <view class="index">
        <view class="rows">
            <suitable-swiper :configs="configs" :swiperTabs="swiperTabs">
                <swiper-item
                    v-for="(swiperTab, index) in swiperTabs"
                    :key="index"
                >
                    <view :id="'swiper-item-' + index">
                        <component
                            :bookshelf="swiperTab"
                            :is="swiperTab.componentName"
                        ></component>
                    </view>
                </swiper-item>
            </suitable-swiper>
        </view>
    </view>
</template>

<script>
import suitableSwiper from '@/components/suitable-swiper.vue'
import bookshelf from '@/components/index/bookshelf.vue'
import homeTab from '@/components/index/home-tab.vue'

export default {
    components: {
        suitableSwiper,
        bookshelf,
        homeTab
    },
    data() {
        return {
            configs: {
                selectedColor: '#87cefa',
                sliderBgColor: '#87cefa',
                itemWidth: '100%',
                isWhiteSpace: true,
                tabType: 'tuiTab'
            },
            swiperTabs: [
                {
                    name: '全部',
                    componentName: 'homeTab'
                },
                {
                    name: '计算机/网络',
                    componentName: 'bookshelf'
                },
                {
                    name: '教育',
                    componentName: 'bookshelf'
                }
            ]
        }
    }
}
</script>

<style lang="scss"></style>
