
<script>
  export default {
    
  }
</script>

<template>
  <section class="back-events">
    <div class="container">

      <div class="d-flex flex-column title">
        <p>GET IN CONTACT NOW</p>
        <h2>
          Upcoming <span>Events</span>
        </h2>
      </div>

      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body d-flex justify-content-between ">
              <div>
                <a href="#" class="btn map"><i class="fa-solid fa-location-dot"></i>Texas, US</a>
                <h5 class="card-title">Storytelling Workshop</h5>
              </div>

              <div class="date-ticket text-center me-2">
                <h2>22</h2>
                <p>NOV</p>
                <a href="#" class="btn btn-primary">Get ticket</a>
              </div>

            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    

    </div>
  </section>
</template>


<style lang="scss">

@use '../../assets/scss/partials/variables' as *;

.back-events{
  background-color: $bg-white;
  .container{
    margin-top: 95px;
    .title{
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
  }
  .card-body{
    background-color: $color-ticket;
    a, i{
      color: $link-color;
      font-size: 0.9rem;
    }
    a.btn.map{
      padding: 0px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    h5{
      font-weight: bold;
    }
    .date-ticket{
      height: 130px;
      h2, p{
        margin-bottom: 0px;
      }
      p{
        font-weight: $f-bold;
        font-size: 0.8rem;
      }
      h2{
        color: $btn-green;
        font-size: 2.5rem;
        margin-top: 5px;
      }
      a.btn-primary{
        margin-top: 5px;
        background-color: $btn-green;
        border: none;
        color: $bg-white;
        padding: 4px 30px;
        font-weight: $f-bold;
      }
    }
  }
}

</style>