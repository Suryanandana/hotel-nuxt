<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'local' })

// ambil text dari i18n
const text = computed(() => t('animatedText'))

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const container = ref(null)
const imageRef = ref(null)

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const words = container.value.querySelectorAll('.word')
    
    gsap.fromTo(words, 
      { 
        opacity: 0,
        y: 20,
        filter: 'blur(8px)',
        color: "#d1d5db"
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        color: "#1c1917", // stone-900
        stagger: 0.03,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 75%",
          once: true
        }
      }
    )
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx && ctx.revert();
})
</script>

<template>
  <section ref="sectionRef" class="py-32 bg-[#F3F1EB] flex items-center justify-center min-h-screen relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
      <NuxtImg 
        ref="imageRef"
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop" 
        alt="Hotel Ambience" 
        sizes="300px md:450px lg:100vw" format="webp" quality="80" loading="lazy"
        class="w-[300px] h-[450px] md:w-[450px] md:h-[650px] object-cover rounded-t-full opacity-20 contrast-125"
      />
    </div>

    <div class="container mx-auto px-6 md:px-12 relative z-10">
      <div ref="container" class="max-w-6xl mx-auto text-center">
        <div class="mb-10 flex justify-center">
          <span class="inline-block text-xs font-bold tracking-[0.3em] text-stone-500 uppercase border border-stone-300 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm">
            {{ t('title') }}
          </span>
        </div>

        <p class="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 md:gap-y-4">
          <span 
            v-for="(word, index) in text.split(' ')" 
            :key="index" 
            class="word opacity-10 text-stone-400"
          >
            {{ word }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">{
  "en": {
    "title": "OUR PHILOSOPHY",
    "animatedText": "Become a beachfront destination that radiates happiness, energy, and genuine warmth. Welcome every guest like an ocean wave—warm, uplifting, and leaving a lasting impression."
  },
  "id": {
    "title": "FILOSOFI KAMI",
    "animatedText": "Nikmati oasis ketenangan dan kemewahan yang berkelas. Setiap detail di hotel kami dirancang dengan cermat untuk menghadirkan pengalaman unik penuh kenyamanan dan gaya."
  }
}</i18n>
