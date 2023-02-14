<template>
  <div class="comment-item">
    <div class="header">
      <div class="left">
        <div class="user-name">Name</div>
        <div class="reply-info">
          <span>回复</span>
          <span class="link">&nbsp;#6</span>
        </div>
      </div>
      <div class="right">
        <div class="date">2023-02-14 13:04:02</div>
        <div class="id">#5</div>
        <div class="link">回复</div>
      </div>
    </div>
    <div class="content">Content</div>
  </div>
</template>

<style scoped>
.comment-item {
  padding: 16px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

@media (min-width: 768px) {
  .header {
    display: flex;
    justify-content: space-between;
  }
}

.right {
  display: flex;
  gap: 16px;
  color: var(--vp-c-text-2);
  font-size: 12px;
}

@media (min-width: 768px) {
  .right {
    font-size: 14px;
  }
}

.left {
  display: flex;
  gap: 16px;
}

.reply-info {
  color: var(--vp-c-text-2);
}

.user-name {
  font-weight: 600;
}

.content {
  margin-top: 8px;
}

.link {
  color: var(--vp-c-brand);
  cursor: pointer;
  transition: color 0.25s;
}

.link:hover {
  color: var(--vp-c-brand-dark);
}
</style>
