<template>
  <strapi-site :strapi-url="`${url}/api/`" :strapi-key="key">
    <page-header :key="$route.path" />
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </router-view>

      <page-footer :key="$route.path" />
  </strapi-site>
</template>

<script lang="ts" setup>
//imports
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";

//strapi location and key
const key = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_BASE_URL;

</script>

<style lang="scss">
/***************************************
 * Transitions
 ***************************************/

/***************************************
 * Sticky footer
 ***************************************/
// body,
// #app {
//   display: flex;
//   height: 100%;
//   flex-direction: column;
// }

/***************************************
 * General
 ***************************************/
::selection {
  background: var(--color-black);
  color: #fff;
}

::-moz-selection {
  background: var(--color-black);
  color: #fff;
}

/***************************************
 * Buttons
 ***************************************/

/***************************************
 * Navbar
 ***************************************/

/***************************************
 * Navbar
 ***************************************/

/***************************************
 * Main
 ***************************************/
main {
  padding: base-spacing();
}
</style>
