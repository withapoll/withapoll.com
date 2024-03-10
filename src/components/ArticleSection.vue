<template>
  <div class="articles">
    <div class="header">
      <h1>Articles</h1>
    </div>
    <div class="article-cards">
      <div class="article-card">
        <div class="card-header">
          <h3>OneHome</h3>
          <svg
            width="57"
            height="58"
            viewBox="0 0 57 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.3795 25.2617L20.0347 39.6066L17.6777 37.2496L32.0225 22.9047L19.3794 22.9047L19.3794 19.5719L37.7124 19.5719L37.7124 37.9048L34.3795 37.9048L34.3795 25.2617Z"
              fill="white"
            />
          </svg>
        </div>
        <p>Smart app for your Smart Home. Design case from Hackathon.</p>
        <div class="card-footer">
          <div class="redirect">
            <a
              href="https://vc.ru/design/653295-umnoe-prilozhenie-dlya-umnogo-doma-onehome-dizayn-keys-s-hakatona"
            >
              <h4>Redirect</h4>
            </a>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 18.3334H26.81L19.31 10.8334L21.6667 8.47668L33.19 20L21.6667 31.5233L19.31 29.1667L26.81 21.6667H7.5V18.3334Z"
                fill="white"
              />
            </svg>
          </div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0002 6.66669H33.3335V10H36.6668V20H23.3335V23.3334H33.3335V26.6667H26.6668V30H23.3335V33.3334H3.3335V13.3334H6.66683V10H10.0002V6.66669ZM13.3335 16.6667H16.6668V13.3334H13.3335V16.6667Z"
              fill="#A6EFA0"
            />
          </svg>
        </div>
      </div>
      <div class="article-card">
        <div class="card-header">
          <h3>RuStore</h3>
          <svg
            width="57"
            height="58"
            viewBox="0 0 57 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.3795 25.2617L20.0347 39.6066L17.6777 37.2496L32.0225 22.9047L19.3794 22.9047L19.3794 19.5719L37.7124 19.5719L37.7124 37.9048L34.3795 37.9048L34.3795 25.2617Z"
              fill="white"
            />
          </svg>
        </div>
        <p>What's wrong with the design of the Russian app store developed by VK team?</p>
        <div class="card-footer">
          <div class="redirect">
            <a
              href="https://vc.ru/design/470947-redizayn-rustore-chto-ne-tak-s-dizaynom-rossiyskogo-magazina-prilozheniy-ot-komandy-vk"
            >
              <h4>Redirect</h4>
            </a>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 18.3334H26.81L19.31 10.8334L21.6667 8.47668L33.19 20L21.6667 31.5233L19.31 29.1667L26.81 21.6667H7.5V18.3334Z"
                fill="white"
              />
            </svg>
          </div>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9998 3.33337H8.33317V6.66671H4.99984V10H1.6665V20H4.99984V23.3334H8.33317V26.6667H11.6665V30H14.9998V33.3334H18.3332V36.6667H21.6665V33.3334H24.9998V30H28.3332V26.6667H31.6665V23.3334H34.9998V20H38.3332V10H34.9998V6.66671H31.6665V3.33337H24.9998V6.66671H21.6665V10H18.3332V6.66671H14.9998V3.33337ZM14.9998 6.66671V10H18.3332V13.3334H21.6665V10H24.9998V6.66671H31.6665V10H34.9998V20H31.6665V23.3334H28.3332V26.6667H24.9998V30H21.6665V33.3334H18.3332V30H14.9998V26.6667H11.6665V23.3334H8.33317V20H4.99984V10H8.33317V6.66671H14.9998Z"
              fill="#6A79FF"
            />
          </svg>
        </div>
      </div>
    </div>
    <p class="more-info">
      More cool stuff you can find on my <a href="https://medium.com/withapoll">Medium</a> and
      <a href="https://vc.ru/u/943980-withapoll">VC</a>
    </p>
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
  width: 85%;
  margin-left: 1rem;
  gap: 2.5rem;
}

.article-card {
  flex: 1 1 300px;
  padding: 2rem;
}

.article-card h3 {
  font-size: 2rem;
  font-family: 'JetBrains Mono', monospace;
}
.article-card p {
  font-size: 1.5rem;
  font-family: 'Hack', monospace;
  font-weight: normal;
}

.article-card h4 {
  font-size: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
}

.card-header {
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-family: 'JetBrains Mono', monospace;
}
.card-header h3,
h4 {
  font-weight: normal;
}

.project-card p {
  font-size: 1.5rem;
  font-family: 'Hack', monospace;
  font-weight: normal;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
}

.redirect {
  display: flex;
  align-items: center;
}

.redirect a {
  text-decoration: none;
  color: inherit;
}

.more-info {
  font-size: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
  margin-left: 1.5rem;
}

.more-info a {
  text-decoration: underline;
  color: inherit;
  font-weight: normal;
}

@media (max-width: 768px) {
  .project-cards {
    flex-direction: column;
    align-items: center;
  }
}
</style>
