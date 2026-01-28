<script setup>
const { t, tm } = useI18n({
    useScope: 'local'
})

defineProps({
    title: {
        type: String,
        default: 'Garden View Room'
    },
    category: {
        type: String,
        default: 'Luxury Rooms'
    },
    location: {
        type: String,
        default: 'Kec. Nusa Penida, Kabupaten Klungkung, Bali'
    },
    price: {
        type: [String, Number],
        default: "150"
    },
    features: {
        type: Array,
        default: () => [
            { icon: 'solar:bed-broken', text: '1 Bed' },
            { icon: '🛁', text: '1 Bath' },
            { icon: '📐', text: '300 sqft' },
            { icon: '👤', text: '2 Guests' }
        ]
    }
})
</script>

<template>
    <div class="border rounded-2xl p-6 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <h1 class="text-2xl font-semibold">{{ title }}</h1>
                <span class="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                    {{ category }}
                </span>
            </div>
        </div>

        <p class="text-sm text-gray-500">
            {{ location }}
        </p>

        <p class="text-2xl font-semibold text-yellow-700">
            Rp {{ price }} <span class="text-sm font-normal text-gray-500">/ {{ t('night') }}</span>
        </p>

        <div class="border-t pt-4 flex flex-wrap gap-6 text-sm text-gray-600">
            <div v-for="(feature, index) in tm('features')" :key="index" class="flex items-center gap-2">
                <div class="flex flex-col">
                    <span class="text-[12px]">{{feature.label.loc.source}}</span>
                    <div class="flex items-center gap-1 font-semibold">
                        <Icon :name="feature.icon.loc.source" />
                        {{ feature.text.loc.source }}
                    </div>
                </div>
            </div>

            <button class="ml-auto flex items-center gap-2 text-yellow-700 hover:underline">
                🔗 Share
            </button>
        </div>
    </div>
</template>

<i18n lang="json">{
    "en": {
        "night": "night",
        "features": [
            {"label": "Bed type", "icon": "solar:bed-broken", "text": "1 King Bed"},
            {"label": "Room Size", "icon": "material-symbols:resize-rounded", "text": "30m²"},
            {"label": "Total Unit", "icon": "cil:room", "text": "1 Room"}
        ]
    },
    "id": {
        "night": "malam",
        "features": [
            {"label": "Tipe kasur", "icon": "solar:bed-broken", "text": "1 Kasur Besar"},
            {"label": "Ukuran ruangan", "icon": "material-symbols:resize-rounded", "text": "30m²"},
            {"label": "Total Unit", "icon": "cil:room", "text": "1 Kamar"}
        ]
    }
}</i18n>