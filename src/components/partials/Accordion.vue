<script>
  export default {
    
  }
</script>

<template>

    <div class="accordion" id="accordionExample">
      <div class="shadow">
      <div class="accordion-item">
        <h2 class="accordion-header mb-1">
          <button class="accordion-button my_bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Multiple Platform Supported for Teaching & Studyng
              <i class="fa-solid fa-circle-minus"></i>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <p>MaxCoach supports the act of teaching and learning on miltiple platform like oneline or offline via material downloads. We know things aren't Supposed to be devoured in a short time, tou can always access our knowledge base from any device.</p>
          </div>
        </div>
      </div>
      </div>
      <div class="shadow">
      <div class="accordion-item">
        <h2 class="accordion-header mb-1">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Multiple Curse Participation at the Same Time
              <i class="fa-solid fa-circle-plus"></i>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      </div>
      <div class="shadow">
      <div class="accordion-item">
        <h2 class="accordion-header mb-1">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Track Study Progress & Deliver Prompt Feedback
              <i class="fa-solid fa-circle-plus"></i>
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      </div>
    </div>

</template>


<style lang="scss">


@use '../../assets/scss/partials/variables' as *;

.accordion-item {
    border: none;
    margin-bottom: 30px;

  .accordion-button.my_bg{
    background-color: $acc-color;
    color: $bg-white;
    justify-content: space-between;
  }
  .accordion-button{
    font-weight: $f-bold;
    color: $font-bottom;
    justify-content: space-between;
  }

  .accordion-button::after {
    display: none;
  }
}



</style>