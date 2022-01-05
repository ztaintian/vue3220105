<template>
  <component  :is="tag" @input="$emit('update:modelValue', $event.target.value)">
    <slot name="header" />
    dasdadas
  </component>
</template>
<script setup>
defineProps({
  tag: {
    type: String,
    default: 'span'
  }
})
// console.log('$attrs$attrs', $attrs)
</script>
