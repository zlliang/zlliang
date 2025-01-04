---
emoji: 🗒️
title: 如何将一个 JS object 复制为 plain object
created: 2024-01-09
summary: 也就是说，复制时去掉对象的实例方法，并将 getters 复制为固定的值。
---

如何将一个 class object 复制为 plain object？也就是说，复制时去掉对象的实例方法，并将 getters 复制为固定的值。今天我在工作中遇到一个坑，需要做这样一个 clone 函数。一个简单的实现如下：

```JS
function clone(obj) {
  const keys = [
  ...Object.getOwnPropertyNames(obj),
  ...Object.getOwnPropertyNames(Object.getPrototypeOf(obj)),
  ]
    
  const result: any = {}
  keys.forEach((key) => {
    if (typeof obj[key] === 'function') return
    result[key] = obj[key]
  })

  return result
}
```
