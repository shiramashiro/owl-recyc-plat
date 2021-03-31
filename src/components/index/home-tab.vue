<template>
    <view class="home-tab">
        <view class="row-1 margin-bottom-sm">
            <swiper autoplay>
                <swiper-item v-for="(item, index) in slideShow" :key="index">
                    <image
                        class="slide-show"
                        mode="aspectFit"
                        :src="item"
                    ></image>
                </swiper-item>
            </swiper>
        </view>
        <bookshelf :bookshelf="bookshelf"></bookshelf>
    </view>
</template>

<script>
import bookshelf from '@/components/index/bookshelf.vue'

export default {
    name: 'homeTab',
    props: {
        bookshelf: {
            type: Object,
            required: true
        }
    },
    components: {
        bookshelf
    },
    data() {
        return {
            slideShow: [
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032611362390127.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/20210326193508509.jpg',
                'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/2021032619353510220.jpg'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.home-tab {
    .row-1 {
        .slide-show {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
