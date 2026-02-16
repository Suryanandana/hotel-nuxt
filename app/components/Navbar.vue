<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRoute } from '#app'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'

const route = useRoute()
const isOpen = ref(false);
const isScrolled = ref(false);
const { locale, locales, t  } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const navItems = computed(() => [
    { label: t('navbar.home'), href: "/", key: "home" },
    { label: t('navbar.about'), href: "about", key: "about" },
    { label: t('navbar.rooms'), href: "rooms", key: "rooms" },
    { label: t('navbar.facilities'), href: "facilities", key: "facilities" },
    // { label: t('navbar.contact'), href: "contact" },
]);

const activeItem = computed(() => {
    const path = route.path
    if (path.includes('/about') || path.includes('/tentang')) return 'about'
    if (path.includes('/rooms') || path.includes('/kamar')) return 'rooms'
    if (path.includes('/facilities') || path.includes('/fasilitas')) return 'facilities'
    return 'home'
})

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

// Detect scroll
onMounted(() => {
    const trigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => isScrolled.value = self.scroll() > 20
    });
    onUnmounted(() => trigger.kill());
});
</script>


<template>
    <header class="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b" :class="isScrolled
        ? 'bg-white shadow-sm border-gray-200'
        : 'bg-transparent border-transparent'">
        <div class="container mx-auto px-6 flex justify-between items-center h-16 relative">

            <!-- DESKTOP NAV -->
            <nav role="navigation" aria-label="Main navigation"
                class="hidden md:flex items-center gap-8 text-sm font-medium">
                <ul class="flex gap-8 items-center">
                    <li v-for="item in navItems" :key="item.href">
                        <NuxtLink :to="$localePath(item.href)"
                            class="relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                            :class="[
                                isScrolled ? 'text-black' : 'text-white',
                                activeItem === item.key ? (isScrolled ? 'after:w-full text-yellow-600' : 'after:w-full') : ''
                            ]">
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <!-- LOGO -->
            <NuxtLink :to="$localePath('/')"
                class="font-serif tracking-widest text-xl static md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2">
                <NuxtImg src="/logo-theulu-nobg.png" alt="logo theulu" height="50" class="h-[50px] w-auto" />
            </NuxtLink>

            <div class="gap-x-2 hidden md:flex items-center">
                <Button as-child>
                    <NuxtLink to="https://secure.guestpro.net/theulu/booking" target="_blank" rel="noopener">
                        {{ t('navbar.booking') }}
                        <Icon name="solar:arrow-right-up-linear" />
                    </NuxtLink>
                </Button>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button as-child variant="outline" size="icon" aria-label="Submit"
                                class="bg-transparent text-lg font-bold hover:text-green-300 outline-green-300 border-green-300"
                                :class="isScrolled ? 'text-white bg-green-600 hover:bg-white' : 'text-green-300'">
                                <NuxtLink to="https://wa.me/6281313333661" target="_blank" rel="noopener">
                                    <Icon name="ic:baseline-whatsapp" />
                                </NuxtLink>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{{ t('navbar.wa') }}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <ClientOnly>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Popover>
                                    <PopoverTrigger as-child>
                                        <Button variant="outline" aria-label="Submit" class="bg-transparent text-lg p-2"
                                            :class="isScrolled ? 'text-black' : 'text-white'">
                                            <Icon v-if="locale === 'en'" name="twemoji:flag-united-states" />
                                            <Icon v-else-if="locale === 'id'" name="twemoji:flag-indonesia" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent class="w-[140px] p-1 translate-y-3">
                                        <NuxtLink v-for="l in locales" :key="l.code" :to="switchLocalePath(l.code)"
                                            class="flex items-center w-full px-2 py-1.5 text-sm rounded-sm hover:bg-gray-100 transition-colors"
                                            :class="{ 'bg-gray-50 font-medium': locale === l.code }">
                                            <Icon v-if="l.code === 'en'" name="twemoji:flag-united-states"
                                                class="mr-2 h-4 w-4" />
                                            <Icon v-else-if="l.code === 'id'" name="twemoji:flag-indonesia"
                                                class="mr-2 h-4 w-4" />
                                            {{ l.name ?? l.code.toUpperCase() }}
                                        </NuxtLink>
                                    </PopoverContent>
                                </Popover>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{{ t('navbar.language') }}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </ClientOnly>
            </div>

            <!-- MOBILE HAMBURGER -->
             <div class="flex gap-3 md:hidden group">
                <Button as-child>
                    <NuxtLink to="https://secure.guestpro.net/theulu/booking" target="_blank" rel="noopener">
                        {{ t('navbar.booking') }}
                        <Icon name="solar:arrow-right-up-linear" />
                    </NuxtLink>
                </Button>
                 <button @click="openMenu" aria-label="Open navigation menu"
                     aria-controls="mobile-menu" :aria-expanded="isOpen">
                     <svg width="30" height="30" fill="none" stroke-width="2" class="transition-colors duration-300"
                         :class="isScrolled ? 'stroke-black' : 'stroke-white'">
                         <path d="M4 7h22"
                             class="transition-transform duration-300 ease-in-out group-hover:-translate-y-1" />
                         <path d="M4 15h22" class="transition-opacity duration-300 ease-in-out group-hover:opacity-75" />
                         <path d="M4 23h22"
                             class="transition-transform duration-300 ease-in-out group-hover:translate-y-1" />
                     </svg>
                 </button>
             </div>
        </div>

        <!-- OVERLAY -->
        <div v-if="isOpen" class="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden" @click="closeMenu"
            aria-hidden="true">
        </div>

        <!-- MOBILE PANEL -->
        <aside v-if="isOpen" id="mobile-menu"
            class="mobile-panel fixed top-0 right-0 h-full w-[80%] bg-white shadow-xl p-8 md:hidden" role="dialog"
            aria-modal="true" aria-label="Mobile Navigation Panel">
            <div class="flex justify-between items-center mb-6">
                <NuxtLink :to="$localePath('/')" class="font-serif tracking-widest text-lg">
                    <NuxtImg src="/logo-theulu-nobg.png" alt="logo theulu" height="50" class="h-[50px] w-auto" />
                </NuxtLink>

                <button aria-label="Close navigation menu" @click="closeMenu" class="group">
                    <svg width="26" height="26" stroke="black" stroke-width="2"
                        class="transition-transform duration-300 ease-in-out group-hover:rotate-90">
                        <line x1="4" y1="4" x2="22" y2="22" />
                        <line x1="22" y1="4" x2="4" y2="22" />
                    </svg>
                </button>
            </div>

            <nav aria-label="Mobile navigation">
                <ul class="space-y-6 text-[15px] font-medium">
                    <li v-for="item in navItems" :key="item.href" class="mobile-item">
                        <NuxtLink :to="$localePath(item.href)" class="block transition-colors"
                            :class="activeItem === item.key ? 'text-yellow-600 font-semibold' : 'text-black'"
                            @click="closeMenu">
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <!-- MOBILE ACTIONS -->
            <div class="mt-8 space-y-4">
                <Button as-child variant="outline" class="w-full bg-transparent text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                    <NuxtLink to="https://wa.me/6281313333661" @click="closeMenu" target="_blank" rel="noopener">
                        <Icon name="ic:baseline-whatsapp" class="mr-2" />
                        {{ t('navbar.wa') }}
                    </NuxtLink>
                </Button>
                <ClientOnly>
                    <div class="flex gap-2">
                        <NuxtLink v-for="l in locales" :key="l.code" :to="switchLocalePath(l.code)"
                            class="flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-md border transition-all duration-200 flex-1"
                            :class="locale === l.code 
                                ? 'bg-yellow-50 border-yellow-400 text-yellow-700 font-semibold shadow-sm' 
                                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'"
                            @click="closeMenu">
                            <Icon v-if="l.code === 'en'" name="twemoji:flag-united-states" class="h-4 w-4" />
                            <Icon v-else-if="l.code === 'id'" name="twemoji:flag-indonesia" class="h-4 w-4" />
                            {{ l.code.toUpperCase() }}
                        </NuxtLink>
                    </div>
                </ClientOnly>
            </div>
        </aside>
    </header>
</template>
