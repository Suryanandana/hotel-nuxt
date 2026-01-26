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
  <Hero :title="t('pages.about.sub')" img-url="/images/slide1.jpg" :breadcrumbs="breadcrumbs" />
  <div class="container mx-auto px-4 pt-32">
    <AboutWeAre data-aos="fade-up" />
    <AboutRoomOverview data-aos="fade-up" />
    <AboutVision data-aos="fade-up" />
    <LandingContact />
  </div>
</template>
