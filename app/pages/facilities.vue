<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

const { t, tm } = useI18n()
const cardsData = computed(() => tm('landing.facilitySection.list'))

// --- SEO & Metadata Halaman ---
useHead({
    title: 'Our Facilities',
    meta: [
        { name: 'description', content: 'Explore the world-class facilities at our hotel, designed for your comfort and enjoyment.' }
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
})
</script>

<template>
    <div class="bg-white dark:bg-stone-950">
        <!-- Hero Section -->
        <section class="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
            <img src="/images/mini-gym.jpeg" alt="Hotel Facilities"
                class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/50"></div>
            <div class="hero-content relative text-center px-4">
                <h1 class="text-4xl md:text-6xl font-serif mb-4">
                    {{ t('landing.facilitySection.header.title') }}
                </h1>
                <p class="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
                    {{ t('landing.facilitySection.header.subtitle') }}
                </p>
            </div>
            <!-- Indikator Scroll -->
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70">
                <Icon name="solar:mouse-minimalistic-linear" class="text-4xl animate-bounce" />
            </div>
        </section>

        <!-- Bagian Fasilitas -->
        <div class="container mx-auto px-4 pt-32">
            <div class="facility-grid grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <LandingFacilityCard v-for="(card, index) in cardsData" :key="index" :card="card" />
            </div>
        </div>
        <LandingFaq />
        <LandingContact />
    </div>
</template>