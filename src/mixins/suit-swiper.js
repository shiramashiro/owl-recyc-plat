export const suitSwiper = {
    data() {
        return {
            swiperHeight: 0,
            currentSwiper: 0,
            currentTuiTab: 0
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
        },
        slideTuiTab(data) {
            this.setSwiperItem(data.index)
            this.currentTuiTab = data.index
            this.currentSwiper = data.index
        },
        slideSwiper(data) {
            this.setSwiperItem(data.detail.current)
            this.currentTuiTab = data.detail.current
            this.currentSwiper = data.detail.current
        }
    }
}
