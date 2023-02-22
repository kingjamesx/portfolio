<script setup lang="ts">
import Header from '@/components/Header.vue'
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
<div class="home">
  <Header></Header>
  <main class="main">
    <section class="main-1">
      <span class="tag">HTML, CSS, SCSS, REACT, VUE, TYPESCRIPT, NEXTJS, GIT, NUXT</span>
      <h1 class="title">Front- End Developer</h1>
      <p class="text">
        You can put some few lines of text here which will be information
about you. You can put some few lines of text here which will be
information about you. You can put some few lines of text here
which will be information about you.
      </p>
      <div class="home-btn-box">
        <base-button>Contact Me</base-button>
        <base-button>Learn More</base-button>

      </div>
      <div class="icons">
        <span class="icon"><img src="../assets/icons/Linkedin.svg" alt="linkedin"></span>
        <span  class="icon"><img src="../assets/icons/Twitter.svg" alt="twitter"></span>
        <span  class="icon"><img src="../assets/icons/Github.svg" alt="github"></span>
        <span  class="icon"><img src="../assets/icons/Instagram.svg" alt="instagram"></span>

      </div>
    </section>
    <section>
      <span class="home-img"><img src="../assets/images/home.jpg" alt="human hand"/></span>
    </section>

  </main>
</div>
</template>

<style scoped lang="scss">
.main-1{
  margin-top: 70px;
}
  .home{
    max-width: 1200px;
    margin: auto;
  }
  .tag{
    padding: 10px;
    background-color: #262D40;
    border-radius: 3px;
  }
  .title{
    font-size: 3.25rem;
  }
  .text{
    font-size: 1.125rem;
    max-width: 600px;

  }
  .main{
    display: flex;
    justify-content: space-between;
  }
  .home-img img{
    width: 620px;
    height: 645px;
  }
  .home-btn-box{
    margin-top: 35px;
    display: flex;
    gap: 20px;
  }
 
  .icons{
 margin-top: 13rem;
 display: flex;
 align-items: center;
 gap: 23px;

  }
 .icons .icon{
    &:hover{
  filter: invert(61%) sepia(88%) saturate(285%) hue-rotate(5deg) brightness(100%) contrast(90%);

 }
  }
  
</style>
