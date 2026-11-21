/*! Twinkle - shared typed access to the Morebits global (provided by `ext.gadget.morebits`). */

const Morebits = window.Morebits;

export {Morebits};

export type MorebitsWikiPage = InstanceType<(typeof Morebits.wiki)['page']>;
export type MorebitsWikiApi = InstanceType<(typeof Morebits.wiki)['api']>;
export type MorebitsWikiPreview = InstanceType<(typeof Morebits.wiki)['preview']>;
export type MorebitsDate = InstanceType<(typeof Morebits)['date']>;
export type MorebitsBatchOperation = InstanceType<(typeof Morebits)['batchOperation']>;
export type MorebitsWikiApiWithParams<T> = MorebitsWikiApi & {params: T};
// Runtime mw.Title instances expose mutable `namespace`/`title` fields that
// are absent from the ambient typings
export type MutableTitle = mw.Title & {namespace: number; title: string};

// Build a Morebits.wiki.api whose instance carries worker params; the
// onSuccess handler is cast because the ambient WikiApi type does not
// know about the `params` assignment
export const newParamsApi = <T>(
	statusText: string,
	query: Record<string, unknown>,
	onSuccess: (apiobj: MorebitsWikiApiWithParams<T>) => void,
	onError?: (apiobj: MorebitsWikiApi) => void
): MorebitsWikiApiWithParams<T> => {
	return new Morebits.wiki.api(
		statusText,
		query,
		onSuccess as unknown as (apiobj: MorebitsWikiApi) => void,
		undefined,
		onError
	) as MorebitsWikiApiWithParams<T>;
};
