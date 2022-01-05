<script setup>
import { ref, inject  } from 'vue'


defineProps({
  msg: String
})

var aa = inject('childrenGet')
aa.changeName()
const count = ref(0)
</script>

<template>
  <button @click="buttonClick">
    {{$slots.default()[0].props}}
    <p v-if="$slots.default">dadad</p>
    <slot></slot>
  </button>
  <span @click="$emit('update:show', 'ffff')">emit</span>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
