[TOC]

# 开发说明

主题色为：#87cefa

## CSS

使用 SCSS 预处理代替 CSS，SCSS 的属性和 CSS 属性完全一致，但需要注意的是 SCSS 注重层次，可查看其他`.vue`中的用法。

## 命名规范

组件的 name 命名方式为，单词与单词之间用`-`隔开，字母均为小写，比如 more-recoveries.vue 组件的 name 应该写为 'more-recoveries'。

## 分支规范

每个人每次都负责一个分支开发，比如某界面只在分支`feature-xxx`进行开发，避免与其他分支产生冲突，从而发生不可挽回的代码丢失风险！

# 组件说明

**最近更新时间：2021 年 4 月 20 日 00:43:41**

已将所有公共组件名改为 owl-xxx.vue，并已全局注册，直接使用即可，无需导入。

## 修改 owl-fiche.vue

主要作用是复用首页每一个服务入口的卡片

删除 isDisplay 参数，在组件内判断是否传入 url，即为开启更多按钮的跳转地址。

## 修改 owl-make-comment.vue

发送评论的接口，必须传递的参数为 belongedId、postUrl、urlType，具体用法查看源码。

## 新增 owl-tag.vue

标签组件，可传递参数 type，其可选值为 primary、danger、warning，可自定义宽和高，单位可以是 rpx 或 px，但是建议是 rpx。

##sign.vue
主要内容 登录界面

## 新增 phone.vue

主要内容是 短信登录和密码登录的切换 界面

# 数据结构

**最近更新时间：2021 年 4 月 22 日 00:31:09**

## 书籍数据

```json
{
    "type": "living | technology | social | business | literature | art | education | children", // 书籍类型
    "author": "", // 作者姓名
    "name": "", // 书籍名称
    "price": 00.00, // 回收价
    "originPrice": 00.00, // 原价
    "desc": "", // 书籍介绍
    "img": [
        {
            "id": 0,
            "imgUrl": "",
            "belogngedId": 0
        }
    ],
}
```

## 用户数据

```json
{
    "id": 1,
    "level": 0,
    "username": "", // 用户名
    "password": "", // 密码
    "avatar": "", // 头像地址
    "fans": 0, // 粉丝数
    "praise": 0, // 点赞数
    "follows": 0, // 订阅数
    "bgImage": "" // 背景图
}
```

## 评论数据

```json
{
    "id": 0, // 评论ID
    "userId": 1, // 评论对应的用户ID，即哪个用户发表的评论
    "belogngedId", // 所属ID
    "content": "", // 评论内容
    "postDate": "", // 发表日期
    "agree": 0, // 点赞数
    "disagree": 0, // 反对数
    "user": {
        "id": 0,
        "level": 0,
        "username": "", // 用户名
        "nickname": "", // 社区名
        "password": "", // 密码
        "avatar": "", // 头像地址
        "fans": 0, // 粉丝数
        "praise": 0, // 点赞数
        "follows": 0, // 订阅数
        "bgImage": "" // 我的背景图
    },
}
```

## 回收点数据

```json
{
    "id": 0, // 回收点Id
    "url": "", // 回收点封面地址
    "address": "", // 回收点地址
    "price": 0, // 评价回收价 / 斤
    "times": 0, // 回收次数
    "openTime": "", // 开门时间
    "closeTime": "", // 关门时间
    "img": [
        {
            "id": 0,
            "imgUrl": "",
            "belogngedId": 0
        }
    ],
    "comment": [
        {
            "id": 0, // 评论ID
            "userId": 0, // 评论对应的用户ID，即哪个用户发表的评论
            "belogngedId", // 所属ID
            "content": "", // 评论内容
            "postDate": "", // 发表日期
            "agree": 0, // 点赞数
            "disagree": 0, // 反对数
            "user": {
                "id": 0,
                "level": 0,
                "username": "", // 用户名
                "nickname": "", // 社区名
                "password": "", // 密码
                "avatar": "", // 头像地址
                "fans": 0, // 粉丝数
                "praise": 0, // 点赞数
                "follows": 0, // 订阅数
                "bgImage": "" // 我的背景图
            },
        }
    ]
}
```

# 接口说明

**最近更新时间：2021 年 4 月 22 日 21:00:04**

## 获取书籍接口

GET 方法

```http
http://120.77.245.208:8070/get/book?type=
```

type 可选值：all | living | technology | social | business | literature | art | education | children

## 发表评论

```http
http://120.77.245.208:8070/set/comment
```

请求方式：POST

参数结构：

```javascript
{
    userId: 0,
    belongedId: 0,
    content: '',
    type: 'recovery | book | post'
}
```

参数说明：type 别对应不同类型的评论，需要在组件中传递。

## 获取帖子

```http
http://120.77.245.208:8070/get/post?[limitNum | browseNum | id]
```

请求方式：GET

参数说明：

1. limitNum 代表限制查询多少条帖子；
2. browseNum 代表查询浏览数大于等于多少的帖子；
3. id 代表查询指定 id 的帖子。

## 点赞或反对评论

```http
http://120.77.245.208:8070/set/view
```

请求方式：POST

参数结构：

```javascript
{
    id: 0,
    type: 'post | book | recovery',
    viewType: "agree | disagree"
}
```

参数说明：

1. id 代表被点赞或反对的评论的用户 ID；
2. type 代表当前评论是书籍评论，还是社区评论，还是回收点评论;
3. viewType 代表用户点赞评论是赞同还是反对。

## 登陆

```http
http://120.77.245.208:8070/signin
```

请求方式：POST

参数结构：

```javascript
{
    "phone": "1111111111",
    "password": "xxxxxxxxx"
}
```

参数说明：phone 和 password 是登陆必须字段，且只能传入这两个字段才能进行登录业务。

## 注册

```http
http://120.77.245.208:8070/signup
```

请求方式：POST

参数结构：

```javascript
{
    "phone": "1111111111",
    "password": "xxxxxxxxx",
    "username": "xxxx"
}
```

参数说明：phone、password 和 username 是注册必须字段，且只能传入这三个字段才能进行注册业务。

注意：

1. 如果数据库中存在了相同的手机号，那么会返回 400 状态响应码；
2. 如果数据库中没有存在相同的手机号，就会返回 200 状态响应码。

# 目录结构

**最近更新时间：2021 年 4 月 19 日 09:14:44**

目录结构大致如下：

```json
-src
    --colorui
    --components
        ---community
        ---index
        ---mine
        ---msg
        ---thorui
    --minixs
    --pages
        ---community
        ---index
        ---mine
        ---msg
    --static
        ---icon
    --store
```

1. 静态资源都存放在 static 文件夹中；
2. colorui 和 thorui 为第三方组件库；
3. components 存放对应页面的组件；
4. pages 存放页面的组件，pages 跟 pages.json 配套，使用方法查阅 uni-app 官方文档。

注意：pages 文件夹和 components 文件夹对应，如 pages 中 index.vue 是首页，若首页需要创建组件，那么就在 components 文件夹下创建一个 index 文件夹，存放有关 index.vue 的组件。如果是所有 pages 都会用到的组件，则放在 components 文件夹根目录下。

# 分支说明

1. matser 为主分支，通常情况下只有在 develop 比较稳定的情况下才与 develop 进行合并操作；
2. develop 为次分支，即开发分支，只有在某个 feature 分支比较稳定的情况下才与 feature 分支进行合并操作；
3. feature 开头的分支为功能开发分支，这些分支完成开发之后不会保留，主要开发工作都在 feature 分支下进行，定期与 develop 分支进行合并操作。

# 特性分支说明

特性分支是从开发分支迁出的副本分支，专门用于开发新特性，当特性开发完成后，特性分支中的内容会被合回开发分支。有关特性分支的说明： [使用特性分支开发](https://wenxinhe.gitbooks.io/knowledge-base/content/shi-yong-te-xing-fen-zhi-kai-fa.html#what-is-feature-branch)

## 创建特性分支

当在特性分支上开发新特性时，首先需要从开发分支迁出特性分支：

```shell
git checkout -b [特性分支名] develop
```

## 合并特性分支

```shell
git checkout develop

git merge --no-ff [特性分支名]

git branch -d [特性分支名]

git push origin develop
```

Created By "猫头鹰小组"
