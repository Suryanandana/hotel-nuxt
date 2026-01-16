<template>
  <section class="space-y-6">
    <!-- Title -->
    <div class="space-y-2">
      <h2 class="text-2xl font-semibold">Room Amenities</h2>
      <p class="text-gray-600 max-w-2xl">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam.
      </p>
    </div>

    <!-- Amenities Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <div
        v-for="item in amenities"
        :key="item.label"
        class="flex items-center gap-4"
      >
        <div
          class="w-12 h-12 rounded-xl border flex items-center justify-center bg-white"
        >
          {{ item.icon }}
        </div>
        <p class="font-medium">{{ item.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const amenities = [
  { icon: '❄️', label: 'Air Conditioning' },
  { icon: '📺', label: 'Flat-Screen TV' },
  { icon: '📶', label: 'High-Speed Wi-Fi' },
  { icon: '🔐', label: 'Electronic Safe' },
  { icon: '🔊', label: 'Sound System' },
  { icon: '🪞', label: 'Vanity mirror' },
  { icon: '🛁', label: 'Bathtubs' },
  { icon: '🛋', label: 'Seating area' },
  { icon: '⏰', label: 'Alarm clock' }
]
</script>
