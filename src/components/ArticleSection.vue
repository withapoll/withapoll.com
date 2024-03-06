<template>
  <div class="articles">
    <div class="header">
      <h1>Articles</h1>
    </div>
    <div class="article-cards">
      <div class="article-card">
        <h3>OneHome</h3>
        <p>Smart app for your Smart Home. Design case from Hackathon.</p>
        <h4>Redirect</h4>
      </div>
      <div class="article-card">
        <h3>RuStore</h3>
        <p>What's wrong with the design of the Russian app store developed by VK team?</p>
        <h4>Redirect</h4>
      </div>
    </div>
    <p class="more-info">More cool stuff you can find on my Medium and VC</p>
  </div>
</template>

<style scoped>
.articles {
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

.article-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin-left: 1.5rem;
}

.article-card {
  flex: 1 1 300px;
  margin: 10px;
  padding: 20px;
}

.article-card h3 {
  font-size: 2rem;
  font-family: 'JetBrains Mono', monospace;
}
.article-card p {
  font-size: 1.5rem;
  font-family: 'Hack', monospace;
}

.article-card h4 {
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
