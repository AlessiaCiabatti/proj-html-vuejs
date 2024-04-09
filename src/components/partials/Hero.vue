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
  <section class="back-hero">
    <div class="container d-flex justify-content-center align-items-center justify-content-between ">

      <div class="my_bgone">
        <h1>Complete Your Dreams in JavaS Programming</h1>
        <p>Learn any coding program in distance and for a reasonable fee. You don't have to struggle alone, you,ve got our assistance and help</p>
        <button type="button" class="btn btn-primary">
          <i class="fa-solid fa-download"></i>
          <span>Download free E-book</span>
        </button>
      </div>

      <div class="my_bgtwo">
        <img src="../../assets/images/home-5-hero-image.png" alt="">
      </div>
      
    </div>
  </section>
</template>


<style lang="scss">

@use '../../assets/scss/partials/variables' as *;

.back-hero{
  background-color: $bg-color;
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
        &:hover{
          background-color: #82e8d2;
        }
        span{
          color: white;
          font-weight: 800;
          margin-left: 15px;
        }
      }
      h1{
        font-size: 3rem;
        color: $color-font;
        font-weight: $f-bold;
      }
      p{
        color: $color-p-hero;
        margin: 45px 0;
        width: 400px;
        font-size: 1.1rem;
      }
    }
  }
}

</style>