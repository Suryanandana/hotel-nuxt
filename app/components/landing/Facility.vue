<script setup>
import { onMounted, onUnmounted } from 'vue'
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

onMounted(() => {
  // Gunakan gsap.context untuk scoping yang aman di Vue/Nuxt
  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".stackCard");

    // Jarak tambahan jika diperlukan (sesuai referensi)
    // let stickDistance = 0;

    cards.forEach((card, index) => {
      // Hitung scale agar kartu yang di belakang semakin kecil
      // Logic: 1 - (urutan dari belakang) * factor
      var scale = 1 - (cards.length - 1 - index) * 0.025;

      // Animasi scale down
      let scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: "50% top", // Menggunakan top agar terlihat menumpuk rapi
        duration: 1,
        ease: "none" // Penting untuk scrub yang halus
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center+=32",
        // Semua kartu selesai dipin ketika kartu terakhir mencapai posisinya
        endTrigger: cards[cards.length - 1],
        end: "center center+=32",
        pin: true,
        pinSpacing: false, // KUNCI: False membuat mereka menumpuk (overlap)
        scrub: true,       // Menggunakan scrub agar animasi mengikuti scroll bar
        animation: scaleDown,
        invalidateOnRefresh: true,
        // markers: true, // Uncomment untuk debugging
      });

      // 3. Animasi Opacity (Muncul perlahan sebelum ter-pin)
      gsap.fromTo(card,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom", // Mulai fade in saat masuk viewport
            end: "center center+=32", // Selesai fade in saat di posisi pin
            scrub: true,
          }
        }
      );
    });
  });
})

onUnmounted(() => {
  ctx && ctx.revert(); // Bersihkan GSAP saat komponen di-unmount
})
</script>

<template>
  <section class="cardStacking text-black bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-center w-full">
        <!-- Loop Cards -->
        <div v-for="(card, index) in cardsData" :key="index"
          class="stackCard w-full flex items-end justify-between rounded-[30px] relative min-h-[450px] p-[35px] overflow-hidden">
          <!-- Background Image -->
          <img :src="card.image" :alt="card.title" class="absolute inset-0 w-full h-full object-cover" />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/40"></div>

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

<style scoped>
.cardStacking {
  padding: 100px 0;
  /* Memberikan ruang scroll yang cukup agar efek stacking terasa */
  padding-bottom: 100px;
}

.stackCard {
  /* Transform origin diset di JS, tapi default CSS ini membantu mencegah glitch awal */
  transform-origin: 50% top;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 50vh;
  /* Memberikan jarak scroll "diam sejenak" antar kartu */
}

.stackCard:last-child {
  margin-bottom: 0;
}
</style>
