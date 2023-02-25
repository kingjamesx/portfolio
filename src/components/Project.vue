<script lang="ts" setup>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';


const props=defineProps({
    title:{
        title:'String',
        default:'Name of Website',
    },
   subtitle:{
    subtitle:"string",
    default:'i built this'
   },
    img:{
        img:'String',
        default:'@/assets/images/test-img.png',
    },
    url:{
        url:'String',
        default:'https://moviesearchflix.netlify.app/',
    }
})
 
const order=ref(props)
console.log(order.value)
</script>
<template>
    <div class="box">
        <span class="image"><img :src="props.img"  alt="project hero"></span>
        <div class="content ">
            <h2>{{ title }}</h2>
            <p class="sub-title">{{ subtitle }}</p>
  <a :href="props.url"><base-button>View Project</base-button></a>
        </div>
    </div>
</template>
<style lang="scss">
   .box{
    margin-top: 48px;
    display: flex;
    justify-content: center;
    gap: 50px;
   }
   .content{
    flex-basis: 40%;
   }
   .image{
    flex-basis: 40%;
    display: block;
   }
   .reverse{
    flex-direction: row-reverse;
   }
   @media (max-width:957px) {
    .box{
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }
 
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
   }
</style>