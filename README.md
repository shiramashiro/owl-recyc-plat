# 页面说明

## 个人空间

展示用户的基本信息，标签栏中有“订阅店铺”和“收藏书籍”两个选项。

> 已完成静态数据展示和布局设计，后续需改为动态获取数据。

## 购物车

Step1：加入书籍到购物车后，用户可以修改商品的数量（重新计算小计）、删除商品；

Step2：用户选择地址后可以进行下一步，并且用户可以临时添加或修改地址，后期可以在“我的账户”中管理地址；

Step3：选择支付方式，然后支付订单。

> 未开始

## 我的订单

用户可以查看订单的基本信息。

> 未开始

## 我的账户

展示账户的信息，标签栏中有“地址管理”和“我的头像”。

> 未开始

## 消息中心

标签栏中有“官方消息”和“店铺消息”。

> 未开始

## 书籍详情

展示书籍详细信息，下有评论区和加入购物车功能。

> 未开始

# Git 基本指令

## 创建分支

```shell
git branch [分支名]
```

## 切换分支

```shell
git checkout [分支名]
```

## 删除分支

```shell
git branch -d [分支名]
```

## 合并分支

```shell
git merge [分支名]
```

比如

```shell
git checkout develop

git merge [分支名]
```

# 特性分支说明

特性分支是从开发分支迁出的副本分支，专门用于开发新特性，当特性开发完成后，特性分支中的内容会被合回开发分支。有关特性分支的说明： [使用特性分支开发](https://wenxinhe.gitbooks.io/knowledge-base/content/shi-yong-te-xing-fen-zhi-kai-fa.html#what-is-feature-branch)

## 创建特性分支

当在特性分支上开发新特性时，首先需要从开发分支迁出特性分支：

```shell
git checkout -b [特性分支名] develop
```

## 合并特性分支

特性开发完成后，特性分支需要合入开发分支：

```shell
git checkout develop

git merge --no-ff [特性分支名]

git branch -d [特性分支名]

git push origin develop
```
