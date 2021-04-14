# 开发说明

## 组件

使用 uni-app 的原生组件如 image、swiper 以外，大部分使用的是 thoriui 第三方组件库，官方文档地址为：https://thorui.cn/doc/。

使用 colorui 简化 CSS 开发，比如 flex 布局，只需要在 view 标签的 class 中加上 flex 即可实现布局，具体用法使用微信小程序打开 colorui demo 项目查看。<u>推荐多使用 colorui 封装好的样式，提升开发速度。</u>

## CSS

使用 SCSS 预处理代替 CSS，SCSS 的属性和 CSS 属性完全一致，但需要注意的是 SCSS 注重层次，可查看其他`.vue`中的用法。

## 命名规范

文件的命名方式不能以数字开头，规范跟 java 开发规范一致，文件名涉及多个单词使用`-`划分开来。比如 new-book.vue。

## 分支规范

每个人每次都负责一个分支开发，比如某界面只在分支`feature-xxx`进行开发，避免与其他分支产生冲突，从而发生不可挽回的代码丢失风险！

# 改动说明

## subdomain.vue

删除原 components/index/swiper-content.vue

在 components/index 下新增组件 subdomain.vue，主要作用是复用首页每一个服务入口的卡片，详细请看`http://localhost:8080/#/`

需要必须传递参数`title`，即服务入口的标题：

```javascript
props: {
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: false
    }
}
```

其内容使用了`<slot></slot>`，内容可根据业务来插入。实例在 pages/index/index.vue。

## caskets.vue

修改原 components/index/casket.vue

注意该组件中 selectCasket 函数：

```javascript
handleClick(index, cakset) {
    this.$emit('selected', {
        index: index,
        casket: cakset
    })
}
```

在使用 caskets.vue 组件时，需要给回调函数`@selected`获取宫格信息，具体使用参考 pages/index/index.vue

## classification.vue

删除原 pages/index/week-rank.vue，新增 pages/index/classification.vue

在点击书籍分类服务入口的九宫格之后，会跳转相应的书籍类型到 classification 页面，接收到参数之后调用书籍接口查询对应类型的书籍，然后展示数据到 classification 页面中。

## book.vue

删除原 components/index/new-book.vue，修改原 components/index/boo.vue

# 数据结构

## 书籍数据结构

```json
{
    "type": "living | technology | social | business | literature | art | education | children", // 书籍类型
    "id": 0, // 书籍ID
    "cover": [
        "", // 书籍封面地址
        "",
    ],
    "author": "", // 作者姓名
    "name": "", // 书籍名称
    "price": 00.00, // 折扣价
    "originPrice": 00.00, // 原价
    "desc": "", // 书籍介绍
}
```

## 用户数据结构

```json
{
    "id": 1,
    "username": "", // 用户名
    "nickname": "", // 社区名
    "password": "", // 密码
    "avatar": "", // 头像地址
    "fans": 0, // 粉丝数
    "praise": 0, // 点赞数
    "follows": 0, // 订阅数
    "bgImage": "" // 我的背景图
}
```

## 书籍详情页评论数据结构

```json
{
    "id": 0, // 评论ID
    "bookId": 0, // 评论对应的书籍ID，即哪个书籍下的评论
    "userId": 1, // 评论对应的用户ID，即哪个用户发表的评论
    "user": {
        "id": 1,
        "username": "", // 用户名
        "nickname": "", // 社区名
        "password": "", // 密码
        "avatar": "", // 头像地址
        "fans": 0, // 粉丝数
        "praise": 0, // 点赞数
        "follows": 0, // 订阅数
        "bgImage": "" // 我的背景图
    },
    "postDate": "2020-04-09 13:46:13", // 发表日期
    "agree": 0, // 点赞数
    "disagree": 0 // 反对数
}
```

# 接口说明

## 书籍接口

```http
http://120.77.245.208:8070/get/book?type=
```

type 可选字段：living | technology | social | business | literature | art | education | children

# 目录结构

项目目录结构大致如下：

```json
-src
    --colorui
    --components
        ---index
        ---mine
        ---thorui
    --minixs
    --pages
    --static
        ---icon
    --store
```

1. 静态资源都存放在 static 文件夹中；
2. colorui 和 thorui 文件夹不能动；
3. components 是存放对应页面的组件的地方，只有可复用性较高的代码才会抽取为组件，其他情况下不建议抽取为组件；
4. pages 是存放页面的地方，pages 跟 pages.json 配套，使用方法查阅 uni-app 官方文档；
5. minixs 是存放多个组件共有的代码，只有在两个或两个以上的组件里有重复的代码才会抽取为 minixs（混入）;
6. store 文件夹跟 vue 项目的 store 一致，无区别。

注意：pages 的文件夹的子文件夹和 components 文件夹对应，比如 pages 中 index 是首页，而首页需要开发一些组件，那么就会在 components 文件夹下创建一个 index 文件夹，存放有关首页的组件，如果是所有页面都会用到的公共组件，则放在 components 文件夹下。

# 分支说明

目前拥有如下几种分支：

```json
matser
develop
```

## 各个分支的作用

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
