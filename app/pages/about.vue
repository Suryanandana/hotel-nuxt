<script setup>
import { computed } from 'vue'

definePageMeta({
  title: 'pages.about.title'
})

const { t } = useI18n()
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
  <section>
    <h1>{{ pageTitle }}</h1>
    <p>{{ pageDescription }}</p>
  </section>
</template>
