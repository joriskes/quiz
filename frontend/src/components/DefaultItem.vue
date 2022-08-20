<template>
  <use-element-visibility v-slot="{ isVisible }" class="card">
    <div class="card-img" v-if="item.attributes.featuredImage && item.attributes.featuredImage.data">
      <img :src="item.attributes.featuredImage.data.attributes.url" :width="viewportWidth * 0.35"
        :height="viewportWidth * 0.35 * 0.75" class="card-img-top" :preload="isVisible" />
    </div>
    <div class="card-body">
      <h2 class="card-title">
        {{ item.attributes.title }}
      </h2>
      <h5 class="card-client">
        {{ item.attributes.clientName }}
      </h5>
      <router-link class="stretched-link" aria-current="page" :aria-label="item.attributes.title"
        :to="`/quiz/${item.id}`" />
    </div>
  </use-element-visibility>
</template>

<script setup lang="ts">
// imports
import { computed } from "vue";
import { UseElementVisibility } from "@vueuse/components";

defineProps({
  item: { type: Object, required: true },
});

const viewportWidth = computed(() => window.innerWidth);
</script>

<style lang="scss" scoped>
</style>
