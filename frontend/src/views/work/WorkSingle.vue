<template>
  <main :id="slug">
    <strapi-data :endpoint="`work`" v-slot="{ data }" :populate="['seo']" :filters="{ slug: { $eq: slug } }">
      <template v-if="data && data && data.length == 1">
        <site-head :title="`${data[0].attributes.title} - Flying Kiwi`" :seo="data[0].attributes.seo || {}" />
        <section id="hero">
          <h1>{{ data[0].attributes.title }}</h1>
          <div v-html="data[0].attributes.shortDescription"></div>
        </section>
      </template>
    </strapi-data>
  </main>
</template>

<script setup lang="ts">
//props
defineProps({
  slug: { type: String, required: true }
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
  min-height: 100vh;
  padding: base-spacing() base-spacing() base-spacing(2);

  p {
    width: 50%;
  }
}
</style>
