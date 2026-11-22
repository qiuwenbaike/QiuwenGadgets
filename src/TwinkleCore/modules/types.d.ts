/*! Twinkle - shared interfaces used by both dialogs and module entries */

/** Contract of the `TwStatus` child component (via defineExpose). */
export interface TwStatusExposed {
	getStatusRoot: () => HTMLElement | null;
	/** Remove all status lines currently shown (used after transient queries finish). */
	clear: () => void;
}

/** A row in one of Twinkle's user-configurable value/label lists. */
export interface CustomConfigRow {
	value: string;
	label: string;
}

/** One option in a protection selector. */
export interface ProtectionOptionItem {
	label: string;
	value: string;
	selected?: boolean;
}

/** A grouped protection selector option. */
export interface ProtectionOptionGroup {
	label: string;
	value?: string;
	list?: ProtectionOptionItem[];
}

/** A preset for the protection dialog. */
export interface ProtectionPresetInfo {
	edit?: string;
	move?: string;
	create?: string;
	expiry?: string;
	reason?: string | null;
	template?: string;
}

/** Protection information displayed by the protection dialog. */
export interface ProtectionInfo {
	previousNotice: string | null;
	logLink: string;
	currentStatus: {
		severe: boolean;
		text: string;
	} | null;
}

/** Row of a selectable page list in the batch dialogs. */
export interface PageItem {
	title: string;
	label: string;
	isProtected: boolean;
	subpages?: PageItem[];
}

/** One subgroup widget of a speedy-deletion criterion. */
export interface SubgroupDef {
	name: string;
	type: 'input' | 'select';
	label: string;
	tooltip?: string;
	size?: number;
	list?: {label: string; value: string}[];
}

/** One speedy-deletion criterion (also consumed by twinkleconfig). */
export interface SpeedyCriterion {
	label: string;
	value: string;
	tooltip?: string;
	subgroup?: SubgroupDef | SubgroupDef[] | null;
	hideWhenMultiple?: boolean;
	hideSubgroupWhenMultiple?: boolean;
	hideWhenSingle?: boolean;
	hideSubgroupWhenSingle?: boolean;
	hideWhenSysop?: boolean;
	hideSubgroupWhenSysop?: boolean;
	hideWhenUser?: boolean;
	hideSubgroupWhenUser?: boolean;
	hideWhenRedirect?: boolean;
	showInNamespaces?: number[];
	hideInNamespaces?: number[];
}

/** Reactive list data of the unlink dialog. */
export interface UnlinkListData {
	backlinks: string[];
	imageusage: string[];
	namespacesText: string;
	loaded: boolean;
}

/** Shape of the params consumed by the speedy userspace log writer. */
export interface SpeedyLogParams {
	values?: string[];
	normalizeds?: string[];
	normalized?: string;
	templatename?: string;
	fromDI?: boolean;
	requestsalt?: string | boolean;
}
