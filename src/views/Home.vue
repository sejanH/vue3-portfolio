<template>
  <div class="home_page">
    <slider :sliders="sliders"></slider>
  </div>
</template>

<script>
import { sliders } from "@/static/pages/home.json";
import Slider from "@/components/Slider";
export default {
  name: "Home",
  components: {
    Slider,
  },
  computed: {
    sliders() {
      return sliders;
    },
  },
};
</script>