/**
 * Revision content moved into `slots` once `rvslots` is requested (MediaWiki 1.32+):
 *
 * ```json
 * {"revisions": [{"slots": {"main": {"content": "…", "contentmodel": "wikitext"}}}]}
 * ```
 *
 * Without `rvslots` MediaWiki replies with a legacy shape (plus a deprecation warning), where the
 * text lives in the top-level `content` (formatversion=2) or `*` (formatversion=1) field. Keep a
 * single accessor here so callers do not have to care about either shape.
 */

export interface RevisionSlot {
	content?: string;
	contentmodel?: string;
	contentformat?: string;
}

export interface RevisionLike {
	content?: string;
	contentmodel?: string;
	slots?: Record<string, RevisionSlot | undefined>;
}

const mainSlotOf = (revision: RevisionLike | undefined): RevisionSlot | undefined => {
	return revision?.slots?.['main'];
};

/**
 * Get the text of a revision, from `slots.main.content` (new shape) or the legacy `content` field.
 *
 * @returns the text, or `null` when the revision carries no usable content
 */
const getRevisionContent = (revision: RevisionLike | undefined): string | null => {
	const content = mainSlotOf(revision)?.content ?? revision?.content;
	return typeof content === 'string' ? content : null;
};

/**
 * Get the content model of a revision, from `slots.main.contentmodel` (new shape) or the legacy
 * `contentmodel` field.
 */
const getRevisionContentModel = (revision: RevisionLike | undefined): string | null => {
	const contentmodel = mainSlotOf(revision)?.contentmodel ?? revision?.contentmodel;
	return typeof contentmodel === 'string' ? contentmodel : null;
};

export {getRevisionContent, getRevisionContentModel};
