import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    cover: image(),
    coverAlt: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  "project": projectCollection,
};
