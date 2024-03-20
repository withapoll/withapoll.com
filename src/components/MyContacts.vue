<template>
  <div class="my-contacts">
    <div class="content">
      <h3>Content</h3>
      <p><a href="https://vc.ru/u/943980-withapoll">VC</a></p>
      <!-- <p><a href="link-to-behance-profile">Behance</a></p> -->
      <p><a href="https://medium.com/@withapoll">Medium</a></p>
      <p><a href="https://dprofile.ru/apoll">Dprofile</a></p>
      <p><a href="https://www.youtube.com/@withapoll">YouTube</a></p>
    </div>
    <div class="social">
      <h3>Social</h3>
      <p><a href="https://twitter.com/withapoll">Twitter</a></p>
      <p><a href="https://github.com/withapoll">Github</a></p>
      <!-- <p><a href="link-to-linkedin-profile">LinkedIn</a></p> -->
      <p><a href="https://instagram.com/withapoll">Instagram</a></p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.my-contacts {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-left: 5rem;
  margin-top: 4rem;
}

.my-contacts a {
  text-decoration: none;
  color: white;
}

.my-contacts h3 {
  font-size: 1.5rem;
  font-family: 'JetBrains Mono', monospace;
}

.my-contacts p {
  font-size: 1rem;
  font-family: 'Hack', monospace;
}

@media screen and (max-width: 768px) {
  .my-contacts {
    flex-direction: row;
    flex-wrap: wrap;
    width: 85%;
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }
  .my-contacts h3 {
    font-size: 1.5rem;
  }
  .my-contacts p {
    font-size: 1.2rem;
  }
}
</style>
