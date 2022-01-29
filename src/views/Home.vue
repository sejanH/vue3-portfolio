<template>
  <div class="home_page">
    <slider :sliders="sliders"></slider>
    <solutions-we-deliver :cards="solutions_we_deliver"></solutions-we-deliver>
  </div>
</template>

<script>
import { sliders,solutions_we_deliver } from "@/static/pages/home.json";
import Slider from "@/components/Slider";
import SolutionsWeDeliver from "@/components/SolutionsWeDeliver";
export default {
  name: "Home",
  components: {
    Slider,
    SolutionsWeDeliver
  },
  computed: {
    sliders() {
      return sliders;
    },
    solutions_we_deliver(){
      return solutions_we_deliver;
    }
  },
};
</script>