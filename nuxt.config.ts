// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'element-plus/theme-chalk/dark/css-vars.css',
    'element-plus/theme-chalk/display.css',
    '~/assets/normalize.css',
    '~/assets/reset.css'
  ],
  modules: [
    'nuxt-icon',
    '@element-plus/nuxt',
    '@nuxt/content',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@vueuse/nuxt'
  ],
  content: {
    navigation: {
      fields: ['icon', 'author', 'publishedAt']
    }
  }
})
