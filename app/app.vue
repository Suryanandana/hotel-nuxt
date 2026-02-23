<script setup>
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div class="overflow-x-hidden">
    <NuxtLoadingIndicator color="#FFD700" />
    <Analytics/>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
