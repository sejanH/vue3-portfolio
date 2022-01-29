<template>
  <div class="section_wrapper_1">
    <div class="container is-max-widescreen py-5">
      <div class="columns">
        <h3 class="is-size-2 mx-2">Solutions We Deliver</h3>
      </div>
      <div class="columns">
        <div
          class="column is-4"
          v-for="(card, index) in cards"
          :key="index"
        >
          <a :href="card.slug">
            <b>{{ card.name }}</b>
          </a>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "SolutionsWeDeliver",
  props: {
    cards: {
      type: Array,
      default: null,
    },
  },
};
</script>
