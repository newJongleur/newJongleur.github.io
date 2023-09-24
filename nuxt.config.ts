// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/normalize.css', 'element-plus/dist/index.css'],
  modules: [
    '@element-plus/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt'
  ],
})
