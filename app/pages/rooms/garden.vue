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
    { src: '/images/garden/BED ROOM TWIN _12_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL-14_4_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL-21_2_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL-23_3_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL-24_9_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL-29_6_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL-31_10_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL PROPERTI PRESISI GARDEN_7_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL ROOM 1_13_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL ROOM 4_11_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL ROOM 5_8_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/DETAIL ROOM 6_14_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/KING SIZE_1_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-1_12_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-2_5_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-3_10_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-4_5_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-5_7_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-6_2_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-7_6_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-8_3_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-9_11_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-11_9_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-12_4_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-13_8_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/garden/WIDE-16_1_11zon.jpg', alt: 'Slide 1' },
    // { src: '/images/garden/', alt: 'Slide 1' },
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
    <Hero img-url="/images/hotel/ulu garden view.jpg" :title="t('landing.roomList[0].title')" :breadcrumbs="breadcrumbs" />
    <!-- content -->
    <div class="container mx-auto px-4 pt-32 pb-20">
        <ClientOnly>
            <RoomsHero :slides="slides" />
        </ClientOnly>
        <RoomsTwoLayout>
            <!-- LEFT CARD -->
            <template v-slot:left>
                <!-- Header Card -->
                <RoomsHeaderCard
                    :title="t('landing.roomList[0].title')"
                    price="1.230.000"
                    price-breakfast="1.500.000"
                />
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