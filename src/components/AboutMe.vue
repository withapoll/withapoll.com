<script setup lang="ts"></script>

<template>
  <div class="profile">
    <div class="my_photo">
      <img src="@/assets/me.jpg" alt="my_photo" />
    </div>
    <div class="about_me">
      <p>
        <span class="highlight-job">Hi, I’m Andrew.</span> I am a designer and software developer
        based in Russia, Moscow. Also I have a blog on Medium and vc.ru
      </p>
      <p>I’m currently studying FullStack Development at Moscow IT college.</p>
      <p>
        I’ve worked as a <span class="highlight-underline">UX UI Designer</span> at neiroseti.ai
        which is a resident of Skolkovo in Russia. Currently preparing for internships in
        <span class="highlight-yandex">Yandex</span> and
        <span class="highlight-robot">red_mad_robot</span> as an Android Developer.
      </p>
      <p>
        You can email me at <span class="underline">withapoll@outlook.com</span>, get my
        <span class="underline">CV</span> or add me on <span class="underline">LinkedIn</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin-bottom: 144px;
}

.my_photo {
  display: flex;
  justify-content: center;
  width: 100%;
}

.my_photo img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.my_photo img {
  width: 100%;
  height: auto;
  align-items: center;
}

.about_me {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 970px;
}

.about_me p {
  font-size: 24px;
  margin-bottom: 10px;
}

.highlight-job {
  color: #a371f7;
}

.highlight-underline {
  text-decoration: underline;
  color: #418dff;
}

.highlight-yandex,
.highlight-robot {
  color: #fc3f1d;
}

.underline {
  text-decoration: underline;
}

.my_photo img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
