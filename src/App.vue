<script setup lang="ts">
import TopBar from './components/TopBar.vue'
import ProjectBanner from './components/ProjectBanner.vue'
import AboutMe from './components/AboutMe.vue'
import ProjectsWall from './components/ProjectsWall.vue'
import ProjectsSection from './components/ProjectsSection.vue'
</script>

<template>
  <TopBar />
  <ProjectBanner />
  <AboutMe />
  <ProjectsWall />
  <ProjectsSection />
</template>

<style>
::-webkit-scrollbar {
  display: none;
}

html {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
