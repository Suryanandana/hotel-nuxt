<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let ctx;

// Data dummy untuk kartu
const cardsData = [
  { title: 'Header 1', color: '#FC88C6', text: 'Deskripsi untuk kartu pertama.' },
  { title: 'Header 2', color: '#BF72FD', text: 'Deskripsi untuk kartu kedua.' },
  { title: 'Header 3', color: '#8314F9', text: 'Deskripsi untuk kartu ketiga.' },
  { title: 'Header 4', color: '#4A00E0', text: 'Deskripsi untuk kartu keempat.' }
]

onMounted(() => {
  // Gunakan gsap.context untuk scoping yang aman di Vue/Nuxt
  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".stackCard");
    
    // Jarak tambahan jika diperlukan (sesuai referensi)
    // let stickDistance = 0;

    // Kita perlu trigger kartu terakhir untuk menentukan kapan pin selesai
    let lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "center center"
    });

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
        start: "center center",
        // Semua kartu selesai dipin ketika kartu terakhir mencapai posisinya
        end: () => lastCardST.start, 
        pin: true,
        pinSpacing: false, // KUNCI: False membuat mereka menumpuk (overlap)
        scrub: true,       // Menggunakan scrub agar animasi mengikuti scroll bar
        animation: scaleDown,
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
            end: "center center", // Selesai fade in saat di posisi pin
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
  <section class="cardStacking bg-white text-black">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center justify-center w-full">
        
        <!-- Loop Cards -->
        <div 
          v-for="(card, index) in cardsData" 
          :key="index"
          class="stackCard w-full max-w-4xl flex items-center justify-between rounded-[30px] relative min-h-[450px] p-[35px]"
          :style="{ backgroundColor: card.color }"
        >
          <div class="w-full flex flex-col items-center justify-center text-center">
            <h2 class="text-4xl font-bold mb-4 text-white">{{ card.title }}</h2>
            <p class="text-xl text-white/90">{{ card.text }}</p>
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
  padding-bottom: 50vh; 
}

.stackCard {
  /* Transform origin diset di JS, tapi default CSS ini membantu mencegah glitch awal */
  transform-origin: 50% top;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 50vh; /* Memberikan jarak scroll "diam sejenak" antar kartu */
}

.stackCard:last-child {
  margin-bottom: 0;
}
</style>
