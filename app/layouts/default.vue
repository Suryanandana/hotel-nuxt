<script setup>
import { computed } from 'vue'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"

const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead()

const pageTitle = computed(() => {
  const key = route.meta?.title ?? 'layouts.title'
  return t(key)
})

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

onMounted(() => {
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,      // smoothness (1–2 recommended)
    effects: true,    // enable data-speed
    smoothTouch: 0.1  // mobile smoothness
  })
})
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

    <Head>
      <Title>{{ pageTitle }}</Title>
      <template v-for="link in head.link" :key="link.key">
        <Link :id="link.key" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.key">
        <Meta :id="meta.key" :property="meta.property" :content="meta.content" :name="meta.name" />
      </template>
    </Head>

    <Body>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <slot />
        </div>
      </div>
    </Body>

    </Html>
  </div>
</template>
