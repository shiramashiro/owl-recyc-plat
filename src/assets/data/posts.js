/**
 * 请添加10个帖子内容，每个帖子的内容都不一样。
 *
 * 数据呈现到 pages/society/society.vue
 */

const posts = [
    {
        user: {
            // 用户信息
            username: 'shiramashiro', // 用户名称
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 头像地址
        },
        comments: [
            // 评论
            {
                user: {
                    // 评论的用户信息
                    username: 'hello',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '这个好耶！！！', // 评论内容
                postDate: '2021-10-28 00:20:03', // 评论日期
                like: 10 // 点赞次数
            }
        ],
        postDate: '2021-10-28', // 帖子发送日期
        content: '这本书好耶！9成新哦，谁需要呢？这本书好耶！9成新哦，谁需要呢？', // 帖子内容
        covers: ['http://img3m5.ddimg.cn/6/32/29161545-1_l_14.jpg', 'http://img3m0.ddimg.cn/46/24/28477000-1_b_6.jpg'], // 封面，最多为3个，最少为1个
        like: 110 // 点赞次数
    },
    // 下面的信息都需要修改
    {
        user: {
            username: 'shiramashiro',
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
        },
        comments: [
            {
                user: {
                    username: 'hello',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '',
                postDate: '2021-10-28 00:20:03',
                like: 10
            },
            {
                user: {
                    username: 'hello',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '这个好耶！！！',
                postDate: '2021-10-28 00:20:03',
                like: 10
            },
            {
                user: {
                    username: 'hello',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '这个好耶！！！',
                postDate: '2021-10-28 00:20:03',
                like: 10
            }
        ],
        postDate: '2021-10-28',
        content: '佐野洋子套装，看不见的春天，插花艺术，8成新，一起感受自然与人情的魅力吧~',
        covers: ['http://img3m6.ddimg.cn/17/6/29271446-1_l_17.jpg', 'http://img3m5.ddimg.cn/95/19/23472005-1_l_2.jpg', 'http://img3m0.ddimg.cn/46/24/28477000-1_b_6.jpg'],
        like: 110
    }
]

export default posts
