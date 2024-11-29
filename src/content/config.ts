import { defineCollection, z } from 'astro:content';

const works = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      layout: z.string().optional(),
      year: z.number(),
      date: z.string(),
      template: z.string(),
      draft: z.boolean(),
      category: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      frontImage0: image().optional(),
      frontImage1: image().optional(),
      frontImage2: image().optional(),
      frontImage3: image().optional(),
      frontPage: z.boolean().optional(),
      showName: z.string().optional(),
      showDate: z.string().optional(),
      showLocation: z.string().optional(),
      showCity: z.string().optional(),
      medium: z.string().optional(),
      priority: z.number(),
    }),
});

export const collections = { works };
