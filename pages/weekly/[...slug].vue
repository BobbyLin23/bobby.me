<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <WeeklyWrapper :path="route.path" />
</template>
