export const viewDetails = {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        viewDetails() {
            uni.navigateTo({
                url: '/pages/index/sub-index?id=' + this.data.id
            })
        }
    }
}
