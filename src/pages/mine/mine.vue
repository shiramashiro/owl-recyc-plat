<template>
    <view class="mine">
        <view class="header">
            <view class="notlogin padding-lr-sm flex align-center" v-if="!$store.state.isSignin">
                <owl-avatar
                    :mode="'aspectFill'"
                    :size="'90'"
                    :src="
                        'data:image/jpeg;base64,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'
                    "
                >
                </owl-avatar>
                <view class="text-lg text-black margin-left-lg">
                    <view class="text-white margin-bottom-sm">点击登录</view>
                    <view class="text-white text-sm">
                        登陆解锁更多精彩内容
                    </view>
                </view>
            </view>
            <view class="haslogin padding-lr-sm flex align-center" v-else>
                <!-- <owl-avatar :mode="'aspectFill'" :size="'90'" :src="$store.state.userInfo.avatar"></owl-avatar> -->
                <owl-avatar :mode="'aspectFill'" :size="'90'" :src="'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'"></owl-avatar>
                <view class="user-info margin-left-lg">
                    <view class="text-white username text-lg">shiramashiro</view>
                    <view class="text-white signature text-gray margin-top-sm">Time tick away, dream faded away!</view>
                </view>
            </view>
        </view>

        <view class="content margin-lr-xs">
            <view v-if="$store.state.isSignin" class="haslogin-service">
                <!-- 完成的交易 -->
                <owl-fiche :title="'完成的交易'" :sub-title="'与卖家达成的交易历史'"  :icon-path="require('../../assets/icon/完成交易.png')"> </owl-fiche>

                <!-- 购买的书籍 -->
                <owl-fiche :title="'完成的书籍'" :sub-title="'在官方渠道购买的书籍'"  :icon-path="require('../../assets/icon/完成书籍.png')"> </owl-fiche>

                <!-- 发表的帖子 -->
                <owl-fiche :title="'完成的帖子'" :sub-title="'在社区发表的帖子'" :icon-path="require('../../assets/icon/完成帖子.png')"> </owl-fiche>
            </view>

            <!-- 关于 -->
            <owl-fiche :title="'关于'" :sub-title="'关于软件相关的选项'">
                <tui-list-view color="#777">
                    <tui-list-cell v-for="(cell, index) in listCells" :key="index" :hover="true" :arrow="true">
                        <view class="flex text-sm align-center" @click="cell.action">
                            <view class="icon margin-right-xs">
                                <image mode="aspectFit" style="width: 30rpx; height: 30rpx" :src="cell.icon"></image>
                            </view>
                            <view class="name">{{ cell.name }}</view>
                        </view>
                    </tui-list-cell>
                </tui-list-view>
            </owl-fiche>
        </view>
    </view>
</template>

<script>
export default {
    name: 'mine',
    data() {
        return {
            listCells: [
                {
                    icon:
                        'data:image/jpeg;base64,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',
                    name: '联系客服',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/homepage'
                        })
                    }
                },
                {
                    icon: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.zw6qVczn0LAOm86S-1nvWQAAAA?w=177&h=180&c=7&r=0&o=5&pid=1.7',
                    name: '检查更新',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/homepage'
                        })
                    }
                },
                {
                    icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.lkWnRGRI0V79iJcny5QnzAHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7',
                    name: '建议与反馈',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/homepage'
                        })
                    }
                },
                {
                    icon: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.8baV-6kGdzF8P7Wqlf5YVgHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.77；',
                    name: '关于猫头鹰',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/homepage'
                        })
                    }
                }
            ],
            userCells: [
                {
                    icon: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/icon/recovery.png',
                    name: '发表的帖子',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/order?tradeType=tentative&tradeContentType=recovery'
                        })
                    }
                },
                {
                    icon: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/icon/history.png',
                    name: '发表的交易',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/order?tradeType=decide&tradeContentType=recovery'
                        })
                    }
                },
                {
                    icon: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/icon/cart.png',
                    name: '暂定购书',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/order?tradeType=tentative&tradeContentType=book'
                        })
                    }
                },
                {
                    icon: 'https://interweave.oss-cn-chengdu.aliyuncs.com/static/img/icon/book.png',
                    name: '书籍订单',
                    action: function() {
                        uni.navigateTo({
                            url: '/pages/mine/order?tradeType=decide&tradeContentType=book'
                        })
                    }
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.mine {
    .header {
        .notlogin,
        .haslogin {
            padding-top: 40rpx;
            padding-bottom: 40rpx;
            background-size: 100% 100%;
        }

        .notlogin {
            background-image: url('https://tse1-mm.cn.bing.net/th/id/OIP-C.BCxSgBx-4GSdJzd--TbOyQHaEA?w=299&h=180&c=7&r=0&o=5&pid=1.7');
        }

        .haslogin {
            background-image: url('https://tse1-mm.cn.bing.net/th/id/R-C.066f6e476e7500752d2d4079cf552248?rik=kG2nn2uYJS9gwg&riu=http%3a%2f%2fimage.qianye88.com%2fpic%2f58bdafff649da2748deba9c33523b541&ehk=AJHje9nuje4uo6h0bEvmylFnfYAmWeUphxGWLDtTZN4%3d&risl=&pid=ImgRaw&r=0');
        }
    }
}
</style>
