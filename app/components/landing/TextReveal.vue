<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const container = ref(null)
const text = "Indulge in an oasis of tranquility and refined luxury. Every corner of our hotel is designed to offer you a unique experience of comfort and style."

let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    const words = container.value.querySelectorAll('.word')
    
    gsap.fromTo(words, 
      { 
        opacity: 0.1,
        color: "#d1d5db" // gray-300 (warna awal tipis)
      },
      {
        opacity: 1,
        color: "#000000", // gray-800 (warna akhir jelas)
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.value,
          pin: true,
          start: "top top",
          end: "+=200%",
          scrub: 1, // Efek mengikuti scroll bar (bolak-balik)
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
  <section ref="sectionRef" class="py-32 bg-white flex items-center justify-center min-h-screen relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      <img 
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop" 
        alt="Hotel Ambience" 
        class="w-[300px] h-[450px] md:w-[400px] md:h-[600px] object-cover rounded-t-full opacity-50"
      />
    </div>

    <div class="container mx-auto px-6 md:px-12 relative z-10">
      <div ref="container" class="max-w-5xl mx-auto text-center">
        <p class="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
          <span 
            v-for="(word, index) in text.split(' ')" 
            :key="index" 
            class="word opacity-10 text-gray-300"
          >
            {{ word }}
          </span>
        </p>
      </div>
    </div>
  </section>
</template>