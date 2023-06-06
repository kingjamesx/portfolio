<script setup lang="ts">
import Header from '@/components/Header.vue'
import Project from '@/components/Project.vue';
import image from '@/assets/images/searchflix.png' 
import port from '@/assets/images/port.png'
import awaskill from '@/assets/images/awaskill.png'

</script>
<template>
    <div class="project">
        <p class="projects-logo">projects</p>
       <Header></Header>
       <main>
        <h1 class="title">Projects</h1>
        <p class="sub-title">Here you will find some of the personal and clients projects that I created
with each project containing its own case study.</p>
   <div>
    <Project title="Awaskill"  :img="awaskill" subtitle="A platform that makes it easy for people just getting started in tech start right" url="https://github.com/kingjamesx/quiz-app" ></Project>
    <Project title="Personal Portfolio" :img="port" subtitle="Built my personal portfolio using Vue js " url="https://jamesuyiportfolio.netlify.app/"></Project>
    <Project title="SearchFlix" :img="image" subtitle="Consumed themoviedb in building an app where you can search for any movie and filter base on genre release date" url="https://moviesearchflix.netlify.app/"></Project>
   </div>
       </main>
    </div>
</template>
<style lang="scss" scoped>
.title,.sub-title{
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  max-width: 543px;
}

.project{
    max-width: 1200px;
    margin: auto;
    position: relative;
}
.projects-logo{
    font-size: 18.75rem;
    position: absolute;
    z-index: -1;
    top: 8rem;
    left: -40rem;
    color: #1B202C;
    padding: 0;
    margin-bottom: 0;
    transform: rotate(-90deg);
}
main{
    padding-bottom: 3rem;
}
@media (max-width:957px){
    .sub-title{
        padding-inline: 2rem;
    }
}
</style>