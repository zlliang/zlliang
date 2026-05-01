declare module "astro:content" {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never
	type AllValuesOf<T> = T extends any ? T[keyof T] : never
	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T

	export type ContentConfig = typeof import("../src/schemas/content.js")

	type InferEntrySchema<C extends keyof DataEntryMap> = import("astro/zod").infer<
		ReturnTypeOrOriginal<Required<ContentConfig["collections"][C]>["schema"]>
	>

	export interface RenderResult {
		Content: import("astro/runtime/server/index.js").AstroComponentFactory
		headings: import("astro").MarkdownHeading[]
		remarkPluginFrontmatter: Record<string, any>
	}

	export interface RenderedContent {
		html: string
		metadata?: {
			imagePaths: Array<string>
			[key: string]: unknown
		}
	}

	type DataEntryMap = {
		notes: Record<string, {
			id: string
			body?: string
			collection: "notes"
			data: InferEntrySchema<"notes">
			rendered?: RenderedContent
			filePath?: string
		}>
		posts: Record<string, {
			id: string
			body?: string
			collection: "posts"
			data: InferEntrySchema<"posts">
			rendered?: RenderedContent
			filePath?: string
		}>
		series: Record<string, {
			id: string
			body?: string
			collection: "series"
			data: InferEntrySchema<"series">
			rendered?: RenderedContent
			filePath?: string
		}>
	}

	export type CollectionKey = keyof DataEntryMap
	export type CollectionEntry<C extends CollectionKey> = Flatten<DataEntryMap[C]>
	export type ReferenceDataEntry<
		C extends CollectionKey,
		E extends keyof DataEntryMap[C] = string
	> = {
		collection: C
		id: E
	}

	export function getCollection<
		C extends keyof DataEntryMap,
		E extends CollectionEntry<C>,
	>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>
	export function getCollection<
		C extends keyof DataEntryMap,
	>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>

	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		entry: ReferenceDataEntry<C, E>,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? string extends keyof DataEntryMap[C]
			? Promise<DataEntryMap[C][E]> | undefined
			: Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>

	export function getEntries<C extends keyof DataEntryMap>(
		entries: ReferenceDataEntry<C, keyof DataEntryMap[C]>[],
	): Promise<CollectionEntry<C>[]>

	export function render<C extends keyof DataEntryMap>(
		entry: DataEntryMap[C][string],
	): Promise<RenderResult>

	export function reference<
		C extends
			| keyof DataEntryMap
			// Allow generic `string` to avoid excessive type errors in the config
			// if `dev` is not running to update as you edit.
			// Invalid collection names will be caught at build time.
			| (string & {}),
	>(
		collection: C,
	): import("astro/zod").ZodPipe<
		import("astro/zod").ZodString,
		import("astro/zod").ZodTransform<
			C extends keyof DataEntryMap
				? {
						collection: C
						id: string
					}
				: never,
			string
		>
	>
}
