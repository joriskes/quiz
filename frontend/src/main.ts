import { createApp, defineAsyncComponent } from "vue";
import { createHead } from "@vueuse/head";
import { createI18n } from "vue-i18n";
import { FkComponentsPlugin } from "@flyingkiwi/vue-components";
import App from "@/App.vue";
import router from "./router";

// sass
import "virtual:fonts.css";
import 'bootstrap'

//global components
const DefaultItem = defineAsyncComponent(() => import("@/components/DefaultItem.vue"));

const head = createHead();

const app = createApp(App);
app
  .component('default-item', DefaultItem)

app
  .use(head)
  .use(FkComponentsPlugin)
  .use(router)

app
  .mount("#app");
