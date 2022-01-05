import { createApp } from 'vue'
import App from './App.vue'
import router from '@router/index.js'
import './components/component.js'
import directive from  './plugin/directive/index.js'
import print from 'vue3-print-nb'
createApp(App).directive('test4', {
  mounted(el, binding) {
    console.log('el4', el, binding)
    
  }
}).use(directive).use(router).use(print).mount('#app')



