<script lang="ts" setup>
import Header from '@/components/Header.vue'
import BaseButton from '@/components/BaseButton.vue';
</script>
<template>
    <div class="about">
        <Header></Header>
        <main>
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
</style>