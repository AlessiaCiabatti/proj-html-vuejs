<script>
import Hero from './partials/Hero.vue';
import {store} from '../assets/data/store';

  export default {
    components:{
      Hero,
    },

    data(){
      return{
        store,
      }
    },

    props:{
      arrayMenu: Array,
    }
    
  }
</script>


<template>

  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/images/dark-logo.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="(item, index) in store.arrayNav"
          :key="`nav-${index}`"
          class="nav-item menu">
            <a class="nav-link menu" :href="item.href">{{item.text}} <i class="fa-solid fa-chevron-down"></i></a>
          </li>
          <!-- <li class="nav-item menu">
            <a class="nav-link" href="#">Pages <i class="fa-solid fa-chevron-down"></i></a>
          </li>
          <li class="nav-item menu">
            <a class="nav-link" href="#">Courses <i class="fa-solid fa-chevron-down"></i></a>
          </li>
          <li class="nav-item menu">
            <a class="nav-link disabled" aria-disabled="true">Features <i class="fa-solid fa-chevron-down"></i></a>
          </li>
          <li class="nav-item menu">
            <a class="nav-link disabled" aria-disabled="true">Blog <i class="fa-solid fa-chevron-down"></i></a>
          </li>
          <li class="nav-item menu">
            <a class="nav-link disabled shop" aria-disabled="true">Shop <i class="fa-solid fa-chevron-down"></i></a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">
              <div class="carrello">
                <div class="circle">
                  <span>0</span>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true"><i class="fa-regular fa-circle-user"></i></a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <div class="research d-flex">
            <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
      </div>
    </div>
  </nav>

  <Hero />

</template>


<style lang="scss">

@use '../assets/scss/partials/variables' as *;

nav.navbar.navbar-expand-lg {
  background: $bg-color;
  .navbar-brand{
    img {
    width: 155px;
    }
  }
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 0;
  align-items: center;
  a.nav-link.disabled.shop {
    padding-right: 0px;
  }
  .carrello{
    position: relative;
    .circle{
      height: 17px;
      width: 17px;
      background-color: $btn-green;
      border-radius: 50%;
      position: relative;
      position: absolute;
      bottom: 15px;
      left: 12px;
      span{
        position: absolute;
        right: 4px;
        transform: translateY(-12%);
      }
    }
  }
  .fa-chevron-down{
    font-size: 0.6rem;
  }
  a.nav-link
  {
    font-size: 0.9rem;
    color: $color-font;
  }
  .menu{
    margin-left: 20px;
  }
  .fa-circle-user{
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
  }
  .research{
    position: relative;
    align-items: center;
    li.nav-item {
      display: flex;
      align-items: center;
    }
    .fa-magnifying-glass{
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
    }
    input.form-control.me-2 {
      height: 50px;
      width: 195px;
    }
    li.nav-item {
      display: flex;
      align-items: center;
    }
  }
}
</style>