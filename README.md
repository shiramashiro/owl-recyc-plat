# 规范说明

## 颜色

1. 主题颜色：rgb(135, 206, 250) 或 #87cefa
2. 白色背景：rgb(248, 248, 248) 或 #f8f8f8
3. 分割线：rgb(240, 240, 240) 或 #f0f0f0

## 组件

组件的命名必须是单词与单词之间用`-`隔开；导入组件时的变量名使用大驼峰命名规则。

比如：

```js
import OwlFiche from '@/components/owl-fiche.vue'

export default {
    components: { OwlFiche }
}
```

## CSS

class、id 的命名必须是单词与单词之间用`-`隔开。

## 目录

1. 图片、视频、音频等静态资源都放在 assets 中；
2. colorui 和 thorui 为第三方组件库，非到必要时不可以动用；
3. 开发的组件都放在 components 中；
4. 页面都放在 pages 中，与 pages.json 配套。请查阅 uni-app 官方文档。

# 分支

每个人每次都负责一个分支开发，比如某界面只在分支`feature-xxx`进行开发，避免与其他分支产生冲突，从而发生不可挽回的代码丢失风险！

1. matser 为主分支，通常情况下只有在 develop 比较稳定的情况下才与 develop 进行合并操作；
2. develop 为次分支，即开发分支，只有在某个 feature 分支比较稳定的情况下才与 feature 分支进行合并操作；
3. feature 开头的分支为功能开发分支，这些分支完成开发之后不会保留，主要开发工作都在 feature 分支下进行，定期与 develop 分支进行合并操作。

## 特性分支

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
