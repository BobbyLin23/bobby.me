// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/content',
    'dayjs-nuxt',
  ],
  devServer: {
    port: 3019,
  },
  icon: {
    serverBundle: {
      collections: ['mdi'],
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/prose.css', '~/assets/css/markdown.css'],
  components: [
    '~/components',
    {
      path: '~/components/content',
      pathPrefix: false,
    },
  ],
})
