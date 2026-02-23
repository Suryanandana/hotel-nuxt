<script setup>
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from '@vercel/speed-insights/vue';
useSeoMeta({
  titleTemplate: '%s %separator The Ulu Beach Club & Bungalows', // %s akan diganti judul halaman spesifik
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
defineOgImage({
  url: '/images/slide2.jpg', // Path ini merujuk ke folder public/images/
  width: 1200,
  height: 630,
  alt: 'Interior view of The Ulu Beach Club & Bungalows',
})
// Tambahkan useSchemaOrg khusus untuk mendefinisikan Hotel
useSchemaOrg([
  defineLocalBusiness({
    name: 'The Ulu Beach Club & Bungalows',
    logo: '/logo-theulu-nobg.png', // Pastikan logo ada di folder 'public'
    image: '/images/drone1.jpg',
    address: {
      streetAddress: 'Desa Jungut Batu, Jungutbatu, Lembongan, Nusa Lembongan',
      addressLocality: 'Kec. Nusa Penida, Kabupaten Klungkung',
      addressRegion: 'Bali',
      postalCode: '80771',
      addressCountry: 'ID',
    },
    starRating: {
      ratingValue: '5', // Ubah sesuai bintang hotel (misal: 3, 4, 5)
    },
    telephone: '+6281313333661', // Ganti dengan nomor asli hotel
    priceRange: 'IDR 1.000.000 - IDR 1.500.000' // Format standar: IDR atau simbol $
  })
])
</script>

<template>
  <div class="overflow-x-hidden">
    <NuxtLoadingIndicator color="#FFD700" />
    <Analytics />
    <SpeedInsights />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
