// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vueuse/nuxt',
  ],
  devServer: {
    port: 3019,
  },
  icon: {
    serverBundle: {
      collections: ['mdi'],
    },
  },
})
