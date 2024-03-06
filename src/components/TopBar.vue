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
      <p class="city">moscow</p>
      <p class="data-time">friday, 18:00</p>
    </div>
    <div class="top-bar__links">
      <p>work</p>
      <p>contacts</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// add time method here
</script>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  height: 5rem;
  background: #111111;
}
@media screen and (max-width: 768px) {
  .top-bar {
    width: 50%;
  }
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
</style>
