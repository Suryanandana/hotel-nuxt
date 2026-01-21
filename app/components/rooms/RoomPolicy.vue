<template>
  <section class="space-y-8">
    <!-- Title -->
    <div class="space-y-2">
      <h2 class="text-3xl md:text-4xl font-serif">{{ t('title') }}</h2>
      <p class="text-gray-600 dark:text-gray-400 max-w-2xl">
        {{ t('desc') }}
      </p>
    </div>

    <!-- Policies Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Children Policy -->
      <div class="border p-3 rounded-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <Icon name="cil:child" class="text-blue-600 dark:text-blue-400 text-xl" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ t('policies.children.title') }}
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ t('policies.children.desc') }}
        </p>
      </div>

      <!-- Smoking Policy -->
      <div class="space-y-3 border p-3 rounded-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center">
            <Icon name="mdi:smoking-off" class="text-red-600 dark:text-red-400 text-xl" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ t('policies.smoking.title') }}
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ t('policies.smoking.desc') }}
        </p>
      </div>

      <!-- Pet Policy -->
      <div class="space-y-3 border p-3 rounded-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
            <Icon name="mdi:paw-off" class="text-amber-600 dark:text-amber-400 text-xl" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ t('policies.pets.title') }}
          </h3>
        </div>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ t('policies.pets.desc') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'local' })
</script>

<i18n lang="json">
{
  "en": {
    "title": "Room Policy",
    "desc": "Please review our room policies to ensure a comfortable and enjoyable stay.",
    "policies": {
      "children": {
        "title": "Children Policy",
        "desc": "Children are welcome to stay with us. For accurate pricing and occupancy information, please add the number and age of children in your search."
      },
      "smoking": {
        "title": "Smoking Policy",
        "desc": "All rooms are non-smoking. A special cleaning fee will be charged if guests smoke inside the room. Designated smoking areas are available outdoors."
      },
      "pets": {
        "title": "Pet Policy",
        "desc": "For the comfort of all guests, pets are not allowed to stay at our property."
      }
    }
  },
  "id": {
    "title": "Kebijakan Kamar",
    "desc": "Silakan tinjau kebijakan kamar kami untuk memastikan menginap yang nyaman dan menyenangkan.",
    "policies": {
      "children": {
        "title": "Kebijakan Anak - Anak",
        "desc": "Anak-anak bisa menginap. Untuk melihat informasi harga dan okupansi yang tepat, mohon tambahkan jumlah dan usia anak dalam grup Anda di pencarian."
      },
      "smoking": {
        "title": "Kebijakan Merokok",
        "desc": "Semua kamar (bungalow) bebas asap rokok. Denda pembersihan khusus akan dikenakan jika tamu merokok di dalam kamar. Area merokok yang ditunjuk tersedia di luar ruangan."
      },
      "pets": {
        "title": "Kebijakan Binatang Peliharaan",
        "desc": "Untuk kenyamanan semua tamu, binatang peliharaan tidak diizinkan menginap di properti kami."
      }
    }
  }
}
</i18n>
