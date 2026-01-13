<script setup>
import { onMounted, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RoomCard from '~/components/landing/RoomCard.vue'

gsap.registerPlugin(ScrollTrigger)

// --- Data & Terjemahan ---
const { t, tm } = useI18n()
const rooms = computed(() => tm('landing.roomList'))

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
    <section class="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
      <img src="/images/mini-gym.jpeg" alt="Hotel Exterior" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="hero-content relative text-center px-4">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-serif mb-4">
          {{ t('landing.roomHeader.title') }}
        </h1>
        <p class="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
          {{ t('landing.roomHeader.subtitle') }}
        </p>
      </div>
      <!-- Indikator Scroll -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70">
        <Icon name="solar:mouse-minimalistic-linear" class="text-4xl animate-bounce" />
      </div>
    </section>

    <!-- Daftar Kamar -->
    <section class="py-20 md:py-32 space-y-32">
      <RoomCard v-for="(room, index) in rooms" :key="index" :room="room" />
    </section>

    <!-- FAQ Section -->
    <LandingFaq />
    <LandingContact />
  </div>
</template>