<script>
  export default {
    
  }
</script>

<template>
  <section class="my_bg">

    <div class="container d-flex justify-content-between text-center">
      <div>
        <h2>1.926</h2>
        <p>FINISHED SESSION</p>
      </div>
      
      <div>
        <h2>
          3.093&#43;
        </h2>
        <p>ENROLLED LEARNERS</p>
      </div>

      <div>
        <h2>
          200
        </h2>
        <p>ONLINE INSTRUCTORS</p>
      </div>
      
      <div>
        <h2>
          100&percnt;
        </h2>
        <p>SATISFACTION RATE</p>
      </div>
    </div>

  </section>
</template>


<style lang="scss">

@use '../../assets/scss/partials/variables' as *;

.my_bg{
  background-color: $color-line;
  .container{
    height: 230px;
    align-items: center;
    margin-bottom: 115px;
    h2{
      color: $btn-green;
      font-weight: $f-bold;
      font-size: 2.5rem;
    }
    p{
      color: $color-font;
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
}

</style>