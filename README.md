[TOC]

# 开发说明

主题值色：rgb(135, 206, 250) 或 #87cefa

白色背景色值：rgb(248, 248, 248) 或 #f8f8f8

分割线色值：rgb(240, 240, 240) 或 #f0f0f0

## CSS

使用 SCSS 预处理代替 CSS，SCSS 的属性和 CSS 属性完全一致，但需要注意的是 SCSS 注重层次。

## 命名规范

1. 组件：组件 name 属性值填入的值为单词与单词之间用`-`隔开；导入组件时的变量名使用大驼峰命名规则，即 AbcDef 的形式。
2. CSS：class、id 的命名方式为单词与单词之间用`-`隔开。

## 分支说明

每个人每次都负责一个分支开发，比如某界面只在分支`feature-xxx`进行开发，避免与其他分支产生冲突，从而发生不可挽回的代码丢失风险！

## 目录结构

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

# 接口说明

**最近更新时间：2021 年 4 月 27 日 16:11:31**

## 获取书籍

```http
http://120.77.245.208:8070/get/book
```

请求方式：GET

参数说明：

在发起此请求获取书籍时，必须传入 type 来区分获取什么类型的书籍，下面是可选参数值：

all | living | technology | social | business | literature | art | education | children

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
http://120.77.245.208:8070/get/post
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

1. 如果数据库中存在了相同的手机号，就会返回 400 状态响应码和消息；
2. 如果数据库中没有存在相同的手机号，就会返回 200 状态响应码和消息。

## 获取头像

```http
http://120.77.245.208:8070/get/signin/avatar?phone=
```

请求方式：GET

参数说明：根据 phone 查询用户的头像地址

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

由 "猫头鹰小组" 创建
