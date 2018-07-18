---
title: 知识回顾·微分方程数值解
subtitle: 2018 春季学期期末复习
compact: true
---

## 几个有用的不等式

### Gronwall-Bellman 不等式
假设 $u(t),\, \alpha(t)$ $\in$ $C[a, b]$，非负函数 $\beta(t)$ $\in$ $L^1[a, b]$．若
$$ u(t) \leqslant \alpha(t) + \int_a^t \beta(s) u(s)\; \mathrm{d} s, \quad t \in [a, b], $$
则有
$$ u(t) \leqslant \alpha(t) + \int_a^t \left( \beta(s)\alpha(s)\mathrm{e}^{\int_s^t \beta(z)\; \mathrm{d}z} \right)\; \mathrm{d} s, \quad t \in [a, b]. $$

### Poincaré 不等式
若 $u(t)$ $\in$ $H_0^1(\Omega)$，则成立
$$ \left\|u\right\|_{L^2} \leqslant C_p \left\|\nabla u\right\|_{L^2}. $$

## 数值微分
记 $h$ 为差分步长，则有 Taylor 展开式：
$$
\begin{aligned}
u(t_{n+1}) &= u(t_n) + hu'(t_n) + \frac{h^2}{2}u''(t_n) + \frac{h^3}{6}u^{(3)}(t_n) + O(h^4), \\
u(t_{n-1}) &= u(t_n) - hu'(t_n) + \frac{h^2}{2}u''(t_n) - \frac{h^3}{6}u^{(3)}(t_n) + O(h^4),
\end{aligned}
$$
则可以看出，$u(t)$ 的一阶导数有三种近似方式：
$$
\frac{\diff u}{\diff t} =
\left\{
\begin{aligned}
&\frac{u(t_{n+1}) - u(t_n)}{h} + O(h), \\
&\frac{u(t_n) - u(t_{n-1})}{h} + O(h), \\
&\frac{u(t_{n+1}) - u(t_{n-1})}{2h} + O(h^2).
\end{aligned}
\right.
$$
同样，对二阶导数，可以做中心差商
$$
\frac{\diff^2 u}{\diff t^2} = \frac{u(t_{n+1}) - 2u(t_n) + u(t_{n-1})}{h^2} + O(h).
$$

## 局部截断误差
在微分方程数值解法中，**局部截断误差 $R_i$** 指的是将精确解代入离散计算格式而得到的差

## 常微分方程数值解的高阶单步方法
一般地，单步格式为
$$
u_{n+1} = u_n + h\phi(t_n, u_n; h),
$$

### Runge-Kutta 方法

### 相容性、稳定性与收敛性
如果离散格式的局部截断误差对任意 $n$ 满足
$$ R_n = O(h^{p+1}), \quad p \geqslant 1, $$
则称该格式为 $p$ 阶**相容**的
{% message 引理 %}
设增量函数 $\phi(t, u; h)$ 在定义域中适当光滑，则单步方法相容的充要条件是
$$ \phi(t, u; 0) = f(t, u). $$
{% endmessage %}

## 常微分方程数值解的线性多步方法

### Adams 格式
### Gear 格式
