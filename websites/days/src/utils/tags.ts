interface Tag {
  slug: string
  display: string
  description: string
}

export const registry = [
  { slug: "choir", display: "合唱", description: "合唱排练、演出准备，以及和合唱相关的体验" },
  { slug: "demo", display: "示例", description: "仅用于示例手记" },
  { slug: "design", display: "设计", description: "设计资源、审美发现、视觉参考，以及与视觉风格相关的手记" },
  { slug: "duku", display: "读库", description: "围绕《读库》及其延伸阅读的持续记录" },
  { slug: "everyday", display: "日常", description: "日常生活、居家琐事、城市闲逛，以及生活中的小节点" },
  { slug: "japan", display: "日本", description: "以日本为核心的文化兴趣、作品、作者、地点或旅行线索" },
  { slug: "monthly", display: "月刊", description: "每月回顾系列" },
  { slug: "photography", display: "摄影", description: "相机、胶片、照片，以及通过摄影记录生活的兴趣和实践" },
  { slug: "reading", display: "阅读", description: "书籍、作者与阅读体验，但不含专门的读库线" },
  { slug: "relationship", display: "感情", description: "伴侣关系、亲密关系，以及围绕关系展开的情绪和经历" },
  { slug: "travel", display: "旅行", description: "旅行计划、旅行过程，以及地点驱动的移动经历" },
  { slug: "watching", display: "观影", description: "电影、剧集、纪录片、视频，以及观看体验" },
  { slug: "work", display: "工作", description: "工作内容、会议、协作、职场情绪与反思" },
  { slug: "writing", display: "写作", description: "写作习惯、写作方法，以及通过写作理解生活或表达自己的手记" },
] as const satisfies readonly Tag[]

export const tagSlugs = registry.map((tag) => tag.slug)
