<template>
  <div class="projects">
    <div class="header">
      <h1>Projects</h1>
    </div>
    <div class="project-cards">
      <div class="project-card">
        <h3>DoubleB</h3>
        <p>A simple CRM app for easy management of your business</p>
        <h4>Redirect</h4>
      </div>
      <div class="project-card">
        <h3>OneHome</h3>
        <p>Smart App for your Smart Home. Manage not only your home</p>
        <h4>Redirect</h4>
      </div>
    </div>
    <p class="more-info">More cool stuff you can find on my Github, Behance, and Dprofile</p>
  </div>
</template>

<style scoped>
.projects {
  text-align: left;
  margin-left: 1%;
}

.header h1 {
  font-size: 4.5rem;
  color: #444444;
  font-weight: bold;
  font-family: 'JetBrains Mono', sans-serif;
  margin-left: 1.5rem;
}

.project-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin-left: 1.5rem;
}

.project-card {
  flex: 1 1 300px;
  margin: 10px;
  padding: 20px;
}

.project-card h3 {
  font-size: 2rem;
  font-family: 'JetBrains Mono', monospace;
}
.project-card p {
  font-size: 1.5rem;
  font-family: 'Hack', monospace;
}

.project-card h4 {
  font-size: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
}

.more-info {
  font-size: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  margin-left: 1.5rem;
}

@media (max-width: 768px) {
  .project-cards {
    flex-direction: column;
    align-items: center;
  }
}
</style>
