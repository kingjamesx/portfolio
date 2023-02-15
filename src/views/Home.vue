<script setup lang="ts">
import Header from '../components/Header.vue'
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
        <button class="home-btn"><p>Contact Me</p> <span class="btn-arrow btn-arrow-1"><img src="../assets/icons/arrow-right.svg" alt=""></span></button>
        <button class="home-btn home-btn-2"><p>Learn More</p> <span class="btn-arrow btn-arrow-2"><img src="../assets/icons/arrow-rightb.svg" alt=""></span></button>

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
  .home-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    gap: 13px;
    padding-inline: 25px;
    border: none;
    background-color: #D9B14E;
    border-radius: 4px;
    &:hover{
      background: transparent;
      border: 1px solid #D9B14E;
      color:#D9B14E ;
     .btn-arrow-1{
  filter: invert(61%) sepia(88%) saturate(285%) hue-rotate(5deg) brightness(100%) contrast(90%);
      
     }
     .btn-arrow-2 {
      filter: invert(1%) sepia(1%) saturate(7024%) hue-rotate(128deg) brightness(21%) contrast(87%);

      
     }
      
    }
    &-2{
      background: transparent;
      border: 1px solid #D9B14E;
      color:#D9B14E ;
     &:hover{
    background-color: #D9B14E;
      color: #222222;
     }
  }

}
  .btn-arrow{
    margin-top: 2px;
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
