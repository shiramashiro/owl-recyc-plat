<template>
    <view class="order">
        {{ datas }}
    </view>
</template>

<script>
export default {
    name: 'order',
    data() {
        return {
            datas: []
        }
    },
    onLoad(options) {
        options['userId'] = this.$store.state.userInfo.id
        this.$axios
            .post('/get/order', options)
            .then(resp => {
                this.datas = resp.data
            })
            .catch(error => {})
    }
}
</script>

<style scoped></style>
