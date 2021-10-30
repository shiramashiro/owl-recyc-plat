<template>
    <view class="detail">
        <!-- 这是帖子详情页，点进去之后的页面，浏览器访问：localhost:8080/#/pages/society/detail -->
        <!-- 用户信息/关注 -->
        <view class="top-message">
            <view class="user flex align-center justify-between">
                <view class="user-message flex align-center">
                    <view>
                        <owl-avatar src="https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto" size="55"></owl-avatar>
                    </view>
                    <view class="name">shiramashiro</view>
                    <view class="grade">
                        <view class="grade-text">48</view>
                    </view>
                </view>
                <view>
                    <view class="follow">+关注</view>
                </view>
            </view>
        </view>
        <!-- 标签/标题/发表信息 -->
        <view class="label-message">
            <view class="edit-time">
                <view class="flex">
                    <view class="label align-center">热门帖</view>
                    <view class="title">中国科幻前卫巨作《三体》</view>
                </view>
            </view>
            <view class="edit">—— 发表时间：10-25 | 最后编辑：10-25——</view>
        </view>
        <!-- 可以仿造米游社的帖子详情页写 UI -->
        <view class="introduce">
            <view class="in-img">
                <image src="https://pic4.zhimg.com/v2-d3ba1081b7e1f94e5af1630827ef156f_qhd.jpg" />
            </view>
            <view class="in-text">
                《三体》是刘慈欣创作的系列长篇科幻小说，由《三体》、《三体2：黑暗森林》、《三体3：死神永生》组成，第一部于2006年5月起在《科幻世界》杂志上连载，第二部于2008年5月首次出版，第三部则于2010年11月出版。
                作品讲述了地球人类文明和三体文明最佳长篇的信息交流、生死搏杀及两个文明在宇宙中的兴衰历程。其第一部经过刘宇昆翻译后获得了第73届雨果奖小说奖。
                <br />
                20世纪90年代，随着中国政府加强“科技兴国”宣传、科技事业不断发展，出现了诸多有利科幻创作的条件 ；同时以科技工作者为主的创作队伍逐渐更新 ，一些从科幻迷中分离出的精英化读者也成长为作家 。
                刘慈欣1999年起在杂志《科幻世界》上发表作品 ，此后接连创作了多个中短篇小说；在2006年1月发表短篇小说《山》时，许多读者去信说希望他写成长篇，于是刘慈欣就决定不再写中短篇了
                “有三颗无规则运行恒星的恒星系”这个构思他最初打算用来写短篇，后来发现能写成一部长篇小说，于是把这和吴岩在《中国轨道》里描写人们不顾一切地探索太空的历史相结合，设定以“文革”时期为整个故事的背景，描述一些人物与外星力量间的接触、以及华约和北约的冷战；在一位出版人的影响下，他对原来的构思做了较大的变化，改为一个长篇的三部曲系列，叙述从20世纪60年代到五百年后人类的一段特殊历程。
                刘慈欣是在正职工程师的业余进行写作，工作不忙的时候一天写三千到五千字，每部花了约一年的时间完成
                ；第一部《三体》最初在2006年5月到12月的《科幻世界》杂志上连载，取得反响较好，于是出了单行本
                （连载删改了少量内容、在单行本中章节顺序有一定的调整）；第二部《黑暗森林》的标题名称取自20世纪80年代的一句流行语：“城市就是森林，每一个男人都是猎手，每一个女人都是陷阱"
                刘慈欣原本计划用四五个月完成，因单位工作时间不稳定写了九个月 。第三部《死神永生》出版后，该系列由“地球往事三部曲”更名为“三体三部曲”。
            </view>
        </view>
        <view>
            <view class="comment-area">
                <!-- com-on -->
                <view class="com-on">
                    <view class="zone flex  justify-between">
                        <view>全部评论</view>
                        <view>只看楼主</view>
                        <view class=" flex  justify-between">
                            <view>热门|</view>
                            <view>最早|</view>
                            <view>最新</view>
                        </view>
                    </view>
                </view>
                <!--  com-dow-->
                <view class="com-down">
                    <view class="flex align-center">
                        <view>
                            <owl-avatar src="https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto" size="55"></owl-avatar>
                        </view>
                        <view
                            style="font-size: 15px;
                                      color: black;
                                      margin: 15rpx;">shiramashiro</view>
                        <view
                            style=" color: white;
                                        width: 30rpx;
                                        height: 30rpx;
                                        border-radius: 100%;
                                        background-color: blue;">
                            <view
                                style=" display: flex;
                                            color: white;
                                            font-weight: bold;
                                            justify-content: center;">48
                            </view>
                        <view style="color:black;position:absolute;left:130rpx;">8F</view>
                        </view>
                    </view>
                        <view class="char">
                            <view class="char-message">
                            好欸！这个好看。
                            </view>
                            <view class="flex  justify-between">
                                <view>10-28</view>
                                <view style="background-color:red; border-radius:15rpx;color:white;border:1rpx gold soild">神评论</view>
                            </view>
                                <view>回复 | 赞 | 踩</view>
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
// scss 写样式遵循和 template 中节点及子节点的层次结构。

.detail {
    // 这里写 detail 下的子节点
    .top-message {
        margin: 32rpx;
        .user {
            image {
                width: 120rpx;
                height: 120rpx;
                border-radius: 100%;
            }
            .user-message {
                .name {
                    font-size: 15px;
                    color: gray;
                    margin: 10rpx;
                }
                .grade {
                    color: white;
                    width: 30rpx;
                    height: 30rpx;
                    border-radius: 100%;
                    background-color: blue;
                    .grade-text {
                        display: flex;
                        color: white;
                        font-weight: bold;
                        justify-content: center;
                    }
                }
            }
            .follow {
                color: #87cefa;
                font-size: 10px;
                border-radius: 6rpx;
                border: 1rpx #87cefa solid;
            }
        }
    }
    .label-message {
        margin-left: 50rpx;
        .label {
            width: 90rpx;
            height: 45rpx;
            color: white;
            font-weight: 100;
            background-color: #44ccff;
        }
        .title {
            margin-left: 20rpx;
            font-size: 30rpx;
            font-weight: bold;
        }
        .edit {
            font-size: 15rpx;
            margin: 30rpx;
        }
    }
    .in-img {
        margin: 30rpx;
    }
    .in-text {
        font-size: 30rpx;
        letter-spacing: 3px;
        margin: 20rpx;
        text-transform: uppercase;
    }
    .comment-area {
        border: 1rpx black solid;
        background-color: rgb(231, 226, 226);
        .zone{
            background-color: rgb(220, 206, 206);
        }
        .char{
            background-color: white;
            margin-top: 0;
            .char-message{
                 margin:50rpx;
                 background-color: white;
            }
        }
    }
}
</style>
