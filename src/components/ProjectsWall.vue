<template>
  <div class="projects-wall">
    <div class="device-tracker">
      <img src="@/assets/projectswall/device-tracker.png" alt="device-tracker" />
    </div>
    <div class="apps-components">
      <img src="@/assets/projectswall/OneHome-widget.png" alt="Onehome widget" />
      <img src="@/assets/projectswall/DoubleB-widget.png" alt="DoubleB widget" />
    </div>
    <div class="smart-home">
      <img src="@/assets/projectswall/smart-home.png" alt="Smart Home" />
    </div>
    <!-- <div class="concepts">
      <img src="@/assets/projectswall/Yandex-Music.png" alt="Yandex Music" />
      <img src="@/assets/projectswall/studio-logo.png" alt=".Studio" />
    </div> -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.projects-wall {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.device-tracker,
.apps-components,
.concepts,
.smart-home {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.device-tracker img,
.apps-components img,
.smart-home img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .projects-wall {
    flex-direction: column;
  }
}
</style>
