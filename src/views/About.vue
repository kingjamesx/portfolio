<script setup lang="ts">
import Header from '../components/Header.vue'

</script>
<template>
    <div class="about">
        <Header></Header>
    <div class="about-sect">
        <section>
    <h1 class="title">About</h1>
    <hr>
    <p class="about-text">
      Here you will find some of the personal and clients projects that I
      created with each project containing its own case study. Here you will
      find some of the personal and clients projects that I created with each
      project containing its own case study. Here you will find some of the
      personal and clients projects that I created with each project containing
      its own case study.
    </p>
    <p class="about-text">
      Here you will find some of the personal and clients projects that I
      created with each project containing its own case study. Here you will
      find some of the personal and clients projects that I created with each
      project containing its own case study.
    </p>
    <p class="about-text">
      Here you will find some of the personal and clients projects that I
      created with each project containing its own case study. Here you will
      find some of the personal and clients projects that I created with each
      project containing its own case study. Here you will find some of the
      personal and clients projects that I created with each project containing
      its own case study.
    </p>
     <div class="btn-container">
    <button class="about-btn"><p>View my Resume</p><span><img src="../assets/icons/arrow-rightb.svg" alt=""></span></button>
     </div>
  </section>
  <section>
    <span class="about-img">
        <img src="../assets/images/home.jpg" alt="" /> 
    </span>
    
  </section>
    </div>
    </div>
  
 
</template>

<style lang="scss">
.about{
    max-width: 1200px;
    margin: auto;
  
}
 .about-sect{
    display: flex;
    gap: 25px;
 }
 .about-text{
    margin-top: 20px;
 }
 .title{
    font-size: 2.25rem;
 }
 .btn-container{
    margin-top:48px ;
 }
 .about-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    gap: 13px;
    padding-inline: 25px;
    border: none;
    border-radius: 4px;
    background: transparent;
      border: 1px solid #D9B14E;
      color:#D9B14E ;
      &:hover{
    background-color: #D9B14E;
    color: #222;
     }
 }
 .about-img img{
    width: 620px;
    height: 645px;
 }
</style>