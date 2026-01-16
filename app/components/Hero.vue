<script setup>
import { NuxtLink } from '#components'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
defineProps(['title', 'subTitle', 'imgUrl'])
</script>
<template>
  <section class="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
    <img :src="imgUrl" alt="Hotel Exterior" class="absolute inset-0 w-full h-full object-cover" />````
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="hero-content relative text-center px-4">
      <h1 class="text-4xl md:text-6xl font-serif mb-4">
        {{ title }}
      </h1>
      <div>
        <Breadcrumb>
          <BreadcrumbList class="w-fit mx-auto dark">
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <NuxtLink to="/">
                  Home
                </NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink as-child>
                <NuxtLink to="/docs/components">
                  Components
                </NuxtLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
    <!-- Indikator Scroll -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70">
      <Icon name="solar:mouse-minimalistic-linear" class="text-4xl animate-bounce" />
    </div>
  </section>
</template>