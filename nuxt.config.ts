import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  vite: {
    plugins: [tailwindcss()],
  },
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      script: [
        {
          innerHTML: `!function(){const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",t=localStorage.getItem("button-dev-color-mode"),o=null==t?e:t;window.document.documentElement.dataset.theme=o}();`,
          type: "text/javascript",
        },
      ],
    },
  },
});
