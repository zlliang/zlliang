---
emoji: 🗒️
title: Shell 脚本中的单引号、引号和反引号
created: 2024-01-04
summary: 通用的 shell 中（以 bash 为例），这三种引号的含义各不相同，这里做个总结。
---

- 单引号表示引号内的字符串保持原样，反斜杠转义不起作用
    - `'Here is $HOME'` -> `Here is $HOME`
    - `'Hello, world!\n'` -> `Hello, world!\n`
- 双引号表示引号内的字符串保持原样，但环境变量求值和反斜杠转义会生效
    - `"Here is $HOME"` -> `Here is /home/zlliang`
    - `"Here is \$HOME"` -> `Here is $HOME`
    - `"Hello\tworld"` -> `Hello    world`
- 反引号表示引号内的字符串要当作一个 shell 命令进行求值，并替换为其输出
    - <code>echo \`pwd\`</code> -> `echo "/home/zlliang"`
