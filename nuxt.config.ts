// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/eslint"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2024-11-05",
  css: ["normalize.css/normalize.css", "/assets/styles.css"],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: "github-light" as const,
            // Theme used if `html.dark`
            dark: "github-dark" as const,
            // Theme used if `html.sepia`
            sepia: "monokai" as const,
          },
        },
      },
    },
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL,
  },
});
