<template>
  <div class="relative">
    <div class="rounded-2xl border p-4 sticky top-0">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold">{{ t('title') }}</h3>
      </div>
  
      <!-- List -->
      <ul class="space-y-3">
        <li
          v-for="item in items"
          :key="rt(item.title)"
          class="flex items-center justify-between bg-white rounded-xl p-3 hover:shadow-sm transition"
        >
          <div class="flex items-start gap-3">
            <!-- Icon -->
            <div
              class="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-lg"
            >
              <Icon :name="rt(item.icon)" class="text-yellow-500 font-bold text-xl" />
            </div>
  
            <!-- Text -->
            <div>
              <p class="font-medium text-sm">{{ rt(item.title) }}</p>
              <p class="text-xs text-gray-500">{{ rt(item.desc) }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n({ useScope: 'local' })

const items = computed(() => tm('items'))
</script>

<i18n lang="json">{
  "en": {
    "title": "How to Book",
    "desc": "Follow these simple steps to complete your booking quickly and easily.",
    "items": [
      {
        "icon": "teenyicons:button-outline",
        "title": "1. Click Button",
        "desc": "Click the \"Booking Now\" button below to start your reservation"
      },
      {
        "icon": "solar:bed-linear",
        "title": "2. Choose Room",
        "desc": "Select your preferred room type based on availability and needs"
      },
      {
        "icon": "uiw:date",
        "title": "3. Select Date",
        "desc": "Choose your check-in and check-out dates"
      },
      {
        "icon": "fluent:guest-16-regular",
        "title": "4. Guest Details",
        "desc": "Fill in guest information and contact details"
      },
      {
        "icon": "material-symbols:shopping-cart-checkout",
        "title": "5. Checkout",
        "desc": "Review your booking summary and complete the payment"
      },
      {
        "icon": "line-md:circle-to-confirm-circle-transition",
        "title": "6. Confirmation",
        "desc": "Receive booking confirmation via email or WhatsApp"
      },
      {
        "icon": "mingcute:hotel-line",
        "title": "7. Arrive & Stay",
        "desc": "Come to the property on your selected date and enjoy your stay"
      }
    ]
  },
  "id": {
    "title": "Cara Booking",
    "desc": "Ikuti langkah-langkah berikut untuk menyelesaikan pemesanan dengan mudah dan cepat.",
    "items": [
      {
        "icon": "teenyicons:button-outline",
        "title": "1. Klik Tombol",
        "desc": "Klik tombol \"Booking Sekarang\" di bawah untuk memulai pemesanan"
      },
      {
        "icon": "solar:bed-linear",
        "title": "2. Pilih Kamar",
        "desc": "Pilih tipe kamar sesuai ketersediaan dan kebutuhan Anda"
      },
      {
        "icon": "uiw:date",
        "title": "3. Pilih Tanggal",
        "desc": "Tentukan tanggal check-in dan check-out"
      },
      {
        "icon": "fluent:guest-16-regular",
        "title": "4. Data Tamu",
        "desc": "Isi data tamu dan informasi kontak"
      },
      {
        "icon": "material-symbols:shopping-cart-checkout",
        "title": "5. Checkout",
        "desc": "Periksa ringkasan booking dan selesaikan pembayaran"
      },
      {
        "icon": "line-md:circle-to-confirm-circle-transition",
        "title": "6. Konfirmasi",
        "desc": "Dapatkan konfirmasi pemesanan melalui email atau WhatsApp"
      },
      {
        "icon": "mingcute:hotel-line",
        "title": "7. Datang & Menginap",
        "desc": "Datang sesuai tanggal yang dipilih dan nikmati masa menginap Anda"
      }
    ]
  }
}</i18n>

