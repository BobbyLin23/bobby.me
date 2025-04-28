// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    'dayjs-nuxt',
  ],
  devServer: {
    port: 3019,
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
