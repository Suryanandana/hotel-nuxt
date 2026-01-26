<script setup>
import { onMounted, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// --- Data & Terjemahan ---
const { t, tm } = useI18n()
const rooms = computed(() => tm('landing.roomList'))

const breadcrumbs = [
  { url: '/', label: t('navbar.home') },
  { url: 'rooms', label: t('navbar.rooms') }
]

// --- SEO & Metadata Halaman ---
useHead({
  title: 'Our Rooms & Suites',
  meta: [
    { name: 'description', content: 'Explore our collection of luxurious rooms and suites, each designed for your ultimate comfort and relaxation.' }
  ]
})

// --- Animasi ---
onMounted(() => {
  // Animasi untuk hero section
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  })

  // Animasi untuk setiap kartu kamar saat di-scroll
  const sections = gsap.utils.toArray('.room-section')
  sections.forEach((section) => {
    const image = section.querySelector('.room-image')
    const card = section.querySelector('.room-card')

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 100%',
      }
    })

    tl.from(image, {
      clipPath: 'inset(0 100% 0 0)',
      duration: 1,
      ease: 'power3.out'
    })
      .from(card, {
        y: 80,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
  })
})
</script>

<template>
  <div class="bg-stone-50 dark:bg-stone-950">
    <!-- Hero Section -->
    <Hero :title="t('landing.roomHeader.title')" :sub-title="t('landing.roomHeader.subtitle')"
      img-url="/images/slide1.jpg" :breadcrumbs="breadcrumbs" />

    <!-- Daftar Kamar -->
    <section class="py-20 md:py-32 space-y-32">
      <LandingRoomCard v-for="(room, index) in rooms" :key="index" :room="room" />
    </section>

    <!-- FAQ Section -->
    <LandingFaq />
    <LandingContact />
  </div>
</template>