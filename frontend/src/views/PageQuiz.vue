<template>
  <main id="page-home">
    <strapi-data :endpoint="`quizzes/${route.params.id}`" v-slot="{ data }" :populate="['questions', 'questions.*']">
      <template v-if="data">
        <h1>{{ data.title }}</h1>
        <template v-for="item in data.attributes.questions.data" :key="`card-single-${item.id}`">
          <default-item :item="item" />
        </template>
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
