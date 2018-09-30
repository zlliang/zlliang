---
title: 写好 MATLAB 的文档字符串
---

> The second line of a function file is called the H1 (help 1) line. It should be a comment line of a special form: a line beginning with a `%` character, followed without any space by the function name in capital letters, followed by one or more spaces and then a brief description. The description should begin with a capital letter, end with a period, and omit the words “the” and “a”.

```
>> help svd
 svd    Singular value decomposition.
    [U,S,V] = svd(X) produces a diagonal matrix S, of the same 
    dimension as X and with nonnegative diagonal elements in
    decreasing order, and unitary matrices U and V so that
    X = U*S*V'.
 
    S = svd(X) returns a vector containing the singular values.
 
    [U,S,V] = svd(X,0) produces the "economy size"
    decomposition. If X is m-by-n with m > n, then only the
    first n columns of U are computed and S is n-by-n.
    For m <= n, svd(X,0) is equivalent to svd(X).
 
    [U,S,V] = svd(X,'econ') also produces the "economy size"
    decomposition. If X is m-by-n with m >= n, then it is
    equivalent to svd(X,0). For m < n, only the first m columns 
    of V are computed and S is m-by-m.
 
    See also svds, gsvd.
```
