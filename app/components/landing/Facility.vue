<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let ctx;

// Data dummy untuk kartu
const cardsData = [
  { title: 'Hotel Pool', image: '/images/pool-view.png', text: 'Relax in our stunning infinity pool with panoramic views.' },
  { title: 'Mini Gym', image: '/images/mini-gym.jpeg', text: 'Stay active during your stay with our well-equipped mini gym.' },
  { title: 'Restaurant', image: '/images/restaurant.jpg', text: 'Experience culinary excellence with our award-winning chefs.' },
  { title: 'Beach Club', image: '/images/beach-club.jpg', text: 'Enjoy the vibrant atmosphere of our exclusive beach club with refreshing drinks and live music.' }
]

onMounted(async () => {
  await nextTick()
  // Gunakan gsap.context untuk scoping yang aman di Vue/Nuxt
  ctx = gsap.context(() => {
    gsap.fromTo('.facility-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".facility-grid",
          start: "top 80%",
        }
      }
    );
  });
})

onUnmounted(() => {
  ctx && ctx.revert(); // Bersihkan GSAP saat komponen di-unmount
})
</script>

<template>
  <section class="py-20 text-black bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 space-y-4 facility-card opacity-0">
        <h2 class="text-4xl md:text-5xl font-serif tracking-tight text-stone-900 dark:text-stone-50">
          Experience Our World-Class Facilities
        </h2>
        <p class="text-lg text-stone-600 dark:text-stone-400 font-light">
          Elevate your stay with amenities designed for ultimate comfort and enjoyment.
        </p>
      </div>
      <div class="facility-grid grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <!-- Loop Cards -->
        <div v-for="(card, index) in cardsData" :key="index"
          class="facility-card w-full flex items-end justify-between rounded-[30px] relative min-h-[450px] p-[35px] overflow-hidden opacity-0 group">
          <!-- Background Image -->
          <img :src="card.image" :alt="card.title"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50"></div>

          <div class="relative z-10 max-w-xl">
            <h2 class="text-4xl font-bold mb-2 text-white">{{ card.title }}</h2>
            <p class="text-white/90">{{ card.text }}</p>
            <Button class="bg-transparent outline-1 border hover:bg-white hover:text-black mt-4">
              Detail Facility
              <Icon name="solar:arrow-right-up-linear" />
            </Button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped></style>
