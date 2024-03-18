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
        I’ve worked as a
        <a href="https://neiroseti.ai/" class="highlight-underline">UX UI Designer</a> at JSC Neural
        Networks which is a resident of Skolkovo in Russia. Currently preparing for internships at
        <span class="highlight-yandex">Yandex</span> and
        <span class="highlight-robot">red_mad_robot</span> as an Android Developer.
      </p>
      <p>
        You can email me at
        <a href="mailto:withapoll@outlook.com" class="underline">withapoll@outlook.com</a>, get my
        <a href="https://1drv.ms/b/s!AsnZW2NxT7K3kx5oVTfywUtODtyb" class="underline">CV</a> or add
        me on
        <a href="link_to_linkedin" class="underline">LinkedIn</a>
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
  margin-bottom: 7rem;
  margin-top: 7rem;
}

.my_photo {
  display: flex;
  justify-content: center;
  width: 100%;
}

.about_me {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 80%;
}

.about_me p {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
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
  color: inherit;
}

.my_photo img {
  width: 15%;
  height: auto;
  border-radius: 50%;
}

@media screen and (max-width: 768px) {
  .my_photo img {
    width: 35%;
  }

  .about_me p {
    font-size: 1.5rem;
  }
}
</style>
