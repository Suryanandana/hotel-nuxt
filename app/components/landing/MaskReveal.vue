<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'local' })

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const mask = ref(null)
const image = ref(null)
const text = ref(null)

onMounted(() => {
    // 1. Pinning: Tahan section saat mencapai top
    ScrollTrigger.create({
        trigger: section.value,
        start: "top top",
        end: "+=200%",
        pin: true,
        pinSpacing: true
    })

    // 2. Animation: Mulai lebih awal (saat masuk viewport) agar tidak ada jeda putih
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section.value,
            start: "top 80%",
            end: "+=150%", // Durasi diperpanjang agar reveal lebih lambat & halus
            scrub: 1,
        }
    })

    tl.fromTo(mask.value,
        {
            // Awal: Tertutup penuh dari atas ke bawah (inset 100% dari atas), dengan lengkungan
            clipPath: "inset(100% 0 0 0 round 50% 50% 0 0)",
            webkitClipPath: "inset(100% 0 0 0 round 50% 50% 0 0)"
        },
        {
            // Akhir: Terbuka penuh (inset 0%), lengkungan hilang (round 0%)
            clipPath: "inset(0% 0 0 0 round 0% 0% 0 0)",
            webkitClipPath: "inset(0% 0 0 0 round 0% 0% 0 0)",
            ease: "power2.inOut"
        }
    )
    
    // Efek Parallax halus pada gambar di dalamnya
    // Gunakan .$el karena NuxtImg adalah Vue component, bukan DOM element langsung
    tl.fromTo(image.value.$el,
        { scale: 1.1, y: "10%" },
        { scale: 1, y: "0%", ease: "none" },
        0
    )

    // Text reveal (muncul perlahan di tengah animasi)
    tl.fromTo(text.value,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 },
        0.3
    )
})
</script>

<template>
    <section ref="section" class="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden">
        <!-- Masked Container -->
        <div ref="mask" class="absolute inset-0 w-full h-full z-10">
            <NuxtImg ref="image" src="/images/slide2.jpg" alt="Reveal" sizes="100vw lg:100vw" format="webp" quality="80" loading="lazy" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/30"></div>
        </div>

        <!-- Content -->
        <div ref="text" class="relative z-20 text-center text-white px-6 opacity-0 max-w-4xl mx-auto">
            <Icon name="ri:double-quotes-l" class="text-5xl md:text-7xl text-white/40 mb-6 inline-block text-yellow-500" />
            
            <h2 class="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-8">
                "{{t('title')}}"
            </h2>
            
            <div class="flex flex-col items-center gap-3 mb-10">
                <div class="w-12 h-[1px] bg-yellow-500"></div>
                <p class="text-sm md:text-base tracking-[0.2em] uppercase text-yellow-500 font-bold">
                    {{ t('manager') }}
                </p>
            </div>

            <div class="flex gap-x-5 justify-center">
                <Button as-child>
                    <NuxtLink to="https://secure.guestpro.net/theulu/booking" target="_blank" rel="noopener">
                        {{ t('booking') }}
                        <Icon name="solar:arrow-right-up-linear" />
                    </NuxtLink>
                </Button>   
            </div>
        </div>
    </section>
</template>

<i18n lang="json">{
  "en": {
    "title": "We don’t just offer a place to stay, we create unforgettable moments that last a lifetime.",
    "manager": "General Manager",
    "booking": "Book Now"
  },
  "id": {
    "title": "Kami tidak hanya menyediakan tempat menginap, tetapi juga menciptakan momen tak terlupakan yang akan dikenang seumur hidup.",
    "manager": "General Manager",
    "booking": "Pesan Sekarang"
  }
}</i18n>
