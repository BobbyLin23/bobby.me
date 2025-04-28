<script lang="ts" setup>
import type { WeeklyCollectionItem } from '@nuxt/content'

const { data: weekly } = await useAsyncData('weekly', () => queryCollection('weekly').all())

const getYear = (a: Date | string | number) => new Date(a).getFullYear()
const isFuture = (a?: Date | string | number) => a && new Date(a) > new Date()
const isSameYear = (a?: Date | string | number, b?: Date | string | number) => a && b && getYear(a) === getYear(b)
function isSameGroup(a: WeeklyCollectionItem, b?: WeeklyCollectionItem) {
  return (isFuture(a.date) === isFuture(b?.date)) && isSameYear(a.date, b?.date)
}

function getGroupName(p: WeeklyCollectionItem) {
  if (isFuture(p.date))
    return 'Upcoming'
  return getYear(p.date)
}
</script>

<template>
  <ul>
    <template v-if="!weekly?.length">
      <div py2 op50>
        { nothing here yet }
      </div>
    </template>

    <template v-for="route, idx in weekly" :key="route.path">
      <div
        v-if="!isSameGroup(route, weekly?.[idx - 1])"
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
              <span align-middle>{{ route.title }}</span>
            </div>
            <div flex="~ gap-2 items-center">
              <span text-sm op50 ws-nowrap>
                {{ formatDate(route.date, true) }}
              </span>
              <span v-if="route.duration" text-sm op40 ws-nowrap>· {{ route.duration }}</span>
            </div>
          </li>
        </component>
      </div>
    </template>
  </ul>
</template>
