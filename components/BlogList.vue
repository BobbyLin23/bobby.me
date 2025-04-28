<script lang="ts" setup>
import type { BlogCollectionItem } from '@nuxt/content'

const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isFuture = (a?: Date | string | number) => a && new Date(a) > new Date()
const isSameYear = (a?: Date | string | number, b?: Date | string | number) => a && b && getYear(a) === getYear(b)
function isSameGroup(a: BlogCollectionItem, b?: BlogCollectionItem) {
  return (isFuture(a.date) === isFuture(b?.date)) && isSameYear(a.date, b?.date)
}

function getGroupName(p: BlogCollectionItem) {
  if (isFuture(p.date))
    return 'Upcoming'
  return getYear(p.date)
}
</script>

<template>
  <ul>
    <template v-if="!posts?.length">
      <div py2 op50>
        { nothing here yet }
      </div>
    </template>

    <template v-for="route, idx in posts" :key="route.path">
      <div
        v-if="!isSameGroup(route, posts?.[idx - 1])"
        slide-enter h20 pointer-events-none select-none relative
        :style="{
          '--enter-stage': idx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span text-8em color-transparent font-bold text-stroke-2 text-stroke-hex-aaa op10 left--3rem top--2rem absolute>{{ getGroupName(route) }}</span>
      </div>
      <div
        class="slide-enter"
        :style="{
          '--enter-stage': idx,
          '--enter-step': '60ms',
        }"
      >
        <component
          :is="route.path.includes('://') ? 'a' : 'RouterLink'"
          v-bind="
            route.path.includes('://') ? {
              href: route.path,
              target: '_blank',
              rel: 'noopener noreferrer',
            } : {
              to: route.path,
            }
          "
          class="item font-normal mb-6 mt-2 no-underline block"
        >
          <li class="no-underline" flex="~ col md:row gap-2 md:items-center">
            <div class="title text-lg leading-1.2em" flex="~ gap-2 wrap">
              <span
                v-if="route.lang === 'zh'"
                align-middle flex-none
                class="text-zinc5 text-xs my-auto ml--12 mr2 px-1 py-0.5 rounded bg-zinc:15 hidden md:block"
              >中文</span>
              <span
                v-if="route.lang === 'ja'"
                align-middle flex-none
                class="text-zinc5 text-xs my-auto ml--15 mr2 px-1 py-0.5 rounded bg-zinc:15 hidden md:block"
              >日本語</span>
              <span align-middle>{{ route.title }}</span>
              <span
                v-if="route.redirect"

                i-carbon-arrow-up-right text-xs ml--1.5 align-middle op50 flex-none
                title="External"
              />
            </div>

            <div flex="~ gap-2 items-center">
              <span text-sm op50 ws-nowrap>
                {{ formatDate(route.date, true) }}
              </span>
              <span v-if="route.duration" text-sm op40 ws-nowrap>· {{ route.duration }}</span>
              <span
                v-if="route.lang === 'zh'"
                align-middle flex-none
                class="text-zinc5 text-xs my-auto px-1 py-0.5 rounded bg-zinc:15 md:hidden"
              >中文</span>
              <span
                v-if="route.lang === 'ja'"
                align-middle flex-none
                class="text-zinc5 text-xs my-auto px-1 py-0.5 rounded bg-zinc:15 md:hidden"
              >日本語</span>
            </div>
          </li>
        </component>
      </div>
    </template>
  </ul>
</template>
