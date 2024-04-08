<script>
  export default {
    
  }
</script>


<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/images/dark-logo.png" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home <i class="fa-solid fa-chevron-down"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pages <i class="fa-solid fa-chevron-down"></i></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#">Courses <i class="fa-solid fa-chevron-down"></i></a>
          <!-- <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
          </a> -->
          <!-- <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul> -->
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Features <i class="fa-solid fa-chevron-down"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Blog <i class="fa-solid fa-chevron-down"></i></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Shop <i class="fa-solid fa-chevron-down"></i></a>
        </li>
        <li class="nav-item">
          <i class="fa-regular fa-circle-user"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <div class="research d-flex">
          <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
      </form>
    </div>
  </div>
</nav>
</template>


<style lang="scss">
.navbar-brand{
  img {
    width: 160px;
}
}
.navbar-collapse {
    flex-basis: 100%;
    flex-grow: 0;
    align-items: center;
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