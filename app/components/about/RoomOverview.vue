<template>
  <section class="bg-white py-20">
    <div class="flex flex-col">
      <div v-for="(item, index) in items" :key="index" class="grid grid-cols-1 lg:grid-cols-2">
        <!-- Image -->
        <div class="relative h-64 sm:h-96 lg:h-full order-1" :class="index % 2 !== 0 ? 'lg:order-2' : ''">
          <NuxtImg :src="rt(item.image)" :alt="rt(item.title)" sizes="100vw sm:50vw lg:100vw" format="webp" quality="80" loading="lazy" class="absolute inset-0 h-full w-full object-cover" />
        </div>

        <!-- Text -->
        <div class="flex items-center px-6 py-12 sm:px-12 lg:px-20 order-2"
          :class="index % 2 !== 0 ? 'lg:order-1' : ''">
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
            <br v-if="item.description2">
            <p v-if="item.description2" class="text-sm leading-relaxed text-gray-600 sm:text-base text-justify">
              {{ rt(item.description2) }}
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

<i18n lang="json">{
  "en": {
    "items": [
      {
        "title": "Room Overview",
        "description": "We offer a total of 24 thoughtfully designed rooms created to deliver comfort, tranquility, and a truly relaxing stay. Guests can choose between calming garden-view rooms or refreshing pool-view rooms, all designed to enhance a peaceful island atmosphere.",
        "icon": "solar:bed-broken",
        "image": "/images/slide3.png"
      },
      {
        "title": "Ulu Pool Rooms",
        "description": "Comprising 12 rooms with views of the swimming pool, our Pool View Rooms provide a refreshing and tranquil stay. Six rooms are located on the ground floor with easy access and close proximity to the pool area, while six rooms on the upper floor offer broader views and a more private setting.",
        "description2": "Each room is designed with a consistent layout, emphasizing modern comfort and warm aesthetic touches. Both ground-floor and upper-floor rooms feature the same facilities, ensuring a comfortable, relaxed, and memorable stay.",
        "icon": "fluent:swimming-pool-20-filled",
        "image": "/images/pool_front.jpg"
      },
      {
        "title": "Ulu Garden Room",
        "description": "Consisting of 12 rooms overlooking the garden, our Garden View Rooms offer a peaceful stay surrounded by lush natural greenery. Six rooms are located on the ground floor, providing easy access and a closer connection to the garden area, while six rooms on the upper floor offer a wider perspective and a more private atmosphere.",
        "description2": "Each room features a consistent and thoughtfully designed layout, blending modern comfort with a calming ambiance. Whether on the ground or upper floor, all rooms are equipped with the same facilities to ensure a comfortable, relaxing, and harmonious stay with the surrounding environment.",
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
        "title": "Ulu Pool Rooms",
        "description": "Terdiri dari 12 kamar dengan pemandangan kolam renang, Pool View Rooms kami menawarkan pengalaman menginap yang menyegarkan dan menenangkan. Enam kamar terletak di lantai dasar dengan akses mudah serta dekat dengan area kolam, sementara enam kamar di lantai atas menyajikan pemandangan yang lebih luas dan suasana yang lebih privat.",
        "description2": "Setiap kamar dirancang dengan tata letak yang konsisten, mengutamakan kenyamanan modern dengan sentuhan estetika yang hangat. Baik di lantai dasar maupun lantai atas, seluruh kamar dilengkapi dengan fasilitas yang sama untuk memastikan pengalaman menginap yang nyaman, santai, dan berkesan.",
        "icon": "fluent:swimming-pool-20-filled",
        "image": "/images/pool_front.jpg"
      },
      {
        "title": "Ulu Garden Room",
        "description": "Terdiri dari 12 kamar yang menghadap taman, Garden View Rooms kami menawarkan suasana menginap yang tenang dikelilingi oleh kehijauan alam yang asri. Enam kamar berada di lantai dasar dengan akses yang mudah serta kedekatan dengan area taman, sementara enam kamar di lantai atas memberikan sudut pandang yang lebih luas dan suasana yang lebih privat.",
        "description2": "Setiap kamar memiliki tata letak yang konsisten dan dirancang dengan penuh perhatian, memadukan kenyamanan modern dengan suasana yang menenangkan. Baik di lantai dasar maupun lantai atas, seluruh kamar dilengkapi dengan fasilitas yang sama untuk memastikan pengalaman menginap yang nyaman, rileks, dan selaras dengan lingkungan sekitar.",
        "icon": "temaki:garden-bed",
        "image": "/images/garden_front.jpg"
      }
    ]
  }
}</i18n>