<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 md:-mt-10 lg:-mt-20">
        <div class="lg:col-span-2 space-y-6">
            <slot name="left" />
            <slot />
        </div>
        <slot name="right" />
    </div>
</template>

<script setup>
    
</script>