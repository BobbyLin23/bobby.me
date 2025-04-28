<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <PostWrapper :path="route.path" />
</template>
