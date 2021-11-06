# 通过书籍 ID 获取书籍信息

请求地址：`/find/by/id`

请求方式：GET

请求参数：

| 字段 | 说明    | 是否必填 |
| ---- | ------- | -------- |
| id   | 书籍 ID | 是       |

返回数据：

| 字段 | 类型   | 说明     |
| ---- | ------ | -------- |
| data | Object | 书籍信息 |

示例：

```js
this.$axios
    .get('/find/by/id', {
        params: {
            id: 1
        }
    })
    .then(result => {
        consloe.log(res.data)
    })
```

结果：

```js
{
    "id": 1,
    "type": "living",
    "name": "为何家会伤人（武志红代表作2018百万畅销纪念版）",
    "price": 29.9,
    "author": "武志红",
    "description": "知名心理学家武志红从业25年来公认口碑代表作！深深触动和改变千万人的心理疗愈经典。家是港湾，爱是退路。",
    "cover": "http://img3m8.ddimg.cn/28/29/25351948-3_u_3.jpg",
    "nomination": 1,
    "discount": 0.8,
    "covers": [
        {
            "id": 1,
            "books_id": 1,
            "cover": "http://img3m8.ddimg.cn/28/29/25351948-3_u_3.jpg"
        },
        {
            "id": 2,
            "books_id": 1,
            "cover": "http://img3m8.ddimg.cn/28/29/25351948-2_u_3.jpg"
        },
        /
    ]
}
```
