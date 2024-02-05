<script setup lang="ts">
import { gsap } from "gsap";
import { ref, computed } from "vue";
import SideBar from "./components/SideBar.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Projects from "./views/Projects.vue";

import NotFound from "./views/NotFound.vue";
interface Routes {
  [key: string]: ReturnType<typeof defineProps>;
}
const routes: Routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/projects": Projects,
};
const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});
const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});

gsap.set(".follower", { xPercent: -50, yPercent: -50 });
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

window.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", { duration: 0.2, x: e.clientX, y: e.clientY });
  gsap.to(".follower", { duration: 0.9, x: e.clientX, y: e.clientY });
});
</script>

<template>
  <div class="cursor"></div>
  <div class="follower"></div>

  <SideBar></SideBar>
  <component :is="currentView"></component>
</template>

<style lang="scss"></style>
