<script lang="ts" setup>
defineProps<{
  date: string
  title: string
  summary: string
  link: string
}>()
</script>

<template>
  <div class="relative pl-10">
    <!-- 时间线标记 -->
    <div class="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-primary-500 dark:border-gray-900" />

    <!-- 内容 -->
    <div class="group">
      <div class="text-sm text-gray-500 dark:text-gray-400">
        {{ date }}
      </div>
      <h3 class="mb-2 text-xl font-bold group-hover:text-primary-500">
        <NuxtLink :to="link">
          {{ title }}
        </NuxtLink>
      </h3>
      <p class="text-gray-600 dark:text-gray-400">
        {{ summary }}
      </p>
      <NuxtLink :to="link" class="mt-2 inline-flex items-center text-primary-500 hover:underline">
        阅读更多 <div class="i-carbon-arrow-right ml-1 text-sm" />
      </NuxtLink>
    </div>
  </div>
</template>
