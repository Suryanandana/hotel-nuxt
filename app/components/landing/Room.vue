<script setup>
import { onMounted, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RoomCard from './RoomCard.vue'

gsap.registerPlugin(ScrollTrigger)

const { t, tm } = useI18n()

const rooms = computed(() => tm('landing.roomList'))
console.log(rooms)

onMounted(() => {
    const sections = gsap.utils.toArray('.room-section')
    
    sections.forEach((section) => {
        const image = section.querySelector('.room-image')
        const card = section.querySelector('.room-card')
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
            }
        })

        tl.from(image, {
            clipPath: 'inset(0 100% 0 0)',
            duration: 1,
            ease: 'power3.out'
        })

        tl.from(
            card,
            {
                y: 80,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out'
            },
            '-=0.4'
        )

        // Animasi untuk judul section
        gsap.fromTo('.room-header',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.room-header',
                    start: "top 80%",
                }
            })
    })
})
</script>

<template>
    <section class="py-28 space-y-32">
        <div class="text-center mb-16 space-y-4 room-header opacity-0">
          <h2 class="text-4xl md:text-5xl font-serif tracking-tight text-stone-900 dark:text-stone-50">
            {{ t('landing.roomHeader.title') }}
          </h2>
          <p class="text-lg text-stone-600 dark:text-stone-400 font-light">
            {{ t('landing.roomHeader.subtitle') }}
          </p>
        </div>
        <RoomCard
            v-for="(room, index) in rooms" 
            :key="index"
            :room="room"
        />
    </section>
</template>
