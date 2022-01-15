<template>
  <div class="has-background-theme">
    <nav
      class="navbar is-transparent container is-max-widescreen"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand has-background-theme">
        <router-link class="navbar-item" to="/">
          <img :src="navbarData.logo" width="128" height="48" />
        </router-link>

        <a
          id="hamburgerIcon"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu has-background-theme">
        <div class="navbar-start">
          <div
            class="navbar-item has-dropdown is-hoverable"
            v-for="(menu, index) in menuItems.dropdowns"
            :key="index"
          >
            <a class="navbar-link"> {{ menu.name }} </a>
            <div class="navbar-dropdown has-background-theme">
              <a
                class="navbar-item"
                v-for="link in menu.links"
                :key="link.slug"
              >
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item has-background-theme">
            <router-link :to="{ name: 'ConsultingPartners' }"
              >Consulting Partners</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { menuItems } from "@/static/navbar.json";
export default {
  name: "Navbar",
  props: {
    navbarData: {
      type: Object,
      default: null,
    },
  },
  computed: {
    menuItems() {
      return menuItems;
    },
  },
};
</script>
