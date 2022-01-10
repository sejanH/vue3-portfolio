<template>
  <div class="has-background-theme">
    <div class="container is-max-widescreen">
      <div class="h-400 slider columns is-mobile" v-if="slider">
        <div class="left column is-two-thirds-tablet">
          <h1>{{ slider.title }}</h1>
          <p class="text">{{ slider.text }}</p>
        </div>
        <div class="right column is-one-third">
          <div
            class="images"
            :style="{
              background:
                'url(' +
                getImage(slider.media) +
                ') 50% center / cover no-repeat transparent',
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIntro",
  props: {
    slider: {
      type: Object,
      default: null,
    },
  },
  methods: {
    getImage(img_path = null) {
      if (img_path) {
        return require("@/assets/images/" + img_path);
      }
      return require("@/assets/images/logo.png");
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  .left {
    color: $white;
  }
  .right {
    margin-top: 0.75rem;
    @include until(767px) {
      display: none;
    }
    .images {
      height: 340px;
      width: auto;
      position: relative;
      @include until($desktop) {
        height: 260px;
      }
      &:before {
        content: " ";
        position: absolute;
        top: -1px;
        width: 0;
        height: 3px;
        border-bottom: 171px solid #00a86b;
        border-top: 171px solid #00a86b;
      }
      &:after {
        content: " ";
        position: absolute;
        top: -1px;
        width: 0;
        height: 3px;
        border-bottom: 171px solid #00a86b;
        border-top: 171px solid #00a86b;
      }
    }
  }
  .text {
    font-size: 1rem;
  }
}
</style>