<script lang="ts" setup>

</script>
<template>
    <div>
        <button class="home-btn home-btn-2"><p><slot/></p> <span class="btn-arrow btn-arrow-2"><img src="../assets/icons/arrow-rightb.svg" alt=""></span></button> 
    </div>
</template>

<style lang="scss" scoped>
     .home-btn{
      cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    gap: 13px;
    padding-inline: 25px;
    border: none;
    background-color: #D9B14E;
    border-radius: 4px;
    &:hover{
      background: transparent;
      border: 1px solid #D9B14E;
      color:#D9B14E ;
     .btn-arrow-1{
  filter: invert(61%) sepia(88%) saturate(285%) hue-rotate(5deg) brightness(100%) contrast(90%);
      
     }
     .btn-arrow-2 {
      filter: invert(1%) sepia(1%) saturate(7024%) hue-rotate(128deg) brightness(21%) contrast(87%);

      
     }
      
    }
    &-2{
      background: transparent;
      border: 1px solid #D9B14E;
      color:#D9B14E ;
     &:hover{
    background-color: #D9B14E;
      color: #222222;
     }
  }

}
  .btn-arrow{
    margin-top: 2px;
  }

</style>

<!-- <button class="home-btn"><p>Contact Me</p> <span class="btn-arrow btn-arrow-1"><img src="../assets/icons/arrow-right.svg" alt=""></span></button> -->