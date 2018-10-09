---
title: 写好 MATLAB 的函数文档
---

> The second line of a function file is called the H1 (help 1) line. It should be a comment line of a special form: a line beginning with a `%` character, followed without any space by the function name in capital letters, followed by one or more spaces and then a brief description. The description should begin with a capital letter, end with a period, and omit the words “the” and “a”.

![](/images/matlab-docstring-01.png)

```matlab
%SVD    Singular value decomposition.                            % 函数名大写，与'%'之间不留间距
%   [U,S,V] = SVD(X) produces a diagonal matrix S, of the same   % 文中使用函数名时需大写
%   dimension as X and with nonnegative diagonal elements in
%   decreasing order, and unitary matrices U and V so that
%   X = U*S*V'.
%   
%   S = SVD(X) returns a vector containing the singular values.  % 标明函数的使用方法，每段之间空一行
%   
%   [U,S,V] = SVD(X,0) produces the "economy size"
%   decomposition. If X is m-by-n with m > n, then only the
%   first n columns of U are computed and S is n-by-n.
%   For m <= n, SVD(X,0) is equivalent to SVD(X).
%   
%   [U,S,V] = SVD(X,'econ') also produces the "economy size"
%   decomposition. If X is m-by-n with m >= n, then it is
%   equivalent to SVD(X,0). For m < n, only the first m columns 
%   of V are computed and S is m-by-m.
%   
%   See also SVDS, GSVD.                                         % 最后一行可以链接相关函数，函数名大写

%   Copyright 1984-2005 The MathWorks, Inc.                      % 空行隔开，已不算文档字符串
%   Built-in function.
```
