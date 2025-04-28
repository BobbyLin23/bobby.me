<script setup lang="ts">
const props = defineProps<{
  path: string
}>()

const { data: post } = await useAsyncData(() => queryCollection('content').path(props.path).first())
</script>

<template>
  <template v-if="post">
    <div class="slide-enter-content mxa prose dark:prose-invert">
      <h1 class="slide-enter-50 mb-0">
        {{ post.title }}
      </h1>
      <ContentRenderer :value="post" />
    </div>
  </template>
  <template v-else>
    <div class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/">
        Go back home
      </NuxtLink>
    </div>
  </template>
</template>
