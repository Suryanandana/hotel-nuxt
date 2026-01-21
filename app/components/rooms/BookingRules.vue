<template>
  <section class="space-y-6">
    <div>
      <h2 class="text-3xl md:text-4xl font-serif mb-3">
        {{ t('title') }}
      </h2>
      <p class="text-gray-600 dark:text-gray-400 text-lg">
        {{ t('desc') }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Check In -->
      <div class="space-y-4">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          {{ t('checkIn.title') }}
        </h3>
        <ul class="space-y-3">
          <li v-for="(rule, index) in tm('checkIn.rules')" :key="index" class="flex items-start gap-3">
            <span
              class="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
              ✓
            </span>
            <span class="text-gray-700 dark:text-gray-300">{{ rule }}</span>
          </li>
        </ul>
      </div>

      <!-- Check Out -->
      <div class="space-y-4">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">
          {{ t('checkOut.title') }}
        </h3>
        <ul class="space-y-3">
          <li v-for="(rule, index) in tm('checkOut.rules')" :key="index" class="flex items-start gap-3">
            <span
              class="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
              ✓
            </span>
            <span class="text-gray-700 dark:text-gray-300">{{ rule }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n({ useScope: 'local' })
</script>

<i18n lang="json">{
  "en": {
    "title": "Booking Rules",
    "desc": "Please review our standard check-in and check-out policies to ensure a smooth and enjoyable stay at our hotel.",
    "checkIn": {
      "title": "Check In",
      "rules": [
        "Check-in time is from 2:00 PM onwards",
        "Please present a valid ID and credit card at reception",
        "Early check-in available subject to room availability",
        "Guests must be at least 18 years old"
      ]
    },
    "checkOut": {
      "title": "Check Out",
      "rules": [
        "Check-out time is 11:00 AM",
        "Late check-out available upon request (may incur additional fees)",
        "Please return all room keys to the front desk",
        "Ensure the room is in good condition before departure"
      ]
    }
  },
  "id": {
    "title": "Peraturan Pemesanan",
    "desc": "Silakan tinjau kebijakan check-in dan check-out standar kami untuk memastikan menginap yang lancar dan menyenangkan di hotel kami.",
    "checkIn": {
      "title": "Check In",
      "rules": [
        "Waktu check-in mulai pukul 2:00 sore",
        "Harap presentasikan KTP atau paspor dan kartu kredit di resepsionis",
        "Check-in awal tersedia sesuai ketersediaan kamar",
        "Tamu harus berusia minimal 18 tahun"
      ]
    },
    "checkOut": {
      "title": "Check Out",
      "rules": [
        "Waktu check-out adalah pukul 11:00 pagi",
        "Check-out terlambat tersedia atas permintaan (mungkin ada biaya tambahan)",
        "Harap kembalikan semua kunci kamar ke front desk",
        "Pastikan kamar dalam kondisi baik sebelum meninggalkan"
      ]
    }
  }
}</i18n>
