<script setup lang="ts">
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header class="header z-40">
    <NuxtLink
      class="outline-none m-5 h-12 w-12 select-none absolute dark:text-white xl:fixed"
      to="/"
      focusable="false"
    >
      Bobby.me
    </NuxtLink>
    <button
      title="Scroll to top"
      rounded-full h-10 w-10 cursor-pointer transition duration-300 bottom-3 right-3 fixed z-100 hover-bg-hex-8883 hover:op100 print:hidden
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right dark:text-neutral-400" print:op0>
        <NuxtLink to="/posts" title="Blog">
          <span class="lt-md:hidden">Blog</span>
          <div i-ri-article-line md:hidden />
        </NuxtLink>
        <NuxtLink to="/projects" title="Projects">
          <span class="lt-md:hidden">Projects</span>
          <div i-ri-lightbulb-line class="md:hidden" />
        </NuxtLink>
        <NuxtLink to="/weekly" title="Weekly">
          <div i-ri-calendar-line />
        </NuxtLink>
        <a href="https://x.com/BobbyLin23" target="_blank" title="Twitter" class="lt-md:hidden">
          <div i-ri-twitter-line />
        </a>
        <a href="https://github.com/BobbyLin23" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-uil-github-alt />
        </a>
        <a href="/feed.xml" target="_blank" title="RSS" class="lt-md:hidden">
          <div i-la-rss-square style="font-size:1.25rem; margin: 0 -0.125rem;" />
        </a>
        <ToggleTheme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
