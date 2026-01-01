<script setup>
import { ref, onMounted } from 'vue'

const cards = [
  { title: 'Card 1', text: 'Deskripsi singkat untuk kartu pertama.' },
  { title: 'Card 2', text: 'Deskripsi singkat untuk kartu kedua.' },
  { title: 'Card 3', text: 'Deskripsi singkat untuk kartu ketiga.' },
  { title: 'Card 4', text: 'Deskripsi singkat untuk kartu keempat.' }
]

const activeIndex = ref(-1)
const stages = ref([])

onMounted(() => {
  stages.value = Array.from(document.querySelectorAll('.stacked-stage'))

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const idx = Number(entry.target.getAttribute('data-idx'))
      if (entry.isIntersecting) {
        if (idx > activeIndex.value) activeIndex.value = idx
      }
    })
  }, { threshold: 0.55 })

  stages.value.forEach(stage => observer.observe(stage))
})
</script>

<template>
  <section class="stacked-section">
    <div class="stacked-container">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="stacked-stage"
        :data-idx="index"
      >
        <article
          class="stacked-card"
          :class="{ active: activeIndex >= index }"
          :style="{ '--i': index }"
        >
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stacked-section {
  width: 100%;
}
.stacked-container {
  position: relative;
}
.stacked-stage {
  height: 100vh;
  display: block;
}
.stacked-card {
  --top-offset: 1.5rem;
  position: sticky;
  top: var(--top-offset);
  width: min(900px, 92%);
  margin: 0 auto;
  transform: translateY(40vh);
  opacity: 0;
  transition: transform 600ms cubic-bezier(.2,.9,.23,1), opacity 420ms ease;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(2,8,23,0.12);
  z-index: calc(200 - var(--i));
}
.stacked-card.active {
  transform: translateY(0);
  opacity: 1;
}
.stacked-card h3 {
  margin: 0 0 0.5rem 0;
}
.stacked-card p {
  margin: 0;
  color: #334155;
}
</style>
