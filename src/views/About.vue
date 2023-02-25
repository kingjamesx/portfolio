<script setup lang="ts">
import gsap from 'gsap'
import Header from '../components/Header.vue'
import BaseButton from '@/components/BaseButton.vue';
import { onMounted } from "vue";

onMounted(()=>{
  gsap.fromTo(
    ".about",
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
    <div class="about">
      <p class="about-logo">About Me</p>
        <Header></Header>
    <div class="about-sect">
        <section>
    <h1 class="title">About</h1>
    <hr>
    <p class="about-text">
  

Hello there! I am James Uyi, a front-end developer currently living in Lagos . A Botany graduate from Lagos State University, I am a career-changer looking to establish myself as a professional developer.

A contributing member of the #Laptop4developers community, I completed the front-end developer program. I aslo have a certificate in Web Design & Development from Altschool Africa.

When I'm not coding, I'm spending time with my friends talking about new technologies. I love music and reading, so there's a good chance I'm listening to music or reading now!

    </p>
    <!-- <p class="about-text">
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
    </p> -->
     <div class="btn-container">
    <a href="https://docs.google.com/document/d/1CCW1w02FjxLDFQt6id-8-80QjXY7F5kzvBN430xgsK8/edit?usp=sharing"> <base-button>View my Resume</base-button></a> 
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
   position: relative;
}
 .about-sect{
    display: flex;
    gap: 25px;
 }
 .about-text{
    margin-top: 20px;
    font-size: 1.4rem;
 }
 .title{
    font-size: 2.25rem;
 }
 .btn-container{
    margin-top:48px ;
    padding-bottom: 2rem;
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
 .about-logo{
   font-size: 18.75rem;
    position: absolute;
    z-index: -1;
    top: 24rem;
    left: -10rem;
    color: #1B202C;
    padding: 0;
    margin-bottom: 0;
 }
 @media (max-width: 1287px) {
  .about-sect{
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    padding-inline: 2rem;
  }
  .btn-container{
    display: flex;
    justify-content: center;
  }
  .about-img img{
    width: 100%;
  }
 }
 @media (max-width: 500px){
  .about-logo{
    display: none;
  }
 }
</style>