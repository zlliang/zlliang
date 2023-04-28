<template>
  <p class="profile">
    <div class="image-container">
      <img alt="shadow" src="/images/foreignfart-himself.png" width="120" class="shadow" />
      <img alt="Foreignfart himself" src="/images/foreignfart-himself.png" width="120" />
    </div>
    <div>
      <div><strong>姓名：</strong>洋屁君</div>
      <div><strong>年龄：</strong>男 / 26 岁</div>
      <div><strong>学业：</strong>计算数学硕士</div>
      <div><strong>职业：</strong>Web 程序员</div>
    </div>
  </p>
</template>

<style scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.image-container {
  position: relative;
}

.image-container .shadow {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transform: scaleY(.3) skewX(-25deg);
  transform-origin: 50% 90%;
  filter: brightness(0) opacity(0.3) blur(20px);
}

:root.dark .image-container .shadow {
  filter: brightness(0) opacity(0.3) blur(20px) invert(0.8);
}
</style>
