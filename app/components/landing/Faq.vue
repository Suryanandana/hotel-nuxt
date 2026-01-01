<template>
  <section
    ref="section"
    class="relative min-h-screen bg-[#f6f2ea] flex items-center justify-center overflow-hidden"
  >
    <!-- Left Image -->
    <div
      ref="leftImage"
      class="absolute left-1/2 -translate-x-1/2 z-10 w-[300px] md:w-[380px]"
    >
      <img src="/images/slide1.jpg" class="rounded-lg" />
    </div>

    <!-- Right Image -->
    <div
      ref="rightImage"
      class="absolute left-1/2 -translate-x-1/2 z-10 w-[300px] md:w-[380px]"
    >
      <img src="/images/slide2.jpg" class="rounded-lg" />
    </div>

    <!-- Text -->
    <div
      ref="text"
      class="relative z-20 text-center max-w-xl opacity-0"
    >
      <h2 class="text-3xl md:text-4xl font-serif mb-4">
        Discover your path to wellness and growth.
      </h2>
      <p class="text-gray-600">
        At Ulaman we redefine luxury as an experience...
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const leftImage = ref(null)
const rightImage = ref(null)
const text = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section.value,
      start: "top top",
      end: "+=1500",
      scrub: true,
      pin: true
    }
  })

  tl
    // split images
    .to(leftImage.value, {
      x: "-120%",
      rotate: -2,
      ease: "power2.out"
    }, 0)

    .to(rightImage.value, {
      x: "120%",
      rotate: 2,
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
