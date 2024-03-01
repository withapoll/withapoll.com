<template>
  <div class="header">
    <h1>Artciles</h1>
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
</template>

<style scoped>
.header h1 {
  margin-left: 200px;
  font-size: 64px;
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
  gap: 150px;
  align-items: center;
}

.article1 p,
.article2 p {
  width: 350px;
  margin-bottom: 140px;
  font-family: Hack, serif;
  font-size: 24px;
}

.article1 h3,
.article2 h3 {
  font-size: 24px;
  font-family:
    JetBrains Mono,
    serif;
}

.article1 h4,
.article2 h4 {
  font-size: 24px;
  font-family: Hack, serif;
}
</style>
