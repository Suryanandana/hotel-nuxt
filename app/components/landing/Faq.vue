<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is available from 3:00 PM, and check-out is until 11:00 AM. We can often accommodate early check-ins or late check-outs upon request, subject to availability."
  },
  {
    question: "Is breakfast included in the room rate?",
    answer: "Our 'Bed & Breakfast' packages include a full continental buffet. For room-only bookings, breakfast can be added upon arrival at our rooftop restaurant."
  },
  {
    question: "Do you offer airport transfers?",
    answer: "Yes, we provide luxury private car transfers to and from the airport. Please contact our concierge team at least 24 hours in advance to arrange your ride."
  },
  {
    question: "Are pets allowed?",
    answer: "We are delighted to welcome small pets (up to 10kg) in specific room categories. A small cleaning fee applies per stay to ensure the comfort of all guests."
  },
  {
    question: "Do you have a spa and gym?",
    answer: "Yes, guests have complimentary access to our 24-hour fitness center. Our wellness spa offers a range of treatments and requires booking in advance."
  }
]

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
            Frequently Asked Questions
          </h2>
          <p class="text-lg text-stone-600 dark:text-stone-400 font-light">
            Curated answers to help you plan your perfect stay.
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
              {{ item.question }}
            </AccordionTrigger>
            <AccordionContent class="text-stone-600 dark:text-stone-400 text-base leading-relaxed pb-6">
              {{ item.answer }}
            </AccordionContent>
          </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </section>
</template>
