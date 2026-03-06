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
    { src: '/images/pool/BED ROOM TWIN _11_11zon.jpg', alt: 'Slide 1' },
    { src: '/images/pool/DETAIL PROPERTI PRESISI POOL_3_11zon.jpg', alt: 'Slide 2' },
    { src: '/images/pool/WIDE-10_4_11zon.jpg', alt: 'Slide 3' },
    { src: '/images/pool/WIDE-2_5_11zon.jpg', alt: 'Slide 4' },
    { src: '/images/pool/DETAIL-21_2_11zon.jpg', alt: 'Slide 5' },
    { src: '/images/pool/DETAIL ROOM 1_12_11zon.jpg', alt: 'Slide 6' },
    { src: '/images/pool/WIDE-11_9_11zon.jpg', alt: 'Slide 7' },
    { src: '/images/pool/WIDE-3_8_11zon.jpg', alt: 'Slide 8' },
    { src: '/images/pool/DETAIL-23_1_11zon.jpg', alt: 'Slide 9' },
    { src: '/images/pool/DETAIL ROOM 4_11_11zon.jpg', alt: 'Slide 10' },
    { src: '/images/pool/WIDE-12_4_11zon.jpg', alt: 'Slide 11' },
    { src: '/images/pool/WIDE-4_5_11zon.jpg', alt: 'Slide 12' },
    { src: '/images/pool/DETAIL-24_9_11zon.jpg', alt: 'Slide 13' },
    { src: '/images/pool/DETAIL ROOM 5_7_11zon.jpg', alt: 'Slide 14' },
    { src: '/images/pool/WIDE-13_8_11zon.jpg', alt: 'Slide 15' },
    { src: '/images/pool/WIDE-7_7_11zon.jpg', alt: 'Slide 16' },
    { src: '/images/pool/DETAIL-28_12_11zon.jpg', alt: 'Slide 17' },
    { src: '/images/pool/DETAIL ROOM 6_13_11zon.jpg', alt: 'Slide 18' },
    { src: '/images/pool/WIDE-14_13_11zon.jpg', alt: 'Slide 19' },
    { src: '/images/pool/WIDE-8_3_11zon.jpg', alt: 'Slide 20' },
    { src: '/images/pool/DETAIL-29_6_11zon.jpg', alt: 'Slide 21' },
    { src: '/images/pool/KING SIZE_14_11zon.jpg', alt: 'Slide 22' },
    { src: '/images/pool/WIDE-15_6_11zon.jpg', alt: 'Slide 23' },
    { src: '/images/pool/WIDE-9_10_11zon.jpg', alt: 'Slide 24' },
    { src: '/images/pool/DETAIL-31_10_11zon.jpg', alt: 'Slide 25' },
    { src: '/images/pool/POOL VIEW MUG _2_11zon.jpg', alt: 'Slide 26' },
    { src: '/images/pool/WIDE-16_1_11zon.jpg', alt: 'Slide 27' }
];

const pageTitle = computed(() => t('pages.pool.title'))
const pageDescription = computed(() => t('pages.pool.description'))
const pageKeywords = computed(() => t('pages.pool.keywords'))

useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    ogTitle: pageTitle,
    ogDescription: pageDescription,
})
</script>

<template>
    <Hero img-url="/images/hotel/ulu pool view.jpg" :title="t('landing.roomList[1].title')" :breadcrumbs="breadcrumbs" />
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