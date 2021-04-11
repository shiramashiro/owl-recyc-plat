<template>
    <view class="secondhand">
        <!-- #ifdef H5 -->
        <view class="status_bar"> </view>
        <navbar style="box-shadow: 8rpx 8rpx 2rpx #f1f0f0;" :cfg="cfg">
            <view class="navi-content flex align-center">
                <view>
                    <i
                        @click="backIntoIndex()"
                        class="el-icon-third-fanhui"
                    ></i>
                </view>
                <view class="margin-left-lg text-lg">二手书籍</view>
            </view>
        </navbar>
        <!-- #endif -->
        <view class="margin-top-sm">
            <secondhand-book
                v-for="(item, index) in list"
                :key="index"
                :data="item"
            ></secondhand-book>
        </view>
    </view>
</template>

<script>
import secondhandBook from '@/components/community/secondhand-book.vue'

export default {
    components: { secondhandBook },
    name: 'secondhand',
    data() {
        return {
            cfg: {
                splitLine: false,
                isFixed: false,
                isOpacity: false,
                isCustom: true,
                tansparent: false,
                isImmersive: false
            },
            list: [
                {
                    title: '股票大作手回忆录（全译珍藏版）',
                    messageTitle: '简略信息',
                    message:
                        '埃德温·勒菲弗著的《股票大作手回忆录（全译珍藏版）》记录了美国股票目前传奇人物杰西·利弗莫尔',
                    imgs: [
                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8',

                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8',
                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8'
                    ],
                    time: '200人浏览  三天前'
                },
                {
                    title: '股票大作手回忆录（全译珍藏版）',
                    messageTitle: '简略信息',
                    message:
                        '埃德温·勒菲弗著的《股票大作手回忆录（全译珍藏版）》记录了美国股票目前传奇人物杰西·利弗莫尔',
                    imgs: [
                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8',

                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8',
                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8'
                    ],
                    time: '200人浏览  三天前'
                },
                {
                    title: '股票大作手回忆录（全译珍藏版）',
                    messageTitle: '简略信息',
                    message:
                        '埃德温·勒菲弗著的《股票大作手回忆录（全译珍藏版）》记录了美国股票目前传奇人物杰西·利弗莫尔',
                    imgs: [
                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8',

                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8',
                        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.17qq.com%2Fimg_qqtouxiang%2F88241590.jpeg&refer=http%3A%2F%2Fwww.17qq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620697269&t=7d3b5d66afa34fe06a64423dada81ff8'
                    ],
                    time: '200人浏览  三天前'
                }
            ]
        }
    },
    methods: {
        // #ifdef H5
        backIntoIndex() {
            uni.switchTab({
                url: '/pages/community/community'
            })
        }
        // #endif
    }
}
</script>

<style lang="scss" scoped>
.secondhand {
    // #ifdef H5
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    }
    // #endif

    .navi-content {
        height: 100%;
    }

    background-color: #e8e8e8;
    height: 100%;
}
</style>
