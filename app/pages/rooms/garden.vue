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
    { src: '/images/garden-view.jpg', alt: 'Slide 1' },
    { src: '/images/garden1.webp', alt: 'Slide 2' },
    { src: '/images/garden-room1.webp', alt: 'Slide 3' },
    { src: '/images/garden2.webp', alt: 'Slide 4' },
    { src: '/images/garden-room2.webp', alt: 'Slide 5' },
    { src: '/images/garden-room3.webp', alt: 'Slide 5' },
];

const pageTitle = computed(() => t('pages.garden.title'))
const pageDescription = computed(() => t('pages.garden.description'))
const pageKeywords = computed(() => t('pages.garden.keywords'))

useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    ogTitle: pageTitle,
    ogDescription: pageDescription,
})
</script>

<template>
    <Hero img-url="/images/garden-room-hero.webp" :title="t('landing.roomList[0].title')" :breadcrumbs="breadcrumbs" />
    <!-- content -->
    <div class="container mx-auto px-4 pt-32 pb-20">
        <ClientOnly>
            <RoomsHero :slides="slides" />
        </ClientOnly>
        <RoomsTwoLayout>
            <!-- LEFT CARD -->
            <template v-slot:left>
                <!-- Header Card -->
                <RoomsHeaderCard :title="t('landing.roomList[0].title')" price="1.150.000" />
                <div class="space-y-3">
                    <h2 class="text-3xl md:text-4xl font-serif mb-3">
                        {{ t('rooms.garden.title') }}
                    </h2>
                    <p class="text-gray-600 leading-relaxed">
                        {{ t('rooms.garden.overview') }}
                    </p>
                </div>
                <RoomsFacility class="mt-10" />
                <RoomsBookingRules class="mt-10" />
                <RoomsRoomPolicy class="mt-10" />
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