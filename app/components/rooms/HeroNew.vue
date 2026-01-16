<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { onMounted, ref } from 'vue';

defineProps(['title', 'subTitle', 'imgUrl'])

const main = ref();
const thumbs = ref();

const slides = [
  { src: '/images/slide1.jpg', alt: 'Slide 1' },
  { src: '/images/slide2.jpg', alt: 'Slide 2' },
  { src: '/images/slide3.png', alt: 'Slide 3' },
  { src: '/images/pool.jpg', alt: 'Pool' },
  { src: '/images/restaurant.jpg', alt: 'Restaurant' },
];

const mainOptions = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  gap: '1rem',
  pagination: false,
  arrows: false,
  fixed
};

const thumbsOptions = {
  type: 'slide',
  rewind: true,
  gap: '1rem',
  pagination: false,
  fixedWidth: 110,
  fixedHeight: 70,
  cover: true,
  focus: 'center',
  isNavigation: true,
  updateOnMove: true,
  arrows: false,
};

onMounted(() => {
  const thumbsSplide = thumbs.value?.splide;

  if (thumbsSplide) {
    main.value?.sync(thumbsSplide);
  }
});
</script>

<template>
  <div class="wrapper">
    <!-- Main Carousel -->
    <div class="relative h-96 flex items-center justify-center text-white rounded-lg">
      <Splide :options="mainOptions" ref="main" class="w-full h-full">
        <SplideSlide v-for="slide in slides" :key="slide.alt">
          <img :src="slide.src" :alt="slide.alt" class="w-full h-full object-contain">
          <div class="absolute inset-0 bg-black/50"></div>
          <div class="hero-content absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <h1 class="text-4xl md:text-6xl font-serif mb-4">
                {{ title }}
              </h1>
              <p class="max-w-3xl mx-auto text-lg md:text-xl text-white/90">
                {{ subTitle }}
              </p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <!-- Thumbnail Carousel -->
    <div class="w-full mt-6">
      <Splide
        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        :options="thumbsOptions"
        ref="thumbs"
        class="w-full"
      >
        <SplideSlide v-for="slide in slides" :key="slide.alt">
          <img :src="slide.src" :alt="slide.alt" class="w-full h-full object-cover rounded-md cursor-pointer">
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<style scoped>
.splide__slide {
  position: relative;
}
</style>