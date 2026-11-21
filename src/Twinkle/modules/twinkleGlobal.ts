/*! Twinkle - typed access to the Twinkle global object */

/**
 * The set of Twinkle preferences.
 *
 * Must stay in sync with `Twinkle.config.sections` in twinkleconfig.ts,
 * where all of these are made configurable via the preferences panel.
 */
export interface TwinkleConfig {
	// General
	userTalkPageMode: string;
	dialogLargeFont: boolean;
	disabledModules: string[];
	disabledSysopModules: string[];
	// ARV
	spiWatchReport: string;
	// Block
	defaultToBlock64: boolean;
	defaultToPartialBlocks: boolean;
	blankTalkpageOnIndefBlock: boolean;
	watchBlockNotices: string;
	customBlockReasonList: CustomConfigRow[];
	// Fluff (revert and rollback)
	openTalkPage: string[];
	openTalkPageOnAutoRevert: boolean;
	rollbackInPlace: boolean;
	markRevertedPagesAsMinor: string[];
	watchRevertedPages: string[];
	watchRevertedExpiry: string;
	offerReasonOnNormalRevert: boolean;
	confirmOnFluff: boolean;
	showRollbackLinks: string[];
	customRevertSummary: CustomConfigRow[];
	// DI (twinkleimage)
	notifyUserOnDeli: boolean;
	deliWatchPage: string;
	deliWatchUser: string;
	// Protect
	watchRequestedPages: string;
	watchPPTaggedPages: string;
	watchProtectedPages: string;
	// CSD
	speedySelectionStyle: string;
	watchSpeedyPages: string[];
	watchSpeedyExpiry: string;
	markSpeedyPagesAsPatrolled: boolean;
	watchSpeedyUser: string;
	notifyUserOnSpeedyDeletionNomination: string[];
	warnUserOnSpeedyDelete: string[];
	promptForSpeedyDeletionSummary: string[];
	openUserTalkPageOnSpeedyDelete: string[];
	deleteTalkPageOnDelete: boolean;
	deleteRedirectsOnDelete: boolean;
	deleteSysopDefaultToDelete: boolean;
	speedyWindowHeight: number;
	speedyWindowWidth: number;
	logSpeedyNominations: boolean;
	speedyLogPageName: string;
	noLogOnSpeedyNomination: string[];
	enlargeG7Input: boolean;
	// Unlink
	unlinkNamespaces: string[];
	// Warn
	defaultWarningGroup: string;
	combinedSingletMenus: boolean;
	watchWarnings: string;
	oldSelect: boolean;
	customWarningList: CustomConfigRow[];
	autoMenuAfterRollback: boolean;
	// XfD
	logXfdNominations: boolean;
	xfdLogPageName: string;
	noLogOnXfdNomination: string[];
	xfdWatchDiscussion: string;
	xfdWatchPage: string;
	xfdWatchUser: string;
	markXfdPagesAsPatrolled: boolean;
	FwdCsdToXfd: boolean;
	afdDefaultCategory: string;
	afdFameDefaultReason: string;
	afdSubstubDefaultReason: string;
	XfdClose: string;
	// Copyvio
	copyvioWatchPage: string;
	copyvioWatchUser: string;
	markCopyvioPagesAsPatrolled: boolean;
	// Hidden preferences
	autolevelStaleDays: number;
	revertMaxRevisions: number;
	// intentionally limited
	batchMax: number;
	batchChunks: number;
	configPage: string;
	projectNamespaceName: string;
	sandboxPage: string;
	// Deprecated options, as a fallback for add-on scripts/modules
	summaryAd: string;
	deletionSummaryAd: string;
	protectionSummaryAd: string;
	blockSummaryAd: string;
	// Tag
	groupByDefault: boolean;
	watchTaggedPages: string;
	watchMergeDiscussions: string;
	markTaggedPagesAsMinor: boolean;
	markTaggedPagesAsPatrolled: boolean;
	tagArticleSortOrder: string;
	customTagList: CustomConfigRow[];
	customFileTagList: CustomConfigRow[];
	customRedirectTagList: CustomConfigRow[];
	// Stub
	watchStubbedPages: boolean;
	markStubbedPagesAsMinor: boolean;
	markStubbedPagesAsPatrolled: boolean;
	stubArticleSortOrder: string;
	customStubList: CustomConfigRow[];
	// Talkback
	markTalkbackAsMinor: boolean;
	insertTalkbackSignature: boolean;
	// always sign talkback templates
	talkbackHeading: string;
	mailHeading: string;
	// Skin-dependent portlet settings, filled in by the core module
	portletArea?: string | null;
	portletId?: string;
	portletName?: string | null;
	portletType?: string | null;
	portletNext?: string | null;
}

/** Row of a user-configurable value/label list (custom tag/warning/block lists). */
interface CustomConfigRow {
	value: string;
	label: string;
}

/** Core members of the Twinkle global object, shared by all modules. */
export interface TwinkleGlobalBase {
	addInitCallback(func: () => void, name?: string): void;
	addPortletLink(task: string | (() => void), text: string, id: string, tooltip?: string): HTMLLIElement | null;
	addPortlet(navigation: string, id: string, text: string, type: string | null, nextnodeid?: string): Element | null;
	changeTags: string;
	summaryAd: string;
	hatnoteRegex: string;
	initCallbacks: {func: () => void; name?: string | undefined}[];
	defaultConfig: TwinkleConfig & Record<string, unknown>;
	prefs?: Partial<TwinkleConfig> & Record<string, unknown>;
	getPref<K extends keyof TwinkleConfig>(name: K): TwinkleConfig[K];
	getPref<T = unknown>(key: string): T;
	load(): void;
	userAgent?: string;
	disabledModules?: string[];
	sortByNamespace<T extends {ns?: number; title: string}>(first: T, second: T): number;
	generateBatchPageLinks(checkbox: HTMLInputElement): void;
}

declare global {
	/**
	 * Module namespaces attached to the Twinkle global at runtime
	 * (e.g. `Twinkle.fluff`). Each module augments this interface with its
	 * own entry.
	 */
	interface TwinkleModules {}

	/** The Twinkle global object, populated by the core module at runtime. */
	const Twinkle: TwinkleGlobalBase & TwinkleModules;
}

/**
 * Full shape of the Twinkle global (core members + module namespaces),
 * for code that prefers an explicit type over the ambient global.
 */
export type TwinkleFull = TwinkleGlobalBase & TwinkleModules;

/**
 * Typed singleton access for code that prefers an explicit import over the
 * ambient global (kept for `TwSpeedyDialog.vue`).
 */
export interface TwinkleGlobal extends TwinkleGlobalBase, TwinkleModules {}

export const twinkle = (window as unknown as {Twinkle: TwinkleGlobal}).Twinkle;
