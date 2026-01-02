<template>
  <section
    ref="section"
    class="relative min-h-screen bg-[#f6f2ea] flex items-center justify-center overflow-hidden"
  >
    <!-- Left Image -->
    <div
      ref="leftImage"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] md:w-[380px] h-[450px] md:h-[550px]"
    >
      <img src="/images/slide1.jpg" class="rounded-lg object-cover w-full h-full shadow-2xl" />
    </div>

    <!-- Right Image -->
    <div
      ref="rightImage"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] md:w-[380px] h-[450px] md:h-[550px]"
    >
      <img src="/images/slide2.jpg" class="rounded-lg object-cover w-full h-full shadow-2xl" />
    </div>

    <!-- Text -->
    <div
      ref="text"
      class="relative z-20 text-center max-w-2xl opacity-0 px-6"
    >
      <h2 class="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
        Why Choose Our Hotel?
      </h2>
      <p class="text-lg text-gray-600 leading-relaxed">
        Experience the perfect blend of modern luxury and timeless elegance. From our world-class amenities to our dedicated staff, we ensure every moment of your stay is crafted to perfection. Discover a place where comfort meets sophistication.
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
      start: "-40px top",
      end: "+=1500",
      scrub: true,
      pin: true
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
