<script>
import {store} from '../assets/data/store'

  export default {
    data(){
      return{
        store
      }
    },

    props:{
      arrayFooter: Array,
    }
  }
</script>


<template>
  <div class="container mt-5 mb-5">
    <div class="d-flex">
      <div class="big">
        <h6>Address</h6>
        <div class="info">
          <ul>
            <li v-for="(item, index) in store.arrayFooter[0].address"
            :key="`footer-address-${index}`">
              <a :href="item.href">{{ item.text }}</a>
            </li>
            <!-- <li>
              <a href="#">+1(305) 547-9909 (9AM - 5PM EST, Monday - Friday)</a>
            </li>
            <li>
              <a href="#">support@coach.com</a>
            </li> -->
          </ul>
        </div>

        <div class="icon-footer">
          <div>
          <a :href="item.href" v-for="(item, index) in store.arrayFooter[1].icon"
          :key="`footer-icone-${index}`"><i :class="item.text"></i></a>
            <!-- <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a> -->
          </div>
        </div>

      </div>

      <div class="small">
        <h6>Explore</h6>
        <div class="info">
          <ul>
            <li v-for="(item, index) in store.arrayFooter[2].explore"
            :key="`footer-explore-${index}`">
              <a :href="item.href">{{ item.text }}</a>
            </li>
          </ul>
          
          <!-- <a href="#">Blog</a>
          <a href="#">Abaut us</a> -->
        </div>
      </div>

      <div class="small">
        <div class="info">
          <ul>
            <li v-for="(item, index) in store.arrayFooter[3].items"
            :key="`footer-items-${index}`">
              <a :href="item.href">{{ item.text }}</a>
            </li>
          </ul>

          <!-- <a href="#">Courses</a>
          <a href="#">Contact us</a> -->
        </div>
      </div>

      <div class="small">
        <h6>Information</h6>
        <div class="info">
          <ul>
            <li v-for="(item, index) in store.arrayFooter[4].information"
            :key="`footer-information-${index}`">
              <a :href="item.href">{{ item.text }}</a>
            </li>
          </ul>
          <!-- <a href="#">Purchase guide</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a> -->
        </div>
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
  .big, .small, .info {
    display: flex;
    flex-direction: column;
    h6 {
      font-weight: bold;
      font-size: 0.9rem;
    }
    ul{
      padding-left: 0px;
      li{
        list-style: none;
      }
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