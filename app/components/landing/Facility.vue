<script setup>
import { computed } from 'vue';

const { t, tm } = useI18n()

const cardsData = computed(() => tm('landing.facilitySection.list'))
</script>

<template>
  <section class="py-20 text-black bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 space-y-4 facility-card" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-serif tracking-tight text-stone-900 dark:text-stone-50">
          {{ t('landing.facilitySection.header.title') }}
        </h2>
        <p class="text-lg text-stone-600 dark:text-stone-400 font-light">
          {{ t('landing.facilitySection.header.subtitle') }}
        </p>
      </div>
      <div class="facility-grid grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <LandingFacilityCard
          v-for="(card, index) in cardsData"
          :key="index"
          :card="card"
        />
      </div>
    </div>
  </section>
</template>