<script>
  export default {
    
  }
</script>


<template>
  <div class="container_mio d-flex">
    <div class="big">
      address
    </div>

    <div class="small">
      <h6>Address</h6>
      <a href="#">Start here</a>
      <a href="#">Blog</a>
      <a href="#">Abaut us</a>
    </div>

    <div class="small">
      <h6>Explore</h6>
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
</template>


<style lang="scss">
.container_mio{
  background-color: rgba(0, 0, 255, 0.337);
  .big{
    background-color: yellow;
    flex-grow: 2;
  }.small{
    background-color: green;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>