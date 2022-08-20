import { createApp, defineAsyncComponent } from "vue";
import { createHead } from "@vueuse/head";
import { FkComponentsPlugin } from "@flyingkiwi/vue-components";
import App from "@/App.vue";
import router from "./router";

// sass
import "virtual:fonts.css";
import 'bootstrap'

//global components
const DefaultItem = defineAsyncComponent(() => import("@/components/DefaultItem.vue"));
const CloudinaryImage = defineAsyncComponent(() => import("@/components/CloudinaryImage.vue"));

const head = createHead();

const app = createApp(App);
app
  .component('default-item', DefaultItem)
  .component('cloudinary-image', CloudinaryImage)

app
  .use(head)
  .use(FkComponentsPlugin)
  .use(router)

app
  .mount("#app");
