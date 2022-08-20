<template>
  <main :id="pageName">
    <strapi-data :endpoint="pageName" v-slot="{ data }" :populate="['seo']">
      <template v-if="data">
        <site-head :title="`${data.attributes.title} - Flying Kiwi`" :seo="data.attributes.seo" />
        <section id="hero">
          <h1>{{ data.attributes.title }}</h1>
          <div v-html="data.attributes.shortDescription"></div>
        </section>
      </template>
    </strapi-data>
  </main>
</template>

<script setup lang="ts">
defineProps({
  pageName: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
main {
  padding: 0;
}

#hero {
  color: $body-bg;
  background: $body-color;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: base-spacing() base-spacing() base-spacing(2);

  p {
    width: 50%;
  }
}
</style>
