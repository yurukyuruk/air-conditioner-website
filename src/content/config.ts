import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number()
  })
});

const realizationCollection = defineCollection({
  schema: z.object({
    realizationImage: z.array(z.string()),
    realizationText: z.string(),
    realizationCost: z.number()
  })
});

export const collections = {
  services: servicesCollection,
  realization: realizationCollection
};
