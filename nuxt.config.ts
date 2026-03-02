// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        // Tambahkan baris ini
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    }
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
  image: {
    // [1, 2]: generate 1x & 2x — gambar tajam di desktop Retina & layar HiDPI
    // Note: hydration warning di dev mode adalah known issue @nuxt/image v2,
    // tidak berpengaruh di production (DOM tidak diubah, hanya check)
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  site: {
    url: "https://www.theululembongan.com",
    name: "The Ulu Beach Club & Bungalows",
    description:
      "The Ulu – a luxury beach club & bungalows hotel in Nusa Lembongan, Bali. Escape to The Ulu Hotel for stunning ocean views, private pool rooms, and an exclusive beachfront experience near Bali.",
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
