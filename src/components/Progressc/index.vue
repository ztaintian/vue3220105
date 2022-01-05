<template>
  progress
  <div class="progress" :style="{height: height+'px'}">
    <div :style="{width:statu.rote}" class="bar-doing active">
    </div>
    <div class="text">
      {{mesage}}{{statu.rote}}
    </div>
  </div>
</template>

<script setup>
  import {
    reactive
  } from 'vue';
  defineProps({
    height: {
      type: Number,
      default: 50
    },
    mesage: {
      type: String,
      default: '准备开始解析'
    }
  })
  var statu = reactive({
    rote: '50%'
  })
  // statu.rote.value = '100%'
  console.log('statustatu', statu)
  setTimeout(() => {
    statu.rote = '100%'
  }, 2000)
</script>
<style scoped>
  .progress {
    background: #AEAEAE;
    overflow: visible;
    border-radius: 15px;
    position: relative;
  }

  .text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 12px;
  }

  .bar-doing {
    border-radius: 15px;
    background: #21B404;
    position: absolute;
    height: 100%;
  }

  .bar-doing {
    background-image: linear-gradient(135deg,
        rgba(255, 255, 255, .35) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, .35) 50%,
        rgba(255, 255, 255, .35) 75%,
        transparent 75%,
        transparent);
    background-size: 40px 40px;
  }

  .active {
    animation: reverse bar-stripes 1s linear infinite, animate-positive 2s;
  }

  @keyframes animate-positive {
    0% {
      width: 0;
    }
  }

  @keyframes bar-stripes {
    from {
      background-position: 40px 0;
    }

    to {
      background-position: 0 0;
    }
  }
</style>