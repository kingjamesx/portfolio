<script lang="ts" setup>
import Header from '@/components/Header.vue'
import BaseButton from '@/components/BaseButton.vue';
</script>
<template>
    <div class="about">
        <p class="contact-logo">Contact</p>
        <Header></Header>
        <main class="about-main">
            <h1>Contact</h1>
            <p>Get in touch or shoot me an email directly on talk2james.uj@gmail.com</p>
            <form action="">
                <input type="text" placeholder="Name" class="input">
                <input type="text" placeholder="Email" class="input">
                <textarea name="" id="" cols="30" rows="5" placeholder="Message" class="text-area"></textarea>
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
    left: -15rem;
    color: #1B202C;
    padding: 0;
    margin-bottom: 0;
   }
   .about-main{
    padding-inline: 2rem;
   }
   @media (max-width: 500px) {
  .contact-logo{
    display: none;
  }
}
</style>