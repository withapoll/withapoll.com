<template>
  <div class="header">
    <h1>Articles</h1>
  </div>
  <div class="articles-section">
    <div class="article-container">
      <div class="article1">
        <h3>OneHome</h3>
        <p>Smart app for you Smart Home. Design case from Hackathon.</p>
        <h4>Redirect</h4>
      </div>
      <!-- todo: devide cards into multiple - header, content, footer -->
      <div class="article2">
        <h3>RuStore</h3>
        <p>What's wrong with the design of the Russian app store developed by VK team?</p>
        <h4>Redirect</h4>
      </div>
      <!-- todo: devide cards into multiple - header, content, footer -->
    </div>
  </div>
  <p class="more-info">More cool stuff you can find on my Medium and VC</p>
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
.articles-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.article-container {
  display: flex;
  gap: 16rem;
  align-items: center;
}

.article1 p,
.article2 p {
  width: 22rem;
  margin-bottom: 8.75rem;
  font-family: Hack, serif;
  font-size: 1.5rem;
}

.article1 h3,
.article2 h3 {
  font-size: 2.5rem;
  font-family:
    JetBrains Mono,
    serif;
}

.article1 h4,
.article2 h4 {
  font-size: 2.25rem;
  font-family: Hack, serif;
}

.more-info {
  margin-left: 9rem;
  font-size: 1.5rem;
}
</style>
