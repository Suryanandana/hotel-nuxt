<script setup>
import { computed } from 'vue'
import Button from '~/components/ui/button/Button.vue'
import About from './about.vue'
import StackedCards from '~/components/landing/StackedCards.vue'

definePageMeta({
  title: 'pages.home.title'
})

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

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
