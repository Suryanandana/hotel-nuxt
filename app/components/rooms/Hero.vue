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
};

const desktopThumbsOptions = {
  type: 'slide',
  direction: 'ttb',
  height: '100%',
  perPage: 4,
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
  <!-- Desktop / Tablet Layout: 2 kolom (thumbnail kiri | main slider kanan) -->
  <section v-if="isDesktop" class="flex flex-row gap-2 h-[420px] md:h-[480px] lg:h-[560px]">
    <!-- Thumbnails (kolom kiri) — lebar tetap agar tidak terlalu kecil -->
    <div class="w-[110px] md:w-[130px] lg:w-[200px] shrink-0">
      <Splide :options="desktopThumbsOptions" ref="thumbs" class="h-full">
        <SplideSlide v-for="slide in slides" :key="slide.alt" class="rounded-md overflow-hidden">
          <NuxtImg
            :src="slide.src"
            :alt="slide.alt"
            sizes="150px"
            format="webp"
            quality="80"
            loading="lazy"
            class="w-full h-full object-cover bg-gray-300 rounded-md cursor-pointer"
          />
        </SplideSlide>
      </Splide>
    </div>

    <!-- Main Slider (kolom kanan) — mengisi sisa ruang -->
    <div class="flex-1 min-w-0">
      <Splide :options="mainOptions" ref="main" class="w-full h-full rounded-xl overflow-hidden">
        <SplideSlide v-for="slide in slides" :key="slide.alt" class="rounded-xl overflow-hidden">
          <NuxtImg
            :src="slide.src"
            :alt="slide.alt"
            sizes="100vw md:80vw lg:100vw"
            format="webp"
            quality="80"
            preload
            class="w-full h-full object-cover bg-gray-300 rounded-xl"
          />
        </SplideSlide>
      </Splide>
    </div>
  </section>

  <!-- Mobile Layout: 2 row (main slider atas | thumbnail bawah) -->
  <div v-else>
    <section class="relative">
      <Splide :options="mainOptions" ref="main" class="w-full h-full">
        <SplideSlide v-for="slide in slides" :key="slide.alt">
          <NuxtImg :src="slide.src" :alt="slide.alt" sizes="100vw md:80vw lg:100vw" format="webp" quality="80" preload class="w-full h-full object-cover" />
        </SplideSlide>
      </Splide>
    </section>
    <div class="bg-background p-2">
      <Splide :options="mobileThumbsOptions" ref="thumbs">
        <SplideSlide v-for="slide in slides" :key="slide.alt">
          <NuxtImg :src="slide.src" :alt="slide.alt" sizes="110px md:110px" format="webp" quality="80" loading="lazy" class="w-full h-full object-cover rounded-md cursor-pointer" />
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
