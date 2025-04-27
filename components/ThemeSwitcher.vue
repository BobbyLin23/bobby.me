<script lang="ts" setup>
const isDark = ref(false)

// 初始化时从localStorage或系统偏好获取主题设置
onMounted(() => {
  const storedTheme = localStorage.getItem('theme')
  if (storedTheme) {
    isDark.value = storedTheme === 'dark'
  }
  else {
    // 检查系统偏好
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

function toggleDark() {
  isDark.value = !isDark.value
  applyTheme()
}

function applyTheme() {
  // 应用主题到HTML元素
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
  else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>

<template>
  <button
    class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    title="切换深色/浅色模式"
    @click="toggleDark()"
  >
    <div v-if="isDark" class="i-carbon-moon text-xl" />
    <div v-else class="i-carbon-sun text-xl" />
  </button>
</template>
