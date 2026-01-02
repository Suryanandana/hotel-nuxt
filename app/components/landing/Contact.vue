<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const container = ref(null)

onMounted(() => {
    gsap.fromTo(container.value,
        {
            scale: 0.9,
            opacity: 0
        },
        {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: container.value,
                start: "top 80%",
            }
        }
    )
})
</script>

<template>
    <section class="bg-[#f8f6f3] py-28">
        <div ref="container"
            class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center opacity-0">

            <!-- LEFT CONTENT -->
            <div>
                <p class="text-xs tracking-widest text-neutral-500 mb-3 uppercase">
                    LUXURY HOTEL EXPERIENCE
                </p>

                <h2 class="text-4xl md:text-5xl font-serif mb-6 text-gray-900">
                    Get in Touch
                </h2>

                <p class="text-gray-600 mb-8 text-lg leading-relaxed">
                    Ready to experience unparalleled luxury? Contact us today to book your unforgettable stay or to
                    inquire about our bespoke services. Our dedicated team is here to assist you with every detail,
                    ensuring your visit is nothing short of perfect.
                </p>

                <div class="space-y-5 text-gray-700 mb-8">
                    <div class="flex items-center gap-3">
                        <Icon name="solar:phone-calling-linear" class="text-xl" />
                        <span class="font-medium text-lg">+41 934 121 1334</span>
                    </div>

                    <div class="flex items-center gap-3">
                        <Icon name="solar:letter-linear" class="text-xl" />
                        <span class="font-medium text-lg">info@domain.com</span>
                    </div>
                </div>

                <div class="flex gap-6 text-2xl">
                    <NuxtLink to="#" class="hover:text-pink-950 text-pink-800 transition-colors">
                        <Icon name="mdi:instagram" />
                    </NuxtLink>
                    <NuxtLink to="#" class="hover:text-green-950 text-green-800 transition-colors">
                        <Icon name="ic:baseline-whatsapp" />
                    </NuxtLink>
                    <NuxtLink to="#" class="hover:text-gray-950 text-gray-800 transition-colors">
                        <Icon name="ri:twitter-x-line" />
                    </NuxtLink>
                </div>
            </div>

            <!-- RIGHT MAP -->
            <div class="w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2154191187597!2d115.44546507417064!3d-8.671052888262286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd26d3efed3ae9d%3A0x3d924228a4e6dea2!2sThe%20Ulu%20Beach%20Club%20%26%20Bungalows!5e0!3m2!1sid!2sid!4v1767357820239!5m2!1sid!2sid"
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    </section>
</template>
