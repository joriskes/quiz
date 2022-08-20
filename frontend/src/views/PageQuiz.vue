<template>
  <main id="page-home">
    <strapi-data :endpoint="`quiz/${route.params.id}`" v-slot="{ data }" :populate="['*']">
      <template v-if="data">
        {{ data }}
      </template>
    </strapi-data>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<style lang="scss" scoped>
</style>
