<script lang="ts" setup>
defineProps<{
  title: string
  date: string
  summary: string
  slug: string
  tags?: string[]
}>()
</script>

<template>
  <div class="group">
    <article class="rounded-lg border border-gray-200 p-6 transition-all hover:border-primary-500 dark:border-gray-800">
      <div class="mb-2 text-sm text-gray-500 dark:text-gray-400">
        {{ date }}
      </div>
      <h2 class="mb-3 text-2xl font-bold group-hover:text-primary-500">
        <NuxtLink :to="`/blog/${slug}`">
          {{ title }}
        </NuxtLink>
      </h2>
      <p class="mb-4 text-gray-600 dark:text-gray-400">
        {{ summary }}
      </p>

      <div v-if="tags && tags.length" class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
        >
          {{ tag }}
        </span>
      </div>
    </article>
  </div>
</template>
