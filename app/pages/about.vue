<script setup>
import { computed } from 'vue'

definePageMeta({
  title: 'pages.about.title'
})

const { t } = useI18n()
const breadcrumbs = [
    {url: '/', label: t('navbar.home')},
    {url: 'about', label: t('navbar.about')}
]
const pageTitle = computed(() => t('pages.about.title'))
const pageDescription = computed(() => t('pages.about.description'))
const pageKeywords = computed(() => t('pages.about.keywords'))

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
})
</script>

<template>
  <Hero :title="t('pages.about.sub')" img-url="/images/garden_view_hero.jpg" :breadcrumbs="breadcrumbs" />
  <div class="container mx-auto px-4 pt-32">
    <AboutWeAre data-aos="fade-up" />
    <AboutRoomOverview data-aos="fade-up" />
    <AboutVision data-aos="fade-up" />
    <AboutFacilityOverview data-aos="fade-up" />
    <LandingContact />
  </div>
</template>
