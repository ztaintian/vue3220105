<template>
  <p>home</p>
  <hello-world @update:show="func">
    1111
    <p class="dada" laber="dada">dasdsadas</p>
    {{doubleCount}}
  </hello-world>
  <input  type="text">
  <!-- <input v-focus type="text">
  <input v-test type="text"> -->
  <!-- <input v-test2 type="text"> -->
  <!-- <input v-test2 type="text"> -->
  <p class="cc" v-test2 v-test3>{{count}}</p>
  <dynamic-comp v-test4 v-model="text"  :tag="'div'">
    <template #header>dasdadadsadad</template>
  </dynamic-comp>
  <my-vue-element></my-vue-element>
  <p @click="toUrl">kkkkkkkk</p>
  <progressc></progressc>
</template>
<script setup>
  import HelloWorld from '@comps/HelloWorld.vue'
  import DynamicComp from '@comps/DynamicComp/index.vue'
  import Progressc from '@comps/Progressc/index.vue'
  import {
    ref,
    computed,
    reactive,
    provide
  } from 'vue'
  import {
    useRoute,
    useRouter
  } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  const count = ref(1)
  var states = reactive({
    text: 'ccc'
  })
  function toUrl() {
    console.log('window.location.host', window.location.host)
    window.location.href = window.location.host + 'test'
  }
  function func(val) {
    console.log(val)
  }
  const text = ref(1)
  // const router = useRouter()
  function update() {
    console.log('update')
  }
  const doubleCount = computed(() => {
    return count.value * 2
  })
  provide('childrenGet', {
    changeName: () => {
      console.log('change')
    }
  })
  console.log('doubleCount', doubleCount.value)
  console.log('adasdasdada', router, route.meta)
  const state = reactive({
    color: 'red'
  })
  state.color="blue"
</script>
<style scoped>
.dada {
  color: v-bind('state.color')
}
.cc {
  max-width: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>