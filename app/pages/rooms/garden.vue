<script setup>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <Hero :title="t('landing.roomList[0].title')" />
    <!-- content -->
    <div class="container mx-auto px-4 pt-32">
        <RoomsHero />
    </div>
    <LandingContact />
</template>