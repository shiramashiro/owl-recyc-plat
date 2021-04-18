<template>
    <view class="recovery-detail">
        <detail :detail="recovery"></detail>
        <view class="recovery-wrap margin-lr-sm">
            <view class="recovery-info">
                <view></view>
            </view>
            <subdomain :title="'评论区'" :isDisplay="true">
                <comment
                    @express="expressView"
                    :data="recovery.recoveryComment"
                ></comment>
            </subdomain>
        </view>
    </view>
</template>

<script>
import Subdomain from '@/components/index/subdomain.vue'
import Comment from '@/components/comment.vue'
import Detail from '@/pages/index/detail.vue'

export default {
    name: 'RecoveryDetail',
    components: { Comment, Detail, Subdomain },
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
            .then(res => {
                this.recovery = res.data
            })
    }
}
</script>

<style lang="scss" scoped></style>
