<template>
    <view class="recovery-detail">
        <view class="recovery-wrap margin-lr-sm">
            <view class="recovery-info">
                <view></view>
            </view>
            <comment
                @express="expressView"
                :data="recovery.recoveryComment"
            ></comment>
        </view>
    </view>
</template>

<script>
import Comment from '@/components/comment.vue'

export default {
    name: 'RecoveryDetail',
    components: { Comment },
    data() {
        return {
            recovery: {}
        }
    },
    methods: {
        expressView(info) {
            console.log(info)
        }
    },
    onLoad(option) {
        this.$axios
            .get('/get/detail/recovery', {
                params: {
                    id: option.id
                }
            })
            .then(resp => {
                console.log(resp)
                this.recovery = resp.data
            })
            .catch(error => {
                console.log(error)
            })
    }
}
</script>

<style lang="scss" scoped></style>
