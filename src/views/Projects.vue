<script setup lang="ts">
import Header from "@/components/Header.vue";
import Project from "@/components/Project.vue";
import dev from "@/assets/images/devcareer.png";
import crowd from "@/assets/images/crowd.png";
import async from "@/assets/images/async.png";
</script>
<template>
  <div class="project">
    <p class="projects-logo">projects</p>
    <Header></Header>
    <main>
      <h1 class="title">Projects</h1>
      <p class="sub-title">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study.
      </p>
      <div>
        <Project
          title="Crowd"
          :img="crowd"
          subtitle="Crowd provides you with the tools to understand your users so that you can create meaningful experiences for them and drive growth for your business"
          url="https://crowdapp.io/"
        ></Project>
        <Project
          title="Dev Careers"
          :img="dev"
          subtitle="dev careers support individuals seeking to enter the tech field by helping them overcome the challenge of selecting a programming specialization and offering valuable learning tools."
          url="https://devcareer.io/"
        ></Project>
        <Project
          title="Async Pay"
          :img="async"
          subtitle="Receive payments from multiple payment gateways with one simple integration, collect funds from Paystack, Flutterwave, etc and get an intuitive embeddable dashboard to keep track of all your funds from one place."
          url="https://www.asyncpay.io/"
        ></Project>
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.title,
.sub-title {
  text-align: center;
  margin: auto;
  margin-bottom: 20px;
  max-width: 543px;
}

.project {
  max-width: 1200px;
  margin: auto;
  position: relative;
}
.projects-logo {
  font-size: 18.75rem;
  position: absolute;
  z-index: -1;
  top: 8rem;
  left: -40rem;
  color: #1b202c;
  padding: 0;
  margin-bottom: 0;
  transform: rotate(-90deg);
}
main {
  padding-bottom: 3rem;
}
@media (max-width: 957px) {
  .sub-title {
    padding-inline: 2rem;
  }
}
</style>
