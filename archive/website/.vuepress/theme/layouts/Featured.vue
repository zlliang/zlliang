<template>
<div class="featured-container">
  <FItem id="featured-item-1"
         :title="text.title1"
         :content="text.content1"
         link="/demmel/"/>
  <FItem id="featured-item-2"
         :title="text.title2"
         :content="text.content2"
         link="/news/migrating.html"/>
  <FItem id="featured-item-3" 
         :title="text.title3"
         :content="text.content3"
         link="/projects/essaysense.html"/>
  <FItem id="featured-item-4"
         :title="text.title4"
         :content="text.content4"
         link="https://github.com/zlliang/jacobi-svd/"/>
  <FItem id="featured-item-5" empty="true"/>
  <FItem id="featured-item-6" empty="true"/>
</div>
</template>

<script>
import FItem from '../components/FeaturedItem.vue'
var text = {
  title1: 'Applied Numerical Linear Algebra (English)',
  content1: '这是我在复旦大学《数值代数及其应用》课上的一些材料。',
  
  title2: 'zlliang.com',
  content2: '这个夏天，我努力更新这个个人网站，把它迁移到了 VuePress 和 Netlify。',
  
  title3: '自动作文评分实验 EssaySense',
  content3: '这是我在复旦大学《文本数据管理与分析》课上与一位同学合作的自然语言处理实验项目，它利用神经网络训练了一个英语作文的自动评分系统。',

  title4: 'Jacobi SVD 算法',
  content4: 'Jacobi SVD 算法是一种快速而准确的求矩阵特征值或奇异值分解的算法。我在 2018 年春季《数值代数》讨论班上用 MATLAB 实现了这一算法。'
}
export default {
  components: { FItem },
  data: function() {
    return { text }
  }
}
</script>


<style lang="scss">
@media screen and (min-width: 752px) {
  .featured-container {
    display: grid;
    grid-template-columns: repeat(5, calc(20% - 24px));
    grid-template-rows: repeat(5); 
    grid-gap: 30px;
  }
  #featured-item-1 {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }
  #featured-item-2 {
    grid-column: 3 / 6;
    grid-row: 1 / 2;
  }
  #featured-item-3 {
    grid-column: 3 / 6;
    grid-row: 2 / 4;
  }
  #featured-item-4 {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }
  #featured-item-5 {
    grid-column: 1 / 4;
    grid-row: 4 / 6;
  }
  #featured-item-6 {
    grid-column: 4 / 6;
    grid-row: 4 / 6;
  }
}
</style>
