// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: ["./app/assets/css/main.css"],
  modules: [
    "@nuxtjs/i18n",
    "shadcn-nuxt",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "nuxt-aos",
    "@nuxtjs/seo",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  aos: {
    once: true,
  },
  site: {
    url: "https://www.theululembongan.com",
    name: "The Ulu Beach Club & Bungalows",
    description:
      "Experience the ultimate tropical getaway at The Ulu Beach Club & Bungalows in Nusa Lembongan. Enjoy luxury bungalows, a vibrant beach club, and breathtaking ocean views.",
    defaultLocale: "en",
  },
  i18n: {
    baseUrl: "https://www.theululembongan.com",
    defaultLocale: "en",
    strategy: "prefix_except_default",
    langDir: "locales",
    customRoutes: "config",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    pages: {
      about: {
        en: "/about-us",
        id: "/tentang",
      },
      contact: {
        en: "/contact",
        id: "/kontak",
      },
      facilities: {
        en: "/facilities",
        id: "/fasilitas",
      },
      rooms: {
        en: "/rooms",
        id: "/kamar",
      },
      "rooms-garden": {
        en: "/rooms/garden-view",
        id: "/kamar/pemandangan-taman",
      },
      "rooms-pool": {
        en: "/rooms/pool-view",
        id: "/kamar/pemandangan-kolam",
      },
    },
    locales: [
      {
        code: "en",
        iso: "en-US",
        language: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "id",
        iso: "id-ID",
        language: "id-ID",
        name: "Indonesia",
        file: "id.json",
      },
    ],
  },
});
