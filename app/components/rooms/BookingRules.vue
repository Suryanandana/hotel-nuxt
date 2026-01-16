<template>
  <section class="space-y-6">
    <h2 class="text-2xl font-semibold">Booking Rules</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Check In -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Check In</h3>
        <ul class="space-y-3">
          <li
            v-for="rule in checkIn"
            :key="rule"
            class="flex items-start gap-3"
          >
            <span
              class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm"
            >
              ✓
            </span>
            <span class="text-gray-600">{{ rule }}</span>
          </li>
        </ul>
      </div>

      <!-- Check Out -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">Check Out</h3>
        <ul class="space-y-3">
          <li
            v-for="rule in checkOut"
            :key="rule"
            class="flex items-start gap-3"
          >
            <span
              class="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm"
            >
              ✓
            </span>
            <span class="text-gray-600">{{ rule }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const checkIn = [
  'Lorem ipsum dolor sit amet',
  'Sed ut perspiciatis',
  'Nemo enim ipsam'
]

const checkOut = [
  'Lorem ipsum dolor sit amet',
  'Sed ut perspiciatis',
  'Nemo enim ipsam'
]
</script>
