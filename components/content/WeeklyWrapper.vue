<script lang="ts" setup>
const props = defineProps<{
  path: string
}>()

const { data: weekly } = await useAsyncData(() => queryCollection('weekly').path(props.path).first())
</script>

<template>
  <template v-if="weekly">
    <div class="slide-enter-content mxa prose dark:prose-invert">
      <h1 class="slide-enter-50 mb-0">
        {{ weekly.title }}
      </h1>
      <p class="text-sm text-gray-500">
        {{ formatDate(weekly.date) }}
      </p>
      <ContentRenderer :value="weekly" />
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
