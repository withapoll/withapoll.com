<script setup lang="ts"></script>

<template>
  <div class="profile">
    <div class="my_photo">
      <img src="@/assets/me.jpg" alt="my_photo" />
    </div>
    <div class="about_me">
      <p>
        Hi, I’m Andrew. I am a designer and software developer based in Russia, Moscow. Also I have
        a blog on Medium and vc.ru
      </p>
      <p>I’m currently studying FullStack Development at Moscow IT college.</p>
      <p>
        I’ve worked as a UX UI Designer at neiroseti.ai which is a resident of Skolkovo in Russia.
        Currently preparing for internships in Yandex and red_mad_robot as an Android Developer.
      </p>
      <p>You can email me at withapoll@outlook.com, get my CV or add me on LinkedIn</p>
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.my_photo,
.about_me {
  width: 75%;
  margin: 0 auto;
}

.my_photo img {
  width: 100%;
  height: auto;
}

.about_me {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 920px;
}

.about_me p {
  font-size: 24px;
}

.my_photo img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
