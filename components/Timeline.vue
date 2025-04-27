<script lang="ts" setup>
// 时间线容器组件
</script>

<template>
  <div class="relative">
    <!-- 时间线轴 -->
    <div class="absolute top-0 bottom-0 left-4 w-px bg-gray-200 dark:bg-gray-800" />

    <!-- 时间线项目 -->
    <div class="space-y-12">
      <slot />
    </div>
  </div>
</template>
