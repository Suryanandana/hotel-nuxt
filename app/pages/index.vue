<script setup>
import { computed } from 'vue'

definePageMeta({
  title: 'pages.home.title'
})

const { t } = useI18n()

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
    <LandingRoom />
    <LandingFacility />
    <LandingTextReveal />
    <LandingFaq />
    <LandingMaskReveal />
    <LandingContact />
  </div>
</template>
