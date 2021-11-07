const tradableBooks = [
    {
        id: 1,
        book: {
            id: 10049,
            type: 'audio',
            name: '游戏比你会说话修订版:演讲会议培训交际游戏大全',
            price: 54.31,
            author: '[美]爱德华·斯坎奈尔 ',
            description:
                '《游戏比你会说话：演讲、会议、培训、交际游戏大全（第二版）》讲述在发言时怎样才能不再使听众感到昏昏欲睡或者坐立不安？别再依靠那些乏味的笑话了，你应该选用这些妙趣横生的互动游戏或活动：开始会议的精彩游戏，打破僵局的游戏，创造和谐气氛的游戏，实用的玩笑和花招，听众智力测试，激发听众热情的活动，令人难忘的结束方式。书中的每个游戏都快速、有趣、富有创意、简便易行、成本低廉乃至零成本，立刻行动，现在就去唤醒你的听众吧。 ',
            cover: 'http://img3m7.ddimg.cn/28/21/679836097-1_b_1.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '9成新，进口书籍', // 交易标题
        like: 10 // 此交易想要的人数
    },
    {
        id: 2,
        book: {
            id: 10050,
            type: 'audio',
            name: '时间简史（普及版）',
            price: 25.0,
            author: '史蒂芬·霍金 ',
            description:
                '在重新组织本书之际，作者得以扩展特别有兴趣的领域并收入*的进展，从弦论的*发展，到寻求物理学中各种力的完备统一理论令人神往的进展。如同本书早先的版本——甚至有过之而无不及——在寻找时间和空间核心可望而不可及的秘密这一未竞之业中，《时间简史(普及版)》将引导世界各地的普通读者。 ',
            cover: 'http://img3m9.ddimg.cn/42/7/9125169-1_b_1.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '8成新，时间简史', // 交易标题
        like: 12 // 此交易想要的人数
    },
    {
        id: 3,
        book: {
            id: 10051,
            type: 'audio',
            name: '看不见的森林——林中自然笔记',
            price: 33.21,
            author: '(美) 戴维·乔治·哈斯凯尔 ',
            description:
                '央视2014年“中国好书”；科技部2015年全国优秀科普作品奖；中国教育报2014年度教师喜爱的图书；2014年新京报年度图书；2014年度商务印书馆人文社科十大好书；中国出版集团2014年中版好书） ',
            cover: 'http://img3m5.ddimg.cn/95/19/23472005-1_l_2.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '9成新，自然书籍', // 交易标题
        like: 10 // 此交易想要的人数
    },
    {
        id: 4,
        book: {
            id: 10052,
            type: 'audio',
            name: '彼得·林奇的成功投资(典藏版)',
            price: 49.3,
            author: '（美）彼得·林奇（Peter Lynch）,（美）约翰·罗瑟查尔德（John Rothchild）,刘建位,徐晓杰  ',
            description: 'Python编程快速上手零基础入门实践教程，用Python处理Excel、Word、PPT、PDF、图像文件，提升职场办公效率，解决办公难题，附赠学习资源和教学视频。。 ',
            cover: 'http://img3m0.ddimg.cn/46/24/28477000-1_b_6.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '7成新，专业插花', // 交易标题
        like: 10 // 此交易想要的人数
    },
    {
        id: 5,
        book: {
            id: 10053,
            type: 'audio',
            name: '花间世：中式古典插花（汉竹）',
            price: 36.15,
            author: '吴永刚 ',
            description: '中式插花入门教程，东方花道守艺人历时七年，遍访山野与文人空间，700多天拍摄，实景还原《瓶花谱》古典花事，传统花材花器，茶席插花、禅意清供……一日一花呈现花艺生活之美。 ',
            cover: 'http://img3m8.ddimg.cn/43/35/28521448-1_b_3.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '全新，花间世', // 交易标题
        like: 14 // 此交易想要的人数
    },
    {
        id: 6,
        book: {
            id: 10054,
            type: 'audio',
            name: ' 古代人的日常生活',
            price: 15,
            author: '讲历史的王老师 ',
            description: 'Python编程快速上手零基础入门实践教程，用Python处理Excel、Word、PPT、PDF、图像文件，提升职场办公效率，解决办公难题，附赠学习资源和教学视频。 ',
            cover: 'http://img3m2.ddimg.cn/80/26/29288042-1_l_10.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '5成新，典藏版', // 交易标题
        like: 10 // 此交易想要的人数
    },
    {
        id: 7,
        book: {
            id: 10055,
            type: 'audio',
            name: '学Python 不加班 轻松实现办公自动化',
            price: 44.66,
            author: '何华平 ',
            description: 'Python编程快速上手零基础入门实践教程，用Python处理Excel、Word、PPT、PDF、图像文件，提升职场办公效率，解决办公难题，附赠学习资源和教学视频。 ',
            cover: 'http://img3m8.ddimg.cn/57/12/29261388-1_b_6.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '9成新，Python教程', // 交易标题
        like: 10 // 此交易想要的人数
    },
    {
        id: 8,
        book: {
            id: 10056,
            type: 'audio',
            name: '能力陷阱',
            price: 1,
            author: '（美）埃米尼亚·伊贝拉 ',
            description:
                '我们很乐于去做那些我们擅长的事，于是就会一直去做，*终就使得我们会一直擅长那些事。做得越多，就越擅长，越擅长就越愿意去做。这样的一个循环能让我们在这方面获得更多的经验，但却容易陷入能力陷阱，在其他方面无法突破。每个人都要特别警惕这种能力陷阱，避免把大量时间花在日常琐事上。如果你想获得更多更好的发展，就要从日常琐事中解脱出来，转变到进行更多策略性思考、在日常工作外建立人际关系网络、提升影响力等能够给你持续带来价值的工作上，这样你才能在各领域获得更好的发展。 ',
            cover: 'http://img3m3.ddimg.cn/73/25/26916193-1_l_13.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '特价售卖', // 交易标题
        like: 10 // 此交易想要的人数
    },
    {
        id: 9,
        book: {
            id: 10057,
            type: 'audio',
            name: '能力陷阱',
            price: 1,
            author: '（美）埃米尼亚·伊贝拉 ',
            description:
                '我们很乐于去做那些我们擅长的事，于是就会一直去做，*终就使得我们会一直擅长那些事。做得越多，就越擅长，越擅长就越愿意去做。这样的一个循环能让我们在这方面获得更多的经验，但却容易陷入能力陷阱，在其他方面无法突破。每个人都要特别警惕这种能力陷阱，避免把大量时间花在日常琐事上。如果你想获得更多更好的发展，就要从日常琐事中解脱出来，转变到进行更多策略性思考、在日常工作外建立人际关系网络、提升影响力等能够给你持续带来价值的工作上，这样你才能在各领域获得更好的发展。 ',
            cover: 'http://img3m3.ddimg.cn/73/25/26916193-1_l_13.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '特价售卖', // 交易标题
        like: 10 // 此交易想要的人数
    },
    {
        id: 10,
        book: {
            id: 10058,
            type: 'audio',
            name: '肖申克的救赎',
            price: 20,
            author: '（美）埃米尼亚·伊贝拉 ',
            description:
                '由悬疑大师斯蒂芬·金作品改编，奥斯卡*剧本奖获奖作品。 一场看似无懈可击的谋杀审判，一段跨越二十年的高墙抗争，一曲动人心魄的越狱传奇……蒙冤入狱的银行家安迪·杜弗雷在地狱般的肖申克监狱，凭借理性与希望，二十年如一日坚守自己的救赎之路，救人救己，穿越层层苦难，终逃出监狱……这一个斯蒂芬·金的故事，经达拉邦特改编并拍摄，成为电影*激动人心的作品，曾获奥斯卡*影片、*剧本、男主角等七项大奖提名。  翻开这本书，除了重温电影曾带给我们的感动，重温那一幅幅感人至深的画面，还会有很多新的收获：情节逆转——在剧本里，原来竟有那么多情节是与电影不一样；导演解密——导演兼编剧达拉邦特通过对逐个镜头的详细解析，解密了《肖申克的救赎》是如何从剧本变成一部经典大片的；拍摄故事——影片当中的穿帮镜头和各种匪夷所思的拍摄花絮也是身为“肖申克迷”不得不知的秘密……  这不仅仅是经典剧本，更是心灵读本。 ',
            cover: 'http://img3m5.ddimg.cn/9/0/23634675-1_l_1.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '8成新，肖申克的救赎', // 交易标题
        like: 10 // 此交易想要的人数
    },
    {
        id: 11,
        book: {
            id: 10059,
            type: 'audio',
            name: ' 鲁迅全集（全20卷）',
            price: 200,
            author: '鲁迅 ',
            description: '鲁迅全集 ',
            cover: 'http://img3m5.ddimg.cn/6/32/29161545-1_l_14.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '全新，鲁迅全集', // 交易标题
        like: 10 // 此交易想要的人数
    },
    {
        id: 12,
        book: {
            id: 10059,
            type: 'audio',
            name: '  佐野洋子作品集（全4册）',
            price: 100,
            author: '[日]佐野洋子  ',
            description: '日本知名女性作家、《活了100万次的猫》作者佐野洋子 三部早期随笔集+一部晚年代表作， 二十余年的创作集锦，凝结一辈子的从容与睿智。 ',
            cover: 'http://img3m6.ddimg.cn/17/6/29271446-1_l_17.jpg'
        },
        user: {
            username: 'shiramashiro', // 用户名
            credit: '极好', // 信用等级，分为 极好、一般、很差
            avatar: 'https://img0.baidu.com/it/u=1205920287,1484241911&fm=26&fmt=auto' // 动漫头像
        },
        tags: ['包邮', '包退'], // 此交易是否可以包邮、包退？
        title: '全新，佐野洋子', // 交易标题
        like: 10 // 此交易想要的人数
    }
]

export default tradableBooks
