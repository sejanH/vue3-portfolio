<template>
  <div class="container is-max-widescreen">
      <page-intro :slider="slider"></page-intro>
  </div>
</template>

<script>
import {slider,consultants} from "@/static/pages/ourconsultants.json";
import PageIntro from '../components/PageIntro.vue';
export default {
  name: "ConsultingPartners",
  components:{
    PageIntro
  },
  computed:{
      slider(){
          return slider;
      },
      consultants(){
          return consultants;
      }
  }

};
</script>

<style>
</style>