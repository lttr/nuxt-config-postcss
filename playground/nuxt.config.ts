import { createResolver } from "@nuxt/kit"

const resolver = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: ["../src/module"],
  postcssConfig: {
    filesWithGlobals: [resolver.resolve("./assets/css/media.css")],
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-07-09",
})
