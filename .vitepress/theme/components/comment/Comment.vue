<script setup lang="ts">
import CommentItem from "@/components/comment/CommentItem.vue"
</script>

<template>
  <div class="comment-system">
    <div class="user-info-wrapper">
      <div class="user-info">
        <div class="user-name">Name</div>
        <div class="login-link">退出登录</div>
      </div>
    </div>
    <div class="comment-items-wrapper">
      <CommentItem />
      <CommentItem />
    </div>
  </div>
</template>

<style scoped>
.comment-system {
  margin-top: 32px;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 14px;
}

.user-info-wrapper {
  border-bottom: 1px solid var(--vp-c-divider);
}

.user-info {
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
}

.user-name {
  font-weight: 600;
}

.login-link {
  font-weight: 500;
  color: var(--vp-c-brand);
  cursor: pointer;
  transition: color 0.25s;
}

.login-link:hover {
  color: var(--vp-c-brand-dark);
}
</style>
