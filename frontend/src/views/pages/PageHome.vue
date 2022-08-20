<template>
  <main id="page-home">
    <strapi-data endpoint="page-home" v-slot="{ data }" :populate="[
      'seo',
      'featuredWork',
      '*',
      'featuredWork.featuredImage',
      'featuredImage',
    ]">
      <template v-if="data">
        <site-head :title="`${data.attributes.title} - Flying Kiwi`" :seo="data.attributes.seo" />

        <!-- Hero -->
        <section id="hero">
          <div v-html="data.attributes.content"></div>
        </section>

        <!-- Featured work -->
        <section id="featured-work">
          <template v-for="item in data.attributes.featuredWork.data" :key="`card-single-${item.id}`">
            <default-item :item="item" collection-name="work" />
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
  padding-top: 0;
}

#hero {
  display: flex;
  align-items: center;
  min-height: calc(50vh - #{base-spacing(3)});

  p {
    width: 50%;
  }
}

#featured-work {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: base-spacing();
  padding-bottom: base-spacing(2);

  .card {
    &:nth-child(even) {
      margin-top: base-spacing();
      transform: translateY(base-spacing(2));
    }
  }
}
</style>
