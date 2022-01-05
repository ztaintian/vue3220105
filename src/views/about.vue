<template>
  
  <p @click="toUrl">about</p>
</template>
<script setup>
  import { useRoute, useRouter } from 'vue-router'
  const router = useRouter()
  console.log('vvvvvvvvvvvv', router)
  function toUrl() {
    console.log('window.location.host', window.location.host)
    // window.location.href = window.location.host + 'test'
  }
</script>