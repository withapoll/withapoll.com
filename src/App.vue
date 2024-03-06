<script setup lang="ts">
import TopBar from './components/TopBar.vue'
import ProjectBanner from './components/ProjectBanner.vue'
import AboutMe from './components/AboutMe.vue'
import ProjectsWall from './components/ProjectsWall.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ArticleSection from './components/ArticleSection.vue'
import DashLine from './components/DashLine.vue'
import MyContacts from './components/MyContacts.vue'
import BottomBar from './components/BottomBar.vue'
</script>

<template>
  <TopBar />
  <ProjectBanner />
  <AboutMe />
  <ProjectsWall />
  <ProjectsSection />
  <ArticleSection />
  <DashLine />
  <MyContacts />
  <BottomBar />
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
