<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const rooms = [
    {
        title: 'Garden View Room',
        price: 'FROM Rp 750.000 / NIGHT',
        description: 'Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.',
        image: '/images/slide2.jpg',
        features: ['King Size Bed', 'TV', 'Max 2 guests', 'Private Bathroom', 'Free WiFi', 'Air Conditioning', 'Room size : 30m²'],
        align: 'left'
    },
    {
        title: 'Pool View Room',
        price: 'FROM Rp 850.000 / NIGHT',
        description: 'Experience ultimate comfort in our spacious luxury suites featuring a separate living area and premium amenities.',
        image: '/images/pool-view.png',
        features: ['King Size Bed', 'TV', 'Max 2 guests', 'Private Bathroom', 'Free WiFi' , 'Air Conditioning', 'Room size : 30m²'],
        align: 'right'
    }
]

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
            Our Exquisite Rooms & Suites
          </h2>
          <p class="text-lg text-stone-600 dark:text-stone-400 font-light">
            Discover your perfect sanctuary with our diverse range of luxurious accommodations.
          </p>
        </div>
        <div 
            v-for="(room, index) in rooms" 
            :key="index"
            class="room-section relative mx-auto max-w-7xl px-6 flex flex-col lg:block"
        >
            <!-- IMAGE BLOCK -->
            <div 
                class="room-image relative w-full lg:w-[70%] h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg"
                :class="room.align === 'left' ? 'lg:mr-auto' : 'lg:ml-auto'"
            >
                <img :src="room.image" :alt="room.title" class="absolute inset-0 w-full h-full object-cover" />
            </div>

            <!-- CARD -->
            <div 
                class="room-card bg-white shadow-xl rounded-2xl p-8 md:p-10 max-w-xl w-full z-10 relative mx-auto -mt-10 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2"
                :class="room.align === 'left' ? 'lg:right-10' : 'lg:left-10'"
            >
                <p class="text-xs tracking-widest text-neutral-500 mb-3">
                    {{ room.price }}
                </p>

                <h2 class="text-3xl font-semibold mb-4">
                    {{ room.title }}
                </h2>

                <p class="text-neutral-600 mb-6">
                    {{ room.description }}
                </p>

                <div class="flex gap-6 text-sm text-neutral-700 flex-wrap">
                    <div v-for="feature in room.features" :key="feature" class="flex items-center gap-2">
                        <Icon v-if="feature.includes('Bed')" name="solar:bed-linear" />
                        <Icon v-else-if="feature.includes('TV')" name="solar:tv-linear" />
                        <Icon v-else-if="feature.includes('guests')" name="humbleicons:users" />
                        <Icon v-else-if="feature.includes('Bathroom')" name="fa:bath" />
                        <Icon v-else-if="feature.includes('Free WiFi')" name="iconoir:wifi-tag" />
                        <Icon v-else-if="feature.includes('Air Conditioning')" name="icon-park-outline:air-conditioning" />
                        <Icon v-else-if="feature.includes('Room size : 30m²')" name="material-symbols:resize" />
                        <span v-else>•</span>
                        <span>{{ feature }}</span>
                    </div>
                </div>

                <Button class="mt-6">
                    Detail Room
                    <Icon name="solar:arrow-right-up-linear" />
                </Button>
            </div>
        </div>
    </section>
</template>
