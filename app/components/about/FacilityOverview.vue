<template>
  <section class="bg-white py-20">
    <div class="flex flex-col">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="grid grid-cols-1 lg:grid-cols-2"
      >
        <!-- Image -->
        <div
          class="relative h-64 sm:h-96 lg:h-full order-1"
          :class="index % 2 !== 0 ? 'lg:order-2' : ''"
        >
          <img
            :src="rt(item.image)"
            :alt="rt(item.title)"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <!-- Text -->
        <div
          class="flex items-center px-6 py-12 sm:px-12 lg:px-20 order-2"
          :class="index % 2 !== 0 ? 'lg:order-1' : ''"
        >
          <div class="">
            <div class="mb-4 inline-flex h-10 w-10 items-center justify-center border text-sm font-medium">
              <Icon :name="rt(item.icon)" class="text-2xl font-thin" />
            </div>
            <h2 class="mb-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {{ rt(item.title) }}
            </h2>
            <p class="text-sm leading-relaxed text-gray-600 sm:text-base text-justify">
              {{ rt(item.description) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm, rt } = useI18n({
  useScope: 'local'
})

const items = computed(() => tm('items'))
</script>

<i18n lang="json">
{
  "en": {
    "items": [
      {
        "title": "Restaurant Experience",
        "description": "Our restaurant offers a memorable culinary journey where every dish is crafted with passion, sincerity, and artistry. Guests are warmly welcomed to enjoy international flavors in a relaxed and personal dining atmosphere.",
        "icon": "ion:restaurant-outline",
        "image": "/images/restaurant.jpg"
      },
      {
        "title": "Private Beach Club",
        "description": "Located along the Jungut Batu coastline, our private beach club delivers a relaxing seaside escape with curated food and drinks, live entertainment, and stunning sunset views by the main pool.",
        "icon": "hugeicons:beach",
        "image": "/images/beach-club.jpg"
      },
      {
        "title": "Mini Gym",
        "description": "Our mini gym is designed for guests who wish to stay active during their stay, featuring essential equipment in a comfortable and refreshing environment.",
        "icon": "hugeicons:equipment-gym-03",
        "image": "/images/mini-gym.jpeg"
      },
      {
        "title": "Swimming Pool",
        "description": "Enjoy a refreshing swim in our pool, surrounded by a calm tropical atmosphere—perfect for unwinding, soaking up the sun, or cooling off after a day of island adventures.",
        "icon": "material-symbols:pool-rounded",
        "image": "/images/pool_front.jpg"
      }
    ]
  },
  "id": {
    "items": [
      {
        "title": "Pengalaman Bersantap",
        "description": "Restoran kami menghadirkan perjalanan kuliner yang berkesan, dengan setiap hidangan dibuat penuh ketulusan, passion, dan sentuhan seni. Nikmati cita rasa internasional dalam suasana bersantap yang hangat dan santai.",
        "icon": "ion:restaurant-outline",
        "image": "/images/restaurant.jpg"
      },
      {
        "title": "Beach Club Pribadi",
        "description": "Berlokasi di pesisir Jungut Batu, beach club pribadi kami menawarkan suasana pantai yang menenangkan dengan pilihan makanan dan minuman, hiburan live, serta pemandangan matahari terbenam yang memukau.",
        "icon": "hugeicons:beach",
        "image": "/images/beach-club.jpg"
      },
      {
        "title": "Mini Gym",
        "description": "Mini gym kami disediakan bagi tamu yang ingin tetap aktif selama menginap, dilengkapi dengan peralatan esensial dalam suasana yang nyaman dan menyegarkan.",
        "icon": "hugeicons:equipment-gym-03",
        "image": "/images/mini-gym.jpeg"
      },
      {
        "title": "Kolam Renang",
        "description": "Kolam renang kami menawarkan tempat yang sempurna untuk bersantai dan menyegarkan diri, dikelilingi suasana tropis yang tenang dan menenangkan.",
        "icon": "material-symbols:pool-rounded",
        "image": "/images/pool_front.jpg"
      }
    ]
  }
}
</i18n>
