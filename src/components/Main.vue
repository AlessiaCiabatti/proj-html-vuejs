<script>
import TodaySection from './partials/TodaySection.vue';
import StunningSection from './partials/StunningSection.vue';
import Numbers from './partials/Numbers.vue';
import Courses from './partials/Courses.vue';
import PaceSection from './partials/PaceSection.vue';
import MobileSection from './partials/MobileSection.vue';

  export default {
    components:{
      TodaySection,
      StunningSection,
      Numbers,
      Courses,
      PaceSection,
      MobileSection,
    }
    
  }
</script>


<template>
    <TodaySection />
    <StunningSection />
    <Numbers />
    <Courses />
    <PaceSection />
    <MobileSection />
</template>


<style lang="scss">

</style>