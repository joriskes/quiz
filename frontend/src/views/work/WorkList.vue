<template>
  <section id="items">
    <template v-for="item in list" :key="`card-single-${item.id}`">
      <default-item :item="item" />
    </template>
  </section>
</template>

<script setup lang="ts">
defineProps({
  list: { type: Object, required: true },
});
</script>

<style lang="scss" scoped>
#items {
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
