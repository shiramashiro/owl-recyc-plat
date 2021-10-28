const posts = [
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
                content: '这个好耶！！！',
                postDate: '2021-10-28 00:20:03',
                like: 10
            }
        ],
        postDate: '2021-10-28',
        content: '鲁迅全集！9成新哦，谁需要呢？一起体验文学的魅力，热爱生活吧！',
        covers: ['http://img3m5.ddimg.cn/6/32/29161545-1_l_14.jpg', 'http://img3m0.ddimg.cn/46/24/28477000-1_b_6.jpg'], // 封面，最多为3个，最少为1个
        like: 886
    },
    // 第二条
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
                content: '值得一读',
                postDate: '2021-10-28 00:20:03',
                like: 999 + '+'
            },
            {
                user: {
                    username: 'hello',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '还不错',
                postDate: '2021-10-28 00:20:03',
                like: 10
            },
            {
                user: {
                    username: 'hello',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '买了',
                postDate: '2021-10-28 00:20:03',
                like: 10
            }
        ],
        postDate: '2021-10-28',
        content: '佐野洋子套装，看不见的春天，插花艺术，8成新，一起感受自然与人情的魅力吧~',
        covers: ['http://img3m6.ddimg.cn/17/6/29271446-1_l_17.jpg', 'http://img3m5.ddimg.cn/95/19/23472005-1_l_2.jpg', 'http://img3m0.ddimg.cn/46/24/28477000-1_b_6.jpg'],
        like: 110
    },
    //第三条
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
                content: '一起学Python！',
                postDate: '2021-10-28 00:20:03',
                like: 999 + '+'
            }
        ],
        postDate: '2021-10-28',
        content: '学Python，做人工智能。全自动办公！从此再也不加班💘',
        covers: ['http://img3m8.ddimg.cn/57/12/29261388-1_b_6.jpg'],
        like: 999 + '+'
    },
    //第四条
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
                like: 50
            },
            {
                user: {
                    username: 'hello',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '还有货吗？',
                postDate: '2021-10-28 00:20:03',
                like: 4
            },
            {
                user: {
                    username: 'hello',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '订了',
                postDate: '2021-10-28 00:20:03',
                like: 15
            }
        ],
        postDate: '2021-10-28',
        content: '如何创业？怎么保持创业热情？了解真正的自己。',
        covers: ['http://img3m4.ddimg.cn/62/20/27943604-1_l_6.jpg', 'http://img3m3.ddimg.cn/73/25/26916193-1_l_13.jpg', 'http://img3m6.ddimg.cn/93/9/27949476-1_l_6.jpg'],
        like: 500
    },
    //第五条
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
        content: '课外读物系列，骆驼祥子/朝花夕拾', // 帖子内容
        covers: ['http://img3m4.ddimg.cn/39/14/25267314-1_l_5.jpg', 'http://img3m3.ddimg.cn/77/27/25267253-1_l_5.jpg'], // 封面，最多为3个，最少为1个
        like: 886 // 点赞次数
    },
    //第六条
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
                    username: 'EmiRiA',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '很喜欢这个系列', // 评论内容
                postDate: '2021-10-28 00:20:03', // 评论日期
                like: 999 + '+' // 点赞次数
            }
        ],
        postDate: '2021-10-28', // 帖子发送日期
        content: '刘慈欣代表作，科幻小说《三体》系列', // 帖子内容
        covers: ['http://img3m7.ddimg.cn/14/15/1901104637-1_l_4.jpg'], // 封面，最多为3个，最少为1个
        like: 999 + '+' // 点赞次数
    },
    //第七条
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
        content: '学英语，逐字逐句读懂《哈利波特》原著', // 帖子内容
        covers: ['http://img3m6.ddimg.cn/66/5/29209026-1_l_11.jpg', 'http://img3m1.ddimg.cn/87/3/410282421-1_l_3.jpg'], // 封面，最多为3个，最少为1个
        like: 886 // 点赞次数
    },
    //第八条
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
                content: '很温馨的故事', // 评论内容
                postDate: '2021-10-28 00:20:03', // 评论日期
                like: 500 // 点赞次数
            }
        ],
        postDate: '2021-10-28', // 帖子发送日期
        content: '让孩子学会爱，学会关心，将心比心。', // 帖子内容
        covers: ['http://img3m0.ddimg.cn/58/3/1540308190-1_b_4.jpg'], // 封面，最多为3个，最少为1个
        like: 886 // 点赞次数
    },
    //第九条
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
        content: '畅销全球的《少年JUMP》，著名漫画师手冢治虫，带你一起了解漫画的秘密！', // 帖子内容
        covers: ['http://img3m6.ddimg.cn/90/1/25808796-1_l_3.jpg', 'http://img3m1.ddimg.cn/23/0/27879611-1_l_2.jpg'], // 封面，最多为3个，最少为1个
        like: 886 // 点赞次数
    },
    //第十条
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
                like: 50
            },
            {
                user: {
                    username: 'hello',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '还有货吗？',
                postDate: '2021-10-28 00:20:03',
                like: 4
            },
            {
                user: {
                    username: 'hello',
                    avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto'
                },
                content: '订了',
                postDate: '2021-10-28 00:20:03',
                like: 15
            }
        ],
        postDate: '2021-10-28',
        content: '欣赏现代文学，品读百味人生。',
        covers: ['http://img3m2.ddimg.cn/70/32/28508902-1_l_6.jpg', 'http://img3m2.ddimg.cn/6/29/29292522-1_l_2.jpg', 'http://img3m5.ddimg.cn/9/0/23634675-1_l_1.jpg'],
        like: 500
    }
]

export default posts
