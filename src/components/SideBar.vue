<script lang="ts" setup>
import { ref } from 'vue';
import { useNavStore } from '@/stores/Nav'
 const translate=useNavStore()
  const handleClose=()=>{
      translate.close()
      
  }
 
</script>

<template>
    <div class="nav" :class="translate.state?'show':'hide'" >
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
    <a href="https://docs.google.com/document/d/1CCW1w02FjxLDFQt6id-8-80QjXY7F5kzvBN430xgsK8/edit?usp=sharing">      <button class="nav-btn"><p>Check my Resume</p><span class="fwd"><img src="../assets/icons/arrow-rightnav.svg" alt=""></span></button></a>  
        </div>
        <div class="icons">
        <span class="icon"><a href="https://www.linkedin.com/in/jamesuyi/"><img src="../assets/icons/Linkedin.svg" alt="linkedin"></a></span>
        <span  class="icon"><a href="https://twitter.com/Kingjames_x"><img src="../assets/icons/Twitter.svg" alt="twitter"></a></span>
        <span  class="icon"><a href="https://github.com/kingjamesx"><img src="../assets/icons/Github.svg" alt="github"></a></span>
        <span  class="icon"><a href="https://kingjames.hashnode.dev/"><img src="../assets/icons/Instagram.svg" alt="instagram"></a></span>

      </div>
    </div>
</template>

<style lang="scss" scoped>
.nav{
    z-index: 10;
    width: 360px;
    padding: 20px;
    /* position: absolute; */
    right: 0;
    top: 0;
    background-color: #161925;
    position: fixed;
    height: 100%;
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
    padding: 0;
   }
   .list{
    display: flex;
    gap: 10px;
    height: 40px;
    align-items: center;
   }
   .lists li a:hover{
    color: #D9B14E;
 
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
  .nav-btn:hover{
    border: 1px solid #D9B14E;
    color: #D9B14E;
  filter: invert(61%) sepia(88%) saturate(285%) hue-rotate(5deg) brightness(100%) contrast(90%);

  }
   .icons{
 display: flex;
 align-items: center;
 gap: 25px;
 margin-top: 40px;

  }
.hide{
    /* display: none; */
  transform: translateX(30rem);
  transition: all 2s;
}
.show{
    /* display: block; */
   transform: translateX(0rem);
  transition: all 2s;

}
@media (max-height:667px) {
    .nav-btn-box{
        margin-top: 100px;
    }
}
</style>