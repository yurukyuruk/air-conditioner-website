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
    brand: z.string(),
    linkToWebsite: z.string()
  })
});

const realizationCollection = defineCollection({
  schema: z.object({
    realizationImages: z.array(z.string()),
    realizationText: z.string(),
    realizationCost: z.number()
  })
}); 
const airConditionerBrandsCollection = defineCollection({
  schema: z.object({
    brandName: z.string(),
    expanded: z.boolean()
  })
});

const ventilationsCollection = defineCollection({
  schema: z.object({
    workType: z.string(),
    ventilationDescription: z.string(),
    ventilationImageList: z.array(z.string())
  })
});

export const collections = {
  "services": servicesCollection,
  "air-conditioners": airConditionerCollection,
  "air-conditioner-brands": airConditionerBrandsCollection,
  "realization": realizationCollection,
  "ventilations": ventilationsCollection
};



