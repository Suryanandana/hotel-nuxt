<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const breadcrumbs = [
    { url: '/', label: t('navbar.home') },
    { url: 'rooms', label: t('navbar.rooms') },
    { url: t('landing.roomList[0].url'), label: t('landing.roomList[0].title') }
]

const slides = [
    { src: '/images/slide1.jpg', alt: 'Slide 1' },
    { src: '/images/slide2.jpg', alt: 'Slide 2' },
    { src: '/images/slide3.png', alt: 'Slide 3' },
    { src: '/images/pool.jpg', alt: 'Pool' },
    { src: '/images/restaurant.jpg', alt: 'Restaurant' },
];

const pageTitle = computed(() => t('pages.garden.title'))
const pageDescription = computed(() => t('pages.garden.description'))

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
    <Hero :title="t('landing.roomList[0].title')" :breadcrumbs="breadcrumbs" />
    <!-- content -->
    <div class="container mx-auto px-4 pt-32 pb-20">
        <ClientOnly>
            <RoomsHero :slides="slides" />
        </ClientOnly>
        <RoomsTwoLayout>
            <!-- LEFT CARD -->
            <template v-slot:left>
                <!-- Header Card -->
                <RoomsHeaderCard :title="t('landing.roomList[0].title')" price="750.000" />
                <div class="space-y-3">
                    <h2 class="text-3xl md:text-4xl font-serif mb-3">
                        {{ t('rooms.garden.title') }}
                    </h2>
                    <p class="text-gray-600 leading-relaxed">
                        {{ t('rooms.garden.overview') }}
                    </p>
                </div>
                <RoomsFacility class="mt-10" :features="tm('landing.roomList[0].features')" />
                <RoomsBookingRules class="mt-10" />
                <RoomsRoomPolicy />
            </template>
            <!-- RIGHT CARD -->
            <template v-slot:right>
                <RoomsRoomFacilitiesCard />
            </template>
        </RoomsTwoLayout>
    </div>
    <LandingFaq />
    <LandingContact />
</template>