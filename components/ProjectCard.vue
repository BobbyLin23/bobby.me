<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  tags?: string[]
  link: string
  image?: string
}>()
</script>

<template>
  <div class="group">
    <article class="h-full rounded-lg border border-gray-200 p-6 transition-all hover:border-primary-500 dark:border-gray-800">
      <div v-if="image" class="mb-4 aspect-video overflow-hidden rounded-md">
        <img :src="image" :alt="title" class="h-full w-full object-cover">
      </div>

      <h2 class="mb-3 text-2xl font-bold group-hover:text-primary-500">
        <NuxtLink :to="link">
          {{ title }}
        </NuxtLink>
      </h2>

      <p class="mb-4 text-gray-600 dark:text-gray-400">
        {{ description }}
      </p>

      <div v-if="tags && tags.length" class="mt-auto flex flex-wrap gap-2">
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
