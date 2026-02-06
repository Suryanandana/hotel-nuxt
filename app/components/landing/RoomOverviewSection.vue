<template>
    <section class="max-w-7xl mx-auto px-6 py-20 mt-20 font-sans">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div class="space-y-8">
                <div>
                    <h4 class="text-sm uppercase tracking-widest text-gray-500 mb-2">{{ t('sub-title') }}</h4>
                    <h2 class="text-5xl font-serif text-gray-900">{{ t('title') }}</h2>
                    <p class="mt-4 text-gray-600 leading-relaxed text-justify">
                        {{ t('desc') }}
                    </p>
                </div>

                <div class="space-y-8">
                    <div class="flex gap-6 items-start">
                        <div
                            class="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-amber-200 rounded-lg">
                            <Icon class="text-yellow-600 text-xl" name="temaki:garden-bed" />
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800">{{ t('title-garden') }}</h3>
                            <p class="text-gray-500 text-sm mt-1">
                                {{ t('desc-garden') }}
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-6 items-start">
                        <div
                            class="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-amber-200 rounded-lg">
                            <Icon class="text-yellow-600 text-2xl" name="fluent:swimming-pool-20-filled" />
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800">{{ t('title-pool') }}</h3>
                            <p class="text-gray-500 text-sm mt-1">
                                {{ t('desc-pool') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex gap-4 items-start h-[600px]">
                <div class="flex-1 h-[500px] overflow-hidden rounded-sm shadow-xl">
                    <img src="/images/room-overview1.webp"
                        alt="Room Interior"
                        class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                </div>

                <div class="flex-1 h-[500px] mt-14 overflow-hidden rounded-sm shadow-xl">
                    <img src="/images/room-overview2.webp"
                        alt="Lobby View"
                        class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'local' })
</script>

<i18n lang="json">{
  "en": {
    "sub-title": "Rooms & Suites",
    "title": "RELAX IN OUR ROOMS",
    "desc": "We offer a total of 24 thoughtfully designed rooms that provide comfort, tranquility, and a truly refreshing stay. Each room is created to help guests unwind after a day of adventure and enjoy the peaceful island atmosphere.",
    "title-garden": "Garden View Rooms",
    "desc-garden": "12 rooms with calming garden views, fresh air, and lush greenery for a soothing natural experience.",
    "title-pool": "Pool View Rooms",
    "desc-pool": "12 rooms overlooking the pool, offering a bright and vibrant ambiance from your terrace or balcony."
  },
  "id": {
  "sub-title": "Kamar & Suite",
  "title": "BERSANTAI DI KAMAR KAMI",
  "desc": "Kami menawarkan total 24 kamar yang dirancang dengan penuh perhatian untuk memberikan kenyamanan, ketenangan, dan pengalaman menginap yang benar-benar menyegarkan. Setiap kamar diciptakan untuk membantu tamu melepas penat setelah seharian beraktivitas dan menikmati suasana pulau yang damai.",
  "title-garden": "Kamar dengan Pemandangan Taman",
  "desc-garden": "12 kamar dengan pemandangan taman yang menenangkan, udara segar, dan kehijauan alam untuk pengalaman yang alami dan menyejukkan.",
  "title-pool": "Kamar dengan Pemandangan Kolam",
  "desc-pool": "12 kamar yang menghadap kolam renang, menghadirkan suasana cerah dan menyegarkan langsung dari teras atau balkon Anda."
}

}</i18n>