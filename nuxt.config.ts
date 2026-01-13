// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ['./app/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n',
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    'nuxt-aos',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: '@/components/ui'
  },
  aos: {
    once: true
  },
  i18n: {
    baseUrl: 'https://example.com',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    customRoutes: 'config',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    pages: {
      about: {
        en: '/about-us',
        id: '/tentang',
      }
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        language: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'id',
        iso: 'id-ID',
        language: 'id-ID',
        name: 'Indonesia',
        file: 'id.json'
      }
    ]
  },
})