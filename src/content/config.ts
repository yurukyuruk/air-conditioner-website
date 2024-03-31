import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      price:  z.number()
    })
});
