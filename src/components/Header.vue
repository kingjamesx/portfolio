<script lang="ts" setup>
import { useNavStore } from '@/stores/Nav'
 const translate=useNavStore()
  const handleOpen=()=>{
      translate.open()
      
  }
 
</script>

<template>
    <div class="header">
    <a href="#/"><p class="header-title">James uyi</p></a>  
      <!-- <span ><img src="../assets/icons/sun.svg" alt=""></span> -->
      <div @click="handleOpen" class="header-menu">
        <p>Menu</p>
        <span ><img src="../assets/icons/Menu.svg" alt=""></span>
      </div>
    </div>
</template>

<style lang="scss">
.header{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
    &-title{
        font-size: 1.25rem;
        text-transform: uppercase;
        cursor: pointer;
    }
    &-menu{
        display: flex;
        align-items: center;
        gap: 22px;
        font-size: 1.5rem;
        text-transform: uppercase;
    }
}
a{
  text-decoration: none;
  color: #fff;
}
@media (max-width:1246px){
 .header{
  padding-inline: 2rem;
 }
}
</style>