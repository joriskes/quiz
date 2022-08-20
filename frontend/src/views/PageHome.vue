<template>
  <main id="page-home">
    <strapi-data endpoint="quizzes" v-slot="{ data }" :populate="['*']">
      <template v-if="data">
        <section id="quizzes">
          <template v-for="item in data" :key="`card-single-${item.id}`">
            <default-item :item="item" collection-name="quiz" />
          </template>
        </section>
      </template>
    </strapi-data>
  </main>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
main {
}
</style>
