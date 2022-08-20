<template>
  <img :alt="img.attributes.alternativeText" :src="
    cld
      .image(props.img.attributes.provider_metadata.public_id)
      .resize(Resize.scale().width(props.img.attributes.width))
      .format('webp')
      .toURL()
  " :srcset="srcset" :sizes="sizes" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Resize } from "@cloudinary/url-gen/actions/resize";
import { useHead } from "@vueuse/head";
import cld from "../plugins/cloudinary";
const props = defineProps({
  width: { type: Number, default: 1600 },
  height: { type: Number, default: 1200 },
  img: { type: Object, required: true },
  preload: { type: Boolean, default: false },
});
const srcset = computed(
  () => `
    ${cld
      .image(props.img.attributes.provider_metadata.public_id)
      .resize(Resize.scale().width(props.img.attributes.width))
      .format("webp")
      .toURL()} ${props.img.attributes.width}w,
    ${cld
      .image(props.img.attributes.provider_metadata.public_id)
      .resize(Resize.scale().width(1400))
      .format("webp")
      .toURL()} 1400w,
    ${cld
      .image(props.img.attributes.provider_metadata.public_id)
      .resize(Resize.scale().width(1200))
      .format("webp")
      .toURL()} 1200w,
    ${cld
      .image(props.img.attributes.provider_metadata.public_id)
      .resize(Resize.scale().width(992))
      .format("webp")
      .toURL()} 992w,
    ${cld
      .image(props.img.attributes.provider_metadata.public_id)
      .resize(Resize.scale().width(768))
      .format("webp")
      .toURL()} 768w,
    ${cld
      .image(props.img.attributes.provider_metadata.public_id)
      .resize(Resize.scale().width(576))
      .format("webp")
      .toURL()} 576w,
    ${cld
      .image(props.img.attributes.provider_metadata.public_id)
      .resize(Resize.scale().width(288))
      .format("webp")
      .toURL()} 288w,
  `
);
const sizes = computed(() => "35vw");
if (props.preload) {
  useHead({
    link: [
      {
        rel: "preload",
        as: "image",
        href: cld
          .image(props.img.attributes.provider_metadata.public_id)
          .resize(Resize.scale().width(props.img.attributes.width))
          .format("webp")
          .toURL(),
        imagesrcset: srcset,
        imagesizes: sizes,
      },
    ],
  });
}
// preload responsive images: https://web.dev/preload-responsive-images/
</script>

<style lang="scss" scoped>
</style>