<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { gsap } from "gsap";

const isOpen = ref(false);
const isScrolled = ref(false);

const navItems = [
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Gallery", href: "/gallery" },
    { label: "Activities", href: "/activities" },
    { label: "Contact Us", href: "/contact" },
];

const openMenu = async () => {
  isOpen.value = true;

  await nextTick(); // <-- pastikan aside sudah render

  gsap.fromTo(
    ".mobile-panel",
    { x: "100%" },
    { x: "0%", duration: 0.6, ease: "power4.out" }
  );

  gsap.fromTo(
    ".mobile-item",
    { x: 40, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.12, duration: 0.4, delay: 0.1 }
  );
};

const closeMenu = () => {
    gsap.to(".mobile-panel", {
        x: "100%",
        duration: 0.5,
        ease: "power4.in",
        onComplete: () => {
            isOpen.value = false;  // <-- tidak return boolean lagi
        },
    });
};

// Lock scroll saat menu terbuka
watch(isOpen, (val) => {
    document.body.style.overflow = val ? "hidden" : "";
});

// Detect scroll
onMounted(() => {
    window.addEventListener("scroll", () => {
        isScrolled.value = window.scrollY > 20;
    });
});
</script>


<template>
    <header class="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b" :class="isScrolled
        ? 'bg-white shadow-sm border-gray-200'
        : 'bg-transparent border-transparent'">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

            <!-- LOGO -->
            <NuxtLink to="/" class="font-serif tracking-widest text-xl">
                PARADISE
                <span class="block text-[10px] tracking-[0.3em]">HOTEL</span>
            </NuxtLink>

            <!-- DESKTOP NAV -->
            <nav role="navigation" aria-label="Main navigation"
                class="hidden md:flex items-center gap-8 text-sm font-medium">
                <ul class="flex gap-8 items-center">
                    <li v-for="item in navItems" :key="item.href">
                        <NuxtLink :to="item.href" class="hover:text-gray-500 transition-colors">
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>

                <NuxtLink to="/contact">
                    <Button class="">
                        Contact Us
                    </Button>
                </NuxtLink>
            </nav>

            <!-- MOBILE HAMBURGER -->
            <button class="md:hidden" @click="openMenu" aria-label="Open navigation menu" aria-controls="mobile-menu"
                :aria-expanded="isOpen">
                <svg width="30" height="30" fill="none" stroke="black" stroke-width="2">
                    <path d="M4 7h22M4 15h22M4 23h22" />
                </svg>
            </button>
        </div>

        <!-- OVERLAY -->
        <div v-if="isOpen" class="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden" @click="closeMenu"
            aria-hidden="true"></div>

        <!-- MOBILE PANEL -->
        <aside v-if="isOpen" id="mobile-menu"
            class="mobile-panel fixed top-0 right-0 h-full w-[80%] bg-white shadow-xl p-8 md:hidden" role="dialog"
            aria-modal="true" aria-label="Mobile Navigation Panel">
            <div class="flex justify-between items-center mb-6">
                <NuxtLink to="/" class="font-serif tracking-widest text-lg">
                    PARADISE
                    <span class="block text-[9px] tracking-[0.3em]">HOTEL</span>
                </NuxtLink>

                <button aria-label="Close navigation menu" @click="closeMenu">
                    <svg width="26" height="26" stroke="black" stroke-width="2">
                        <line x1="4" y1="4" x2="22" y2="22" />
                        <line x1="22" y1="4" x2="4" y2="22" />
                    </svg>
                </button>
            </div>

            <nav aria-label="Mobile navigation">
                <ul class="space-y-6 text-[15px] font-medium">
                    <li v-for="item in navItems" :key="item.href" class="mobile-item">
                        <NuxtLink :to="item.href" class="block" @click="closeMenu">
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </aside>
    </header>
</template>
