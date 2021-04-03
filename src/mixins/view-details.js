export const viewDetails = {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        viewMore() {
            uni.navigateTo({
                url: '/pages/index/more-info?id=' + this.data.id
            })
        }
    }
}
