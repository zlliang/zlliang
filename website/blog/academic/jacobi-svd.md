---
title: 奇异值分解 (SVD) 的 Jacobi 方法
compact: true
---

Jacobi 方法是求对称矩阵谱分解的一种十分古老的方法．设 $A$ 是一个给定的实对称矩阵，令 $A_1$ $=$ $A$，并假定我们已经得到了 $A_k$，再设 $A_k$ 的绝对值最大的非对角元是 $a_{pq}^{(k)}$，Jacobi 方法的下一步是计算一个 $(p, q)$ 平面上的平面旋转变换 $J_k$，即 $J_k$ $=$ $G(p, q; c, s)$，使得 $A_{k+1}$ $=$ $\textcolor{purple}{J^{\trans}A_kJ_k}$ 的 $(p, q)$ 元为零．

```matlab
function [c, s, t] = jacobi(alpha, beta, gamma)

if beta ~= 0
    tau = (gamma - alpha) / (2 * beta);
    if tau >= 0
        t = 1 / (tau + sqrt(1 + tau^2));
    else
        t = - 1 / (- tau + sqrt(1 + tau^2));
    end
    c = 1 / sqrt(1 + t^2);
    s = t * c;
else
    c = 1;
    s = 0;
    t = 0;
end

if nargout <= 2
    c = [c, s; -s, c];
    s = t;
end
```
