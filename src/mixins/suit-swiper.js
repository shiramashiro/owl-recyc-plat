export const suitSwiper = {
    data() {
        return {
            swiperHeight: 0
        }
    },
    mounted() {
        setTimeout(() => {
            this.setSwiperItem(0)
        }, 0)
    },
    methods: {
        setSwiperItem(index) {
            uni.createSelectorQuery()
                .in(this)
                .select('#swiper-item-' + index)
                .boundingClientRect(data => {
                    this.swiperHeight = data.height + 25
                })
                .exec()
        }
    }
}
