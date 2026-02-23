<script setup>
import { computed, ref, onUnmounted } from 'vue'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const head = useLocaleHead()

const pageTitle = computed(() => {
  const key = route.meta?.title ?? 'layouts.title'
  return t(key)
})

const transitionOverlay = ref(null)
const transitionLogo = ref(null)

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

// Custom Page Transition (Curtain Effect)
const removeBeforeEach = router.beforeEach(async (to, from) => {
  if (to.path === from.path) return

  // 1. Animate In (Cover Screen)
  await new Promise((resolve) => {
    const tl = gsap.timeline({ onComplete: resolve })
    
    tl.set(transitionOverlay.value, { y: '100%', display: 'flex' })
    tl.to(transitionOverlay.value, { 
      y: '0%', 
      duration: 0.8, 
      ease: 'power4.inOut' 
    })
    tl.fromTo(transitionLogo.value, 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' },
      "-=0.3"
    )
  })
  return true
})

const removeAfterEach = router.afterEach(() => {
  // 2. Animate Out (Reveal New Page)
  const tl = gsap.timeline()
  
  tl.to(transitionLogo.value, { opacity: 0, scale: 0.8, duration: 0.3 })
  tl.to(transitionOverlay.value, { 
    y: '-100%', 
    duration: 0.8, 
    ease: 'power4.inOut',
    onComplete: () => {
      gsap.set(transitionOverlay.value, { display: 'none', y: '100%' })
      ScrollTrigger.refresh()
    }
  }, "-=0.1")
})

onUnmounted(() => {
  removeBeforeEach()
  removeAfterEach()
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

    <Body class="font-[Poppins]">
      <SpeedInsights/>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <slot />
          <Footer />
        </div>
      </div>

      <!-- Transition Overlay -->
      <div ref="transitionOverlay" class="fixed inset-0 z-[9999] bg-white hidden items-center justify-center">
        <div ref="transitionLogo">
          <NuxtImg src="/logo-theulu-nobg.png" alt="The Ulu Logo" width="120" />
        </div>
      </div>
    </Body>

    </Html>
  </div>
</template>

<style>
</style>
