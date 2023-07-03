<script setup lang="ts">
/** Autogrowing textarea (See: https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/) */
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string
  }>(),
  {
    modelValue: '',
  },
)

const emit = defineEmits(['update:modelValue', 'change'])

const wrapper = ref<HTMLDivElement | null>(null)

function onInput(event: Event) {
  const value = (event.target as HTMLTextAreaElement)?.value || ''
  if (wrapper.value)
    wrapper.value.dataset.replicatedValue = value

  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<template>
  <div ref="wrapper" class="textarea-wrapper">
    <textarea
      :value="props.modelValue"
      v-bind="$attrs"
      class="textarea"
      @input="onInput"
    />
  </div>
</template>

<style scoped>
.textarea-wrapper {
  /* Easy way to plop the elements on top of each other and have them both sized based on the tallest one's height */
  display: grid;
}

.textarea-wrapper::after {
  /* Note the weird space! Needed to preventy jumpy behavior */
  content: attr(data-replicated-value) " ";
  /* This is how textarea text behaves */
  white-space: pre-wrap;
  /* Hidden from view, clicks, and screen readers */
  visibility: hidden;
}

.textarea-wrapper > textarea {
  /* You could leave this, but after a user resizes, then it ruins the auto sizing */
  resize: none;
  /* Firefox shows scrollbar on growth, you can hide like this. */
  overflow: hidden;
}

.textarea-wrapper > textarea,
.textarea-wrapper::after {
  /* Place on top of each other */
  grid-area: 1 / 1 / 2 / 2;
  padding: 8px 12px;
  min-height: 108px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: none;
  font: inherit;
  transition: border-color 0.2s;
}

.textarea-wrapper > textarea:hover,
.textarea-wrapper > textarea:focus {
  border-color: var(--vp-c-brand);
}
</style>
