<script setup>
defineProps({
    room: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="room-section relative mx-auto max-w-7xl px-6 flex flex-col lg:block">
        <!-- IMAGE BLOCK -->
        <div class="room-image relative w-full lg:w-[70%] h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg"
            :class="room.align === 'left' ? 'lg:mr-auto' : 'lg:ml-auto'">
            <img :src="room.image" :alt="room.title" class="absolute inset-0 w-full h-full object-cover" />
        </div>

        <!-- CARD -->
        <div class="room-card bg-white shadow-xl rounded-2xl p-8 md:p-10 max-w-xl w-full z-10 relative mx-auto -mt-10 lg:mt-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2"
            :class="room.align === 'left' ? 'lg:right-10' : 'lg:left-10'">
            <p class="text-xs tracking-widest text-neutral-500 mb-3">
                {{ room.price }}
            </p>

            <h2 class="text-3xl font-semibold mb-4">
                {{ room.title }}
            </h2>

            <p class="text-neutral-600 mb-6">
                {{ room.description }}
            </p>

            <div class="flex gap-6 text-sm text-neutral-700 flex-wrap">
                <div v-for="feature in room.features" :key="feature.icon" class="flex items-center gap-2">
                    <Icon :name="feature.icon" />
                    <span>{{ feature.text }}</span>
                </div>
            </div>

            <NuxtLink :to="$localePath(room.url)">
                <Button class="mt-6">
                    {{ room.buttonText }}
                    <Icon name="solar:arrow-right-up-linear" />
                </Button>
            </NuxtLink>
        </div>
    </div>
</template>