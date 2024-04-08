<script>
  export default {
    
  }
</script>


<template>
  <div class="container">
    <div class="d-flex">
      <div class="big">
        <h6>Address</h6>
        <a href="#">382 NE 191st St # 87394 Miami, FL 33179-3899</a>
        <a href="#">+1(305) 547-9909 (9AM - 5PM EST, Monday - Friday)</a>
        <a href="#">support@coach.com</a>
        <div class="icon-footer">
          <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>

      <div class="small">
        <h6>Explore</h6>
        <a href="#">Start here</a>
        <a href="#">Blog</a>
        <a href="#">Abaut us</a>
      </div>

      <div class="small">
        <a href="#">Success story</a>
        <a href="#">Courses</a>
        <a href="#">Contact us</a>
      </div>

      <div class="small">
        <h6>Information</h6>
        <a href="#">Membership</a>
        <a href="#">Purchase guide</a>
        <a href="#">Privacy policy</a>
        <a href="#">Terms of service</a>
      </div>
    </div>

    <div class="d-flex justify-content-center">
      <span>&#169 2020 Maxcoach. All Rights Reserved</span>
    </div>

  </div>
</template>


<style lang="scss">

@use '../assets/scss/partials/variables' as *;

.container {
  span{
    font-size: 0.9rem;
    color: $color-i-footer;
  }
  .big, .small {
    display: flex;
    flex-direction: column;
    h6 {
      font-weight: bold;
      font-size: 0.9rem;
    }
    a {
      color: $font-bottom;
      text-decoration: none;
      font-size: 0.8rem;
      line-height: 30px;
    }
  }
  .big {
    flex-grow: 2;
    .icon-footer {
    margin-top: 20px;
    }
    ::before {
      margin-right: 20px;
      font-size: 20px;
      color: $color-i-footer;
    }
  }
  .small {
    flex-grow: 1;
  }
}
</style>