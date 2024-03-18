<template>
  <div class="top-bar">
    <div class="top-bar__logo">
      <svg
        width="82"
        height="82"
        viewBox="0 0 82 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="82" height="82" fill="#111111" fill-opacity="0.0666667" />
        <path
          d="M21.5417 16.125H59.4583V21.5417H21.5417V16.125ZM21.5417 59.4583H16.125V21.5417H21.5417V59.4583ZM59.4583 59.4583V64.875H21.5417V59.4583H59.4583ZM59.4583 59.4583H64.875V21.5417H59.4583V59.4583ZM35.0833 29.6667H29.6667V35.0833H35.0833V29.6667ZM45.9167 29.6667H51.3333V35.0833H45.9167V29.6667ZM32.375 45.9167V40.5H26.9583V45.9167H32.375ZM48.625 45.9167V51.3333H32.375V45.9167H48.625ZM48.625 45.9167H54.0417V40.5H48.625V45.9167Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="my_location">
      <p class="city">Moscow</p>
      <p class="data-time">{{ currentTime }}</p>
    </div>
    <div class="top-bar__links" @click="toggleMenu">
      <p v-if="!isMobile">work</p>
      <p v-if="!isMobile">contacts</p>
      <div v-if="isMobile" class="menu-icon" :class="{ open: isMenuOpen }" @click="toggleMenu">
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.375 26.25V23.3333H30.625V26.25H4.375ZM4.375 18.9583V16.0417H30.625V18.9583H4.375ZM4.375 11.6667V8.75H30.625V11.6667H4.375Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    <div class="side-menu" v-show="isMenuOpen">
      <p>Work</p>
      <p>Contacts</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isMobile = ref(false)
const isMenuOpen = ref(false)
const currentTime = ref('')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const updateTime = () => {
  const date = new Date()
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Europe/Moscow',
    hour: '2-digit',
    minute: '2-digit'
  }
  const formatter = new Intl.DateTimeFormat('en-GB', options)
  currentTime.value = formatter.format(date)
}

onMounted(() => {
  const isMobileDevice = window.matchMedia('(max-width: 768px)').matches
  isMobile.value = isMobileDevice
  updateTime()
  setInterval(updateTime, 1000)
})
</script>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  height: 5rem;
}

.my_location {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
.city {
  margin-bottom: 0.5rem;
}
.data-time {
  margin-top: 0.2rem;
}
.top-bar__links {
  font-size: 1.5rem;
}

.top-bar__logo svg {
  width: 80%;
  height: auto;
}

.top-bar__links p {
  display: block;
}

.menu-icon {
  cursor: pointer;
  padding: 1rem;
}

.side-menu {
  position: fixed;
  right: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background-color: #fff;
  padding: 1rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.side-menu p {
  margin-bottom: 1rem;
}

.menu-icon.open + .side-menu {
  transform: translateX(0);
}

@media screen and (min-width: 768px) {
  .menu-icon {
    display: none;
  }
  .top-bar__links p {
    display: block;
  }
}
</style>
