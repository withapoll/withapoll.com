<template>
  <div class="projects-banner">
    <div class="onehome-app">
      <img src="@/assets/projectsbanner/OneHome designs.png" alt="onehome" />
    </div>
    <div class="Rustore-app">
      <img src="@/assets/projectsbanner/Rustore.png" alt="Rustore" />
    </div>
    <div class="Yandex-DoubleB">
      <img src="@/assets/projectsbanner/YandexDoubleB.png" alt="YandexDoubleB" />
    </div>
  </div>
</template>

// todo - fix cards componets size

<style scoped>
.projects-banner {
  margin-top: 54px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.onehome-app,
.Rustore-app,
.Yandex-DoubleB {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.onehome-app img,
.Rustore-app img,
.Yandex-DoubleB img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
@media (max-width: 768px) {
  .projects-banner {
    flex-direction: column;
  }
}
</style>
