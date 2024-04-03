import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
  })
});

const airConditionerCollection = defineCollection({
  schema: z.object({
    modelName: z.string(),
    energy: z.number(),
    sound: z.number(),
    airConditionerPrice: z.number(),
    klimaImage: z.string(),
    energyClass: z.string(),
    brand: z.string()
  })
});

const airConditionerBrandsCollection = defineCollection({
  schema: z.object({
    brandName: z.string(),
    expanded: z.boolean()
  })
});

export const collections = {
  "services": servicesCollection,
  "air-conditioners": airConditionerCollection,
  "air-conditioner-brands": airConditionerBrandsCollection
};



