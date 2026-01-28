<script setup>
import { onMounted, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

definePageMeta({
  title: 'pages.home.title'
})

const { t,  tm } = useI18n()
const rooms = computed(() => tm('landing.roomList'))

const pageTitle = computed(() => t('pages.home.title'))
const pageDescription = computed(() => t('pages.top.description'))

useHead({
  title: pageTitle,
  meta: [
    { name: 'description', content: pageDescription },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription }
  ]
})

// --- Animasi ---
onMounted(() => {

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
  <div>
    <LandingHero />
    <LandingAbout />
    <section class="py-20 md:py-32 space-y-32">
      <LandingRoomCard v-for="(room, index) in rooms" :key="index" :room="room" />
    </section>
    <LandingFacility />
    <LandingTextReveal />
    <LandingFaq />
    <LandingMaskReveal />
    <LandingContact />
  </div>
</template>
