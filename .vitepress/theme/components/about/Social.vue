<template>
  <p class="social">
    <a href="https://www.xiaohongshu.com/user/profile/635e1b13000000001901eabc" target="_blank" rel="noreferrer" class="social-link">
      <img src="/images/social/xiaohongshu.png" alt="小红书" class="icon xiaohongshu" />
    </a>
    <a href="https://space.bilibili.com/30470407" target="_blank" rel="noreferrer" class="social-link">
      <img src="/images/social/bilibili.svg" alt="小红书" class="icon bilibili" />
    </a>
  </p>
</template>

<style scoped>
.social {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
}

.icon {
  height: 18px;
}

.social-link .icon {
  transition: opacity 0.25s;
}

.social-link:hover .icon {
  opacity: 0.6;
}

.bilibili {
  height: 20px;
}
</style>
