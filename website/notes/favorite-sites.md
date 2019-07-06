---
title: 我的收藏夹
toc: true
---

在 GitHub 上，整理各类资源列表的 “Awesome” 系列都非常流行。面对技术世界中纷乱繁杂的知识和兴趣点，这些列表为开发者、研究者梳理思路，提供路线参考。这篇文章中我整理了自己的收藏夹，为我做备忘。

<!-- more -->

## MATLAB 相关
- [MATLAB 中文文档](https://cn.mathworks.com/help/) 「MathWorks 产品官方文档」
- [Undocumented MATLAB](https://undocumentedmatlab.com/)「文档中没有提及的 MATLAB 应用编程技巧以及与 Java 混编的隐藏技术」

## 数学
- [Julia](https://julialang.org/)「新一代科学计算语言」
- [Nick Higham](https://nickhigham.wordpress.com/) 
- [MPI Tutorial](http://mpitutorial.com/)
- [Fortran Tutorial](https://www.fortrantutorial.com)
- [Netlib](http://www.netlib.org)
- [Springer Link](https://link.springer.com)
- [SIAM](https://www.siam.org), and [SIAM E-Publications](https://epubs.siam.org)
- [ACM Transactions on Mathematical Software (TOMS)](https://toms.acm.org)
- [ACM Computing Surveys (CSUR)](https://csur.acm.org)
- [IEEE Communications Surveys & Tutorials](https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9739)
- [LAPACK Working Notes](http://www.netlib.org/lapack/lawns/)
- [NLEVP: A Collection of Nonlinear Eigenvalue Problems](http://www.maths.manchester.ac.uk/our-research/research-groups/numerical-analysis-and-scientific-computing/numerical-analysis/software/nlevp/)
### C / C++ / Fortran 计算数学软件包
- 基础子程序库 [BLAS](http://www.netlib.org/blas), [LAPACK](http://www.netlib.org/lapack), [OpenBLAS](http://www.openblas.net) and [Intel Math Kernel Library](https://software.intel.com/mkl)
- 大规模特征值问题子程序库 [ARPACK](https://www.caam.rice.edu/software/ARPACK/)
- 并行计算基础子程序库 [ScaLAPACK](https://www.netlib.org/scalapack/)
- 并行计算模型
  - 分布式内存并行计算模型 MPI 库 [MPICH](https://www.mpich.org) 和 [open MPI](https://www.open-mpi.org)
  - 多线程并行计算模型 [OpenMP](https://www.openmp.org)
  - [OpenACC](https://www.openacc.org)
- GNU 多精度计算库 [GMP](https://gmplib.org)，多精度复数计算库 [MPC](http://www.multiprecision.org/mpc/)，多精度浮点数计算库 [MPFR](https://www.mpfr.org), 科学计算库 [GSL](https://www.gnu.org/software/gsl/)
- C++ 高级 API：线性代数库 [Armadillo](http://arma.sourceforge.net), 模版库 [Eigen](https://eigen.tuxfamily.org/)
- Test Matrix Collections
  - [Matrix Market](https://math.nist.gov/MatrixMarket/)
  - [SuiteSparse Matrix Collection](https://sparse.tamu.edu)
### 数据可视化
- [D3.js](https://d3js.org)
- [The Hitchhiker’s Guide to d3.js](https://medium.com/@enjalot/the-hitchhikers-guide-to-d3-js-a8552174733a)
### Rust
- [The Rust Programming Language](https://doc.rust-lang.org/book/)（[中文版](https://kaisery.github.io/trpl-zh-cn/)）
- [Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/)
- [Rust API Guidelines](https://rust-lang-nursery.github.io/api-guidelines/macros.html)
### 并行计算
- [MPI Tutorial](http://mpitutorial.com)
- [An Introduction to Parallel Programming](https://www.sciencedirect.com/book/9780123742605/an-introduction-to-parallel-programming)
## 技术
- [Algorithms, 4th Edition](https://algs4.cs.princeton.edu/)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [The Complete Guide to Lazy Loading Images](https://css-tricks.com/the-complete-guide-to-lazy-loading-images/)
- [IBM DeveloperWorks](https://developer.ibm.com/)
- [Red Hat Developer](https://developers.redhat.com)
- [MDN Web docs](https://developer.mozilla.org/)
- [PEP 8](http://pep8.org/)
- [HDF5](https://www.hdfgroup.org) 与 Python 接口 [h5py](http://www.h5py.org)
- [Fortran Wiki](http://fortranwiki.org/)
### 前端工具
前端近几年发展很旺盛，围绕 Node.js 的各种工具层出不穷，甚至有些混乱。
- 构建工具 [Webpack](https://webpack.js.org/) 和 [Rollup](https://rollupjs.org/)
- 语言增强工具
    - JavaScript 解决方案：[TypeScript](http://www.typescriptlang.org) 与 [Babel](https://babeljs.io)
    - CSS 预处理：[Sass](http://sass-lang.com/) 与 [PostCSS](https://postcss.org/)
- 自动代码检查 [ESLint](https://eslint.org) 与测试框架 [Jest](https://jestjs.io/)
- 以 [Vue](https://vuejs.org/) 为核心的工具链
    - 脚手架 [Vue CLI](https://cli.vuejs.org/)
    - 路由库 [Vue Router](https://router.vuejs.org/)
    - 状态管理 [Vuex](https://vuex.vuejs.org/)
    - 应用框架 [Nuxt.js](https://nuxtjs.org/)
    - 静态网站生成器 [VuePress](https://vuepress.vuejs.org/)
- 以 [React](https://reactjs.org/) 为核心的工具链
    - 脚手架 [create-react-app](https://facebook.github.io/create-react-app/)
    - 路由库 [React Router](https://reacttraining.com/react-router/)
    - 状态管理 [Redux](https://redux.js.org/) 与 [MobX](https://mobx.js.org/)
    - CSS 解决方案 [CSS Modules](https://github.com/css-modules/css-modules) 与 [styled-components](https://www.styled-components.com/)
    - 应用框架 [Next.js](https://nextjs.org/)
    - 静态网站生成器 [Gatsby](https://gatsbyjs.org/)
- Google 的 Web 技术学习站点 [web.dev](https://web.dev)
- 现代的网站托管平台 [Netlify](https://www.netlify.com) 和 [Now](https://now.sh)
### 项目工具
- 版本控制工具 [Git](https://git-scm.com/)
- Git commit 规范化工具 [Commitizen](https://github.com/commitizen/cz-cli/)
- 语义化版本系统 [SemVer](https://semver.org/)
- 语义化 release 规范化工具 [semantic-release](https://github.com/semantic-release/semantic-release/)
- 开源许可证选择 [Choose a License](https://choosealicense.com/)
- 元数据 Badge 生成 [shields.io](https://shields.io/)
- 持续集成 / 持续部署（CI/CD）平台 [Travis CI](https://travis-ci.com/)
  - 同类平台：[Circle CI](https://circleci.com)、[Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/)、[AppVeyor (Windows)](https://www.appveyor.com)
### C / Fortran 工具
- 编译器 [clang](https://clang.llvm.org)，[GCC](https://gcc.gnu.org) (gcc, g++, gfortran), and [Intel C++/Fortran Compiler](https://software.intel.com/intel-compilers/)
- 构建工具 [GNU Make](https://www.gnu.org/software/make/)
- 项目管理工具 [CMake](https://cmake.org/)

## 数码设计
- [Design - Apple Developer](https://developer.apple.com/design/)
- [Material Design](https://material.io)
- [IBM Design Language](https://www.ibm.com/design/language/), and [Carbon Design System](http://www.carbondesignsystem.com)
- [IBM Plex Font](https://www.ibm.com/plex/)
- [Ant Design](https://ant.design/)

## 杂篇博文
- [高效使用 Mac，从 Alfred 开始（博文合集）](https://sspai.com/topic/237)
- [别再用「六个点」当省略号了，这些标点都有更规范的输入方式](https://sspai.com/post/45516)
- [理解数字世界中的纸张：PDF](https://sspai.com/post/47092)
- [AppleScript 入门：探索 macOS 自动化](https://sspai.com/post/46912)
- [Vue 技术内幕](http://hcysun.me/vue-design/)
- [Design Tip: Never Use Black](https://ianstormtaylor.com/design-tip-never-use-black/)
- [高速上手 C++ 11/14/17](https://changkun.de/modern-cpp/)
- [系统设计入门](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md)
- [Your Body Text Is Too Small](https://blog.marvelapp.com/body-text-small/)
- [Reordering nodes with the Reverse Cuthill-McKee algorithm](http://www.juliafem.org/examples/2017-08-29-reordering-nodes-with-the-RCM-algorithm)
- [Tricks and Tips in Numerical Computing](https://nickhigham.wordpress.com/2018/08/21/tricks-and-tips-in-numerical-computing/)
- [It's Time To Do CMake Right](https://pabloariasal.github.io/2018/02/19/its-time-to-do-cmake-right/)
- [Linux from scratch](http://www.linuxfromscratch.org)
- [Gilles Castel](https://castel.dev)
- [Clear, Functional C++ Documentation with Sphinx + Breathe + Doxygen + CMake](https://devblogs.microsoft.com/cppblog/clear-functional-c-documentation-with-sphinx-breathe-doxygen-cmake/)
- [Modern CMake](https://cliutils.gitlab.io/modern-cmake/)
- [OpenBLAS 项目与矩阵乘法优化](https://www.leiphone.com/news/201704/Puevv3ZWxn0heoEv.html)
- [打造高效的工作环境 – SHELL 篇](https://coolshell.cn/articles/19219.html)
- [Dynamic Wallpaper Club](https://dynamicwallpaper.club)
- [An Even Easier Introduction to CUDA](https://devblogs.nvidia.com/even-easier-introduction-cuda/)
- [It's Time To Do CMake Right](https://pabloariasal.github.io/2018/02/19/its-time-to-do-cmake-right/)
- [Beautiful Native Libraries](http://lucumr.pocoo.org/2013/8/18/beautiful-native-libraries/)
- [Armin Ronacher's Thoughts and Writings](http://lucumr.pocoo.org)
