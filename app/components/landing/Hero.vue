<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
// Default theme
import '@splidejs/vue-splide/css'

const { t } = useI18n()
</script>

<template>
    <Splide :has-track="false" class="overflow-hidden group"
        :options="{ rewind: true, type: 'loop', autoplay: true, interval: 5000, pauseOnHover: false }"
        aria-label="My Favorite Images">
        <SplideTrack>
            <SplideSlide>
                <div class="w-full h-lvh bg-red-200 overflow-hidden z-20 relative flex justify-center items-center">
                    <NuxtImg src="/images/garden_view_hero.jpg" alt="Garden View" sizes="100vw sm:50vw md:100vw lg:100vw" format="webp" quality="80" loading="lazy"
                        class="absolute top-0 left-0 z-10 object-cover w-full h-full animation" />
                    <div class="absolute top-0 left-0 w-full h-full bg-gray-900 z-20 opacity-50"></div>
                    <div
                        class="w-full md:w-[80%] pl-5 md:pl-0 h-1/2 relative z-20 flex flex-col justify-center items-center text-slide">
                        <!-- <p class="text-yellow-500 font-semibold text-xl mb-2 opacity-0">
                            {{ t('landing.hero.slide1.subtitle') }}</p> -->
                        <div class="text-left opacity-0">
                            <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                                {{ t('landing.hero.title') }}
                                <!-- {{ t('landing.hero.slide1.title2') }} -->
                            </h2>
                        </div>
                        <!-- <Button variant="outline" as-child class="bg-transparent button-slider-up opacity-0 mt-4 text-yellow-500 border-yellow-500 hover:border-white">
                            <NuxtLink :to="$localePath('about')">
                                {{ t('landing.hero.slide1.button') }}
                                <Icon name="solar:arrow-right-up-linear" />
                            </NuxtLink>
                        </Button> -->
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="w-full h-lvh bg-gray-500 overflow-hidden z-20 relative flex justify-center items-center">
                    <NuxtImg src="/images/room_hero.webp" alt="Hotel Room" sizes="100vw sm:50vw md:100vw lg:100vw" format="webp" quality="80" loading="lazy"
                        class="absolute top-0 left-0 z-10 object-cover w-full h-full animation" />
                    <div class="absolute top-0 left-0 w-full h-full bg-gray-900 z-20 opacity-50"></div>
                    <div
                        class="w-full md:w-[80%] h-1/2 relative z-20 flex flex-col justify-center items-center text-slide">
                        <!-- <p class="text-yellow-500 font-semibold text-xl mb-2 opacity-0">
                            {{ t('landing.hero.slide2.subtitle') }}</p> -->
                        <div class="text-center opacity-0">
                            <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                                {{ t('landing.hero.title') }}
                                <!-- {{ t('landing.hero.slide2.title2') }} -->
                            </h2>
                        </div>
                        <!-- <Button variant="outline" as-child
                            class="bg-transparent button-slider-up opacity-0 mt-4 text-yellow-500 border-yellow-500 hover:border-white">
                            <NuxtLink :to="$localePath('rooms')">
                                {{ t('landing.hero.slide2.button') }}
                                <Icon name="solar:arrow-right-up-linear" />
                            </NuxtLink>
                        </Button> -->
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="w-full h-lvh bg-gray-500 overflow-hidden z-20 relative flex justify-center items-center">
                    <NuxtImg src="/images/pool-view-hero.jpg" alt="Pool View" sizes="100vw sm:50vw md:100vw lg:100vw" format="webp" quality="80" loading="lazy"
                        class="absolute top-0 left-0 z-10 object-cover w-full h-full animation" />
                    <div class="absolute top-0 left-0 w-full h-full bg-gray-900 z-20 opacity-50"></div>
                    <div
                        class="w-full md:w-[80%] pr-5 md:pr-0 h-1/2 relative z-20 flex flex-col justify-center items-center text-slide">
                        <!-- <p class="text-yellow-500 font-semibold text-xl mb-2 opacity-0">
                            {{ t('landing.hero.slide3.subtitle') }}</p> -->
                        <div class="text-right opacity-0">
                            <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                                {{ t('landing.hero.title') }}
                                <!-- {{ t('landing.hero.slide3.title2') }} -->
                            </h2>
                        </div>
                        <!-- <Button variant="outline" as-child
                            class="bg-transparent button-slider-up opacity-0 mt-4 text-yellow-500 border-yellow-500 hover:border-white">
                            <NuxtLink :to="$localePath('facilities')">
                                {{ t('landing.hero.slide3.button') }}
                                <Icon name="solar:arrow-right-up-linear" />
                            </NuxtLink>
                        </Button> -->
                    </div>
                </div>
            </SplideSlide>
        </SplideTrack>

        <div class="hidden splide__arrows group-hover:block">
            <button class="splide__arrow splide__arrow--prev">
                <Icon name="ic:twotone-chevron-left" class="text-yellow-500 text-3xl" />

            </button>
            <button class="splide__arrow splide__arrow--next">
                <Icon name="ic:twotone-chevron-right" class="text-yellow-500 text-3xl" />
            </button>
        </div>
    </Splide>
</template>