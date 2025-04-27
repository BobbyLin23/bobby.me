<script lang="ts" setup>
const locale = ref('zh-CN')
const availableLocales = ['zh-CN', 'en']

function toggleLanguage() {
  // 在可用语言之间切换
  const currentIndex = availableLocales.indexOf(locale.value)
  const nextIndex = (currentIndex + 1) % availableLocales.length
  locale.value = availableLocales[nextIndex]

  // 实际项目中，这里会调用i18n的setLocale方法
  // i18n.global.locale.value = locale.value

  // 存储用户语言偏好
  localStorage.setItem('locale', locale.value)
}

// 初始化时从localStorage获取语言设置
onMounted(() => {
  const storedLocale = localStorage.getItem('locale')
  if (storedLocale && availableLocales.includes(storedLocale)) {
    locale.value = storedLocale
  }
})
</script>

<template>
  <button
    class="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    title="切换语言"
    @click="toggleLanguage()"
  >
    <div class="i-carbon-translate text-xl" />
  </button>
</template>
