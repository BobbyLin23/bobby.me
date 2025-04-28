import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    blog: defineCollection({
      source: 'posts/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        date: z.date(),
        desc: z.string(),
        lang: z.string(),
        tags: z.array(z.string()),
        redirect: z.string().optional(),
        duration: z.string().optional(),
      }),
    }),
  },
})
