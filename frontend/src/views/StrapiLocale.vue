<template>
  <div>
    <strapi-site :strapi-url="url" :strapi-key="key" :locale="locale" :key="locale">
      <page-header :key="$route.path" />
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </router-view>

      <page-footer :key="$route.path" />
    </strapi-site>
  </div>
</template>

<script lang="ts" setup>
//imports
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import { onMounted, watchEffect } from "vue";
import { useI18n } from "vue-i18n";

//props
const props = defineProps({
  locale: {
    type: String,
    required: true,
  },
});

//get locale for correct links and strapi
const { locale } = useI18n();

//change document language and i18n locale when locale-prop changes
onMounted(() => {
  watchEffect(() => {
    document.documentElement.lang = props.locale;
    locale.value = props.locale;
  });
});

//strapi location and key
const key = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_BASE_URL;

</script>
