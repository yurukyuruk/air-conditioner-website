declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"air-conditioner-brands": {
"brand1.md": {
	id: "brand1.md";
  slug: "brand1";
  body: string;
  collection: "air-conditioner-brands";
  data: InferEntrySchema<"air-conditioner-brands">
} & { render(): Render[".md"] };
"brand2.md": {
	id: "brand2.md";
  slug: "brand2";
  body: string;
  collection: "air-conditioner-brands";
  data: InferEntrySchema<"air-conditioner-brands">
} & { render(): Render[".md"] };
"brand3.md": {
	id: "brand3.md";
  slug: "brand3";
  body: string;
  collection: "air-conditioner-brands";
  data: InferEntrySchema<"air-conditioner-brands">
} & { render(): Render[".md"] };
};
"air-conditioners": {
"air-conditioner1.md": {
	id: "air-conditioner1.md";
  slug: "air-conditioner1";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner10.md": {
	id: "air-conditioner10.md";
  slug: "air-conditioner10";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner11.md": {
	id: "air-conditioner11.md";
  slug: "air-conditioner11";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner12.md": {
	id: "air-conditioner12.md";
  slug: "air-conditioner12";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner13.md": {
	id: "air-conditioner13.md";
  slug: "air-conditioner13";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner14.md": {
	id: "air-conditioner14.md";
  slug: "air-conditioner14";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner15.md": {
	id: "air-conditioner15.md";
  slug: "air-conditioner15";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner16.md": {
	id: "air-conditioner16.md";
  slug: "air-conditioner16";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner17.md": {
	id: "air-conditioner17.md";
  slug: "air-conditioner17";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner18.md": {
	id: "air-conditioner18.md";
  slug: "air-conditioner18";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner2.md": {
	id: "air-conditioner2.md";
  slug: "air-conditioner2";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner3.md": {
	id: "air-conditioner3.md";
  slug: "air-conditioner3";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner4.md": {
	id: "air-conditioner4.md";
  slug: "air-conditioner4";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner5.md": {
	id: "air-conditioner5.md";
  slug: "air-conditioner5";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner6.md": {
	id: "air-conditioner6.md";
  slug: "air-conditioner6";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner7.md": {
	id: "air-conditioner7.md";
  slug: "air-conditioner7";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner8.md": {
	id: "air-conditioner8.md";
  slug: "air-conditioner8";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
"air-conditioner9.md": {
	id: "air-conditioner9.md";
  slug: "air-conditioner9";
  body: string;
  collection: "air-conditioners";
  data: InferEntrySchema<"air-conditioners">
} & { render(): Render[".md"] };
};
"heat-pump": {
"heat-pump-1.md": {
	id: "heat-pump-1.md";
  slug: "heat-pump-1";
  body: string;
  collection: "heat-pump";
  data: InferEntrySchema<"heat-pump">
} & { render(): Render[".md"] };
"heat-pump-2.md": {
	id: "heat-pump-2.md";
  slug: "heat-pump-2";
  body: string;
  collection: "heat-pump";
  data: InferEntrySchema<"heat-pump">
} & { render(): Render[".md"] };
};
"heat-pumps": {
};
"realization": {
"realization1.md": {
	id: "realization1.md";
  slug: "realization1";
  body: string;
  collection: "realization";
  data: InferEntrySchema<"realization">
} & { render(): Render[".md"] };
"realization2.md": {
	id: "realization2.md";
  slug: "realization2";
  body: string;
  collection: "realization";
  data: InferEntrySchema<"realization">
} & { render(): Render[".md"] };
"realization3.md": {
	id: "realization3.md";
  slug: "realization3";
  body: string;
  collection: "realization";
  data: InferEntrySchema<"realization">
} & { render(): Render[".md"] };
"realization4.md": {
	id: "realization4.md";
  slug: "realization4";
  body: string;
  collection: "realization";
  data: InferEntrySchema<"realization">
} & { render(): Render[".md"] };
"realization5.md": {
	id: "realization5.md";
  slug: "realization5";
  body: string;
  collection: "realization";
  data: InferEntrySchema<"realization">
} & { render(): Render[".md"] };
"realization6.md": {
	id: "realization6.md";
  slug: "realization6";
  body: string;
  collection: "realization";
  data: InferEntrySchema<"realization">
} & { render(): Render[".md"] };
};
"services": {
"service1.md": {
	id: "service1.md";
  slug: "service1";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"service2.md": {
	id: "service2.md";
  slug: "service2";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
