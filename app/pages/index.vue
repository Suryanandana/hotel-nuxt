<script setup>
import { computed } from 'vue'

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
