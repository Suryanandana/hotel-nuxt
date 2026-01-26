<template>
  <section class="bg-white py-20">
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <!-- BLOCK 1: IMAGE LEFT, TEXT RIGHT -->
        <div class="relative h-64 sm:h-96 lg:h-full">
          <img
            src="/images/slide3.png"
            alt="Community"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="flex items-center px-6 py-12 sm:px-12 lg:px-20">
          <div class="max-w-md">
            <div class="mb-4 inline-flex h-10 w-10 items-center justify-center border text-sm font-medium">
              <Icon name="solar:bed-broken" class="text-2xl font-thin" />
            </div>
            <h2 class="mb-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Room Overview
            </h2>
            <p class="text-sm leading-relaxed text-gray-600 sm:text-base">
              We offer a total of 24 thoughtfully designed rooms created to deliver
              comfort, tranquility, and a truly relaxing stay. Guests can choose
              between calming garden-view rooms or refreshing pool-view rooms,
              all designed to enhance a peaceful island atmosphere.
            </p>
          </div>
        </div>

        <!-- BLOCK 2: TEXT LEFT, IMAGE RIGHT -->
        <div class="flex items-center px-6 py-12 sm:px-12 lg:px-20 order-2 lg:order-none">
          <div class="max-w-md">
            <div class="mb-4 inline-flex h-10 w-10 items-center justify-center border text-sm font-medium">
              <Icon name="fluent:swimming-pool-20-filled" class="text-2xl font-thin" />
            </div>
            <h2 class="mb-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Front Pool Rooms
            </h2>
            <p class="text-sm leading-relaxed text-gray-600 sm:text-base">
              Our pool-view and garden-view rooms offer different perspectives of
              relaxation, from direct pool access to lush green surroundings.
              Each room features the same carefully curated layout and modern
              facilities to ensure a comfortable stay.
            </p>
          </div>
        </div>

        <div class="relative h-64 sm:h-96 lg:h-full order-1 lg:order-none">
          <img
            src="/images/pool_front.jpg"
            alt="Relaxing"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <!-- BLOCK 3: IMAGE LEFT, TEXT RIGHT -->
        <div class="relative h-64 sm:h-96 lg:h-full">
          <img
            src="/images/garden_front.jpg"
            alt="Community"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div class="flex items-center px-6 py-12 sm:px-12 lg:px-20">
          <div class="max-w-md">
            <div class="mb-4 inline-flex h-10 w-10 items-center justify-center border text-sm font-medium">
              <Icon name="temaki:garden-bed" class="text-2xl font-thin" />
            </div>
            <h2 class="mb-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Front Garden Room
            </h2>
            <p class="text-sm leading-relaxed text-gray-600 sm:text-base">
              We offer a total of 24 thoughtfully designed rooms created to deliver
              comfort, tranquility, and a truly relaxing stay. Guests can choose
              between calming garden-view rooms or refreshing pool-view rooms,
              all designed to enhance a peaceful island atmosphere.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Alternating image-text section component
</script>