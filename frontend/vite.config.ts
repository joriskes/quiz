import { fileURLToPath, URL } from "node:url";

import svgLoader from "vite-svg-loader";
import { defineConfig } from "vite";
import { VitePluginFonts } from "vite-plugin-fonts";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: path.resolve(
        "./src/i18n/**"
      ),
    }),
    svgLoader({
      defaultImport: "url",
    }),
    VitePluginFonts({
      // google: {
      //   preconnect: true,
      //   display: "swap",
      //   injectTo: "head-prepend",
      //   families: [
      //     {
      //       name: "Barlow",
      //       styles: "wght@400;700",
      //       defer: true,
      //     },
      //   ],
      // },

      // custom: {
      //   families: [
      //     {
      //       name: "n27bold",
      //       local: "n27bold",
      //       src: "./src/assets/fonts/*.*",
      //     },
      //   ],
      //   display: "swap",
      //   preload: true,
      //   prefetch: false,
      //   injectTo: "head-prepend",
      // },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/scss/_variables"; 
        @import "@/scss/_bootstrap"; 
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
});
