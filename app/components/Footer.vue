<script setup>
const navItems = [
    { label: "About", href: "/" },
    { label: "Rooms", href: "/" },
    { label: "Facilities", href: "/" },
    { label: "Contact", href: "/" },
];
</script>

<template>
    <footer class="bg-white border-t">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center">© 2026 <NuxtLink to="/"
                    class="hover:underline">The Ulu</NuxtLink>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0 gap-6">
                <li v-for="item in navItems" :key="item.href">
                    <NuxtLink :to="item.href" class="relative transition-colors hover:text-black after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
                        {{ item.label }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>