<script setup lang="ts">
import { ref, watch, nextTick } from "vue"
import { useRoute } from "vitepress"

import CommentWriting from "@/components/comment/CommentWriting.vue"
import CommentItem from "@/components/comment/CommentItem.vue"

import { supabase } from "@/supabase"

const route = useRoute()

watch(() => route.path, (path) => fetchComments(path, true), { immediate: true })

const comments = ref<any>([])
const loading = ref(false)

async function fetchComments (path = route.path, clear = false) {
  await nextTick()
  if (clear) comments.value = []

  try {
    if (clear) loading.value = true

    const { data } = await supabase.from("comments")
      .select()
      .eq('post_id', path)
      .order('id', { ascending: false })
    
    comments.value = data
  } finally {
    loading.value = false
  }
}

const replyId = ref<number | null>(null)

async function reply(id: number | null) {
  replyId.value = id

  if (id) {
    const el = document.getElementById("comment-writing")
    el?.scrollIntoView({ behavior: "smooth", block: "center" })
  }
}

function scroll(id: number) {
  const el = document.getElementById(`comment-${id}`)
    el?.scrollIntoView({ behavior: "smooth", block: "center" })
}
</script>

<template>
  <div class="comment-system">
    <div class="toolbar-wrapper">
      <div class="toolbar">
        <div class="title">评论区</div>
        <div class="description">感谢你的评论，ありがとうございます！🙇</div>
      </div>
    </div>
    <div class="writing" id="comment-writing">
      <CommentWriting
        :replyId="replyId"
        :comments="comments"
        @submitted="fetchComments"
        @clearReply="reply(null)"
        @scroll="scroll"
      />
    </div>
    <div>
      <div v-if="loading" class="loading">
        加载中……
      </div>
      <div v-else-if="!comments.length" class="empty">
        目前暂无评论呢…… 😮‍💨
      </div>
      <template v-else>
        <CommentItem
          v-for="item in comments"
          :key="item.id"
          :value="item"
          @reply="reply"
          @scroll="scroll"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.comment-system {
  margin-top: 108px;
  font-size: 14px;
}

.toolbar-wrapper {
  border-bottom: 1px solid var(--vp-c-divider);
}

.toolbar {
  padding: 8px 0;
  display: flex;
  gap: 16px;
}

.title {
  font-weight: 500;
}

.description {
  color: var(--vp-c-text-2);
}

.writing {
  padding: 16px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.loading,
.empty {
  margin-top: 16px;
  color: var(--vp-c-text-3);
}
</style>
