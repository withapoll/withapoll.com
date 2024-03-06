<template>
  <div class="header">
    <h1>Projects</h1>
  </div>
  <div class="projects-section">
    <div class="project-container">
      <div class="project1">
        <h3>DoubleB</h3>
        <p>A simple CRM app for easy management of your business</p>
        <h4>Redirect</h4>
      </div>
      <!-- todo: devide cards into multiple - header, content, footer -->
      <div class="project2">
        <h3>OneHome</h3>
        <p>Smart App for your Smart Home. Manage not only your home</p>
        <h4>Redirect</h4>
      </div>
      <!-- todo: devide cards into multiple - header, content, footer -->
    </div>
  </div>
  <p class="more-info">More cool stuff you can find on my Github, Behance and Dprofile</p>
  <!-- todo: put section into container -->
</template>

<style scoped>
.header h1 {
  margin-left: 9rem;
  font-size: 5rem;
  color: #444444;
  font-weight: bold;
  font-family:
    JetBrains Mono,
    serif;
}
.projects-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.project-container {
  display: flex;
  gap: 16rem;
  align-items: center;
}

.project1 p,
.project2 p {
  width: 22rem;
  margin-bottom: 8.75rem;
  font-family: Hack, serif;
  font-size: 1.5rem;
}

.project1 h3,
.project2 h3 {
  font-size: 2.5rem;
  font-family:
    JetBrains Mono,
    serif;
}

.project1 h4,
.project2 h4 {
  font-size: 2.25rem;
  font-family: Hack, serif;
}

.more-info {
  margin-left: 9rem;
  font-size: 1.5rem;
}
</style>
