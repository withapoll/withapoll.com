<template>
  <div class="footer">
    <div class="credits">
      <p>©2024</p>
      <p>withapoll</p>
    </div>
    <div class="footer-text">restart</div>
    <div class="footer-logo">
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.4168 8.125H27.5835V13.5417H22.1668V24.375H27.5835V29.7917H30.2918V51.4583H16.7502V40.625H22.1668V35.2083H11.3335V51.4583H16.7502V56.875H49.2502V51.4583H54.6668V35.2083H43.8335V40.625H49.2502V51.4583H35.7085V29.7917H38.4168V24.375H43.8335V13.5417H38.4168V8.125ZM38.4168 13.5417V24.375H27.5835V13.5417H38.4168Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const restartButton = document.querySelector('.footer-text')
  if (restartButton) {
    restartButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }
})
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
}
.credits p:first-child {
  margin-bottom: 0.5rem;
}

.credits p:last-child {
  margin-top: 0.5rem;
}
.footer-logo svg {
  width: 75%;
}

.footer-text .credits .footer-text {
  font-size: 1rem;
  font-family: 'Hack', monospace;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .footer {
    flex-direction: column;
  }
  .footer-logo {
    margin-top: 1rem;
  }
  .footer-text .credits .footer-text {
    font-size: 1.5rem;
  }
  .credits {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .credits p:last-child {
    margin-top: 0.5rem;
  }
  .credits p:first-child {
    margin-bottom: 0.5rem;
  }
  .footer-logo svg {
    width: 65%;
    margin-left: 1rem;
  }
  .footer-text .credits .footer-text {
    font-size: 1.5rem;
  }
}
</style>
