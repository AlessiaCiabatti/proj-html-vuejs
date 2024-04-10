<script>
  export default {
    
  }
</script>


<template>
  <section class="back-loveus">
    <div class="container">

      <div class="d-flex flex-column title">
        <p class="top">PEOPLE ARE PREISING MAXCOACH</p>
        <h2>
          What make they <span class="span">love us?</span>
        </h2>
      </div>

      <div class="d-flex justify-content-between ">

        <div class="card shadow" style="width: 22rem;">
          <div class="circle-img">
            <img src="../../assets/images/testimonial-avata-02.jpg" class="card-img-top" alt="...">
          </div>
          <div class="card-body text-center">
            <p class="card-text">I am free to learn at my own place, follow  my own schedule and choose the subject I like. Great study portal for people like me.</p>
            <p><strong>MADLEY PONDOR</strong></p>
            <span class="name">/ Freelancer</span>
          </div>
        </div>

        <div class="card shadow" style="width: 22rem;">
          <div class="circle-img">
            <img src="../../assets/images/testimonial-avata-04.jpg" class="card-img-top" alt="...">
          </div>
          <div class="card-body text-center">
            <p class="card-text">MaxCoach is my best choce. Their tutors are smart and professional when deadling with students.</p>
            <p><strong>MADLEY PONDOR</strong></p>
            <span class="name">/ IT Specialist</span>
          </div>
        </div>

        <div class="card shadow" style="width: 22rem;">
          <div class="circle-img">
            <img src="../../assets/images/testimonial-avata-01.jpg" class="card-img-top" alt="...">
          </div>
          <div class="card-body text-center">
            <p class="card-text">I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation.</p>
            <p><strong>LUVIC DUBBLE</strong></p>
            <span class="name">/ Private Tutor</span>
          </div>
        </div>
        
      </div>


        <div class="d-flex flex-column align-items-center start">
          <p class="p-bottom">Start today for getting <span class="certification">Online Certification</span></p>
          <h2>
            You can be your guiding star with our help!
          </h2>
          <button type="button" class="btn btn-primary">
            <span>Get started now</span>
          </button>
          <div class="img-bottom">
            <img src="../../assets/images/maxcoach-shape-02.png" alt="" class="circle">
            <img src="../../assets/images/maxcoach-shape-01.png" alt="" class="lines">
          </div>
        </div>


    </div>
  </section>
</template>

<style lang="scss">

@use '../../assets/scss/partials/variables' as *;

.back-loveus{
  background-color: $color-ticket;
  .start{
    position: relative;
    .img-bottom{
      .lines{
        position: absolute;
        left: 50px;
        top: 160px;
      }
      .circle{
        position: absolute;
        right: 0px;
        top: 160px;
      }
    }
  }
  .p-bottom{
    color: $color-font;
    margin-top: 100px;
    margin-bottom: 0px;
    font-weight: bold;
    .certification{
      color: $btn-green;
      font-weight: bold;
    }
  }
  h2{
      color: $color-font;
      font-weight: bold;
    }
    button.btn.btn-primary{
    background-color: $btn-green;
    border: none;
    padding: 10px 65px;
    margin-top: 30px;
    margin-bottom: 100px;
    span{
      color: $bg-white;
      font-weight: $f-bold;
      }
    }

  .title{
    margin-bottom: 100px;
      align-items: center;
      p{
        color: $font-bottom;
        margin-top: 200px;
      }
      h2{
        color: $color-font;
        font-weight: $f-bold;
        font-size: 2.8rem;
        margin-bottom: 60px;
      }
      span.span{
        color: $btn-green;
        font-size: 2.8rem;
        font-weight: 300;
      }
    }
    .card{
      position: relative;
      border-style: none;
      border: 1px;
      padding-left: 8px;
      padding-right: 8px;
      .card-body{
        padding-bottom: 50px;
      }
      .circle-img{
        position: absolute;
        height: 140px;
        width: 140px;
        overflow: hidden;
        border-radius: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        img {
          width: 100%;
        }
      }
      .card-text{
        margin-top: 85px;
        color: $color-font;
        margin-bottom: 35px;
        font-size: 1.1rem;
      }
    }
}
</style>