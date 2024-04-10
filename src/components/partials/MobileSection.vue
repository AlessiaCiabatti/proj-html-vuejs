<script>
import { store } from '../../assets/data/store';

  export default {

    data(){
      return{
        store,
      }
    },

    props:{
      arrayBtn: Array,
    }

    
  }
</script>

<template>
  <section class="back-pace">
    <div class="container d-flex justify-content-center align-items-center justify-content-between ">

      <div class="my_bgtwo">
        <div class="img-person">
          <img src="../../assets/images/home-5-image-02.png" alt="">
        </div>

        <div class="img-stain">
          <img src="../../assets/image2/underlay-shape-grey.svg" alt="">
        </div>

        <div class="img-pois">
          <img src="../../assets/images/maxcoach-shape-07-150x150.png" alt="">
        </div>

        <div class="img-lines">
          <img src="../../assets/images/maxcoach-shape-01.png" alt="">
        </div>
      </div>

      <div class="my_bgone">
        <p>WHAT ARE YOU LOOKING FOR?</p>
        <h2>Learn on your <span class="span">mobile</span> anytime!</h2>
        <div>
          <p>Save lessons for later and revise or write notes at any time and on miltiple device on your way. Never interfer with activities of enjoyment or other precius moments.</p>
        </div>
        <button type="button" class="btn btn-primary">
          <span>Download Our App</span>
        </button>
      </div>
      
    </div>
  </section>
</template>


<style lang="scss">

@use '../../assets/scss/partials/variables' as *;

.back-pace{
  background-color: $bg-white;
  .container{
    height: 740px;
    .my_bgone{
      width: 500px;
      .btn{
        background-color: $btn-green;
        border: none;
        height: 55px;
        padding: 0 45px;
        margin-top: 20px;
        &:hover{
          background-color: #82e8d2;
        }
        span{
          color: white;
          font-weight: 800;
        }
      }
      span.span{
        color: $btn-green;
        font-size: 2.8rem;
        font-weight: 300;
      }
      h2{
        font-size: 3rem;
        color: $color-font;
        font-weight: bold;
        width: 500px;
      }
      p{
        color: $color-p-hero;
        width: 450px;
      }
      ul{
        padding: 0px;
      }
      li{
        list-style: none;
        line-height: 40px;
        color: $link-color;
        i{
          margin-right: 20px;
          color: $btn-green;
        }
      }
    }
  }
  .my_bgtwo {
      position: relative;
      .img-person {
        position: relative;
        z-index: 999;
        margin-left: 80px;
        margin-right: 120px;
        margin-top: 40px;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .img-stain {
        position: absolute;
        top: 150px;
        right: 200px;
        z-index: 1;
        img {
          height: 450px;
        }
      }
      .img-pois{
        position: absolute;
        right: 20px;
        top: 330px;
        img{
          height: auto;
          width: 170px;
        }
      }
      .img-lines{
        position: absolute;
        left: -150px;
        top: 280px;
      }
    }
}

</style>