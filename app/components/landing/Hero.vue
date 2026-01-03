<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
// Default theme
import '@splidejs/vue-splide/css'
</script>

<template>
    <Splide :has-track="false" class="overflow-hidden group"
        :options="{ rewind: true, type: 'loop', autoplay: true, interval: 5000, pauseOnHover: false }" aria-label="My Favorite Images">
        <SplideTrack>
            <SplideSlide>
                <div
                    class="w-full h-dvh bg-red-200 overflow-hidden z-20 relative flex justify-center items-center">
                    <NuxtImg src="/images/slide2.jpg"
                        class="absolute top-0 left-0 z-10 object-cover w-full h-full animation" />
                    <div class="absolute top-0 left-0 w-full h-full bg-gray-900 z-20 opacity-50"></div>
                    <div
                        class="w-full md:w-[80%] pl-5 md:pl-0 h-1/2 relative z-20 flex flex-col justify-center items-start text-slide">
                        <p class="text-yellow-500 font-semibold text-xl mb-2 opacity-0">
                            Luxury Hotel Experience</p>
                        <div class="text-left opacity-0">
                            <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                                A Truly Immersive Relax Place
                            </h2>
                            <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                                lorem ipsum dolor sit amet
                            </h2>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div
                    class="w-full h-dvh bg-gray-500 overflow-hidden z-20 relative flex justify-center items-center">
                    <NuxtImg src="/images/slide1.jpg"
                        class="absolute top-0 left-0 z-10 object-cover w-full h-full animation" />
                    <div class="absolute top-0 left-0 w-full h-full bg-gray-900 z-20 opacity-50"></div>
                    <div
                        class="w-full md:w-[80%] h-1/2 relative z-20 flex flex-col justify-center items-center text-slide">
                        <p class="text-yellow-500 font-semibold text-xl mb-2 opacity-0">
                            Luxury Hotel Experience</p>
                        <div class="text-center opacity-0">
                            <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                                A Truly Immersive Relax Place
                            </h2>
                            <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                                lorem ipsum dolor sit amet
                            </h2>
                        </div>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div
                    class="w-full h-dvh bg-gray-500 overflow-hidden z-20 relative flex justify-center items-center">
                    <NuxtImg src="/images/slide3.png"
                        class="absolute top-0 left-0 z-10 object-cover w-full h-full animation" />
                    <div class="absolute top-0 left-0 w-full h-full bg-gray-900 z-20 opacity-50"></div>
                    <div
                        class="w-full md:w-[80%] pr-5 md:pr-0 h-1/2 relative z-20 flex flex-col justify-center items-end text-slide">
                        <p class="text-yellow-500 font-semibold text-xl mb-2 opacity-0">
                            Luxury Hotel Experience</p>
                        <div class="text-right opacity-0">
                            <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                                A Truly Immersive Relax Place
                            </h2>
                            <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                                lorem ipsum dolor sit amet
                            </h2>
                        </div>
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