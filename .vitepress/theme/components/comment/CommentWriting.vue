<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vitepress"

import TextArea from "@/components/comment/TextArea.vue"

import { supabase } from "@/supabase"

const props = defineProps<{
  replyId: number | null,
  comments: any[],
}>()

const emit = defineEmits(["submitted", "clearReply", "scroll"])

const route = useRoute()

const name = ref("")
const content = ref("")
const error = ref("")

function clear() {
  name.value = ""
  content.value = ""
  emit("clearReply")
}

function clearError() {
  error.value = ""
}

function validate () {
  if (!name.value) {
    error.value = "请填写你的称呼～"
    return false
  }

  if (!content.value) {
    error.value = "请填写评论内容～"
    return false
  }

  return true
}

async function submit() {
  if (!validate()) return

  const { data, error } = await supabase
    .from('comments')
    .insert({
      name: name.value,
      content: content.value,
      post_id: route.path,
      reply_id: props.replyId || undefined,
    })
    .select()

  if (props.replyId) {
    console.log(props.comments)
    const id = data?.[0]?.id
    const comment = props.comments.find((item) => item.id === props.replyId)

    if (comment) {
      const { error } = await supabase
        .from('comments')
        .update({ referred_ids: [...new Set([...(comment.referred_ids || []), id])] })
        .eq('id', props.replyId)
    }
  }

  clear()
  emit('submitted')
}
</script>

<template>
  <div>
    <div class="header">
      <div>
        <span>该怎么称呼你呢：</span>
        <input
          v-model="name"
          placeholder="怎么称呼你呢？"
          class="name-input"
          @change="clearError"
        />
      </div>
      <span v-if="props.replyId" class="right">
        <span>回复</span>
        <span @click="emit('scroll', props.replyId)" class="link">#{{ props.replyId }}</span>
        <span @click="emit('clearReply')" class="link clear-reply">不回复了</span>
      </span>
    </div>
    <div class="content-textarea">
      <TextArea
        v-model="content"
        placeholder="那么，在这里写下你想说的话。"
        @change="clearError"
      />
    </div>
    <div class="operations">
      <span @click="submit" class="link submit">提交评论</span>
      <span v-if="error" class="error">{{ error }}</span>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
  .header {
    display: flex;
    justify-content: space-between;
  }
}

.name-input {
  margin-left: 8px;
  padding: 4px 0;
  width: 180px;
  max-width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 14px;
  line-height: 16px;
  transition: border-bottom-color 0.2s;
}

.name-input:hover,
.name-input:focus {
  border-bottom-color: var(--vp-c-brand);
}

.right {
  display: flex;
  gap: 4px;
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

.clear-reply {
  margin-left: 8px;
}

.content-textarea {
  margin: 8px 0;
}

.operations {
  display: flex;
  gap: 16px;
}

.submit {
  font-weight: 500;
}

.error {
  color: var(--vp-badge-warning-text);
}
</style>
