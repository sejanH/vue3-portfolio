<template>
  <div>
    <page-intro :slider="slider"></page-intro>
    <div class="container is-max-widescreen mt-5">
      <h2 class="is-size-2 mx-2">Consultants &mdash;</h2>
      <hr />
      <div v-for="(consultant, index) in consultants" :key="index">
        <h3 class="is-size-3 mx-2">{{ consultant.name }} &mdash;</h3>
        <div class="columns">
          <div
            class="column is-3"
            v-for="(c, indx) in consultant.people"
            :key="indx"
          >
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" :src="getImage(c.picture)" />
              </div>
              <div className="team-content">
                <h3 className="name">{{ c.name }}</h3>
                <h4 className="title">{{ c.designation }}</h4>
              </div>
              <div className="description" v-html="c.about"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { slider, consultants } from "@/static/pages/ourconsultants.json";
import PageIntro from "../components/PageIntro.vue";
export default {
  name: "ConsultingPartners",
  components: {
    PageIntro,
  },
  methods: {
    getImage(img_path = null) {
      if (img_path) {
        return require("@/assets/images/" + img_path);
      }
      return require("@/assets/images/logo.png");
    },
  },
  computed: {
    slider() {
      return slider;
    },
    consultants() {
      return consultants;
    },
  },
};
</script>

<style lang="scss" scoped>
.columns {
  flex-wrap: wrap;
  .column {
    display: flex;
  }
}
.our-team {
  flex: 0 0 100%;
  padding: 30px 0 40px;
  margin-bottom: 30px;
  @include until($tablet) {
    margin-bottom: 0px;
  }
  background-color: #f7f5ec;
  text-align: center;
  overflow: hidden;
  position: relative;
  .picture {
    display: inline-block;
    height: 130px;
    width: 130px;
    margin-bottom: 50px;
    z-index: 1;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 0;
      border-radius: 50%;
      background-color: $green;
      position: absolute;
      bottom: 135%;
      right: 0;
      left: 0;
      opacity: 0.9;
      transform: scale(3);
      transition: all 0.3s linear 0s;
    }
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: $green;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
      transform: scale(1);
      transition: all 0.9s ease 0s;
    }
  }
  &:hover {
    .picture {
      &::before {
        height: 100%;
      }
      img {
        box-shadow: 0 0 0 14px #f7f5ec;
        transform: scale(0.7);
      }
    }
    .social,
    .description {
      bottom: 0;
      visibility: visible;
    }
  }
  .team-content {
    padding: 0 0.2rem;
  }
  .title {
    display: block;
    font-size: 15px;
    color: #4e5052;
    text-transform: capitalize;
  }
  .description {
    font-size: 14px;
    min-height: 120px;
    display: inline-flex;
    align-items: center;
  }
  .social,
  .description {
    width: 100%;
    padding: 0 0.5rem;
    margin: 0;
    background-color: $green;
    text-align: left;
    position: absolute;
    bottom: -140px;
    visibility: hidden;
    left: 0;
    transition: all 0.5s ease 0s;
    color: white;
    li {
      display: inline-block;
      a {
        display: block;
        padding: 10px;
        font-size: 17px;
        color: white;
        transition: all 0.3s ease 0s;
        text-decoration: none;
        &:hover {
          color: $green;
          background-color: #f7f5ec;
        }
      }
    }
  }
}
</style>