<script lang="ts" setup>

</script>

<template>
    <div class="header">
      <p class="header-title">James uyi</p>
      <span><img src="../assets/icons/sun.svg" alt=""></span>
      <div class="header-menu">
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
    }
    &-menu{
        display: flex;
        align-items: center;
        gap: 22px;
        font-size: 1.5rem;
        text-transform: uppercase;
    }
}
</style>