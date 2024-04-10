<script>
  export default {
    
  }
</script>


<template>
  <section class="back-loveus">
    <div class="container">

      <div class="d-flex flex-column title">
        <p>PEOPLE ARE PREISING MAXCOACH</p>
        <h2>
          What make they <span class="span">love us?</span>
        </h2>
      </div>

    </div>
  </section>
</template>

<style lang="scss">

@use '../../assets/scss/partials/variables' as *;

.back-loveus{
  background-color: $color-ticket;
  .title{
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
}
</style>