<script setup lang="ts">
import { format } from 'date-fns'

const props = defineProps<{
  value: any
}>()

const emit = defineEmits(['reply', 'scroll'])

function formatDate(date: string) {
  return format(new Date(date), 'yyyy-MM-dd HH:mm:ss')
}
</script>

<template>
  <div :id="`comment-${props.value.id}`" class="comment-item">
    <div class="header">
      <div class="left">
        <div class="user-name">
          {{ props.value.name || '不具名人士' }}
        </div>
        <div v-if="props.value.reply_id" class="reply-info">
          <span>回复</span>
          <span class="link" @click="emit('scroll', props.value.reply_id)">#{{ props.value.reply_id }}</span>
        </div>
      </div>
      <div class="right">
        <div class="date">
          {{ formatDate(props.value.created_at) }}
        </div>
        <div class="id">
          #{{ props.value.id }}
        </div>
        <div class="link" @click="emit('reply', props.value.id)">
          回复
        </div>
      </div>
    </div>
    <div v-if="props.value.hidden" class="content hidden">
      <span>😶‍🌫️ 这条评论内容被折叠了。</span>
      <span v-if="props.value.hidden_reason">原因是：{{ props.value.hidden_reason }}</span>
    </div>
    <div v-else class="content">
      {{ props.value.content }}
    </div>
    <div v-if="props.value.referred_ids && props.value.referred_ids.length" class="referred">
      <span>有人回复了这条评论：</span>
      <span v-for="(id, index) in props.value.referred_ids" :key="id">
        <span v-if="index > 0">,&nbsp;</span>
        <span class="link" @click="emit('scroll', id)">#{{ id }}</span>
      </span>
    </div>
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
  margin-top: 4px;
  color: var(--vp-c-text-3);
  font-size: 12px;
}

@media (min-width: 768px) {
  .right {
    margin-top: 0;
    font-size: 14px;
  }
}

.left {
  display: flex;
  gap: 16px;
}

.reply-info {
  display: flex;
  gap: 4px;
  color: var(--vp-c-text-3);
}

.user-name {
  font-weight: 500;
}

.content {
  margin-top: 8px;
  white-space: pre-line;
}

.hidden {
  color: var(--vp-c-text-3);
}

.referred {
  margin-top: 8px;
  font-size: 12px;
  color: var(--vp-c-text-3);
}
</style>
