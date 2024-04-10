
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

      <div class="row mb-4">
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
            <div class="card-body d-flex justify-content-between ">
              <div>
                <a href="#" class="btn map"><i class="fa-solid fa-location-dot"></i>New York, US</a>
                <h5 class="card-title">Painting Art Contest 2020</h5>
              </div>

              <div class="date-ticket text-center me-2">
                <h2>10</h2>
                <p>OCT</p>
                <a href="#" class="btn btn-primary">Get ticket</a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- ---- -->

      <div class="row mb-4">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body d-flex justify-content-between ">
              <div>
                <a href="#" class="btn map"><i class="fa-solid fa-location-dot"></i>Hamburg, Germany</a>
                <h5 class="card-title">International Art Fair 2020</h5>
              </div>

              <div class="date-ticket text-center me-2">
                <h2>23</h2>
                <p>NOV</p>
                <a href="#" class="btn btn-primary">Get ticket</a>
              </div>

            </div>
          </div>
        </div>
        
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body d-flex justify-content-between ">
              <div>
                <a href="#" class="btn map"><i class="fa-solid fa-location-dot"></i>Illinois, US</a>
                <h5 class="card-title">Street Performance: Call for Artist</h5>
              </div>

              <div class="date-ticket text-center me-2">
                <h2>15</h2>
                <p>DEC</p>
                <a href="#" class="btn btn-primary">Get ticket</a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- ---- -->

      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body d-flex justify-content-between ">
              <div>
                <a href="#" class="btn map"><i class="fa-solid fa-location-dot"></i>Illinois, US</a>
                <h5 class="card-title">Custumer Food Safety Education Conference</h5>
              </div>

              <div class="date-ticket text-center me-2">
                <h2>22</h2>
                <p>JUL</p>
                <a href="#" class="btn btn-primary">Get ticket</a>
              </div>

            </div>
          </div>
        </div>
        
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body d-flex justify-content-between ">
              <div>
                <a href="#" class="btn map"><i class="fa-solid fa-location-dot"></i>Dubai</a>
                <h5 class="card-title">How meditation improve your mental health?</h5>
              </div>

              <div class="date-ticket text-center me-2">
                <h2>12</h2>
                <p>AUG</p>
                <a href="#" class="btn btn-primary">Get ticket</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    
        <div class="events-bottom d-flex justify-content-center ">
          <p>Exited about our event? </p>
          <a href="#" class="btn">Get ticket<i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </div>
  </section>
</template>


<style lang="scss">

@use '../../assets/scss/partials/variables' as *;

.back-events{
  background-color: $bg-white;
  border-bottom-right-radius: 50% 430px;
  height: 830px;
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
    border-radius: 5px;
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
      font-size: 1.1rem;
      width: 306px;
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
        font-size: 2.7rem;
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
  .events-bottom{
    margin-top: 40px;
    p{
      margin-bottom: 0px;
      color: $link-color;
    }
    a.btn{
      padding: 0px;
      color: $btn-green;
      margin-left: 5px;
      font-weight: $f-bold;
      i{
        margin-left: 5px;
      }
    }
  }
}

</style>