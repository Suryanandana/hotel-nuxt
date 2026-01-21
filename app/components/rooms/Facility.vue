<template>
  <section class="space-y-6">
    <!-- Title -->
    <div class="space-y-2" v-if="t('title') || t('desc')">
      <h2 class="text-3xl md:text-4xl font-serif mb-3">
        {{ t('title') }}
      </h2>
      <p class="text-gray-600 max-w-2xl">
        {{ t('desc') }}
      </p>
    </div>

    <!-- Amenities Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="item in features" :key="item.label" class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl border flex items-center justify-center bg-white">
          <Icon :name="item.icon" class="text-yellow-600 font-bold text-2xl" />
        </div>
        <p class="font-medium">{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(['features'])
const { t } = useI18n({
  useScope: 'local'
})
</script>


<i18n lang="json">{
  "en": {
    "title": "Room Amenities",
    "desc": "Experience unparalleled comfort with our comprehensive room amenities, designed to cater to your every need and enhance your stay."
  },
  "id": {
    "title": "Fasilitas Kamar",
    "desc": "Rasakan kenyamanan tak tertandingi dengan fasilitas kamar lengkap kami, dirancang untuk memenuhi setiap kebutuhan Anda dan meningkatkan pengalaman menginap Anda."
  }
}</i18n>