<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const breadcrumbs = [
    { url: '/', label: t('navbar.home') },
    { url: 'rooms', label: t('navbar.rooms') },
    { url: t('landing.roomList[1].url'), label: t('landing.roomList[1].title') }
]

const slides = [
    { src: '/images/pool-room1.webp', alt: 'Slide 1' },
    { src: '/images/pool.jpg', alt: 'Slide 2' },
    { src: '/images/pool-room2.webp', alt: 'Slide 3' },
    { src: '/images/outdoor-pool.webp', alt: 'Slide 4' },
    { src: '/images/pool-room3.webp', alt: 'Slide 5' },
    { src: '/images/pool2.webp', alt: 'Slide 5' },
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
    <Hero img-url="/images/pool_room_hero.webp" :title="t('landing.roomList[1].title')" :breadcrumbs="breadcrumbs" />
    <!-- content -->
    <div class="container mx-auto px-4 pt-32 pb-20">
        <ClientOnly>
            <RoomsHero :slides="slides" />
        </ClientOnly>
        <RoomsTwoLayout>
            <!-- LEFT CARD -->
            <template v-slot:left>
                <!-- Header Card -->
                <RoomsHeaderCard :title="t('landing.roomList[1].title')" price="1.250.000" />
                <div class="space-y-3">
                    <h2 class="text-3xl md:text-4xl font-serif mb-3">
                        {{ t('rooms.pool.title') }}
                    </h2>
                    <p class="text-gray-600 leading-relaxed">
                        {{ t('rooms.pool.overview') }}
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