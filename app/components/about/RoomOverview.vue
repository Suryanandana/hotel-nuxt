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
        "title": "Room Overview",
        "description": "We offer a total of 24 thoughtfully designed rooms created to deliver comfort, tranquility, and a truly relaxing stay. Guests can choose between calming garden-view rooms or refreshing pool-view rooms, all designed to enhance a peaceful island atmosphere.",
        "icon": "solar:bed-broken",
        "image": "/images/slide3.png"
      },
      {
        "title": "Front Pool Rooms",
        "description": "Our pool-view and garden-view rooms offer different perspectives of relaxation, from direct pool access to lush green surroundings. Each room features the same carefully curated layout and modern facilities to ensure a comfortable stay.",
        "icon": "fluent:swimming-pool-20-filled",
        "image": "/images/pool_front.jpg"
      },
      {
        "title": "Front Garden Room",
        "description": "We offer a total of 24 thoughtfully designed rooms created to deliver comfort, tranquility, and a truly relaxing stay. Guests can choose between calming garden-view rooms or refreshing pool-view rooms, all designed to enhance a peaceful island atmosphere.",
        "icon": "temaki:garden-bed",
        "image": "/images/garden_front.jpg"
      }
    ]
  },
  "id": {
    "items": [
      {
        "title": "Gambaran Kamar",
        "description": "Kami menawarkan total 24 kamar yang dirancang dengan cermat untuk memberikan kenyamanan, ketenangan, dan pengalaman menginap yang benar-benar santai. Tamu dapat memilih antara kamar dengan pemandangan taman yang menenangkan atau kamar dengan pemandangan kolam yang menyegarkan, semuanya dirancang untuk meningkatkan suasana pulau yang damai.",
        "icon": "solar:bed-broken",
        "image": "/images/slide3.png"
      },
      {
        "title": "Kamar Depan Kolam",
        "description": "Kamar dengan pemandangan kolam dan taman kami menawarkan perspektif relaksasi yang berbeda, mulai dari akses langsung ke kolam renang hingga lingkungan hijau yang rimbun. Setiap kamar memiliki tata letak yang dikurasi dengan cermat dan fasilitas modern yang sama untuk memastikan pengalaman menginap yang nyaman.",
        "icon": "fluent:swimming-pool-20-filled",
        "image": "/images/pool_front.jpg"
      },
      {
        "title": "Kamar Depan Taman",
        "description": "Kami menawarkan total 24 kamar yang dirancang dengan cermat untuk memberikan kenyamanan, ketenangan, dan pengalaman menginap yang benar-benar santai. Tamu dapat memilih antara kamar dengan pemandangan taman yang menenangkan atau kamar dengan pemandangan kolam yang menyegarkan, semuanya dirancang untuk meningkatkan suasana pulau yang damai.",
        "icon": "temaki:garden-bed",
        "image": "/images/garden_front.jpg"
      }
    ]
  }
}
</i18n>