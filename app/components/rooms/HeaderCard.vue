<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n({ useScope: 'local' })

const features = computed(() => tm('features'))

const props = defineProps({
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
        default: '1.230.000'
    },
    priceBreakfast: {
        type: [String, Number],
        default: null  // null = tidak tampilkan opsi breakfast
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

// Toggle antara 'room-only' dan 'breakfast'
const selectedPlan = ref('room-only')

const displayedPrice = computed(() =>
    selectedPlan.value === 'breakfast' ? props.priceBreakfast : props.price
)

const isCopied = ref(false)

const copyUrl = () => {
    if (import.meta.client) {
        navigator.clipboard.writeText(window.location.href).then(() => {
            isCopied.value = true
            setTimeout(() => isCopied.value = false, 2000)
        })
    }
}
</script>

<template>
    <div class="border rounded-2xl p-6 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <h2 class="text-2xl font-semibold">{{ title }}</h2>
                <span class="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                    {{ category }}
                </span>
            </div>
        </div>

        <p class="text-sm text-gray-500">
            {{ location }}
        </p>

        <!-- Plan toggle (hanya tampil jika priceBreakfast tersedia) -->
        <div v-if="priceBreakfast" class="flex gap-2">
            <button
                @click="selectedPlan = 'room-only'"
                :class="[
                    'flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200',
                    selectedPlan === 'room-only'
                        ? 'bg-yellow-600 text-white border-yellow-600 shadow-sm'
                        : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-400 hover:text-yellow-600'
                ]"
            >
                <Icon name="solar:home-linear" class="text-base" />
                {{ t('plan.roomOnly') }}
            </button>
            <button
                @click="selectedPlan = 'breakfast'"
                :class="[
                    'flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200',
                    selectedPlan === 'breakfast'
                        ? 'bg-yellow-600 text-white border-yellow-600 shadow-sm'
                        : 'bg-white text-gray-600 border-gray-300 hover:border-yellow-400 hover:text-yellow-600'
                ]"
            >
                <Icon name="solar:cup-hot-linear" class="text-base" />
                {{ t('plan.breakfast') }}
            </button>
        </div>

        <!-- Harga dengan transisi -->
        <div class="space-y-1">
            <Transition name="price-fade" mode="out-in">
                <p :key="selectedPlan" class="text-2xl font-semibold text-yellow-700">
                    Rp {{ displayedPrice }}
                    <span class="text-sm font-normal text-gray-500">/ {{ t('night') }}</span>
                </p>
            </Transition>

            <!-- Badge keterangan plan aktif -->
            <Transition name="price-fade" mode="out-in">
                <div
                    v-if="priceBreakfast"
                    :key="'badge-' + selectedPlan"
                    class="inline-flex items-center gap-1 text-xs text-gray-500"
                >
                    <Icon
                        :name="selectedPlan === 'breakfast' ? 'solar:cup-hot-linear' : 'solar:home-linear'"
                        class="text-yellow-600 text-sm"
                    />
                    <span>
                        {{ selectedPlan === 'breakfast' ? t('plan.includedBreakfast') : t('plan.roomOnlyDesc') }}
                    </span>
                </div>
            </Transition>
        </div>

        <div class="border-t pt-4 flex flex-wrap gap-6 text-sm text-gray-600">
            <div v-for="(feature, index) in features" :key="index" class="flex items-center gap-2">
                <div class="flex flex-col">
                    <span class="text-[12px]">{{rt(feature.label)}}</span>
                    <div class="flex items-center gap-1 font-semibold">
                        <Icon :name="rt(feature.icon)" />
                        {{ rt(feature.text) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.price-fade-enter-active,
.price-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}
.price-fade-enter-from {
    opacity: 0;
    transform: translateY(4px);
}
.price-fade-leave-to {
    opacity: 0;
    transform: translateY(-4px);
}
</style>

<i18n lang="json">{
    "en": {
        "night": "night",
        "plan": {
            "roomOnly": "Room Only",
            "breakfast": "With Breakfast",
            "roomOnlyDesc": "Accommodation only, no meals included",
            "includedBreakfast": "Accommodation and breakfast included"
        },
        "features": [
            {"label": "Bed type", "icon": "solar:bed-broken", "text": "1 King Bed"},
            {"label": "Room Size", "icon": "material-symbols:resize-rounded", "text": "30m²"},
            {"label": "Total Unit", "icon": "cil:room", "text": "1 Room"}
        ]
    },
    "id": {
        "night": "malam",
        "plan": {
            "roomOnly": "Kamar Saja",
            "breakfast": "Dengan Sarapan",
            "roomOnlyDesc": "Hanya penginapan, tanpa sarapan",
            "includedBreakfast": "Penginapan dan sudah termasuk sarapan"
        },
        "features": [
            {"label": "Tipe kasur", "icon": "solar:bed-broken", "text": "1 Kasur Besar"},
            {"label": "Ukuran ruangan", "icon": "material-symbols:resize-rounded", "text": "30m²"},
            {"label": "Total Unit", "icon": "cil:room", "text": "1 Kamar"}
        ]
    }
}</i18n>