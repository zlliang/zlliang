---
title: 洋屁君在忙什么？
hidden: true
---

<TitleWithEmoji emoji="🥵" special>洋屁君在忙什么？</TitleWithEmoji>

## 创作几个页面

1. 我的个人网站，2023 版

## 迁移我的笔记系统

从 Notion 迁移至此，但是还有很长的路要走

## 🚧 为这个网站添加功能

添加一个简单的**文章评论**系统，希望能解决现在大多数评论系统存在的问题：

- 必须要登录，不管是手机、微信还是邮箱
- 评论会形成“搭楼”，一层一层上去，层峦叠嶂，结构复杂
- 站长的控制权不透明

它应该有：

- 自己选择名字、自己填内容
- 支持选择若干种联系方式，填入一种或不填
- 按编号的回复，拉平层级，可以进行双向链接点击
- 按需隐藏内容，给出隐藏文案、理由，并在提交评论时给出 code of conduct
- （bonus）支持 markdown 或富文本
- 精选评论标记
- （bonus）编辑功能 + history 回溯

表设计：

```TypeScript
interface Comment {
  id: number,
  user_id: number | null,
  post_id: string,
  reply_id: number | null,
  referred_ids: number[] | null,
  name: string | null,
  content: string, // maybe markdown
  contact_type: Enum | null,
  contact: string | null,
  hidden: boolean,
  hidden_reason: string | null,
  featured: boolean,
  created_at: string,
  updated_at: string | null, // timestamp
  updated: boolean,
  history: JSON.stringify(Comment[])
}
```
