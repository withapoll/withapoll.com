<template>
  <div class="my-contacts">
    <div class="content">
      <h3>Content</h3>
      <p><a href="https://vc.ru/withapoll">VC</a></p>
      <!-- <p><a href="link-to-behance-profile">Behance</a></p> -->
      <!-- <p><a href="link-to-medium-profile">Medium</a></p> -->
      <p><a href="https://dprofile.ru/withapoll">Dprofile</a></p>
      <p><a href="https://youtube.com/withapoll">YouTube</a></p>
    </div>
    <div class="social">
      <h3>Social</h3>
      <!-- <p><a href="link-to-twitter-profile">Twitter</a></p> -->
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
  margin-left: 9rem;
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
</style>
