<script setup lang='ts'>
const isDark = useDark()

const toggleDark = useToggle(isDark)
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="() => toggleDark()">
    <div i-ri-sun-line dark:i-ri-moon-line />
  </a>
</template>
