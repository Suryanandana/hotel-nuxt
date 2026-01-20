<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { onMounted, ref, watch } from 'vue';
import { useBreakpoints } from '@vueuse/core';

defineProps(['slides']);

const main = ref();
const thumbs = ref();

// --- Responsive Logic ---
const breakpoints = useBreakpoints({ md: 768 });
const isDesktop = breakpoints.greaterOrEqual('md');

// --- Splide Options ---
const mainOptions = {
  type: 'fade',
  rewind: true,
  pagination: false,
  arrows: false,
  height: '80%',
  breakpoints: {
    768: {
      height: '100%'
    }
  }
};

const desktopThumbsOptions = {
  type: 'slide',
  direction: 'ttb',
  height: '100%',
  perPage: 3,
  wheel: true,
  gap: '0.5rem',
  rewind: true,
  pagination: false,
  isNavigation: true,
  arrows: true,
};

const mobileThumbsOptions = {
  type: 'slide',
  direction: 'ltr',
  height: 'auto',
  rewind: true,
  gap: '0.5rem',
  pagination: false,
  isNavigation: true,
  perPage: 4,
  arrows: false,
  fixedWidth: 110,
  fixedHeight: 70,
  cover: true,
  arrows: true,
};

// --- Sync Logic ---
watch(thumbs, (newThumbs) => {
  if (main.value?.splide && newThumbs?.splide) {
    main.value.splide.sync(newThumbs.splide);
  }
});

onMounted(() => {
  if (main.value?.splide && thumbs.value?.splide) {
    main.value.splide.sync(thumbs.value.splide);
  }
});

</script>

<template>
  <!-- Desktop Layout -->
  <section v-if="isDesktop" class="flex flex-col md:flex-row">
    <!-- Thumbnails -->
    <div class="p-2 col-start-1 row-start-1">
      <Splide :options="desktopThumbsOptions" ref="thumbs" class="h-[80%]">
        <SplideSlide v-for="slide in slides" :key="slide.alt" class="rounded-md">
          <img :src="slide.src" :alt="slide.alt" class="w-full h-full object-cover rounded-md cursor-pointer">
        </SplideSlide>
      </Splide>
    </div>
    <!-- Main Slider -->
    <div class="relative col-span-3 col-start-2">
      <Splide :options="mainOptions" ref="main" class="w-full h-full rounded-md">
        <SplideSlide v-for="slide in slides" :key="slide.alt" class="rounded-md">
          <img :src="slide.src" :alt="slide.alt" class="w-full h-full object-cover rounded-md">
        </SplideSlide>
      </Splide>
    </div>
  </section>

  <!-- Mobile Layout -->
  <div v-else>
    <section class="relative h-[60vh]">
      <Splide :options="mainOptions" ref="main" class="w-full h-full">
        <SplideSlide v-for="slide in slides" :key="slide.alt">
          <img :src="slide.src" :alt="slide.alt" class="w-full h-full object-cover">
        </SplideSlide>
      </Splide>
    </section>
    <div class="bg-background p-2">
      <Splide :options="mobileThumbsOptions" ref="thumbs">
        <SplideSlide v-for="slide in slides" :key="slide.alt">
          <img :src="slide.src" :alt="slide.alt" class="w-full h-full object-cover rounded-md cursor-pointer">
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<style>
.splide__track {
  height: 100%;
}

.splide__slide {
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.splide__slide.is-active {
  opacity: 1;
}
</style>
