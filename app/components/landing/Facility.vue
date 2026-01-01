<!-- components/StackedCards.vue -->
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.cards',
      pin: true,
      pinSpacing: true,
      start: 'top-=50px top',
      end: '+=2000',
      scrub: 1,
    }
  })

  tl.addLabel('card1')
    .to('.card1', { yPercent: 0, opacity: 1 })

  tl.from('.card2', { yPercent: 75, opacity: 0 })
    .addLabel('card2')
    .to('.card1', { scale: 0.925, yPercent: -0.75, opacity: 1 }, '-=0.3')
    .to('.card2', { yPercent: 0, opacity: 1 })

  tl.from('.card3', { yPercent: 75, opacity: 0 })
    .addLabel('card3')
    .to('.card2', { scale: 0.95, yPercent: -0.5, opacity: 1 }, '-=0.3')
    .to('.card3', { yPercent: 0, opacity: 1 })

  tl.from('.card4', { yPercent: 75, opacity: 0 })
    .addLabel('card4')
    .to('.card3', { scale: 0.98, yPercent: -0.4, opacity: 1 }, '-=0.3')
    .to('.card4', { yPercent: 0, opacity: 1 })

  tl.to('.card1', { scale: 0.925, yPercent: -1.5, opacity: 0.9 }, '-=0.3')
  tl.to('.card2', { scale: 0.95, yPercent: -1.125, opacity: 0.9 }, '-=0.3')
  tl.to('.card3', { scale: 0.98, yPercent: -0.85, opacity: 0.9 }, '-=0.3')
})
</script>

<template>
  <section class="container">
    <div class="cards">
      <div class="custom-card card1">
        <NuxtImg src="/images/slide1.jpg" class="w-full h-full object-contain" />
      </div>
      <div class="custom-card card2"><h1>Slide 2</h1></div>
      <div class="custom-card card3"><h1>Slide 3</h1></div>
      <div class="custom-card card4"><h1>Slide 4</h1></div>
    </div>
  </section>
</template>

<style scoped>
.container {
  height: 300vh;
  padding: 100px 0;
}

.cards {
  position: relative;
  height: 100vh;
}

.custom-card {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 70vh;
  background: #1f1f1f;
  color: white;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
}

.card1 { z-index: 2; }
.card2 { z-index: 3; }
.card3 { z-index: 4; }
.card4 { z-index: 5; }
</style>
