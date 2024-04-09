<script>

import Accordion from './Accordion.vue';

  export default {
    components:{
      Accordion,
    }
    
  }
</script>

<template>
  <section class="back-stunning">
    <div class="container d-flex justify-content-center align-items-center justify-content-between ">

      <div class="my_bgtwo">
        <div class="img-person">
          <img src="../../assets/images/about-us-03-image-01.png" alt="">
        </div>
        <div class="img-stain">
          <img src="../../assets/image2/underlay-shape-lilla.svg" alt="">
        </div>
      </div>

      <div class="my_bgone title">

        <p>DREAM WITH <strong>MAXCOACH</strong></p>
        <h2>Construct A <span>Stunning</span> Career Perspective</h2>
        <Accordion />

      </div>

    </div>
  </section>
</template>


<style lang="scss">


@use '../../assets/scss/partials/variables' as *;


.back-stunning {
  background-color: $bg-white;
  .container {
    margin-top: 100px;
    // position: relative;
    .my_bgtwo {
      position: relative;
      .img-person {
        position: relative;
        z-index: 999;
        margin-left: 50px;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .img-stain {
        position: absolute;
        top: 100px;
        right: 145px;
        z-index: 1;
        img {
          height: 390px;
        }
      }
    }
    .my_bgone {
      height: 590px;
      width: 570px;
      p{
        color: $font-bottom;
      }
      h2{
        color: $color-font;
        font-weight: $f-bold;
        font-size: 2.8rem;
        margin-bottom: 60px;
      }
      span{
        color: $btn-green;
        font-size: 2.8rem;
        font-weight: 300;
      }
    }
  }
}

</style>