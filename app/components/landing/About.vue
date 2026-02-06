<template>
  <section ref="section" class="relative min-h-screen bg-[#f6f2ea] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-[url('/images/batik.jpg')] opacity-20"></div>
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
      <span class="text-yellow-600">{{ t('subtitle') }}</span>
      <h2 class="text-2xl md:text-4xl font-serif mb-6 text-yellow-500 font-semibold">
        {{ t('title') }}
      </h2>

      <p class="text-md text-gray-600 leading-relaxed">
        {{ t('desc') }} <br><br> {{ t('desc2') }}
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
    "subtitle": "Welcome To",
    "title": "THE ULU BEACH CLUB & BUNGALOWS",
    "desc": "A refined escape at The Ulu Beach Club & Bungalows is an invitation to slow down and embrace effortless island living. Set along the tranquil shores of Nusa Lembongan, The Ulu blends natural beauty with understated comfort, offering a peaceful beachfront retreat away from the ordinary.",
    "desc2": "Wake up to calming ocean views, unwind by the beachfront pool, and enjoy relaxed dining with fresh flavours inspired by both local and international favourites. From gentle mornings to breathtaking sunsets, every moment at The Ulu is designed to feel unhurried, intimate, and truly memorable."
  },
  "id": {
    "subtitle": "Selamat Datang di",
    "title": "THE ULU BEACH CLUB & BUNGALOWS",
    "desc": "The Ulu Beach Club & Bungalows menghadirkan pengalaman liburan yang tenang dan berkelas, mengajak Anda untuk melambat dan menikmati kehidupan pulau yang santai. Terletak di pesisir tenang Nusa Lembongan, The Ulu memadukan keindahan alam dengan kenyamanan yang sederhana namun elegan, menciptakan tempat beristirahat di tepi pantai yang jauh dari hiruk pikuk.",
    "desc2": "Bangun dengan pemandangan laut yang menenangkan, bersantai di kolam renang tepi pantai, dan nikmati sajian santai dengan cita rasa segar yang terinspirasi dari hidangan lokal dan internasional. Dari pagi yang lembut hingga matahari terbenam yang memukau, setiap momen di The Ulu dirancang untuk terasa santai, intim, dan benar-benar berkesan."
  }
}</i18n>