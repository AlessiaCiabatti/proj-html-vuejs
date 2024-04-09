
<script>
  export default {
    
  }
</script>

<template>
  <section class="back-today">
    <div class="container">

      <div class="d-flex flex-column title">
        <p>START LEARNING CODING LANGUAGES</p>
        <h2>
          Build Your Dream <span>TODAY</span>
        </h2>
      </div>

      <div class="d-flex justify-content-between">
        <div class="card" style="width: 18rem;">
          <div class="my_image">
            <img src="../../assets/images/home-5-image-box-01.png" class="card-img-top" alt="...">
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">Idea Discussion</h5>
            <p class="card-text">Get teamed up with the specialists who work and teach coding for years at famous univerities.</p>
            <a href="#" class="btn">Start now <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="card" style="width: 18rem;">
          <div class="my_image">
            <img src="../../assets/images/home-5-image-box-02.png" class="card-img-top" alt="...">
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">Web Development</h5>
            <p class="card-text">Learn to start building a webpage from scratch. You decide your own pace, course and speed.</p>
            <a href="#" class="btn">Start now <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="card" style="width: 18rem;">
          <div class="my_image">
            <img src="../../assets/images/home-5-image-box-03.png" class="card-img-top" alt="...">
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">Sistem Administration</h5>
            <p class="card-text">Learners are encouraged to study the mechanism and structure of system administration.</p>
            <a href="#" class="btn">Start now <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div class="card" style="width: 18rem;">
          <div class="my_image">
            <img src="../../assets/images/home-5-image-box-04.png" class="card-img-top" alt="...">
          </div>
          <div class="card-body text-center">
            <h5 class="card-title">Graphic Designe</h5>
            <p class="card-text">Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.</p>
            <a href="#" class="btn">Start now <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>


<style lang="scss">

@use '../../assets/scss/partials/variables' as *;

.back-today{
  background-color: $bg-white;
  .container{
    margin-top: 95px;
    .title{
      margin-bottom: 115px;
      align-items: center;
      p{
        color: $font-bottom;
      }
      h2{
        color: $color-font;
        font-weight: $f-bold;
        font-size: 2.8rem;
      }
      span{
        color: $btn-green;
        font-size: 2.8rem;
        font-weight: 300;
      }
    }
    .card{
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      .my_image{
        width: 180px;
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          height: 100%;
          width: auto;
        }
      }
    }
    .card-body{
      h5{
        font-weight: $f-bold;
        margin-top: 50px;
        margin-bottom: 20px
      }
      p.card-text {
        width: 260px;
      }
      p{
        color: $font-bottom;
      }
      a, .fa-arrow-right{
        font-size: 0.8rem;
        color: $link-color;
        font-weight: 800;
      }
      i{
        margin-left: 10px
      }
    }
  }
}

</style>