import { z, defineCollection } from 'astro:content';

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
  }),
});

const airConditionerCollection = defineCollection({
  schema: z.object({
    modelName: z.string(),
    minEnergy: z.number(),
    maxEnergy: z.number(),
    minNoise: z.number(),
    maxNoise: z.number(),
    minPrice: z.number(),
    klimaImage: z.string(),
    energyClass: z.string(),
    brand: z.string(),
    linkToWebsite: z.string(),
  }),
});

const realizationCollection = defineCollection({
  schema: z.object({
    realizationImages: z.array(z.string()),
    realizationHeading: z.string(),
    realizationText: z.string(),
    realizationCost: z.number(),
  }),
});

const airConditionerBrandsCollection = defineCollection({
  schema: z.object({
    brandName: z.string(),
    expanded: z.boolean(),
    moreProductsUrl: z.string(),
  }),
});

const heatPumpCollection = defineCollection({
  schema: z.object({
    brandNameOfHeatPump: z.string(),
    content: z.string(),
    url: z.string(),
  }),
});

const ventilationsCollection = defineCollection({
  schema: z.object({
    workType: z.string(),
    ventilationDescription: z.string(),
    ventilationImageList: z.array(z.string()),
  }),
});

export const collections = {
  services: servicesCollection,
  'air-conditioners': airConditionerCollection,
  'air-conditioner-brands': airConditionerBrandsCollection,
  realization: realizationCollection,
  'heat-pump': heatPumpCollection,
  ventilations: ventilationsCollection,
};
