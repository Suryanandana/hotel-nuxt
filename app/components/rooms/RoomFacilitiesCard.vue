<template>
  <div class="relative">
    <div class="rounded-2xl border p-4 sticky top-0">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold">How to Book?</h3>
      </div>
  
      <!-- List -->
      <ul class="space-y-3">
        <li
          v-for="item in items"
          :key="item.title"
          class="flex items-center justify-between bg-white rounded-xl p-3 hover:shadow-sm transition"
        >
          <div class="flex items-start gap-3">
            <!-- Icon -->
            <div
              class="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-lg"
            >
              {{ item.icon }}
            </div>
  
            <!-- Text -->
            <div>
              <p class="font-medium text-sm">{{ item.title }}</p>
              <p class="text-xs text-gray-500">{{ item.desc }}</p>
            </div>
          </div>
  
          <!-- Arrow -->
          <span class="text-gray-400 text-lg">›</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    icon: '1',
    title: 'Click button',
    desc: 'Click "Booking now" button down below'
  },
  {
    icon: '2',
    title: 'Bed Type & Others',
    desc: 'double bed, sofa table & more'
  },
  {
    icon: '3',
    title: 'Technology',
    desc: 'TV, Freeze, AC, Coffee maker'
  },
  {
    icon: '4',
    title: 'Bathroom',
    desc: '1 big attach Bathroom'
  },
  {
    icon: '5',
    title: 'Accessibility',
    desc: '1 size balcony, Free Wifi'
  },
  {
    icon: '6',
    title: 'Kitchen',
    desc: '1 mini Kitchen'
  }
]
</script>
