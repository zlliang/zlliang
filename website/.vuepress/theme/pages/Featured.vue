<template>
<div class="featured-container">
  <FItem id="featured-item-1"
         :title="text['title1'][$lang]"
         :content="text['content1'][$lang]"
         link="https://github.com/zlliang/jacobi-svd/"
         bgc="linear-gradient(to right bottom, #9f353a, #d75455)"
         color="white"/>
  <FItem id="featured-item-2"
         :title="text['title2'][$lang]"
         :content="text['content2'][$lang]"
         link="/news/migrating.html"
         bgc="linear-gradient(to right bottom, #227d51, #91b493)"
         color="white"/>
  <FItem id="featured-item-3" 
         :title="text['title3'][$lang]"
         :content="text['content3'][$lang]"
         link="/projects/essaysense.html"
         bgc="linear-gradient(to right bottom, #0089a7, #81c7d4)"
         color="white"/>
  <FItem id="featured-item-4" empty="true"/>
  <FItem id="featured-item-5" empty="true"/>
  <FItem id="featured-item-6" empty="true"/>
</div>
</template>

<script>
import FItem from '../components/FeaturedItem.vue'
var text = {
  title1: {
    'en-US': 'Jacobi SVD algorithm',
    'zh-CN': 'Jacobi SVD 算法'
  },
  content1: {
    'en-US': 'I implemented Jacobi SVD algorithm in 2018 Seminar of Numerical Linear Algebra at School of Mathematical Sciences, Fudan University. It\'s a fast and accurate algorithm to compute eigenvalues and SVD.',
    'zh-CN': 'Jacobi SVD 算法是一种快速而准确的求矩阵特征值或奇异值分解的算法。我在 2018 年春季《数值代数》讨论班上用 MATLAB 实现了这一算法。'
  },
  title2: {
    'en-US': 'zlliang.com',
    'zh-CN': 'zlliang.com'
  },
  content2: {
    'en-US': 'This summer I make an effort on building this website! Now It\'s working on VuePress and Netlify.',
    'zh-CN': '这个夏天，我努力更新这个个人网站，把它迁移到了 VuePress 和 Netlify。'
  },
  title3: {
    'en-US': 'EssaySense: Automated Essay Scoring',
    'zh-CN': '自动作文评分实验 EssaySense'
  },
  content3: {
    'en-US': 'EssaySense is an NLP project on Automated Essay Scoring, based on neural network technologies. As the final project of an NLP course in Fudan University, I complete it along with a classmate.',
    'zh-CN': '这是我在复旦大学《文本数据管理与分析》课上与一位同学合作的自然语言处理实验项目，它利用神经网络训练了一个英语作文的自动评分系统。'
  },
  title4: {

  },
  content4: {

  },
  title5: {

  },
  content5: {

  },
  title6: {

  },
  content6: {
    
  }
}
export default {
  components: { FItem },
  data: function() {
    return {
      text: text
    }
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
