<script setup>
defineProps({
    card: {
        type: Object,
        required: true
    }
})

const { rt } = useI18n();
</script>

<template>
    <div data-aos="fade-up"
      class="facility-card w-full flex items-end justify-between rounded-[30px] relative min-h-[450px] p-[35px] overflow-hidden group">
      <!-- Background Image -->
      <img :src="rt(card.image)" :alt="rt(card.title)"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/50"></div>

      <div class="relative z-10">
        <h2 class="text-4xl font-bold mb-2 text-white">{{ rt(card.title) }}</h2>
        <p class="text-white/90">{{ rt(card.text) }}</p>
      </div>
    </div>
</template>