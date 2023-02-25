<script lang="ts" setup>
import gsap from 'gsap'
import Header from '@/components/Header.vue'
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
        <p class="contact-logo">Contact</p>
        <Header></Header>
        <main class="about-main">
            <h1>Contact</h1>
            <p>Get in touch or shoot me an email directly on <a href="mailto:talk2james.uj@gmail.com">talk2james.uj@gmail.com</a> </p>
            <form action="https://formsubmit.co/26d8ad083932f8d8e61c6ddf7594010c" method="POST">
                <input type="text" placeholder="Name" name="name" class="input">
                <input type="text" placeholder="Email" name="email" class="input">
                <textarea name="message" id="" cols="30" rows="5" placeholder="Message" class="text-area" ></textarea>
                <div class="btn-box"><base-button>Send Message</base-button></div>
            </form>
        </main>
    </div>
</template>
<style lang="scss" scoped>
.about{
    max-width: 1200px;
    margin: auto;
    position: relative;
    }
    .input,.text-area{
        display: block;
        background-color: transparent;
        border-radius: 5px;
        color: #fff;
        padding-inline: 10px;
        border: none;
        outline: 1px solid #BFC6D9;
        margin-top: 40px;
        max-width: 520px;
        width: 100%;
        font-weight: 500;
        font-size: 1rem;
    }
    .input{
        height: 50px;
    }
   .btn-box{
    margin-top: 40px;
    

   }
   .contact-logo{
    font-size: 18.75rem;
    position: absolute;
    z-index: -1;
    top: 20rem;
    left: -7rem;
    color: #1B202C;
    padding: 0;
    margin-bottom: 0;
   }
   .about-main{
    padding-inline: 2rem;
   }
   .text-area{
    padding: 20px;
   }
   @media (max-width: 500px) {
  .contact-logo{
    display: none;
  }
}
</style>