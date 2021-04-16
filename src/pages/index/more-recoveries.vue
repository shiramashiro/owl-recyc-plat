<template>
    <view class="more-recoveries">
        <recoveries :maxSize="0"></recoveries>
    </view>
</template>

<script>
import Recoveries from '@/components/index/recoveries.vue'

export default {
    name: 'MoreRecoveries',
    components: { Recoveries }
}
</script>

<style lang="scss" scoped></style>
