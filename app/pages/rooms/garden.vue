<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
const { t: tLocal } = useI18n({
    useScope: 'local'
})
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
        <RoomsHero :slides="slides" />
        <RoomsTwoLayout>
            <!-- LEFT CARD -->
            <template v-slot:left>
                <!-- Header Card -->
                <RoomsHeaderCard :title="t('landing.roomList[0].title')" price="750.000" />
                <div class="space-y-3">
                    <h2 class="text-3xl md:text-4xl font-serif mb-3">
                        {{ tLocal('title') }}
                    </h2>
                    <p class="text-gray-600 leading-relaxed">
                        {{ tLocal('overview') }}
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

<i18n lang="json">{
    "en": {
        "title": "Overview",
        "overview": "Our Garden View Rooms offer a serene escape with lush green landscapes right outside your window. Designed for comfort and relaxation, these rooms provide a peaceful retreat from the everyday hustle. Enjoy modern amenities and a tranquil atmosphere, making your stay both refreshing and memorable."
    },
    "id": {
        "title": "Overview",
        "overview": "Kamar Garden View kami menawarkan pelarian yang tenang dengan pemandangan hijau subur tepat di luar jendela Anda. Dirancang untuk kenyamanan dan relaksasi, kamar-kamar ini menyediakan tempat peristirahatan yang damai dari hiruk pikuk sehari-hari. Nikmati fasilitas modern dan suasana yang tenang, menjadikan masa menginap Anda menyegarkan dan tak terlupakan."
    }
}</i18n>