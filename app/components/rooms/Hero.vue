<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useBreakpoints } from '@vueuse/core';

const props = defineProps(['slides']);

// Nuxt Image composable: menghasilkan URL yang sudah dioptimasi
const img = useImage();

const main = ref();
const thumbs = ref();

// --- Responsive Logic ---
const breakpoints = useBreakpoints({ md: 768 });
const isDesktop = breakpoints.greaterOrEqual('md');

// Helper: generate optimized URL via Nuxt Image
const getImgUrl = (src, opts = {}) => img(src, { format: 'webp', quality: 80, ...opts });

// --- Lightbox State ---
const lightboxOpen = ref(false);
const lightboxIndex = ref(0);

const openLightbox = (index) => {
  lightboxIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};

const lightboxPrev = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + props.slides.length) % props.slides.length;
};

const lightboxNext = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % props.slides.length;
};

// Keyboard navigation
const handleKeydown = (e) => {
  if (!lightboxOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lightboxPrev();
  if (e.key === 'ArrowRight') lightboxNext();
};

onMounted(() => window.addEventListener('keydown', handleKeydown));
onUnmounted(() => window.removeEventListener('keydown', handleKeydown));

// Track active slide index from main splide so lightbox opens the correct one
const activeIndex = ref(0);
watch(main, (splide) => {
  if (splide?.splide) {
    splide.splide.on('active', (slide) => {
      activeIndex.value = slide.index;
    });
  }
});

// --- Splide Options ---
const mainOptions = {
  type: 'fade',
  rewind: true,
  pagination: false,
  arrows: false,
  lazyLoad: 'nearby',
  preloadPages: 1,
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
  lazyLoad: 'sequential',
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
  lazyLoad: 'sequential',
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
    <!-- Thumbnails (kolom kiri) -->
    <div class="w-[110px] md:w-[130px] lg:w-[200px] shrink-0">
      <Splide :options="desktopThumbsOptions" ref="thumbs" class="h-full">
        <SplideSlide v-for="slide in slides" :key="slide.alt" class="rounded-md overflow-hidden">
          <img
            :data-splide-lazy="getImgUrl(slide.src, { width: 200 })"
            :alt="slide.alt"
            class="w-full h-full object-cover bg-gray-300 rounded-md cursor-pointer"
          />
        </SplideSlide>
      </Splide>
    </div>

    <!-- Main Slider (kolom kanan) -->
    <div class="flex-1 min-w-0">
      <Splide :options="mainOptions" ref="main" class="w-full h-full rounded-xl overflow-hidden">
        <SplideSlide
          v-for="(slide, index) in slides"
          :key="slide.alt"
          class="rounded-xl overflow-hidden cursor-zoom-in"
          @click="openLightbox(index)"
        >
          <img
            v-if="index === 0"
            :src="getImgUrl(slide.src, { width: 1200 })"
            :alt="slide.alt"
            class="w-full h-full object-cover bg-gray-300 rounded-xl"
          />
          <img
            v-else
            :data-splide-lazy="getImgUrl(slide.src, { width: 1200 })"
            :alt="slide.alt"
            class="w-full h-full object-cover bg-gray-300 rounded-xl"
          />
        </SplideSlide>
      </Splide>
    </div>
  </section>

  <!-- Mobile Layout: 2 row -->
  <div v-else>
    <section class="relative">
      <Splide :options="mainOptions" ref="main" class="w-full h-full">
        <SplideSlide
          v-for="(slide, index) in slides"
          :key="slide.alt"
          class="cursor-zoom-in"
          @click="openLightbox(index)"
        >
          <img
            v-if="index === 0"
            :src="getImgUrl(slide.src, { width: 800 })"
            :alt="slide.alt"
            class="w-full object-cover"
            style="aspect-ratio: 4/3;"
          />
          <img
            v-else
            :data-splide-lazy="getImgUrl(slide.src, { width: 800 })"
            :alt="slide.alt"
            class="w-full object-cover"
            style="aspect-ratio: 4/3;"
          />
        </SplideSlide>
      </Splide>
    </section>

    <div class="bg-background p-2">
      <Splide :options="mobileThumbsOptions" ref="thumbs">
        <SplideSlide v-for="slide in slides" :key="slide.alt">
          <img
            :data-splide-lazy="getImgUrl(slide.src, { width: 110 })"
            :alt="slide.alt"
            class="w-full h-full object-cover rounded-md cursor-pointer"
          />
        </SplideSlide>
      </Splide>
    </div>
  </div>

  <!-- ===== LIGHTBOX OVERLAY ===== -->
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="lightboxOpen"
        class="lightbox-backdrop"
        @click.self="closeLightbox"
      >
        <!-- Close button -->
        <button class="lightbox-close" @click="closeLightbox" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <!-- Counter -->
        <div class="lightbox-counter">
          {{ lightboxIndex + 1 }} / {{ slides.length }}
        </div>

        <!-- Image container -->
        <div class="lightbox-content" @click.stop>
          <Transition name="slide-img" mode="out-in">
            <img
              :key="lightboxIndex"
              :src="getImgUrl(slides[lightboxIndex].src, { width: 1920, quality: 90 })"
              :alt="slides[lightboxIndex].alt"
              class="lightbox-img"
            />
          </Transition>
        </div>

        <!-- Prev button -->
        <button class="lightbox-nav lightbox-nav--prev" @click="lightboxPrev" aria-label="Previous">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <!-- Next button -->
        <button class="lightbox-nav lightbox-nav--next" @click="lightboxNext" aria-label="Next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <!-- Thumbnail strip -->
        <div class="lightbox-thumbs">
          <button
            v-for="(slide, i) in slides"
            :key="i"
            class="lightbox-thumb"
            :class="{ 'is-active': i === lightboxIndex }"
            @click="lightboxIndex = i"
          >
            <img :src="getImgUrl(slide.src, { width: 100 })" :alt="slide.alt" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
/* ====== Splide Base ====== */
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

/* Shimmer placeholder */
.splide__slide img:not([src]),
.splide__slide img[src=""] {
  background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ====== Lightbox ====== */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.lightbox-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: calc(100vh - 160px);
}

.lightbox-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
  user-select: none;
  -webkit-user-drag: none;
}

/* Close button */
.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  backdrop-filter: blur(4px);
}
.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.1);
}
.lightbox-close svg { width: 20px; height: 20px; }

/* Counter */
.lightbox-counter {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  font-weight: 500;
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 12px;
  border-radius: 999px;
  backdrop-filter: blur(4px);
  letter-spacing: 0.05em;
}

/* Nav buttons */
.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  backdrop-filter: blur(4px);
}
.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.28);
  transform: translateY(-50%) scale(1.1);
}
.lightbox-nav svg { width: 22px; height: 22px; }
.lightbox-nav--prev { left: 1rem; }
.lightbox-nav--next { right: 1rem; }

/* Thumbnail strip */
.lightbox-thumbs {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  max-width: calc(100vw - 2rem);
  overflow-x: auto;
  padding: 6px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  scrollbar-width: none;
}
.lightbox-thumbs::-webkit-scrollbar { display: none; }

.lightbox-thumb {
  width: 56px;
  height: 42px;
  border-radius: 6px;
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  flex-shrink: 0;
  transition: border-color 0.2s, opacity 0.2s, transform 0.2s;
  opacity: 0.55;
}
.lightbox-thumb:hover { opacity: 0.85; transform: scale(1.05); }
.lightbox-thumb.is-active {
  border-color: white;
  opacity: 1;
}
.lightbox-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ====== Transitions ====== */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.slide-img-enter-active,
.slide-img-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-img-enter-from {
  opacity: 0;
  transform: scale(0.96);
}
.slide-img-leave-to {
  opacity: 0;
  transform: scale(1.02);
}
</style>
