<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { t: tLocal } = useI18n({
    useScope: 'local'
})
const breadcrumbs = [
    { url: '/', label: t('navbar.home') },
    { url: 'rooms', label: t('navbar.rooms') },
    { url: t('landing.roomList[1].url'), label: t('landing.roomList[1].title') }
]

const slides = [
  { src: '/images/slide1.jpg', alt: 'Slide 1' },
  { src: '/images/slide2.jpg', alt: 'Slide 2' },
  { src: '/images/slide3.png', alt: 'Slide 3' },
  { src: '/images/pool.jpg', alt: 'Pool' },
  { src: '/images/restaurant.jpg', alt: 'Restaurant' },
];

const pageTitle = computed(() => t('pages.pool.title'))
const pageDescription = computed(() => t('pages.pool.description'))

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
    <Hero :title="t('landing.roomList[1].title')" :breadcrumbs="breadcrumbs" />
    <!-- content -->
    <div class="container mx-auto px-4 pt-32 pb-20">
        <ClientOnly>
            <RoomsHero :slides="slides" />
        </ClientOnly>

        <div class="grid grid-cols-1 lg:grid-cols-3 items-start gap-8 mt-10 md:-mt-10 lg:-mt-20">
            <!-- LEFT CONTENT -->
            <div class="lg:col-span-2 space-y-6">
                <!-- Header Card -->
                <div class="border rounded-2xl p-6 space-y-4">
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div class="flex items-center gap-3">
                            <h1 class="text-2xl font-semibold">{{ t('landing.roomList[1].title') }}</h1>
                            <span class="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-700">
                                Luxury Rooms
                            </span>
                        </div>
                    </div>

                    <p class="text-sm text-gray-500">
                        Kec. Nusa Penida, Kabupaten Klungkung, Bali
                    </p>

                    <p class="text-2xl font-semibold text-emerald-700">
                        $150 <span class="text-sm font-normal text-gray-500">/ {{ tLocal('night') }}</span>
                    </p>

                    <div class="border-t pt-4 flex flex-wrap gap-6 text-sm text-gray-600">
                        <div class="flex items-center gap-2">🛏 1 Bed</div>
                        <div class="flex items-center gap-2">🛁 1 Bath</div>
                        <div class="flex items-center gap-2">📐 300 sqft</div>
                        <div class="flex items-center gap-2">👤 2 Guests</div>

                        <button class="ml-auto flex items-center gap-2 text-emerald-700 hover:underline">
                            🔗 Share
                        </button>
                    </div>
                </div>

                <!-- Overview -->
                <div class="space-y-3">
                    <h2 class="text-xl font-semibold">Overview</h2>
                    <p class="text-gray-600 leading-relaxed">
                        {{ tLocal('overview') }}
                    </p>
                </div>

                <RoomsFacility class="mt-10" />
                <RoomsBookingRules class="mt-10" />
            </div>

            <!-- RIGHT CARD -->
            <RoomsRoomFacilitiesCard />
        </div>

    </div>
    <LandingFaq />
    <LandingContact />
</template>

<i18n lang="json">{
    "en": {
        "overview": "Our Garden View Rooms offer a serene escape with lush green landscapes right outside your window. Designed for comfort and relaxation, these rooms provide a peaceful retreat from the everyday hustle. Enjoy modern amenities and a tranquil atmosphere, making your stay both refreshing and memorable.",
        "night": "night"
    },
    "id": {
        "overview": "Kamar Garden View kami menawarkan pelarian yang tenang dengan pemandangan hijau subur tepat di luar jendela Anda. Dirancang untuk kenyamanan dan relaksasi, kamar-kamar ini menyediakan tempat peristirahatan yang damai dari hiruk pikuk sehari-hari. Nikmati fasilitas modern dan suasana yang tenang, menjadikan masa menginap Anda menyegarkan dan tak terlupakan.",
        "night": "malam"
    }
}</i18n>