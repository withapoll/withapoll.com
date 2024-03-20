<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
    <span class="progress-text">{{ progressBarWidth.toFixed(0) }}%</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progressBarWidth = ref(0)

const updateProgressBar = () => {
  const scrollTop = window.pageYOffset
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  progressBarWidth.value = (scrollTop / scrollHeight) * 100
}

onMounted(() => {
  window.addEventListener('scroll', updateProgressBar)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgressBar)
})
</script>

<style scoped>
.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111111;
  opacity: 0.8;
}

.progress-bar {
  height: 4px;
  background: linear-gradient(to left, #a371f7, #418dff, #fc3f1d);
  border-radius: 2rem;
}

.progress-text {
  font-size: 16px;
  color: whitesmoke;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
