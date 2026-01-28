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
const breadcrumbs = [
    {url: '/', label: t('navbar.home')},
    {url: 'facilities', label: t('navbar.facilities')}
]

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
        <Hero :title="t('landing.facilitySection.header.title')" img-url="/images/pool-view-hero.jpg" :breadcrumbs="breadcrumbs" />
        <!-- Bagian Fasilitas -->
        <div class="container mx-auto px-4 pt-32">
            <div class="facility-grid grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <LandingFacilityCard v-for="(card, index) in cardsData" :key="index" :card="card" />
            </div>
            <AboutFacilityOverview class="mt-20" data-aos="fade-up" />
        </div>
        <LandingFaq />
        <LandingContact />
    </div>
</template>