# 页面说明

## 个人

展示用户的基本信息；

标签栏中有“订阅店铺”、“收藏书籍”、“地址管理”；

> 已完成界面

## 购物车

购物车点击结算，用户可修改商品的数量（重新计算小计）、删除商品；

点击结算按钮后进入快递地址填写页，用户可以临时添加或修改地址，后期可以在“个人”中管理地址；

Step3：选择支付方式，然后支付订单。

> 未开始

## 消息中心

接受官方推送过来的消息；

可与与商家进行沟通。

> 未开始

## 书籍详情

展示书籍详细信息，可选规格并加入购物车；

展示商家简略信息，用户可点击进入查看详细；

展示购买者的评论；

> 正在开发中

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
