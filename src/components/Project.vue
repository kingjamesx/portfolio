<script lang="ts" setup>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';
const props=defineProps({
    title:{
        title:'String',
        default:'Name of Website',
    },

    imgRight:{
        imgRight:'boolean',
        default:false,
    }
})
const order=ref(props)
console.log(order.value)
</script>
<template>
    <div class="box">
        <span class="image"><img src="@/assets/images/test-img.png" alt=""></span>
        <div class="content ">
            <h2>{{ title }}</h2>
            <p>Here you will find some of the personal and clients projects that I created
with each project containing its own case study. Here you will find some
of the personal and clients projects that I created with each project
containing its own case study.</p>
<base-button>View Project</base-button>
        </div>
    </div>
</template>
<style lang="scss">
   .box{
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
</style>