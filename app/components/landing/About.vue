<template>
  <section ref="section" class="relative min-h-screen bg-[#f6f2ea] flex items-center justify-center overflow-hidden">
    <!-- Left Image -->
    <div ref="leftImage"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] md:w-[380px] h-[450px] md:h-[550px]">
      <img src="/images/slide1.jpg" class="rounded-lg object-cover w-full h-full shadow-2xl" />
    </div>

    <!-- Right Image -->
    <div ref="rightImage"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] md:w-[380px] h-[450px] md:h-[550px]">
      <img src="/images/slide2.jpg" class="rounded-lg object-cover w-full h-full shadow-2xl" />
    </div>

    <!-- Text -->
    <div ref="text" class="relative z-20 text-center max-w-2xl opacity-0 px-6">
      <h2 class="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
        {{ t('title') }}
      </h2>

      <p class="text-lg text-gray-600 leading-relaxed">
        {{ t('desc') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'local' })

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const leftImage = ref(null)
const rightImage = ref(null)
const text = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section.value,
      start: "top 70%",
      end: "center center",
      scrub: true
    }
  })

  tl
    // split images horizontally
    .to(leftImage.value, {
      x: "-150%",
      rotate: -5,
      ease: "power2.out"
    }, 0)

    .to(rightImage.value, {
      x: "150%",
      rotate: 5,
      ease: "power2.out"
    }, 0)

    // text fade in
    .to(text.value, {
      opacity: 1,
      y: -20,
      duration: 0.5
    }, 0.2)
})
</script>

<i18n lang="json">{
  "en": {
    "title": "Why Choose Our Hotel",
    "desc": "Enjoy a seamless blend of modern comfort and timeless elegance. With thoughtfully designed spaces, premium amenities, and attentive service, every stay is crafted to deliver an exceptional and memorable experience."
  },
  "id": {
    "title": "Mengapa Memilih Hotel Kami",
    "desc": "Rasakan perpaduan sempurna antara kenyamanan modern dan keanggunan yang tak lekang oleh waktu. Dengan fasilitas premium, desain yang berkelas, dan pelayanan penuh perhatian, setiap momen menginap dirancang untuk memberi pengalaman terbaik."
  }
}</i18n>