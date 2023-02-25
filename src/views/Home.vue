<script setup lang="ts">
import gsap from 'gsap'
import Header from "@/components/Header.vue";
import BaseButton from "@/components/BaseButton.vue";
import { onMounted } from "vue";

onMounted(()=>{
  gsap.fromTo(
    ".home",
    {
      opacity: 0,
      y: "100%",
    },
    {
      duration: 1.2,
      opacity: 1,
      y: "0",
      ease: "power3.inOut",
      delay: 0.5,
    }
  );
}  
)
</script>

<template>
  <div class="home">
    <Header></Header>
    <main class="main">
      <section class="main-1">
        <span class="tag"
          >HTML, CSS, SCSS, REACT, VUE, TYPESCRIPT, NEXTJS, GIT, NUXT</span
        >
        <h1 class="title">Front- End Developer</h1>
        <p class="text">
          Hello! I'm James Uyi Osayi, a Frontend Engineer and UI/UX
          Enthusiast. I love creating beautiful and intuitive interfaces for
          users. I have an eye for design with a User-Driven Approach to
          Development. In my spare time, I teach tech newbies javascript .
        </p>
        <div class="home-btn-box">
          <a href="#/contact"><base-button>Contact Me</base-button></a>
          <a href="#/about"><base-button>Learn More</base-button></a>
        </div>
        <div class="icons">
          <span class="icon"
            ><a href="https://www.linkedin.com/in/jamesuyi/"><img src="../assets/icons/Linkedin.svg" alt="linkedin"
          /></a></span>
          <span class="icon"
            ><a href="https://twitter.com/Kingjames_x"><img src="../assets/icons/Twitter.svg" alt="twitter"
          /></a></span>
          <span class="icon"
            ><a href="https://github.com/kingjamesx"><img src="../assets/icons/Github.svg" alt="github"
          /></a></span>
          <span class="icon"
            ><a href="https://kingjames.hashnode.dev/"><img src="../assets/icons/Instagram.svg" alt="instagram"
          /></a></span>
        </div>
      </section>
      <section class="img-container">
        <span class="home-img"
          ><img src="../assets/images/home.jpg" alt="human hand"
        /></span>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
.main-1 {
  margin-top: 70px;
}
.home {
  max-width: 1200px;
  margin: auto;
}
.tag {
  padding: 10px;
  background-color: #262d40;
  border-radius: 3px;
  line-height: 2;
}
.title {
  font-size: 3.25rem;
}
.text {
  font-size: 1.4rem;
  max-width: 600px;
}
.main {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 3rem;
}
.home-img img {
  width: 620px;
  height: 645px;
  margin: auto;
}
.home-btn-box {
  margin-top: 35px;
  display: flex;
  gap: 20px;
}

.icons {
  margin-top: 7rem;
  display: flex;
  align-items: center;
  gap: 23px;
}
.icons .icon {
  &:hover {
    filter: invert(61%) sepia(88%) saturate(285%) hue-rotate(5deg)
      brightness(100%) contrast(90%);
  }
}
@media (max-width: 1246px) {
  .main {
    flex-direction: column-reverse;
    align-items: center;
  }
  .icons {
    margin-top: 2rem;
  }
  .img-container {
    width: 70%;
    overflow: hidden;
  }
  .main-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
  }
}
a {
  text-decoration: none;
}
@media (max-width: 467px) {
  .home-btn-box {
    flex-direction: column;
  }
  .img-container {
    width: 90%;
  }
  .title {
    font-size: 2.25rem;
  }
}
</style>
