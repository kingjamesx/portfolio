<script lang="ts" setup>
import { reactive } from 'vue';
import { useNavStore } from '@/stores/Nav'
 const translate=useNavStore()
  const handleClose=()=>{
      translate.close()
      console.log('hello')
  }
  const state=!!translate.$state.translate
  console.log(state)
  
</script>

<template>
    <div class="nav" :class="[!!state?'show':'hide' ]"  >
        <div class="nav-close">
        <span @click="handleClose" class="close"><img src="../assets/icons/x.svg" alt="close"></span>

        </div>

        <ul class="lists">
            <li @click="handleClose"  class="list"><span class="num"><img src="../assets/icons/one.svg" alt=""></span><a href="#/" class="nav-link">Home</a></li>
            <li @click="handleClose"  class="list"><span class="num"><img src="../assets/icons/two.svg" alt=""></span><a href="#/projects" class="nav-link">Project</a></li>
            <li @click="handleClose"  class="list"><span class="num"><img src="../assets/icons/three.svg" alt=""></span><a href="#/about" class="nav-link">About</a></li>
            <li @click="handleClose"  class="list"><span class="num"><img src="../assets/icons/four.svg" alt=""></span><a href="#/contact" class="nav-link">Contact</a></li>

        </ul>
        <div class="nav-btn-box">
            <button class="nav-btn"><p>Check my Resume</p><span><img src="../assets/icons/arrow-rightnav.svg" alt=""></span></button>
        </div>
        <div class="icons">
        <span class="icon"><img src="../assets/icons/Linkedin.svg" alt="linkedin"></span>
        <span  class="icon"><img src="../assets/icons/Twitter.svg" alt="twitter"></span>
        <span  class="icon"><img src="../assets/icons/Github.svg" alt="github"></span>
        <span  class="icon"><img src="../assets/icons/Instagram.svg" alt="instagram"></span>

      </div>
    </div>
</template>

<style lang="scss" scoped>
.nav{
    width: 360px;
    border: 2px solid red;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #171B26;
}
.nav-close{
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
   .close{
    width: 50px;
    height: 50px;
    
   }
   .num{
    width: 63px;
    display: block;
    margin-top: 0.5rem;
   }
   .lists{
    display: flex;
    flex-direction: column;
    gap: 48px;
    border: 2px solid green;
    padding: 0;
   }
   .list{
    display: flex;
    gap: 10px;
    height: 40px;
    align-items: center;
   }
   .nav-link{
    font-size: 1.75rem;
    text-decoration: none;
    display: block;
    color: #fff;
   }
   .nav-btn-box{
    margin-top: 250px;
   }
   .nav-btn{
    color: #BFC6D9;
    border: 1px solid #BFC6D9;
    border-radius: 4px;
    padding: 1px 24px;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 13px;
    font-size: 1.125rem;
   }
  
   .icons{
 display: flex;
 align-items: center;
 gap: 25px;
 margin-top: 40px;

  }
 .hide{
    display: none;
 } 
 .show{
    display: block;
 }
</style>