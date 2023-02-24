<script setup lang="ts">
import Header from '@/components/Header.vue'
import Project from '@/components/Project.vue';
 
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
    <Project title="Duwiit App" ></Project>
    <Project title="Duwiit App" imgRight></Project>
    <Project title="Duwiit App"></Project>
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
@media (max-width:957px){
    .sub-title{
        padding-inline: 2rem;
    }
}
</style>