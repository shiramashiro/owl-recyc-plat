<template>
    <view class="caskets flex justify-between padding-lr-sm">
        <view
            class="casket padding-lr-xs margin-tb-xs flex justify-between align-center"
            v-for="(item, index) in caskets"
            :key="index"
            @click="handleClick(index, caskets[index])"
        >
            <view class="col-1">
                <view
                    class="flex align-center row-1 text-black text-bold text-df"
                    :class="item.icon"
                >
                    {{ item.cnTitle }}
                </view>
                <view class="row-2 text-xs text-gray">{{ item.enTitle }}</view>
            </view>
            <view class="col-2">
                <image mode="aspectFit" class="image" :src="item.cover"></image>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'caskets',
    data() {
        return {
            caskets: [
                {
                    type: 'all',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/22894393-1_w_1.jpg',
                    icon: 'el-icon-third-guanjun',
                    cnTitle: '全部',
                    enTitle: 'General List'
                },
                {
                    type: 'living',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/29197803-1_w_3.jpg',
                    icon: 'el-icon-third-shiwu',
                    cnTitle: '生活',
                    enTitle: 'Living'
                },
                {
                    type: 'technology',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/27920509-1_w_26.jpg',
                    icon: 'el-icon-third-keji',
                    cnTitle: '科技',
                    enTitle: 'Technology'
                },
                {
                    type: 'social',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/25157989-1_u_5.jpg',
                    icon: 'el-icon-third-shehui',
                    cnTitle: '社会',
                    enTitle: 'Social Sciences'
                },
                {
                    type: 'business',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/27932536-1_u_3.jpg',
                    icon: 'el-icon-third-qiandai',
                    cnTitle: '经管',
                    enTitle: 'Business'
                },
                {
                    type: 'literature',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/1901258135_ii_cover.jpg',
                    icon: 'el-icon-third-wenxue',
                    cnTitle: '文学',
                    enTitle: 'Literature'
                },
                {
                    type: 'art',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/28470862-1_u_3.jpg',
                    icon: 'el-icon-third-yishu',
                    cnTitle: '艺术',
                    enTitle: 'Art'
                },
                {
                    type: 'education',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/21114192-1_u_3.jpg',
                    icon: 'el-icon-third-xueshimaoxuexibiye',
                    cnTitle: '辅教',
                    enTitle: 'Education'
                },
                {
                    type: 'children',
                    cover:
                        'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/23684605-1_w_1.jpg',
                    icon: 'el-icon-third-ertong',
                    cnTitle: '童书',
                    enTitle: "Children's Books"
                }
            ]
        }
    },
    methods: {
        // 点击事件函数，回传每一项的信息以及对应的索引值
        handleClick(index, item) {
            this.$emit('selected', {
                index: index,
                item: item
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.caskets {
    flex-flow: wrap;

    .casket {
        height: 120rpx;
        width: 31.5%;
        background-color: white;
        border-radius: 16rpx;
        border: 1rpx solid #cccc;

        .col-2 {
            .image {
                width: 80rpx;
                height: 105rpx;
            }
        }
    }
}
</style>
