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

      <div class="my_bgone">
        <p>WHY ESITATE TO REGISTER?</p>
        <h2>Learn At Your Own <span class="span">Pace</span></h2>
        <div>
          <ul>
            <li>
              <i class="fa-sharp fa-solid fa-check"></i>
              Select & customizecurses to your references
            </li>

            <li>
              <i class="fa-sharp fa-solid fa-check"></i>
              Change the tutor and make arrangements
            </li>

            <li>
              <i class="fa-sharp fa-solid fa-check"></i>
              Participate in events to join others
            </li>

            <li>
              <i class="fa-sharp fa-solid fa-check"></i>
              Get the desire certificate delivered at house
            </li>
          </ul>
        </div>
        <button type="button" class="btn btn-primary">
          <span>Download free E-book</span>
        </button>
      </div>

      <div class="my_bgtwo">
        <div class="img-person">
          <img src="../../assets/images/home-5-image-01.png" alt="">
        </div>
        <div class="img-stain">
          <img src="../../assets/image2/underlay-shape-grey.svg" alt="">
        </div>
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
      // background-color: red;
      width: 500px;
      .btn{
        background-color: $btn-green;
        border: none;
        height: 55px;
        padding: 0 40px;
        margin-top: 20px;
        &:hover{
          background-color: #82e8d2;
        }
        span{
          color: white;
          font-weight: 800;
          margin-left: 15px;
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
        width: 350px;
      }
      p{
        color: $color-p-hero;
        width: 400px;
        font-size: 1.1rem;
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
}

</style>