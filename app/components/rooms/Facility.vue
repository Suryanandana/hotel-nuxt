<template>
  <section class="space-y-6">
    <!-- Title -->
    <div class="space-y-2">
      <h2 class="text-3xl md:text-4xl font-serif mb-3">
        {{ t('rooms.amenities.title') }}
      </h2>
      <p class="text-gray-600 max-w-2xl">
        {{ t('rooms.amenities.desc') }}
      </p>
    </div>

    <!-- Amenities Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(item, index) in features" :key="index" class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl border flex items-center justify-center bg-white">
          <Icon :name="rt(item.icon)" class="text-yellow-600 font-bold text-2xl" />
        </div>
        <p class="font-medium">{{ rt(item.text) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, tm, rt } = useI18n()

const props = defineProps(['features'])

const features = computed(() => props.features || tm('landing.roomList[0].features'))

</script>