<script setup>
import { onMounted, onUnmounted, ref, nextTick, computed } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { useI18n } from 'vue-i18n'

const { tm, rt, t } = useI18n({ useScope: 'local' })

// ambil FAQ sebagai array object
const faqs = computed(() => tm('faqs'))

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
let ctx = null

onMounted(async () => {
  await nextTick() // Tunggu hingga DOM benar-benar siap
  ctx = gsap.context(() => {
    gsap.fromTo('.reveal-up',
      { y: 50, opacity: 0, autoAlpha: 0 },
      {
        y: 0,
        opacity: 1,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 80%",
        }
      }
    )
  }, sectionRef.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert() // Bersihkan animasi saat komponen di-unmount
})
</script>

<template>
  <section ref="sectionRef" class="py-20 md:py-32 bg-stone-50 dark:bg-stone-950">
    <div class="container mx-auto px-4 md:px-6">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-16 space-y-4 reveal-up opacity-0">
          <h2 class="text-4xl md:text-5xl font-serif tracking-tight text-stone-900 dark:text-stone-50">
            {{ t('title') }}
          </h2>
          <p class="text-lg text-stone-600 dark:text-stone-400 font-light">
            {{ t('subtitle') }}
          </p>
        </div>

        <div class="reveal-up opacity-0">
          <Accordion type="single" collapsible class="space-y-4">
            <AccordionItem v-for="(item, index) in faqs" :key="index" :value="'item-' + index"
              class="border border-stone-200 dark:border-stone-800 rounded-xl px-6 bg-white dark:bg-stone-900 shadow-sm hover:shadow-md transition-all duration-300 ease-out">
              <AccordionTrigger
                class="text-lg font-medium text-stone-800 dark:text-stone-100 py-6 hover:no-underline hover:text-primary transition-colors">
                {{ rt(item.question) }}
              </AccordionTrigger>
              <AccordionContent class="text-stone-600 dark:text-stone-400 text-base leading-relaxed pb-6">
                {{ rt(item.answer) }}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">{
  "en": {
    "title": "Frequently Asked Questions",
    "subtitle": "Curated answers to help you plan your perfect stay.",
    "faqs": [
      {
        "question": "What are the check-in and check-out times?",
        "answer": "Check-in starts from 2:00 PM, while check-out is until 12:00 PM. Early check-in or late check-out may be arranged upon request, subject to availability."
      },
      {
        "question": "Is breakfast included in the room rate?",
        "answer": "We offer Room & Breakfast packages. For room-only reservations, breakfast can be added via reservation chat or upon arrival at the hotel. Please note that an additional charge applies for breakfast when booking a room-only option."
      }
    ]
  },
  "id": {
    "title": "Pertanyaan yang Sering Diajukan",
    "subtitle": "Jawaban pilihan untuk membantu Anda merencanakan pengalaman menginap yang sempurna.",
    "faqs": [
      {
        "question": "Jam berapa waktu check-in dan check-out?",
        "answer": "Waktu check-in dimulai pukul 14.00, sedangkan check-out maksimal pukul 12.00. Permintaan check-in lebih awal atau check-out lebih lambat dapat diajukan sesuai ketersediaan."
      },
      {
        "question": "Apakah sarapan sudah termasuk dalam harga kamar?",
        "answer": "Kami menyediakan paket Kamar & Sarapan. Untuk reservasi kamar saja, sarapan dapat ditambahkan melalui chat reservasi atau saat tiba di hotel. Harap diperhatikan bahwa akan dikenakan biaya tambahan untuk sarapan pada pemesanan kamar tanpa paket sarapan."
      }
    ]
  }
}</i18n>
