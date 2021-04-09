# 开发说明

使用 uni-app 的原生组件如 image、swiper 以外，大部分使用的是 thoriui 第三方组件库，官方文档地址为：https://thorui.cn/doc/。

使用 colorui 简化 CSS 开发，比如 flex 布局，只需要在 view 标签的 class 中加上 flex 即可实现布局，具体用法使用微信小程序打开 colorui demo 项目查看。<u>推荐多使用 colorui 封装好的样式，提升开发速度。</u>

使用 SCSS 预处理代替 CSS，SCSS 的属性和 CSS 属性完全一致，但需要注意的是 SCSS 注重层次，可查看其他`.vue`中的用法。

文件的命名方式不能以数字开头，规范跟 java 开发规范一致，文件名涉及多个单词使用`-`划分开来。比如 new-book.vue。

每个人每次都负责一个分支开发，书籍详情页只在分支`feature-书籍详情`进行开发，避免与其他分支产生冲突，从而发生不可挽回的代码丢失风险！

> 注意 1：uni-app 原生组件 swiper 不能根据内容多少而自适应 height（高度），所以我在 mixins 文件夹下封装了初始化 swiper 高度的 js 代码。如果有兴趣自行研究。

> 注意 2：多人开发需要严格按照规范文档进行！

## 书籍数据结构

```json
{
    "type": "living | technology | social | business | literature | art | education | children", // 可选字段，living为生活类书籍
    "id": 0, // 书籍ID
    "cover": [
        "",
        "",
        ... // 做多5个封面
    ], // 书籍封面地址
    "name": "", // 书籍名称
    "price": 00.00, // 折扣价
    "originPrice": 00.00, // 原价
    "desc": "", // 书籍介绍
    ... // 其他字段有待考虑
}
```

注意：书籍应该为数组，在书写 json 的时候请注意这一细节，这些字段后期将会加入到数据库中，作为表的结构来使用，在设计时请多加考虑每一个字段的作用！

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

正在开发后端中...

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
        ---mine
    --store
```

1. 静态资源，如图片、json 文件都需要存放在 static 文件夹中（可另创建 json 文件夹再将所有的.json 文件存放在一起）；
2. colorui 和 thorui 文件夹是存放第三方组件库的地方，不要动；
3. components 是存放组件的地方，只有可复用性较高的代码才会抽取为组件，其他情况下不建议抽取为组件；
4. pages 是存放页面的地方，pages 跟 pages.json 配套，使用方法查阅 uni-app 官方文档；
5. minixs 是存放多个组件共有的代码，只有在两个或两个以上的组件里有重复的代码才会抽取为 minixs（混入），具体使用方法查阅 vue.js 官方文档；
6. store 文件夹跟 vue 项目的 store 一致，无区别。

注意：pages 的文件夹的子文件夹和 components 文件夹大体对应，比如 pages 中 index 是首页，而首页需要开发一些组件，那么就会在 components 文件夹下创建一个 index 文件夹，存放有关首页的组件，如果是所有页面都会用到的公共组件，则放在 components 文件夹下即可。

# 分支说明

目前拥有如下几种分支：

```json
matser
develop
feature-个人空间
feature-首页
feature-书籍详情
```

## 各个分支的作用

1. matser 为主分支，通常情况下只有在 develop 比较稳定的情况下才与 develop 进行合并操作；
2. develop 为次分支，即开发分支，只有在某个 feature 分支比较稳定的情况下才与 feature 分支进行合并操作；
3. feature 开头的分支为功能开发分支，这些分支完成开发之后不会保留，主要开发工作都在 feature 分支下进行，定期与 develop 分支进行合并操作。

## 目前的分支与页面的关系

-   feature-个人空间分支与页面“我的”进行关联；
-   feature-首页分支与页面“首页”进行关联；
-   feature-书籍详情分支与页面“首页-书籍详情”进行关联。
-   其他分支有待创建...

# 页面说明

## 我的

界面 UI 设计图：

## 社区

界面 UI 正在设计中...

## 交易

界面 UI 正在设计中...

## 书籍详情

界面 UI 设计图：https://www.processon.com/view/link/606fe9321e0853133505d5c2

## 消息中心

界面 UI 正在设计中...

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
