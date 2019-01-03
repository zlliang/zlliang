---
title: 编写简单的 C 静态库
date: 2018-01-03
---

编写 C 语言应用程序很容易，大家在学校里都学过的。但学校没有教我们如何编写、打包一个静态库，以供他人使用。我们下意识地打下 `#include <xxx.h>` 的过程中，是如何调取这些库的呢？我们这次来写一个简单的静态库，搞清楚这个基本流程。

我们的库中只有一个函数 `power`，计算一个 `int` 整数的乘方。为此，我们将函数声明写在头文件中，并写一个 C 文件实现这个函数。

```c
// power.h
#ifndef _POWER_H_
#define _POWER_H_

int power(int a, unsigned int n);

#endif
```

头文件中的宏 `_POWER_H_` 是一个常用技术，它保证了不管我们调用了几次 `#include <power.h>`，函数生命只会出现一次。我们的函数 `power` 计算一个数 `a` 的 `n` 次方。下面，写这个函数的实现。

```c
// power.c
#include "power.h"

int power(int a, unsigned int n) {
  int result = 1;
  for (int i = 0; i < n; i++) {
    result *= a;
  }

  return result;
}
```

好的，我们已经写好这个库的实现了，现在我们将它打包。在 Linux 系统中，静态库一般是将编译好的目标文件 `*.o` 用命令行工具 `ar` 打包成 `*.a` 文件。

```bash
$ gcc -c power.c -o power.o
$ ar -crv libpower.a power.o
```

其中，`gcc` 的 `-c` 参数表示编译至目标文件 `*.o`。注意，如果我们的库叫做 `power`，那么打包为静态库时要命名为 `libpower.a`，这是一个约定，以便我们之后调用这个库。

现在这个库已经打包好了，可以供他人调用了。在调用时，我们只需要函数声明 `power.h` 及打包好的库文件 `libpower.a` 就可以了，而不需要提供实现的源文件 `power.c`。现在写一个可执行程序来调用这个库。

```c
// main.c
#include <stdio.h>
#include "power.h"

int main() {
  int k = power(2, 10);
  printf("%d\n", k);

  return 0;
}
```

编译这个程序需要调用我们的库。在使用 `gcc` 时，需要添加参数 `-l[lib]` 来调用库，其中 `[lib]` 是库名。另外还需要添加参数 `-L[dir]` 来指定库路径，比如库就在当前路径，那么用 `-L.` 就好。

```bash
$ gcc main.c -o main -L. -lpower 
```

运行这个程序，我们可以看到，库被有效地调用啦～

```bash
$ ./main
1024
```
