<script setup>
import { computed } from 'vue'
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead()

const pageTitle = computed(() => {
  const key = route.meta?.title ?? 'layouts.title'
  return t(key)
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
        <slot />
      </Body>
    </Html>
  </div>
</template>
