<script setup lang="ts">
import { ref, computed } from 'vue'
import SideBar from './components/SideBar.vue';
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Projects from './views/Projects.vue'

import NotFound from './views/NotFound.vue'

const routes = {
  '/': Home,
  '/about':About,
  '/contact':Contact,
  '/projects':Projects
}
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  console.log(currentPath.value.slice(1))
  return routes[currentPath.value.slice(1) || '/'] || NotFound
  
})
</script>

<template>
  <SideBar></SideBar>
<component :is="currentView"></component>
</template>

<style scoped lang="scss">
  
</style>
