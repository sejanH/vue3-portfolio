<template>
  <div class="has-background-theme" style="position: relative">
    <div v-html="sliders.text" class="fixed_title"></div>
    <carousel :items-to-show="1" v-if="sliders" ref="myCarousel">
      <template #slides="{ currentSlide }">
        <slide v-for="(slide, index) in sliders.slides" :key="index">
          <div
            class="carousel__item"
            :style="
              'background-position: 88% 25%; background-size: inherit;background-image: url(' +
              require('@/assets/images/' + slide.bg) +
              ')'
            "
          >
            <div class="slide-wrapper">
              <div
                :class="[
                  currentSlide == index && 'slide-active',
                  'slide-container',
                ]"
              >
                <div :class="classes[index][0]" v-if="slide.image[0]">
                  <img :src="require('@/assets/images/' + slide.image[0])" />
                </div>
                <div :class="classes[index][1]" v-if="slide.image[1]">
                  <img :src="require('@/assets/images/' + slide.image[1])" />
                </div>
                <div :class="classes[index][2]" v-if="slide.image[2]">
                  <img :src="require('@/assets/images/' + slide.image[2])" />
                </div>
              </div>
            </div>
          </div>
        </slide>
      </template>
      <template #addons="{ currentSlide }">
        <div class="slider__pagination">
          <li
            :class="[
              currentSlide == index && 'slide-menu-nav-active-button',
              'slide-menu-nav-button ',
            ]"
            v-for="(slide, index) in sliders.slides"
            :key="index"
            v-on:click="goTo(index)"
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
  data() {
    return {
      classes: {
        0: ["slide__inner_top", "slide__inner_top", "slide__inner_bottom"],
        1: ["slide__inner_bottom3 inner_ltr", "slide__inner_bottom2 inner_rtl"],
        2: ["slide__inner_left2", "slide__inner_bottom3 slide3"],
      },
    };
  },
  props: {
    sliders: {
      type: Object,
      default: null,
    },
  },
  components: {
    Carousel,
    Slide
  },
  methods: {
    goTo(index) {
      this.$refs.myCarousel.nav.slideTo(index);
    },
  },
};
</script>

<style lang="scss" scoped>
@include horizontal(horizontal2, 5%, 12%);
@include horizontal(horizontal1, 22%, 16%);
:deep(.slide-active) {
  z-index: 2;
  &.slide-container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: translate3d(0px, 0px, 0px);
    overflow: hidden;
    backface-visibility: hidden;
    transition: all 300ms ease-in-out 0ms;
  }
  .slide__inner_top,
  .slide__inner_bottom {
    display: block !important;
    position: absolute;
    right: 10%;
    @include device("medium") {
      text-align: center;
      left: 0;
      right: 0;
    }
    @include device("small") {
      img {
        width: 300px;
      }
    }
  }
  .slide__inner_top {
    &:nth-of-type(1) {
      bottom: 20%;
      z-index: 3;
      animation: slidedown1 1.5s, rotate 1.5s;
      transform: rotate3d(1, 0, 0, 45deg);
    }
    &:nth-of-type(2) {
      bottom: 15%;
      z-index: 2;
      animation: slidedown2 1.5s;
      transform: rotate3d(1, 0, 0.1, -10deg);
    }
    @include device("medium") {
      top: -20px;
      h2 {
        font-size: 15px;
      }
      h3 {
        display: none;
      }
    }
  }
  .slide__inner_bottom {
    bottom: 10%;
    transform: scale3d(0.95, 1.25, 1);
    animation: skew 1.5s;
    @include device("medium") {
      top: -20px;
    }
  }
  .slide__inner_left {
    display: block !important;
    position: absolute;
    right: 30%;
    animation: ltr 2s;
    transform: scale(0.8);
    @include device("medium") {
      right: 0;
    }
  }
  .slide__inner_left2 {
    display: block !important;
    position: absolute;
    right: 7%;
    bottom: 15%;
    animation: ltrInner 1.5s ease-in-out;
    @include device("medium") {
      animation: unset;
      text-align: center;
      left: 0;
      right: 0;
      bottom: 0;
      img {
        width: 320px;
      }
    }
    @include device("small") {
      img {
        width: 250px;
      }
    }
  }
  .slide__inner_bottom2 {
    display: block !important;
    position: absolute;
    right: 12%;
    transform: rotate(-21deg);
    // bottom: 0;
    @include device("medium") {
      right: 15%;
    }
  }
  .slide__inner_bottom3 {
    display: block !important;
    position: absolute;
    right: 7%;
    bottom: 17%;
    animation: slidedown3 1.5s;
    @include device("medium") {
      animation: unset;
      top: unset !important;
      bottom: 8px !important;
      text-align: center;
      left: 0;
      right: 0;
    }
    @include device("small") {
      img {
        width: 300px;
      }
    }
    &.slide3 {
      @include device("medium") {
        left: 0;
        right: 0;
        top: 0;
        img {
          width: 320px;
        }
        animation: fadeIn ease 4s;
        -webkit-animation: fadeIn ease 4s;
        -moz-animation: fadeIn ease 4s;
        -o-animation: fadeIn ease 4s;
        -ms-animation: fadeIn ease 4s;
      }
      @include device("small") {
        left: 0;
        right: 0;
        top: 0;
        img {
          width: 250px;
        }
      }
    }
  }
  .inner_ltr {
    right: 16%;
    bottom: 22%;
    animation: horizontal1 1.5s;
    @include device("medium") {
      animation: fadeIn ease 4s;
      -webkit-animation: fadeIn ease 4s;
      -moz-animation: fadeIn ease 4s;
      -o-animation: fadeIn ease 4s;
      -ms-animation: fadeIn ease 4s;
    }
  }
  .inner_rtl {
    bottom: 27%;
    animation: horizontal2 1.5s;
    @include device("medium") {
      // animation: unset;
      animation: fadeIn ease 4s;
      -webkit-animation: fadeIn ease 4s;
      -moz-animation: fadeIn ease 4s;
      -o-animation: fadeIn ease 4s;
      -ms-animation: fadeIn ease 4s;
      img {
        width: 100px;
      }
    }
  }
}
.slide-container {
  .slide__inner_top,
  .slide__inner_bottom,
  .slide__inner_left,
  .slide__inner_left2,
  .slide__inner_bottom2,
  .slide__inner_bottom3 {
    display: none;
  }
}
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
  height: 400px;
  position: relative;
  max-width: 1152px;
  margin: 0 auto;
  @include until($tablet) {
    height: 280px;
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
      width: 100%;
      height: 380px;
      background-repeat: no-repeat;
    }
  }
  // .buttonControl {
  //   position: relative;
  //   height: 30px;
  //   display: block;
  //   :deep(.carousel__prev) {
  //     background-color: $theme;
  //     top: -340%;
  //     @include until($tablet) {
  //       top: -17px;
  //       left: 15px;
  //       border: 2px solid $primary;
  //     }
  //   }
  //   :deep(.carousel__next) {
  //     background-color: $theme;
  //     top: -340%;
  //     @include until($tablet) {
  //       top: -17px;
  //       right: 15px;
  //       border: 2px solid $primary;
  //     }
  //   }
  // }
}
:deep(.slider__pagination) {
  @include until($tablet) {
    display: none;
  }
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