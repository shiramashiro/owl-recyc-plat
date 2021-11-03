<template>
    <view class="detail padding-xs">
        <view class="post-wrap card padding-sm">
            <view class="userinfo flex align-center justify-between">
                <view class="user flex align-center">
                    <owl-avatar src="https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto" size="45"></owl-avatar>
                    <view class="username margin-lr-sm text-lg">shiramashiro</view>
                    <tui-tag class="user-level" plain size="10rpx">Lv: 6</tui-tag>
                </view>
                <view class="follow">
                    <tui-button plain :size="10" height="40rpx" width="100rpx">关注+</tui-button>
                </view>
            </view>

            <view class="post-header margin-top-sm">
                <view class="abstract flex align-center text-cut">
                    <tui-tag class="post-tag" size="10rpx">热门帖</tui-tag>
                    <view class="title margin-left-xs text-lg text-bold">中国科幻前卫巨作《三体》</view>
                </view>
                <view class="dynamic margin-top-sm text-gray text-center">
                    发表时间：10-25 | 最后编辑：10-25
                </view>
            </view>

            <view class="content text-lg margin-top-sm">
                <image src="https://pic4.zhimg.com/v2-d3ba1081b7e1f94e5af1630827ef156f_qhd.jpg" />
                <view class="text-snippet">
                    《三体》是刘慈欣创作的系列长篇科幻小说，由《三体》、《三体2：黑暗森林》、《三体3：死神永生》组成，第一部于2006年5月起在《科幻世界》杂志上连载，第二部于2008年5月首次出版，第三部则于2010年11月出版。
                    作品讲述了地球人类文明和三体文明最佳长篇的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。其第一部经过刘宇昆翻译后获得了第73届雨果奖小说奖。
                </view>
                <image src="https://pic4.zhimg.com/v2-d3ba1081b7e1f94e5af1630827ef156f_qhd.jpg" />
                <view class="text-snippet">
                    20世纪90年代，随着中国政府加强“科技兴国”宣传、科技事业不断发展，出现了诸多有利科幻创作的条件 ；同时以科技工作者为主的创作队伍逐渐更新 ，一些从科幻迷中分离出的精英化读者也成长为作家
                    。 刘慈欣1999年起在杂志《科幻世界》上发表作品 ，此后接连创作了多个中短篇小说；在2006年1月发表短篇小说《山》时，许多读者去信说希望他写成长篇，于是刘慈欣就决定不再写中短篇了
                    “有三颗无规则运行恒星的恒星系”这个构思他最初打算用来写短篇，后来发现能写成一部长篇小说，于是把这和吴岩在《中国轨道》里描写人们不顾一切地探索太空的历史相结合，设定以“文革”时期为整个故事的背景，描述一些人物与外星力量间的接触、以及华约和北约的冷战；在一位出版人的影响下，他对原来的构思做了较大的变化，改为一个长篇的三部曲系列，叙述从20世纪60年代到五百年后人类的一段特殊历程。
                    刘慈欣是在正职工程师的业余进行写作，工作不忙的时候一天写三千到五千字，每部花了约一年的时间完成
                    ；第一部《三体》最初在2006年5月到12月的《科幻世界》杂志上连载，取得反响较好，于是出了单行本
                    （连载删改了少量内容、在单行本中章节顺序有一定的调整）；第二部《黑暗森林》的标题名称取自20世纪80年代的一句流行语：“城市就是森林，每一个男人都是猎手，每一个女人都是陷阱"
                    刘慈欣原本计划用四五个月完成，因单位工作时间不稳定写了九个月 。第三部《死神永生》出版后，该系列由“地球往事三部曲”更名为“三体三部曲”。
                </view>
            </view>
        </view>

        <view class="comments card padding-lr-sm margin-top-sm">
            <view class="item padding-tb-sm flex">
                <view class="left">
                    <owl-avatar src="https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto" size="35"></owl-avatar>
                </view>
                <view class="right margin-left-sm">
                    <view class="header flex justify-between align-center">
                        <view class="userinfo">
                            <view class="username">shiramashiro</view>
                            <view class="floor">1F</view>
                        </view>
                        <view class="more">...</view>
                    </view>
                    <view class="content margin-top-sm text-bold text-lg">
                        胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃
                    </view>
                    <view class="footer flex align-center justify-between margin-top-sm text-gray">
                        <view class="posteddate">20小时前</view>
                        <view class="actions flex align-center justify-between">
                            <view class="replay">回复</view>
                            <view class="like margin-left-sm">100</view>
                            <view class="dislike margin-left-sm">0</view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="item padding-tb-sm flex">
                <view class="left">
                    <owl-avatar src="https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto" size="35"></owl-avatar>
                </view>
                <view class="right margin-left-sm">
                    <view class="header flex justify-between align-center">
                        <view class="userinfo">
                            <view class="username">shiramashiro</view>
                            <view class="floor">1F</view>
                        </view>
                        <view class="more">...</view>
                    </view>
                    <view class="content margin-top-sm text-bold text-lg">
                        胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃胡桃
                    </view>
                    <view class="footer flex align-center justify-between margin-top-sm text-gray">
                        <view class="posteddate">20小时前</view>
                        <view class="actions flex align-center justify-between">
                            <view class="replay">回复</view>
                            <view class="like margin-left-sm">100</view>
                            <view class="dislike margin-left-sm">0</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'detail'
}
</script>

<style lang="scss" scoped>
.detail {
    .comments {
        .item {
            border-bottom: 1rpx solid #cccc;
        }

        .item:last-child {
            border-bottom: 0 !important;
        }
    }
}
</style>
