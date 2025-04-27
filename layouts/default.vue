<script lang="ts" setup>
const imageModel = ref<HTMLImageElement>()
const imageAlt = ref<string>()
</script>

<template>
  <AppHeader />
  <main class="px-7 py-10 of-x-hidden">
    <slot />
    <AppFooter />
  </main>
  <Transition name="fade">
    <div v-if="imageModel" bottom-0 left-0 right-0 top-0 fixed z-500 backdrop-blur-7>
      <div bg-black:50 bottom-0 left-0 right-0 top-0 absolute z--1 />
      <img :src="imageModel.src" :alt="imageModel.alt" :class="imageModel.className" h-full max-h-screen max-w-screen w-full object-contain>
      <div v-if="imageAlt" text-white px2 py1 bg-black:50 flex items-center bottom-5 right-5 justify-center absolute>
        {{ imageAlt }}
      </div>
    </div>
  </Transition>
</template>
