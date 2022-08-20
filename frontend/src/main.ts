import { createApp, defineAsyncComponent } from "vue";
import { createHead } from "@vueuse/head";
import { createI18n } from "vue-i18n";
import { FkComponentsPlugin } from "@flyingkiwi/vue-components";
import App from "@/App.vue";
import router from "./router";

import nl from "./i18n/nl.js";
import en from "./i18n/en.js";

// sass
import "virtual:fonts.css";
import 'bootstrap'

//global components
const DefaultItem = defineAsyncComponent(() => import("@/components/DefaultItem.vue"));

const head = createHead();

const i18n = createI18n({
  locale: "nl",
  fallbackLocale: "en",
  allowComposition: false,
  messages: { en: en, nl: nl },
});

const app = createApp(App);
app
  .component('default-item', DefaultItem)

app
  .use(head)
  .use(FkComponentsPlugin)
  .use(router)
  .use(i18n)

app
  .mount("#app");
