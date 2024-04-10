<script>
import TodaySection from './partials/TodaySection.vue';
import StunningSection from './partials/StunningSection.vue';
import Numbers from './partials/Numbers.vue';
import Courses from './partials/Courses.vue';
import PaceSection from './partials/PaceSection.vue';

  export default {
    components:{
      TodaySection,
      StunningSection,
      Numbers,
      Courses,
      PaceSection,
    }
    
  }
</script>


<template>
    <TodaySection />
    <StunningSection />
    <Numbers />
    <Courses />
    <PaceSection />
</template>


<style lang="scss">

</style>