<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-20">
    <!-- LEFT TABS -->
    <div class="md:col-span-4 space-y-6">
      <div
        v-for="(tab, i) in tabs"
        :key="i"
        @click="changeTab(i)"
        class="cursor-pointer group"
      >
        <div
          class="flex items-center gap-4 text-lg transition-all"
          :class="
            activeTab === i
              ? 'text-black font-semibold'
              : 'text-gray-400 hover:text-gray-600'
          "
        >
          <span class="text-3xl w-8">
            {{ i + 1 }}
          </span>
          <span>{{ rt(tab.title) }}</span>
        </div>

        <div
          class="h-px mt-2 transition-all"
          :class="activeTab === i ? 'bg-gray-700' : 'bg-gray-200'"
        />
      </div>
    </div>

    <!-- RIGHT CONTENT -->
    <div class="md:col-span-8 relative overflow-hidden">
      <div ref="contentRef" class="space-y-6">
        <p class="text-sm text-gray-400">
          • {{ rt(tabs[activeTab].title) }}
        </p>

        <h2 class="text-4xl font-semibold">
          <span class="text-black">
            {{ rt(tabs[activeTab].headline.main) }}
          </span>
          <span class="text-amber-400">
            {{ rt(tabs[activeTab].headline.accent) }}
          </span>
        </h2>

        <p class="text-gray-600">
          {{ rt(tabs[activeTab].description) }}
        </p>

        <ul class="list-disc pl-5 space-y-2 text-gray-600">
          <li
            v-for="(item, i) in tabs[activeTab].points"
            :key="i"
          >
            {{ rt(item) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import gsap from 'gsap'

const activeTab = ref(0)
const contentRef = ref(null)

const { tm, rt } = useI18n({
  useScope: 'local'
})

// tm() → locale-aware array
const tabs = computed(() => tm('tabs'))

function changeTab(index) {
  if (index === activeTab.value) return

  gsap.to(contentRef.value, {
    opacity: 0,
    y: 30,
    duration: 0.3,
    onComplete: () => {
      activeTab.value = index

      gsap.fromTo(
        contentRef.value,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.4 }
      )
    }
  })
}
</script>


<i18n lang="json">{
  "en": {
    "tabs": [
      {
        "title": "Who We Are",
        "headline": {
          "main": "Warm & Genuine",
          "accent": " Hospitality"
        },
        "description": "The Ulu Beach Club and Bungalows is a hospitality brand managed by PT. NUSA REJEKI PROPERTI, dedicated to creating warm, comfortable, and sincerely delivered stay experiences. We believe that true hospitality is not only about facilities, but about how guests are treated, welcomed, and cared for from the moment they arrive until their departure.",
        "points": [
          "Managed professionally under PT. NUSA REJEKI PROPERTI",
          "Focused on warmth, comfort, and genuine service",
          "Hospitality delivered with sincerity and personal care",
          "Attention to detail in every guest experience"
        ],
        "image": "/img/who-we-are.jpg"
      },
      {
        "title": "Our Philosophy",
        "headline": {
          "main": "Personal Touch",
          "accent": " & Professional Service"
        },
        "description": "Located on the peaceful shores of Jungut Batu, we combine professional hospitality standards with a personal touch that reflects our core values. Every space, service, and interaction is thoughtfully designed to create a sense of calm, trust, and belonging for our guests.",
        "points": [
          "Serene beachfront location in Jungut Batu",
          "Balance between professionalism and personal service",
          "Designed to make guests feel welcomed and valued",
          "Inspired by warmth, sincerity, and thoughtful details"
        ],
        "image": "/img/philosophy.jpg"
      },
      {
        "title": "About Us",
        "headline": {
          "main": "A Hidden",
          "accent": " Beachfront Escape"
        },
        "description": "The Ulu Beach Club and Bungalows is a hidden beachfront retreat in Jungut Batu, Nusa Lembongan. Whether you are traveling alone, with a partner, or with loved ones, our space offers peaceful island vibes, beautiful ocean views, and moments of relaxation that allow you to truly slow down and enjoy the present.",
        "points": [
          "Located in Jungut Batu, Nusa Lembongan",
          "Peaceful atmosphere with island charm",
          "Ideal for solo travelers, couples, and families",
          "A place to relax, unwind, and reconnect"
        ],
        "image": "/img/about-us.jpg"
      },
      {
        "title": "The Experience",
        "headline": {
          "main": "Island Life",
          "accent": " Made Unforgettable"
        },
        "description": "Our accommodations blend traditional character with modern comfort, creating a warm and relaxing stay. With our private Beach Club, guests can spend leisurely days by the ocean, enjoy delicious food and refreshing cocktails, and watch stunning sunsets transform into star-filled nights.",
        "points": [
          "Rooms designed with traditional charm and modern comfort",
          "Private Beach Club by the ocean",
          "Food, cocktails, and relaxing seaside moments",
          "Natural, calming, and memorable island experience"
        ],
        "image": "/img/experience.jpg"
      }
    ]
  },
  "id": {
    "tabs": [
      {
        "title": "Siapa Kami",
        "headline": {
          "main": "Keramahan",
          "accent": " yang Tulus"
        },
        "description": "The Ulu Beach Club and Bungalows adalah brand hospitality yang dikelola oleh PT. NUSA REJEKI PROPERTI, dengan komitmen untuk menghadirkan pengalaman menginap yang hangat, nyaman, dan dilayani dengan ketulusan. Bagi kami, hospitality bukan hanya tentang fasilitas, tetapi tentang bagaimana setiap tamu disambut, diperhatikan, dan dibuat merasa berarti.",
        "points": [
          "Dikelola secara profesional oleh PT. NUSA REJEKI PROPERTI",
          "Mengutamakan kenyamanan dan keramahan yang tulus",
          "Pelayanan yang personal dan penuh perhatian",
          "Fokus pada detail dalam setiap pengalaman tamu"
        ],
        "image": "/img/who-we-are.jpg"
      },
      {
        "title": "Filosofi Kami",
        "headline": {
          "main": "Sentuhan Personal",
          "accent": " & Layanan Profesional"
        },
        "description": "Berlokasi di pesisir tenang Jungut Batu, kami memadukan standar layanan profesional dengan sentuhan personal yang mencerminkan nilai utama kami. Setiap ruang dan layanan dirancang dengan penuh perhatian untuk menciptakan suasana yang hangat, tenang, dan membuat tamu merasa seperti di rumah.",
        "points": [
          "Lokasi beachfront yang tenang di Jungut Batu",
          "Perpaduan layanan profesional dan pendekatan personal",
          "Menciptakan rasa diterima dan dihargai",
          "Berlandaskan kehangatan dan ketulusan"
        ],
        "image": "/img/philosophy.jpg"
      },
      {
        "title": "Tentang Kami",
        "headline": {
          "main": "Pelarian",
          "accent": " Tepi Pantai"
        },
        "description": "The Ulu Beach Club and Bungalows adalah tempat persembunyian tepi pantai di Jungut Batu, Nusa Lembongan. Cocok untuk kamu yang datang sendiri maupun bersama orang terdekat, tempat ini menawarkan suasana pulau yang damai, pemandangan indah, dan momen relaksasi yang membantu kamu menikmati waktu dengan lebih tenang.",
        "points": [
          "Terletak di Jungut Batu, Nusa Lembongan",
          "Suasana pulau yang damai dan menenangkan",
          "Cocok untuk solo traveler, pasangan, dan keluarga",
          "Tempat untuk beristirahat dan melepas penat"
        ],
        "image": "/img/about-us.jpg"
      },
      {
        "title": "Pengalaman",
        "headline": {
          "main": "Hidup Pulau",
          "accent": " yang Berkesan"
        },
        "description": "Akomodasi kami dirancang dengan perpaduan nuansa tradisional dan kenyamanan modern, menciptakan pengalaman menginap yang hangat dan santai. Dengan Beach Club pribadi, tamu dapat menikmati hari di tepi laut, mencicipi hidangan lezat, minuman segar, serta menyaksikan matahari terbenam hingga malam penuh bintang.",
        "points": [
          "Desain kamar dengan sentuhan tradisional dan modern",
          "Private Beach Club di tepi laut",
          "Hidangan, cocktail, dan suasana santai",
          "Pengalaman pulau yang alami dan tak terlupakan"
        ],
        "image": "/img/experience.jpg"
      }
    ]
  }
}</i18n>