<template>
  <div class="has-background-theme" style="position: relative">
    <div v-html="sliders.text" class="fixed_title"></div>
    <carousel :items-to-show="1" v-if="sliders">
      <slide v-for="(slide, index) in sliders.slides" :key="index">
        <div class="carousel__item" :style="'background: ' + slide.bg"></div>
      </slide>
      <template #addons="{ currentSlide }">
        <div class="slider__pagination">
          <li
            :class="[
              currentSlide == index && 'slide-menu-nav-active-button',
              'slide-menu-nav-button ',
            ]"
            v-for="(slide, index) in sliders.slides"
            :key="index"
            @click="
              () => {
                goTo(index);
              }
            "
          >
            <div class="slide-menu-nav-button-description">
              <div class="slide-menu-nav-button-number">
                {{ index + 1
                }}<span class="slide-menu-nav-button-square"></span>
              </div>
              <div
                class="slide-menu-nav-button-text"
                v-html="slide.navDescription"
              ></div>
            </div>
          </li>
        </div>
      </template>
    </carousel>
  </div>
</template>

<script>
// :autoplay="5000"
// :wrap-around="true"
/* disable eslint */
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  name: "HomeSlider",
  props: {
    sliders: {
      type: Object,
      default: null,
    },
  },
  components: {
    Carousel,
    Slide,
  },
  methods: {
    goTo(index) {
      console.log(index);
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.fixed_title) {
  text-align: left;
  position: absolute;
  left: 14%;
  top: 18%;
  h1 {
    font-size: 42px;
  }
  h1,
  h3,
  h4 {
    font-weight: 800;
    text-transform: uppercase;
    color: $white;
  }
  h4 {
    font-weight: 400;
  }
  @include until($tablet) {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    top: 0;
    height: auto !important;
    h1 {
      font-size: 24px !important;
    }
    h3 {
      font-size: 20px !important;
    }
    h4 {
      font-size: 16px !important;
      font-weight: 400;
    }
  }
  @include until(767px) {
    h3 {
      font-size: 15px;
    }
    h4 {
      display: none;
    }
  }
}
.carousel {
  height: 380px;
  position: relative;
  max-width: 1152px;
  margin: 0 auto;
  @include until($tablet) {
    height: 340px;
  }
  :deep(.carousel__viewport) {
    display: flex;
    flex-flow: column;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    .carousel__item {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
:deep(.slider__pagination) {
  position: absolute;
  bottom: 0;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  margin: 0px;
  padding: 0px;
  border-top: 1px solid rgba(215, 225, 235, 0.6);
  .slide-menu-nav-button {
    cursor: pointer;
    list-style: none;
    margin: 0 !important;
    padding: 0.5rem 0.5rem !important;
    &.slide-menu-nav-active-button {
      transition: all 0.5s linear 100ms;
      background-color: rgba(12, 34, 39, 0.7);
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 3px;
        background-color: #fff;
      }
    }
  }
  .slide-menu-nav-button-description {
    text-align: left;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 0;
    .slide-menu-nav-button-number {
      display: inline-flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      position: relative;
      min-width: 36px;
      width: 36px;
      height: 36px;
      line-height: 36px;
      backface-visibility: hidden;
      color: #fff;
      font-size: 12px;
      .slide-menu-nav-button-square {
        background-color: transparent;
        border-radius: 5px;
        box-shadow: rgb(0 0 0 / 18%) 2px 2px 2px;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: rotate(45deg) translate(-50%, -50%);
        transform-origin: 0px 0px;
        width: 24px;
        height: 24px;
        border: 1px solid rgb(255, 255, 255);
        opacity: 0.5;
      }
    }
    .slide-menu-nav-button-text {
      color: $white;
      margin-left: 0.35rem;
      p {
        font-size: 1.1rem;
      }
    }
  }
}
</style>