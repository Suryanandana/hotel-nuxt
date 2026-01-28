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
          <AccordionItem 
            v-for="(item, index) in faqs" 
            :key="index" 
            :value="'item-' + index"
            class="border border-stone-200 dark:border-stone-800 rounded-xl px-6 bg-white dark:bg-stone-900 shadow-sm hover:shadow-md transition-all duration-300 ease-out"
          >
            <AccordionTrigger class="text-lg font-medium text-stone-800 dark:text-stone-100 py-6 hover:no-underline hover:text-primary transition-colors">
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
        "answer": "Check-in starts from 3:00 PM, while check-out is until 11:00 AM. Early check-in or late check-out may be arranged upon request, subject to availability."
      },
      {
        "question": "Is breakfast included in the room rate?",
        "answer": "Our Bed & Breakfast packages include a full continental buffet. For room-only reservations, breakfast can be added upon arrival at our rooftop restaurant."
      },
      {
        "question": "Do you offer airport transfers?",
        "answer": "Yes, we provide luxury private airport transfers. Please contact our concierge at least 24 hours in advance to arrange your transportation."
      },
      {
        "question": "Are pets allowed?",
        "answer": "Small pets up to 10kg are welcome in selected room categories. A cleaning fee applies per stay to maintain comfort for all guests."
      },
      {
        "question": "Do you have a spa and gym?",
        "answer": "Guests enjoy complimentary access to our 24-hour fitness center. Our wellness spa offers a variety of treatments and requires advance booking."
      }
    ]
  },
  "id": {
    "title": "Pertanyaan yang Sering Diajukan",
    "subtitle": "Jawaban pilihan untuk membantu Anda merencanakan pengalaman menginap yang sempurna.",
    "faqs": [
      {
        "question": "Kapan waktu check-in dan check-out?",
        "answer": "Waktu check-in dimulai pukul 15.00, dan check-out hingga pukul 11.00. Check-in lebih awal atau check-out lebih lambat dapat diajukan sesuai ketersediaan."
      },
      {
        "question": "Apakah sarapan sudah termasuk dalam harga kamar?",
        "answer": "Paket Bed & Breakfast kami sudah termasuk sarapan prasmanan kontinental. Untuk pemesanan kamar saja, sarapan dapat ditambahkan saat kedatangan di restoran rooftop kami."
      },
      {
        "question": "Apakah tersedia layanan antar-jemput bandara?",
        "answer": "Ya, kami menyediakan layanan antar-jemput bandara dengan mobil pribadi premium. Silakan hubungi tim concierge minimal 24 jam sebelumnya."
      },
      {
        "question": "Apakah hotel memperbolehkan membawa hewan peliharaan?",
        "answer": "Hewan peliharaan kecil hingga 10kg diperbolehkan di kategori kamar tertentu. Biaya kebersihan akan dikenakan per masa menginap."
      },
      {
        "question": "Apakah tersedia spa dan gym?",
        "answer": "Tamu mendapatkan akses gratis ke pusat kebugaran 24 jam. Layanan spa kami menawarkan berbagai perawatan dan memerlukan reservasi sebelumnya."
      }
    ]
  }
}</i18n>
