---
emoji: 🦀
title: Rust 社区两年以来的闹剧
created: 2024-01-03
summary: 过去两三年，Rust 语言成长速度飞快，社区逐渐壮大。但于此同时，它的领导层也闹出了很多非常 drama 的大新闻，堪比宫斗。
---

过去两三年，Rust 语言成长速度飞快，社区逐渐壮大。但于此同时，它的领导层也闹出了很多非常 drama 的大新闻，堪比宫斗。这在其他语言的治理历史中是很少见的。今天我花了一点时间，了解了下这段历史。

Rust 领导层最初分为许多 team，有 library team、cargo team、compiler team 等等，分别负责一块领域。其中最核心的是 core team，主导各 team 的工作，是 Rust 的中心决策小组。然而 core team 从 2020 年开始，就显露出 drama 的气氛：[Rust 1.44 的发布博文](https://blog.rust-lang.org/2020/06/04/Rust-1.44.0.html)中，重点提到当时席卷美国舆论的“黑命贵”话题，指出“tech is and always will be political”，呼吁大家去支持。关于这个事件，可以看[这篇知乎问答](https://www.zhihu.com/question/399637424)。

无独有偶，2022 年 2 月，俄乌战争闹得正凶，于是 Rust 1.59 的发布博文中，又高调地声明了对乌克兰的支持。为此，社区内的一些成员发表了担忧，称技术板块不应该夹杂政治。[这篇文章]( https://www.oschina.net/news/185794/rust-community-locked-post)对该事件做了大概的总结。

另外一边，2021 年底，Rust moderation team 突然[在 GitHub 上宣布全体辞职](https://github.com/rust-lang/team/pull/671)，他们声称 core team 成为了不受监督、只管发号施令的小圈子，社区的 code of conduct 成为了他们排挤社区成员的工具。[开源中国发表了一篇文章](https://www.oschina.net/news/170443/rust-mod-team-resignation)分析说，他们之间的矛盾可能来源于 core team 的一名成员 Ashley Williams 滥用 CoC 作为武器，想要大拦权力于身。于是 2022 年末，Ashley 等两位 core team 的“有争议成员”离开团队，风波告一段落。关于这件事，可以参见[开源中国的这篇文章](https://www.oschina.net/news/202847/rust-core-team-change)。

2023 年，又有两件事情让 Rust 又黑红了一把。一件是 Rust 基金会的商标政策草案风波：4 月，基金会发布了新的[政策草案](https://www.infoq.cn/article/rJzSoNk3t5aNHccTa9Hh)，限制包括禁止在 Rust 相关工具或用 Rust 编写的软件的名字中使用 Rust，甚至在域名或子域名的部分也禁止使用 Rust。这引发了社区中很多开发者的担忧。后来，官方博客发布[道歉文章](https://blog.rust-lang.org/inside-rust/2023/04/12/trademark-policy-draft-feedback.html)；社区也发布了 Rust 语言的 fork 项目 [CrabLang](https://www.oschina.net/news/243166/crablang)，以表示抗议。

另一件，是近期 Rust 大风波的一个高潮：RustConf 2023 演讲事件。资深人士 JeanHeyd Meneide 被邀请在这次大会上作主旨演讲（keynote），但是在长时间的准备过后，他被无理由通知，演讲规格将为常规演讲（regular talk）。他发布了[博文](https://thephd.dev/i-am-no-longer-speaking-at-rustconf-2023)，表示受到了侮辱并拒绝参加大会。这引发了一连串事件：Rust core team 成员 June Turner 辞职、社区骂声一片，多位社区大牛发文表示自己的态度。最终，Rust 官方[发布博文致歉](https://blog.rust-lang.org/2023/05/29/RustConf.html)，并决定考虑新的领导架构。关于这件事，可以参考下面几篇文章：

- [Rust 社区管理再起“内讧”，外部专家遭排挤，核心成员主动请辞，立即生效！](https://zhuanlan.zhihu.com/p/633388674)
- [Am No Longer Speaking at RustConf 2023](https://thephd.dev/i-am-no-longer-speaking-at-rustconf-2023)
- [On the RustConf keynote](https://blog.rust-lang.org/2023/05/29/RustConf.html)
- [Why I left Rust](https://www.jntrnr.com/why-i-left-rust/)
- [Rust: The wrong people are resigning](https://fasterthanli.me/articles/rust-the-wrong-people-are-resigning)
- [The RustConf Keynote Fiasco, explained](https://fasterthanli.me/articles/the-rustconf-keynote-fiasco-explained)
- [不该走的人正被逼走，RustConf 粗暴撤换主讲人事态升级引发多人出走，根源出在 Rust 领导小组不愿交权？](https://www.infoq.cn/article/3vsBhtLeXU3QzBDuJ7AZ)

这一系列的风波导致 Rust 语言领导层重新思考其组织形式。2023 年中，Rust 提出解散 core team 并重新组成 leadership council，将原先 core team 的大部分权力下放给各团队。开源中国发表了两篇文章讨论这件事：[替代核心团队、下放权力，Rust 发布新治理模型草案](https://www.oschina.net/news/230863/rust-project-new-governance-plan-rfc)、 [Rust 管理结构大改：解散核心团队、成立 “领导委员会”](https://www.oschina.net/news/246227/rust-leadership-council)。至此，终于没有新的风波了。

我在腾讯内网的问答专区里找到一位大佬的评论，讲得很客观，我贴在这里：

> Rust 社区总体而言处于一种混乱的但自治的状态，这个时候你可能更倾向于一种类似 Go 语言那种由公司主导的，或者像 Linux 有那样一个不那么仁慈的独裁者，或者像 Python 之父那样的一个仁慈的独裁者。
> 
> 当然事情都是有正反两方面的，你不能既要这个又要那个。在一个散乱的社区中，Rust 从 2015 年发展到现在，其创始人早已去做了其他事情，但是 Rust 依旧收获了掌声，在社区的反馈中不断成长（你可以看到 Rust 团队很愿意倾听并对此作出改变）。你不用担心它被某个公司垄断，或者因某个公司的战略转向而遗弃。社区中的怨念和担忧会很快发酵并且消失，不会因为长久的积累导致问题被淹没，我认为这是一种合理且良性的发展，因此总体上我认为 Rust 社区是优秀而包容的。
